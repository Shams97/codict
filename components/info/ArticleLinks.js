/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Lists({
  words,
  counter,
  videos = false,
  books = false,
  links = false,
}) {
  const [more, setMore] = useState(false);
  const { theme } = useThemeUI();
  let CTX = null;
  let header = "";
  const handleMore = (e) => {
    e.preventDefault();
    setMore(true);
  };
  const handleLess = (e) => {
    e.preventDefault();
    setMore(false);
  };

  if (videos) {
    CTX = words[counter].db.videosLinks;
    header = "Videos";
  } else if (links) {
    CTX = words[counter].db.articlesLinks;
    header = "Articles";
  } else if (books) {
    CTX = words[counter].db.booksLinks;
    header = "Books";
  }

  const _SX = {
    root: { marginTop: "3rem" },

    links: {
      transition: "height 1s linear",
      position: "relative",
      height: CTX.length > 5 && more === false ? "120px" : "auto",
      overflow: "hidden",
      "& a": {
        color: "text",
      },
      margin: "auto",
    },
    arrowDown: {
      display: more ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      top: "60%",
      background: `linear-gradient(0deg, ${theme.colors.background} 0%, transparent 100%)`,
      textAlign: "center",

      ":hover": {
        cursor: "pointer",
      },
    },
    moreIcon: {
      ":hover": {
        color: "highlight",
      },
    },

    arrowUp: {
      listStyle: "none",
      textAlign: "center",
      ":hover": {
        cursor: "pointer",
        textAlign: "center",
        background: `linear-gradient(0deg, ${theme.colors.background} 0%, transparent 100%)`,
      },
    },
    lessIcon: {
      ":hover": {
        color: "highlight",
      },
    },
  };

  return (
    <div sx={_SX.root}>
      <h5 className="mb-4">
        <FontAwesomeIcon
          icon={
            header === "Books" ? "book" : header === "Videos" ? "video" : "link"
          }
          width={20}
          height={20}
          className="mx-3"
          sx={_SX.headerIcon}
        />
      </h5>
      <ul sx={_SX.links}>
        {CTX.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.dest} target="_new">
                {link.title}
              </a>
            </li>
          );
        })}
        {CTX.length > 3 && (
          <li sx={_SX.arrowDown} onClick={handleMore}>
            <FontAwesomeIcon
              className="mx-1"
              sx={_SX.moreIcon}
              icon="angle-double-down"
              width={20}
              height={20}
            />
          </li>
        )}
        {more && (
          <li sx={_SX.arrowUp} onClick={handleLess}>
            <FontAwesomeIcon
              className="mx-1"
              sx={_SX.lessIcon}
              icon="angle-double-up"
              width={20}
              height={20}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
