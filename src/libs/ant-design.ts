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

const licence = `MIT LICENSE

Copyright (c) 2018-present Ant UED, https://xtech.antfin.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

export const antd: LibData = {
  name: "Ant Design",
  slug: "antDesign",
  licence: licence,
  colors: createArrayFromColorsObject(colors, "antd"),
  website: "https://ant.design",
};
export const antdDark: LibData = {
  name: "Ant Design dark",
  slug: "antDesignDark",
  licence: licence,
  colors: createArrayFromColorsObject(darkColors, "antdDark"),
  website: "https://ant.design",
};
