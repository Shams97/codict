/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Box, Input, Text } from "theme-ui";
import { useState } from "react";
import Link from "next/link";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
import ToggleColors from "./toggleColorMode";
import CustomNavItem from "../components/CustomNavItem";

const AppNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const _SX = {
    navbar: {
      backgroundColor: "background",
      "@media(min-width: 768px)": {
        backgroundColor: "background",
        borderBottom: "1px solid highlight",
        boxShadow: "1px 0 5px 0px gray",
      },
    },
    navbarBrand: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
    },
    navbarBrandAnchor: {
      textDecoration: "none",
      ":hover": {
        cursor: "pointer",
        textDecoration: "none",
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
        backgroundColor: "primary",
        marginTop: "3px",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
      },
    },
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar fixed="top" expand="md" sx={_SX.navbar}>
        <div sx={_SX.navbarBrand}>
          <Link href="/" passHref>
            <a sx={_SX.navbarBrandAnchor}>
              <Text>codict</Text>
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
            className="ml-auto"
            navbar
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}>
            <CustomNavItem text="login" url="/login" />
            <CustomNavItem text="logout" url="/logout" />
            <CustomNavItem text="about" url="/about" />
            <CustomNavItem comp={ToggleColors} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNav;
