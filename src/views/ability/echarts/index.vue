<!--
 * @Description: echarts演示
 * @Date: 2023-01-09 17:22:24
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 17:38:37
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\echarts\index.vue
-->
<template>
  <div class="echarts-wrap">
    <div id="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { EChartsOption, init } from "echarts";
onMounted(() => {
  initEchart();
});

const initEchart = () => {
  // 获取dom，断言HTMLElement类型，否则会报错
  const chartEle: HTMLElement = document.getElementById("chart") as HTMLElement;
  const chart = init(chartEle);
  const option: EChartsOption = {
    title: {
      text: "ECharts展示",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
  option && chart.setOption(option);
};
</script>

<style lang="scss" scoped>
.echarts-wrap {
  padding: 15px;
  #chart {
    width: 100%;
    height: 300px;
  }
}
</style>
