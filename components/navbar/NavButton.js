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
            border: "1px solid",
            borderColor: "text",
            ":hover": {
              color: "background",
              backgroundColor: "text",
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
              border: "1px solid",
              borderColor: "text",
              color: "text",
              backgroundColor: "background",
              textDecoration: "none",
              padding: "0.5rem 0.8rem",
              borderRadius: "5px",
              ":hover": {
                textDecoration: "none",
                color: "background",
                backgroundColor: "text",
              },
            }}
          >
            {linkDetails.text}
          </a>
        </Link>
      );
  }
}
