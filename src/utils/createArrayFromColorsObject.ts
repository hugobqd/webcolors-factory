import { getBrightness, hexToRgb, rgbToLab } from "./colors";
import { ColorLAB, ColorRgb, Shade } from "../types";

export const createArrayFromColorsObject = (obj: object, lib: string) => {
  const resultArray: Shade[] = [];

  const process = (key: string, value: string, nameStack: string[]) => {
    if (
      typeof value === "string" &&
      value.slice(0, 1) === "#" &&
      value.length === 7
    ) {
      const name = [...nameStack, key].join(".");
      const id = `${lib}-${name.replace(".", "-")}`;
      const rgb = hexToRgb(value);
      const shade: Shade = {
        name: name,
        hex: value,
        lib: lib,
        id: id,
        rgb: rgb,
        LAB: rgbToLab(rgb),
        brightness: getBrightness(rgb),
      };
      resultArray.push(shade);
    } else {
      console.log("🥺 Not an hex:", lib, key, value);
    }
  };

  const traverse = (obj: object, nameStack: string[]) => {
    for (let [key, value] of Object.entries(obj)) {
      if (value !== null && typeof value == "object") {
        traverse(value, [...nameStack, key]);
      } else {
        process(key, value, nameStack);
      }
    }
  };

  traverse(obj, []);

  return resultArray;
};
