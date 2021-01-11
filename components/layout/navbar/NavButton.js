/**@jsxRuntime classic */
/**@jsx jsx */
import { Button, jsx } from "theme-ui";
import Link from "next/link";

export default function NavButton({
  children,
  as = "button",
  linkDetails,
  onClick,
}) {
  switch (as) {
    case "button":
      return (
        <Button
          onClick={onClick}
          className="mx-3 my-md-3 my-3"
          color="text"
          backgroundColor="background"
          sx={{
            borderRadius: "0px",
            borderBottom: "1px solid",
            borderColor: "transparent",
            ":hover": {
              borderColor: "text",
            },
          }}
        >
          {children}
        </Button>
      );
    case "link":
      return (
        <Link href={linkDetails.url} passHref>
          <a
            className="mx-3 my-md-3 my-3"
            sx={{
              borderBottom: "1px solid",
              borderColor: "transparent",
              color: "text",
              backgroundColor: "background",
              textDecoration: "none",
              padding: "0.5rem 0.8rem",

              ":hover": {
                textDecoration: "none",
                borderColor: "text",
                color: "text",
              },
            }}
          >
            {linkDetails.text}
          </a>
        </Link>
      );
  }
}
