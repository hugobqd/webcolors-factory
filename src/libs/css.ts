// import tailwindcss from "tailwindcss";
import cssColors from "color-name";
import { LibData, LooseObject } from "../types";
import { createArrayFromColorsObject } from "../utils/createArrayFromColorsObject";
var convert = require("color-convert");

function convertCss(obj: object) {
  const newObject: LooseObject = { ...obj };
  for (let [key, value] of Object.entries(obj)) {
    newObject[key] = "#" + convert.rgb.hex(value[0], value[1], value[2]);
  }
  return newObject;
}

const colors = convertCss(cssColors);

export const css: LibData = {
  name: "css",
  slug: "css",
  licence: "licence",
  colors: createArrayFromColorsObject(colors, "css"),
  website: "https://www.w3.org/TR/css-color-4/",
};
