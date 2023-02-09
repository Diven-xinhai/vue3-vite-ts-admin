/*
 * @Description:
 * @Date: 2023-02-09 08:52:20
 * @LastEditors: YeKe
 * @LastEditTime: 2023-02-09 17:37:12
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\hooks\useCommand.tsx
 */
import { keysOf } from "element-plus/es/utils";
import { Ref, reactive, onUnmounted } from "vue";
import { JsonSchema } from "../types";
import { events } from "../utils/event";
export interface Command {
  before?: null | string;
  name: string;
  keyboard?: string;
  pushQueue?: boolean;
  init?: () => any;
  execute: () => any;
}
export const useCommand = (data: Ref<JsonSchema>) => {
  const state = {
    current: -1, // 前进后退的索引值
    queue: [] as any[], // 存放所有的操作命令
    commands: {} as { [propName: string]: () => void }, // 制作命令和执行功能的一个映射表  undo:()=>{}    redo:()=>{}
    commandArray: [] as Command[], // 存放所有的命令
    destroyArray: [] as any[],
  };

  const registry = (command: Command) => {
    state.commandArray.push(command);
    state.commands[command.name] = () => {
      const { redo, undo } = command.execute();
      redo();

      if (!command.pushQueue) return;
      let { queue, current } = state;

      if (queue.length > 0) {
        // 可能在放置的过程中有撤销操作，所以根据当前最新的current值来计算新的queue
        queue = queue.slice(0, current + 1);
        state.queue = queue;
      }

      queue.push({ redo, undo }); // 保存指令的前进后退
      state.current = current + 1;
    };
  };

  // 注册需要的命令
  registry({
    // 回到前一步
    name: "redo",
    keyboard: "ctrl+y",
    execute() {
      return {
        redo() {
          const item = state.queue[state.current + 1]; // 找到当前的下一步
          if (item) {
            item.redo && item.redo();
            state.current++;
          }
        },
      };
    },
  });
  registry({
    // 撤销到上一步
    name: "undo",
    keyboard: "ctrl+z",
    execute() {
      return {
        redo() {
          if (state.current === -1) return;
          const item = state.queue[state.current]; // 找到当前的上一步
          if (item) {
            item.undo && item.undo();
            state.current--;
          }
        },
      };
    },
  });
  registry({
    // 如果希望将操作放到队列中可以增加一个属性标识 等会操作要放到队列中
    name: "drag",
    pushQueue: true,
    // 初始化操作 默认就会执行
    init() {
      this.before = null;
      // 监控拖拽开始事件，保存状态
      const start = () => {
        this.before = JSON.stringify(data.value.blocks);
      };
      // 拖拽之后需要出发对应的指令
      const end = () => {
        state.commands.drag();
      };
      events.on("start", start);
      events.on("end", end);

      return () => {
        events.off("start", start);
        events.off("end", end);
      };
    },
    execute() {
      const before = JSON.parse(this.before!);
      const after = data.value.blocks; // 之后的状态
      return {
        redo() {
          // 默认一松手 就直接把当前的事情做了
          data.value = { ...data.value, blocks: after };
        },
        undo() {
          // 前一步的
          data.value = { ...data.value, blocks: before };
        },
      };
    },
  });

  const keyboardEvent = (() => {
    const onKeydowm = (e: KeyboardEvent) => {
      const keyCode = {
        KeyZ: "z",
        KeyY: "y",
      };
      const { ctrlKey, code } = e; // code: KeyZ   KeyY
      const keyString = [];
      if (ctrlKey) keyString.push("ctrl");
      keyString.push(keyCode[code as keyof typeof keyCode]);
      const str = keyString.join("+");
      
      state.commandArray.forEach(({ keyboard, name }) => {
        if (!keyboard) return; // 没有键盘事件
        if (keyboard === str) {
          state.commands[name]();
          e.preventDefault();
        }
      });
    };

    const init = () => {
      // 初始化事件
      window.addEventListener("keydown", onKeydowm);
      return () => {
        // 销毁事件
        window.removeEventListener("keydown", onKeydowm);
      };
    };
    return init;
  })();

  (() => {
    // 监听键盘事件
    state.destroyArray.push(keyboardEvent());
    state.commandArray.forEach(
      (command) => command.init && state.destroyArray.push(command.init())
    );
  })();

  onUnmounted(() => {
    state.destroyArray.forEach((fn) => fn && fn());
  });

  return state;
};
