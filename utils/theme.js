import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#DFE9F5",
    300: "#3498DB",
    500: "#16558f",
  },
  black: {
    50: "#B6B6B6",
    100: "#3C3D41",
  },
};

export const theme = extendTheme({ colors, styles });
