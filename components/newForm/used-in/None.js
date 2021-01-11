/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import { useState, useContext } from "react";
import { newFormCTX } from "../../../ctx/forms/newFormCTX";
import { allNoneCtx } from "../../../ctx/forms/allNoneCtx";

const None = ({ optionUIstate, setOptionUIstate, label }) => {
  const [formCtxState, setFormCtxState] = useContext(newFormCTX);
  const [allNoneState, setAllNoneState] = useContext(allNoneCtx);
  const [select, setSelect] = useState(false);
  const handleNone = (e) => {
    e.preventDefault();

    // update UI
    setSelect(true);

    // update UI for rest of options icons
    const temp = { ...optionUIstate };
    for (let entry in temp) {
      temp[entry] = false;
    }
    setOptionUIstate(temp);

    // update UI for "All" option
    setAllNoneState({ none: true, all: false });

    /**
     *  update form context to none
     *  update form context state with only the category in question
     *  label is one of languages, os, frameworks,..
     */
    setFormCtxState({
      ...formCtxState,
      formData: {
        ...formCtxState.formData,
        usedIn: {
          ...formCtxState.formData.usedIn,
          [label]: new Set(),
        },
      },
    });
  };
  return (
    <span
      sx={{
        borderBottom: select && allNoneState.none && "1px solid yellow",
      }}
      className="mx-3 mt-2"
      onClick={handleNone}
    >
      None
    </span>
  );
};
export default None;
