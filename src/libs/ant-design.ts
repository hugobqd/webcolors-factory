import { presetPalettes, presetDarkPalettes } from "@ant-design/colors";
import { LibData } from "../types";
import { createArrayFromColorsObject } from "../utils/createArrayFromColorsObject";

interface LooseObject {
  [key: string]: any;
}

function convertAntD(obj: object) {
  const newObject: LooseObject = { ...obj };
  for (let [key, value] of Object.entries(obj)) {
    const newObjectValue: LooseObject = {};
    // a werd key 'primary' cause errors:
    const valueWithoutPrimary = [
      value[0],
      value[1],
      value[2],
      value[3],
      value[4],
      value[5],
      value[6],
      value[7],
      value[8],
      value[9],
    ];
    valueWithoutPrimary.forEach((v: string, i: number) => {
      const k = `${i + 1}`;
      newObjectValue[k] = v;
    });
    newObject[key] = newObjectValue;
  }
  return newObject;
}

const colors = convertAntD(presetPalettes);
const darkColors = convertAntD(presetDarkPalettes);

convertAntD(colors);
export const antd: LibData = {
  name: "Ant Design",
  slug: "antd",
  licence: "licence",
  colors: createArrayFromColorsObject(colors, "antd"),
  website: "https://ant.design",
};
export const antdDark: LibData = {
  name: "Ant Design dark",
  slug: "antd-dark",
  licence: "licence",
  colors: createArrayFromColorsObject(darkColors, "antdDark"),
  website: "https://ant.design",
};
