/*
 * @Description: 颜色
 * @Author: yeke
 * @Date: 2023-01-08 13:03:08
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 14:05:44
 */
export const colorMix = (color1: string, color2: string, weight: number) => {
  weight = Math.max(Math.min(Number(weight), 1), 0);
  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);
  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);
  const r = Math.round(r1 * (1 - weight) + r2 * weight);
  const g = Math.round(g1 * (1 - weight) + g2 * weight);
  const b = Math.round(b1 * (1 - weight) + b2 * weight);
  const _r = ("0" + (r || 0).toString(16)).slice(-2);
  const _g = ("0" + (g || 0).toString(16)).slice(-2);
  const _b = ("0" + (b || 0).toString(16)).slice(-2);
  return "#" + _r + _g + _b;
};

export const colorChange = (e: string | null) => {
  // e就是选择了的颜色
  const pre = "--el-color-primary";
  // 白色混合色
  const mixWhite = "#ffffff";
  // 黑色混合色
  const mixBlack = "#000000";
  const el = document.documentElement;
  el.style.setProperty(pre, e);
  // 这里是覆盖原有颜色的核心代码
  if (e) {
    for (let i = 1; i < 10; i += 1) {
      el.style.setProperty(`${pre}-light-${i}`, colorMix(e, mixWhite, i * 0.1));
    }
    el.style.setProperty("--el-color-primary-dark", colorMix(e, mixBlack, 0.1));
    el.style.setProperty("--theme-color", colorMix(e, mixBlack, 0.1));
  }
};
