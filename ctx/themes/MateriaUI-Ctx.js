/* eslint-disable react/prop-types */
/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useThemeUI } from "theme-ui";

export default function MaterialUICTX({ children }) {
  const context = useThemeUI();
  const { theme } = context;
  const hybridTheme = createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          color: theme.colors.text,
          backgroundColor: theme.colors.background,
        },
      },
      MuiStepIcon: {
        active: {
          color: `${theme.colors.gray}!important`,
        },
        root: {
          color: theme.colors.primary,
        },
      },
      MuiStepLabel: {
        label: { color: `${theme.colors.text}!important` },
        active: { color: `${theme.colors.text}!important` },
      },
    },
  });

  return <ThemeProvider theme={hybridTheme}>{children}</ThemeProvider>;
}
