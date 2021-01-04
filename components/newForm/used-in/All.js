/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import { useState, useContext } from "react";
import { newFormCTX } from "../../../ctx/forms/new/newFormCTX";
import { allNoneCtx } from "../../../ctx/forms/new/allNoneCtx";

import {
  langIconsNames,
  frameWorksIconsNames,
  osIconsNames,
  principlesIconsNames,
} from "./options";

const whichCategory = (label) => {
  switch (label) {
    case "languages":
      return langIconsNames();
    case "frameWorks":
      return frameWorksIconsNames();
    case "os":
      return osIconsNames();
    case "principles":
      return principlesIconsNames();
  }
};

const All = ({ label, setOptionUIstate }) => {
  const [formCtxState, setFormCtxState] = useContext(newFormCTX);
  const [allNoneState, setAllNoneState] = useContext(allNoneCtx);
  const [select, setSelect] = useState(false);
  const handleAll = (e) => {
    e.preventDefault();

    // update UI
    setSelect(true);

    // update UI for rest of options icons
    const category = whichCategory(label);
    const temp = {};
    for (let i = 0; i < category.length; i++) {
      temp[category[i]] = true;
    }
    setOptionUIstate(temp);

    // update none UI (remove check mark)
    setAllNoneState({ all: true, none: false });

    // update form context state with only the category in question
    /**
     * label is one of languages, os, frameworks,..
     * category is the list of all options available in this category
     */
    setFormCtxState({
      ...formCtxState,
      formData: {
        ...formCtxState.formData,
        usedIn: {
          ...formCtxState.formData.usedIn,
          [label]: category,
        },
      },
    });
  };
  return (
    <span
      className="mx-3 mt-2"
      sx={{
        paddingBottom: "5px",
        borderBottom: select && allNoneState.all && "1px solid green",
      }}
      onClick={handleAll}
    >
      All
    </span>
  );
};

export default All;
