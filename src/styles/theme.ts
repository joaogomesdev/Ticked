import { theme as chakraTheme } from "@chakra-ui/react";

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      green: "#1AAE9F",
      orange: "#FF7057",
      purple: "#6558F5",
      yellow: "#F7C325",
    },
    text: {
      main: "#E5E7EB",
      light: "#858C92",
    },
    // gray: {
    //   "800": "#000000",
    // },
  },
  fonts: {
    ...chakraTheme.fonts,
    html: `Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export { theme };
