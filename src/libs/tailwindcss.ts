// import tailwindcss from "tailwindcss";
const colors = require("tailwindcss/colors");
import { LibData } from "../types";
import { createArrayFromColorsObject } from "../utils/createArrayFromColorsObject";

export const tailwindcss: LibData = {
  name: "Tailwindcss",
  slug: "tailwindcss",
  licence: "licence",
  colors: createArrayFromColorsObject(colors, "tailwindcss"),
  website: "https://tailwindcss.com",
};

const toto = {
  cle: "valeur",
};
toto.cle;
