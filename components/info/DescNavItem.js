/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { fetchErr } from "../../ctx/notification/FetchErrCtx";
import requestLike from "./lib/requestLike";
import requestDislike from "./lib/requestDislike";

/**
 *
 * @param {*} social array of objects composed of like, dislike and edit button
 * @param {*} word word name
 * @param {*} order order of word definition inside DB
 */
export default function DescNavItem({ social, word, order, wordsCount }) {
  const router = useRouter();
  const [obj, setObj] = useState({});
  const [likes, setLikes] = useState({});
  const [dislikes, setDisLikes] = useState({});
  const [fetchErrCtxState, setFetchErrCtxState] = useContext(fetchErr);

  const _SX = {
    socialItem: {
      backgroundColor: "background",
      color: "text",
      ":hover": {
        cursor: "pointer",
      },
    },
    socialItemIcon: {
      color: "primary",
      ":hover": { color: social.color },
    },
    socialItemSup: {
      fontSize: "12px",
      fontWeight: "bold",
    },
  };
  const handleEdit = (e) => {
    e.preventDefault();
    //navigate to /edit/[id] page (this page is protected)
    router.push(`/edit/${router.query.id}`);
  };

  const handleSocialInteraction = (e, social) => {
    e.preventDefault();
    // like
    if (social.name === "like") {
      setLikes((prev) => {
        if (prev[`definition-${order}`] === 0) {
          // on first render likes state object binds number of likes from DB
          return { ...prev, [`definition-${order}`]: social.count + 1 };
        } else {
          // on future renders likes state object binds number of likes from DB + UI data
          return {
            ...prev,
            [`definition-${order}`]: prev[`definition-${order}`] + 1,
          };
        }
      });

      requestLike(word, order, fetchErrCtxState, setFetchErrCtxState);
    } else {
      // send dislike
      setDisLikes((prev) => {
        if (prev[`definition-${order}`] === 0) {
          // on first render dislike state object binds number of likes from DB
          return { ...prev, [`definition-${order}`]: social.count + 1 };
        } else {
          // on future renders dislike state object binds number of likes from DB + UI data
          return {
            ...prev,
            [`definition-${order}`]: prev[`definition-${order}`] + 1,
          };
        }
      });

      requestDislike(word, order, fetchErrCtxState, setFetchErrCtxState);
    }
  };
  /**
   * Sets an object of the form {definition-0:, definition-1:,...}
   * for both state objects likse & dislikes. they will be used to track and hold the
   * state of likes and dislikes count in the UI for the social buttons.
   */
  useEffect(() => {
    let i = 0;
    let obj = {};

    while (i < wordsCount + 1) {
      obj[`definition-${i}`] = 0;
      i++;
    }
    setObj({ ...obj });
  }, []);
  // related to effect above it
  useEffect(() => {
    setLikes({ ...obj });
    setDisLikes({ ...obj });
  }, [obj]);
  return social.name === "edit" ? (
    <li sx={_SX.socialItem}>
      <IconButton
        onClick={handleEdit}
        disableRipple
        aria-label={social.name}
        sx={{ ":focus": { outline: "none" } }}
      >
        <Badge>
          <FontAwesomeIcon
            icon={social.icon}
            width={20}
            height={20}
            sx={_SX.socialItemIcon}
          />
        </Badge>
      </IconButton>
    </li>
  ) : (
    <li sx={_SX.socialItem}>
      <IconButton
        onClick={(e) => handleSocialInteraction(e, social)}
        disableRipple
        aria-label={social.name}
        sx={{ ":focus": { outline: "none" } }}
      >
        <Badge>
          <FontAwesomeIcon
            icon={social.icon}
            width={20}
            height={20}
            sx={_SX.socialItemIcon}
          />
        </Badge>
      </IconButton>
      {social.name === "like" ? (
        <sup sx={_SX.socialItemSup}>
          {likes[`definition-${order}`] > 0
            ? likes[`definition-${order}`]
            : social.count}
        </sup>
      ) : (
        <sup sx={_SX.socialItemSup}>
          {/* on first render bind data fetched from db (second condition) otherwise, user has clicked and select updated data instead */}
          {dislikes[`definition-${order}`] > 0
            ? dislikes[`definition-${order}`]
            : social.count}
        </sup>
      )}
    </li>
  );
}
