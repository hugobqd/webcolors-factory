import colors from "@chakra-ui/theme/foundations/colors";
import { LibData } from "../types";
import { createArrayFromColorsObject } from "../utils/createArrayFromColorsObject";

export const chakraUi: LibData = {
  name: "Chakra-UI",
  slug: "chakra-ui",
  licence: "licence",
  colors: createArrayFromColorsObject(colors, "chakra-ui"),
  website: "https://chakra-ui.com",
};
