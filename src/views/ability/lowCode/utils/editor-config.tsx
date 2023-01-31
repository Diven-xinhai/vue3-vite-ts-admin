/*
 * @Description: 渲染小组件
 * @Date: 2023-01-31 09:10:57
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-31 11:05:25
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\utils\editor-config.tsx
 */
import { ElButton, ElInput } from "element-plus";
export interface Component {
  label: string;
  preview: () => string | object;
  render: () => string | object;
  key: string;
}

export interface ComponentMap {
  [keyName: string]: Component;
}

export interface CreateEditorConfig {
  componentList: Component[];
  componentMap: ComponentMap;
  register: (component: Component) => void;
}

const createEditorConfig = (): CreateEditorConfig => {
  const componentList: Component[] = [];
  const componentMap: ComponentMap = {};
  return {
    componentList,
    componentMap,
    register: (component) => {
      componentList.push(component);
      componentMap[component.key] = component;
    },
  };
};

export const registerConfig = createEditorConfig();

registerConfig.register({
  label: "文本",
  preview: () => "预览文本",
  render: () => "渲染文本",
  key: "text",
});
registerConfig.register({
  label: "按钮",
  preview: () => <ElButton>预览按钮</ElButton>,
  render: () => <ElButton>渲染按钮</ElButton>,
  key: "button",
});
registerConfig.register({
  label: "输入框",
  preview: () => <ElInput placeholder="预览输入框" />,
  render: () => <ElInput placeholder="渲染输入框" />,
  key: "input",
});
