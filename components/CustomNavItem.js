/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import Link from "next/link";
import { NavItem } from "reactstrap";
export default function CustomNavItem({ url = "", text = "", comp = null }) {
  const _SX = {
    root: {
      margin: "0 1rem",
      "@media(max-width: 768px)": {
        marginTop: "1.2rem",
      },
      "& a": {
        color: "text",
        textDecoration: "none",
      },
    },
  };

  const Comp = comp;
  return (
    <NavItem sx={_SX.root}>
      {comp === null ? (
        <Link href={url} passHref>
          <a>{text}</a>
        </Link>
      ) : (
        <Comp />
      )}
    </NavItem>
  );
}
