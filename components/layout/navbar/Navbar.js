/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Text } from "theme-ui";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
import ToggleColors from "./toggleColorMode";
import NavButton from "./NavButton";
import User from "../navbar/User";
import Logout from "../navbar/Logout";
import Login from "../navbar/Login";
import { useSession } from "next-auth/client";
const _SX = {
  navbar: {
    backgroundColor: "background",
  },
  navbarBrand: {
    "@media(max-width: 768px)": {
      justifyContent: "space-between",
    },

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  navbarBrandAnchor: {
    color: "text",
    textDecoration: "none",
    ":hover": {
      cursor: "pointer",
      textDecoration: "none",
      color: "text",
    },
  },

  toggler: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    outline: "none",

    ": focus": {
      outline: "none",
    },
    "& span": {
      marginTop: "3px",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      backgroundColor: "text",
    },
  },
};
const AppNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [session, loading] = useSession();
  return (
    <div>
      <Navbar fixed="top" expand="md" sx={_SX.navbar}>
        <div sx={_SX.navbarBrand} className="p-2">
          <Link href="/" passHref>
            <a sx={_SX.navbarBrandAnchor}>
              <Text as="h1">
                c<span sx={{ color: "chartreuse" }}>o</span>dict
              </Text>
            </a>
          </Link>
          <NavbarToggler type="submit" onClick={toggle} sx={_SX.toggler}>
            <span></span>
            <span></span>
            <span></span>
          </NavbarToggler>
        </div>

        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="ml-auto pt-2"
            navbar
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavButton
              as="link"
              linkDetails={{ url: "/about", text: "About" }}
            />
            <ToggleColors />
            {!session && <Login />}
            {session && <Logout />}
            {session && <User userInfo={session} />}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNav;
