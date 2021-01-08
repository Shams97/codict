/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { useAuth0 } from "@auth0/auth0-react";
import NavButton from "./NavButton";

function Logout() {
  const { logout } = useAuth0();
  const handleLogout = (e) => {
    e.preventDefault();
    logout({ returnTo: process.env.NEXT_PUBLIC_AUTH_POST_LOGOUT_REDIRECT_URI });
  };
  return (
    <NavButton as="button" onClick={handleLogout}>
      Logout
    </NavButton>
  );
}

export default Logout;
