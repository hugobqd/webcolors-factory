import fs from "fs";
import path from "path";
import { chakraUi } from "./libs/chakra-ui";
import { tailwindcss } from "./libs/tailwindcss";
import { antd, antdDark } from "./libs/ant-design";
import { LibData } from "./types";

const distDir = "dist";

console.time("timer");

const libs: LibData[] = [chakraUi, tailwindcss, antd, antdDark];

const template = ({
  name,
  website,
  colors,
}: {
  name: string;
  website: string;
  colors: any;
}) => {
  return `/**
* File generated by webcolors-factory
* ${new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(new Date())}
* Copyright from ${name}, ${website},
*/
const colors = ${JSON.stringify(colors, null, 2)};
export default colors;
`;
};

libs.forEach((lib) => {
  fs.writeFile(path.join(distDir, `${lib.slug}.js`), template(lib), function (
    err
  ) {
    if (err) throw err;
    console.log("Fichier créé !");
  });
});
console.timeEnd("timer");
