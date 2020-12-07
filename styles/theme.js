import { polaris, dark } from "@theme-ui/presets";
import { merge } from "theme-ui";
const theme = merge(polaris, {
  breakpoints: ["30rem", "40rem", "56rem", "64rem"],
  colors: {
    ...polaris.colors,
    modes: {
      dark: {
        ...dark.colors,
      },
    },
  },
  styles: {
    root: {
      height: "100vh",
      "& > div:first-of-type": {
        height: "100%",
      },
    },
    ul: {
      listStyleType: "none",
      listStyle: "none",
    },
    ol: {
      listStyleType: "none",
      listStyle: "none",
    },
    li: {
      listStyleType: "none",
    },
  },
  boxSides: {
    base: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "sticky",
      top: "20%",
    },
  },
});

export default theme;
