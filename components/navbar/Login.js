/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { useAuth0 } from "@auth0/auth0-react";
import NavButton from "./NavButton";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <NavButton as="button" onClick={loginWithRedirect}>
      Login
    </NavButton>
  );
}

export default Login;
