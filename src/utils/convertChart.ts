import { hexToRgb, rgbToLab } from "./colors";

export const convertCharts = (
  object: object,
  nameStack: string[] = [],
  lib = ""
) => {
  const arr = [];
  let index = 0;
  for (let [key, value] of Object.entries(object)) {
    if (
      typeof value === "string" &&
      value.slice(0, 1) === "#" &&
      value.length === 7
    ) {
      index++;
      const names = [...nameStack, key].join(".");
      const rgb = hexToRgb(value);
      const id = `${lib}-${index}-${names.replace(".", "-")}`;
      arr.push({
        id: id,
        lib: lib,
        name: names,
        hex: value,
        rgb: hexToRgb(value),
        LAB: rgbToLab(rgb),
      });
    }
    if (typeof value === "object") {
      for (let [k, v] of Object.entries(value)) {
        if (typeof v === "string" && v.slice(0, 1) === "#" && v.length === 7) {
          index++;
          const ns = [key, k].join(".");
          const rgb = hexToRgb(v);
          const id = `${lib}-${index}-${ns.replace(".", "-")}`;
          arr.push({
            id: id,
            lib: lib,
            name: ns,
            hex: v,
            rgb: rgb,
            LAB: rgbToLab(rgb),
          });
        } else {
          console.warn(
            `the value of ${lib} ${[key, k].join(".")} must be an hexColor `
          );
        }
      }
    }
  }
  return arr;
};
