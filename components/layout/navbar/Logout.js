/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import NavButton from "./NavButton";
import { signOut } from "next-auth/client";

function Logout() {
  return (
    <NavButton as="button" onClick={signOut}>
      Logout
    </NavButton>
  );
}

export default Logout;
