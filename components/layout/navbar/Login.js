/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import NavButton from "./NavButton";
import { signin } from "next-auth/client";
function Login() {
  return (
    <NavButton as="button" onClick={signin}>
      Login
    </NavButton>
  );
}

export default Login;
