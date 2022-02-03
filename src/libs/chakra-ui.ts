import colors from "@chakra-ui/theme/foundations/colors";
import { convertCharts } from "../utils/convertChart";

const arr = convertCharts(colors, [], "chakra-ui");

export const chakraUi = {
  name: "Chakra-UI",
  slug: "chakra-ui",
  licence: "licence",
  colors: arr,
  website: "https://chakra-ui.com",
};
