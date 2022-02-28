import fs from "fs";
import path from "path";
import { antd, antdDark } from "./libs/antdesign";
import { bootstrap } from "./libs/bootstrap";
import { chakraUi } from "./libs/chakraui";
import { css } from "./libs/css";
import { tailwindcss } from "./libs/tailwindcss";
import type { LibData } from "./types";

const distDir = "dist";

console.time("timer");

const libs: LibData[] = [bootstrap, chakraUi, tailwindcss, antd, antdDark, css];

const templateLib = ({
  name,
  website,
  colors,
  licence,
  slug,
}: {
  name: string;
  website: string;
  colors: any;
  licence?: string;
  slug?: string;
}) => {
  return `import { Lib } from "../types";

/**
 * File generated by webcolors-factory
 * ${new Intl.DateTimeFormat("en-US", {
   dateStyle: "long",
   timeStyle: "long",
 }).format(new Date())}
 * Source : ${website},
 * Licence :

${licence}

 */

const lib: Lib = {
  name: "${name}",
  website: "${website}",
  slug: "${slug}",
  colors: ${JSON.stringify(colors, null, 2)}
}

export default lib;
`;
};

const templateIndex = (libs: LibData[]) => {
  return `${libs
    .map((lib) => {
      return `import { default as ${lib.slug} } from "./${lib.slug}";`;
    })
    .join("\n")}
export { ${libs
    .map((lib) => {
      return lib.slug;
    })
    .join(", ")}};

/**
 * File generated by webcolors-factory
 * ${new Intl.DateTimeFormat("en-US", {
   dateStyle: "long",
   timeStyle: "long",
 }).format(new Date())}
 */
`;
};

libs.forEach((lib) => {
  fs.writeFile(
    path.join(distDir, `${lib.slug}.ts`),
    templateLib(lib),
    function (err) {
      if (err) throw err;
      console.log(`🎨 File ${lib.slug}.ts created.`);
    }
  );
});

fs.writeFile(path.join(distDir, `index.ts`), templateIndex(libs), function (
  err
) {
  if (err) throw err;
  console.log(`🎨 File index.ts created.`);
});

console.timeEnd("timer");
