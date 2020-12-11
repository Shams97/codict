/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { NavLink } from "reactstrap";

export default function ToggleColors() {
  const [mode, setMode] = useColorMode();
  const _SX = {
    root: {
      border: "none",
      ":hover": {
        cursor: "pointer",
      },
    },
  };
  return (
    <div
      sx={_SX.root}
      color="primary"
      onClick={() => {
        const next = mode === "dark" ? "light" : "dark";
        setMode(next);
      }}>
      <NavLink>{mode === "dark" ? "Dark" : "Light"}</NavLink>
    </div>
  );
}
