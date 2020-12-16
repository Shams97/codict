/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { components } from "react-select";
import { useThemeUI } from "theme-ui";
const Option = ({ children, ...props }) => {
  const themeUiCtx = useThemeUI();
  const { colorMode } = themeUiCtx;

  return (
    <components.Option
      {...props}
      sx={{
        backgroundColor: "background",
        color: "text",
        borderRadius: "3px",
        ":hover": {
          backgroundColor: colorMode === "light" ? "muted" : "text",
          color: colorMode === "light" ? "text" : "background",
        },
      }}>
      {children}
    </components.Option>
  );
};

export default Option;
