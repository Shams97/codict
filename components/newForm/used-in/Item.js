/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { newFormCTX } from "../../../ctx/forms/new/newFormCTX";
import { usedInCtx } from "../../../ctx/usedin/usedInCtx";
import { useState, useContext, useEffect } from "react";
import {
  rawFramwIcons,
  rawLangIcons,
  rawOsIcons,
  rawPrinciplesIcons,
} from "./options";

const _SX = {
  root: {
    position: "relative",
    ":hover svg": {
      cursor: "pointer",
    },
    ":hover path": {
      cursor: "pointer",
    },
    ":hover span": {
      cursor: "pointer",
    },
    "@media(max-width: 768px)": {
      margin: "1rem",
    },
  },
};

const whichCategory = (category) => {
  switch (category) {
    case "languages":
      return rawLangIcons();
    case "os":
      return rawOsIcons();
    case "frameWorks":
      return rawFramwIcons();
    case "principles":
      return rawPrinciplesIcons();
  }
};

export default function Item(props) {
  const { item, category } = props;
  const [selected, setSelected] = useState(false);
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);
  const [usedIn, setUsedIn] = useContext(usedInCtx);

  /**
   * Loop through the sets of formData.usedIn and check if they have meet the form
   * rule. the rule is, user must select at least one item from each category (category is either languges, os, ...)
   * if condition is met, next button is enabled
   */
  const checkCount = () => {
    const values = Object.values(newFormCtxState.formData.usedIn);
    for (let i = 0; i < values.length; i++) {
      if (values[i].size < 1) {
        return false;
      }
    }

    return true;
  };

  const handleSelected = (e) => {
    // update UI
    setSelected(!selected);

    // if item has no title give it one  (for svg and path tags)
    if (!e.target.title) {
      e.target.title = item.name[1];
    }
    e.preventDefault();
    if (selected) {
      /**
       *  item is selected
       */

      // remove from set (because it was de-selected)
      const tempSet = new Set(newFormCtxState.formData.usedIn[category]);
      tempSet.delete(e.target.title);

      // update context
      setNewFormCtxState({
        ...newFormCtxState,
        formData: {
          ...newFormCtxState.formData,
          usedIn: {
            ...newFormCtxState.formData.usedIn,
            [category]: tempSet,
          },
        },
      });
    } else {
      /**
       * item is not selected
       */

      // add to set
      const tempSet = new Set(newFormCtxState.formData.usedIn[category]);
      tempSet.add(e.target.title);

      // udpate context
      setNewFormCtxState({
        ...newFormCtxState,
        formData: {
          ...newFormCtxState.formData,
          usedIn: {
            ...newFormCtxState.formData.usedIn,
            [category]: tempSet,
          },
        },
      });
    }
  };

  //enable next button when user has selected at least on option from each category
  useEffect(() => {
    if (checkCount()) setNewFormCtxState({ ...newFormCtxState, next: true });
    else setNewFormCtxState({ ...newFormCtxState, next: false });
  }, [selected]);

  useEffect(() => {
    if (usedIn[category].none) {
      setSelected(false);
    }
  }, [usedIn[category]]);

  return (
    <div sx={_SX.root} className="mx-3">
      {item.isIcon ? (
        <FontAwesomeIcon
          onClick={handleSelected}
          title={item.name[1]}
          icon={item.name}
          style={{
            height: item.height,
            width: item.width,
          }}
        />
      ) : (
        <span
          title={item.name}
          onClick={(e) => {
            const title = e.target.title;

            if (title === "All") {
              // select every option from this category. [category is a props passed to this component that could be one of : languages, os, frameworks or principles]
              setUsedIn({
                ...usedIn,
                [category]: { none: false, all: true },
              });

              setNewFormCtxState({
                ...newFormCtxState,
                formData: {
                  ...newFormCtxState.formData,
                  usedIn: {
                    ...newFormCtxState.formData.usedIn,
                    [category]: new Set(whichCategory(category)),
                  },
                },
              });
            } else if (title === "None") {
              // deselect all options
              setUsedIn({
                ...usedIn,
                [category]: { none: true, all: false },
              });

              setNewFormCtxState({
                ...newFormCtxState,
                formData: {
                  ...newFormCtxState.formData,
                  usedIn: {
                    ...newFormCtxState.formData.usedIn,
                    [category]: new Set("none"),
                  },
                },
              });
            } else {
              // reset none and all conditions if any
              setUsedIn({
                ...usedIn,
                [category]: { none: false, all: false },
              });
              // then select
              handleSelected(e);
            }
          }}
        >
          {item.name}
        </span>
      )}

      {usedIn[category].all ? (
        <sup sx={{ position: "absolute" }}>
          <FontAwesomeIcon icon="check" width={10} height={10} color="green" />
        </sup>
      ) : (
        selected && (
          <sup sx={{ position: "absolute" }}>
            <FontAwesomeIcon
              icon="check"
              width={10}
              height={10}
              color="green"
            />
          </sup>
        )
      )}
    </div>
  );
}
