// import tailwindcss from "tailwindcss";
const colors = require("tailwindcss/colors");
import { convertCharts } from "../utils/convertChart";

const arr = convertCharts(colors, [], "tailwindcss");

export const tailwindcss = {
  name: "Tailwindcss",
  slug: "tailwindcss",
  licence: "licence",
  colors: arr,
  website: "https://tailwindcss.com",
};
