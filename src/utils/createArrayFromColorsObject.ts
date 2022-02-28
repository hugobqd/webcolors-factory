import { getBrightness, hexToRgb, rgbToHslString, rgbToLAB } from "./colors";
import { Shade } from "../types";

export const createArrayFromColorsObject = (obj: object, slug: string) => {
  const resultArray: Shade[] = [];

  const process = (key: string, value: string, nameStack: string[]) => {
    if (
      typeof value === "string" &&
      value.slice(0, 1) === "#" &&
      (value.length === 7 || value.length === 4)
    ) {
      const name = [...nameStack, key].join(".");
      const id = `${slug}-${name.replace(".", "-")}`;
      const rgb = hexToRgb(value);
      const shade: Shade = {
        name: name,
        hex: value,
        slug: slug,
        id: id,
        rgb: rgb,
        LAB: rgbToLAB(rgb),
        brightness: getBrightness(rgb),
        hsl: rgbToHslString(rgb),
      };
      resultArray.push(shade);
    } else {
      console.log("🥺 Not an hex:", slug, key, value);
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
