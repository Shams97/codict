/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import base from "../../styles/theme";

export default function ThemeUICTX({ children }) {
  return <ThemeProvider theme={base}>{children}</ThemeProvider>;
}
