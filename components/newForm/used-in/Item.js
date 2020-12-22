/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { newFormCTX } from "../../../ctx/forms/new/newFormCTX";
import { useState, useContext, useEffect } from "react";

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

export default function Item(props) {
  const { item, category } = props;
  const [selected, setSelected] = useState(false);
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);

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
    e.preventDefault();
    if (selected) {
      // item was selected

      // UI
      setSelected(!selected);

      // if item has no title give it one  (for svg and path tags)
      if (!e.target.title) {
        e.target.title = item.name[1];
      }
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

      // update UI
      setSelected(!selected);

      // if item has no title give it one  (for svg and path tags)
      if (!e.target.title) {
        e.target.title = item.name[1];
      }

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

  //   enable next button when user has selected at least on option from each category
  useEffect(() => {
    if (checkCount()) setNewFormCtxState({ ...newFormCtxState, next: true });
    else setNewFormCtxState({ ...newFormCtxState, next: false });
  }, [selected]);

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
        <span title={item.name} onClick={handleSelected}>
          {item.name}
        </span>
      )}
      {selected && (
        <sup sx={{ position: "absolute" }}>
          <FontAwesomeIcon icon="check" width={10} height={10} color="green" />
        </sup>
      )}
    </div>
  );
}
