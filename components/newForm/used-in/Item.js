/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { newFormCTX } from "../../../ctx/forms/new/newFormCTX";
import { useState, useContext, useEffect } from "react";
import { object } from "joi";

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
  },
};

export default function Item(props) {
  const { item, category } = props;
  const [selected, setSelected] = useState(false);
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);

  const checkCount = () => {
    const values = Object.values(newFormCtxState.formData.usedIn);
    const keys = Object.keys(newFormCtxState.formData.usedIn);
    for (let i = 0; i < keys.length; i++) {
      if (values[i].length < 1) {
        return false;
      }
    }
    return true;
  };

  const handleSelected = (e) => {
    e.preventDefault();

    // UI
    setSelected(!selected);

    if (!e.target.title) {
      e.target.title = item.name[1];
    }

    /**
     * TODO:
     * 1- fix formData.usedIn values (languages, os, ...) to only add new entries (no duplicates)
     * 2- try using Js sets
     * 3- polish all code
     * 4- commit
     * 5- continue with the rest of the form
     */
    setNewFormCtxState({
      ...newFormCtxState,
      formData: {
        ...newFormCtxState.formData,
        usedIn: {
          ...newFormCtxState.formData.usedIn,
          [category]: [
            ...newFormCtxState.formData.usedIn[category],
            e.target.title,
          ],
        },
      },
    });
  };

  //   enable next button when user has selected at least on option from each category
  useEffect(() => {
    if (checkCount()) setNewFormCtxState({ ...newFormCtxState, next: true });
  }, [selected]);

  return (
    <div sx={_SX.root} className="mx-2">
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
