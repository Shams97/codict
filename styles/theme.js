import { deep, base } from "@theme-ui/presets";
import { merge } from "theme-ui";
const theme = merge(deep, {
  breakpoints: ["30rem", "40rem", "56rem", "64rem"],
  colors: {
    ...deep.colors,
    modes: {
      light: {
        ...base.colors,
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
  forms: {
    input: {
      borderColor: "text",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
    },
    select: {
      borderColor: "text",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
    },
  },
});

export default theme;
