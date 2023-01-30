<!--
 * @Description: echarts演示
 * @Date: 2023-01-09 17:22:24
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-30 17:20:30
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\echarts\index.vue
-->
<template>
  <div
    class="echarts-wrap"
    v-loading="loading"
    element-loading-text="Loading..."
  >
    <div class="chart" ref="chartDom"></div>
  </div>
</template>

<script setup lang="ts" name="Echarts">
import {
  ref,
  reactive,
  watch,
  onMounted,
  onActivated,
  onUnmounted,
  computed,
  nextTick,
} from "vue";
import { useRoute } from "vue-router";
import { useAppStore } from "@/store/app";
import { useTagsViewStore } from "@/store/tagsView";
import useCurrentInstance from "@/hooks/useCurrentInstance";
import { chartData } from "@/api/echart";
const { proxy } = useCurrentInstance();
const route = useRoute();
const appStore = useAppStore();
const tagsViewStore = useTagsViewStore();
onMounted(() => {
  getData();
  nextTick(() => {
    initEchart();
  });
});
onActivated(() => {
  if (chart.value) return;
  initEchart();
});
onUnmounted(() => {
  chart.value.dispose();
});

watch(
  () => appStore.sidebar,
  (n) => {
    {
      // 这里监听菜单栏的折叠和收起导致宽度的变化,需要重新渲染
      // 如果页面被缓存,那在其他页面做菜单栏的折叠和收起也会监听到,所以要做判断
      if (
        tagsViewStore.cachedViews.includes("Echarts") &&
        route.name !== "Echarts"
      )
        return;

      setTimeout(() => {
        initEchart();
      }, 500);
    }
  }
);
const setOptions = computed(() => {
  return {
    title: {
      text: "ECharts展示",
    },
    tooltip: {},
    grid: {
      right: "15px",
    },
    xAxis: {
      data: resData.xData,
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: resData.yData,
      },
    ],
  };
});
const loading = ref(true);
const chartDom = ref(); // 获取ref dom元素
const resData = reactive({
  xData: [] as string[],
  yData: [] as string | number[],
});
const chart = ref<any>(null); // echarts

const getData = async () => {
  const res = await chartData();
  if (res.code != 200) return;
  if (res.data) {
    resData.xData = res.data.map((v: { label: string }) => {
      return v.label;
    });
    resData.yData = res.data.map((v: { value: string }) => {
      return v.value;
    });
  }
  loading.value = false;
  chart.value.setOption(setOptions.value);
};

const initEchart = () => {
  if (chart.value) {
    chart.value.dispose();
  }
  // 获取dom，断言HTMLElement类型
  const chartEle: HTMLElement = chartDom.value as HTMLElement;
  chart.value = proxy.$echarts.init(chartEle);
  chart.value.setOption(setOptions.value);
  window.onresize = function () {
    chart.resize();
  };
};
</script>

<style lang="scss" scoped>
.echarts-wrap {
  padding: 15px;
  .chart {
    width: 100%;
    height: 300px;
  }
}
</style>
