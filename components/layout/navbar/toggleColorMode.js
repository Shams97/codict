/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import NavButton from "./NavButton";

export default function ToggleColors() {
  const [mode, setMode] = useColorMode();

  return (
    <NavButton
      as="button"
      onClick={() => {
        const next = mode === "light" ? "dark" : "light";
        setMode(next);
      }}
    >
      {mode === "dark" ? "Light" : "Dark"}
    </NavButton>
  );
}
