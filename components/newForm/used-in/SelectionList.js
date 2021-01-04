/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { newFormCTX } from "../../../ctx/forms/new/newFormCTX";
import All from "./All";
import None from "./None";
import NoneAllCtx, { allNoneCtx } from "../../../ctx/forms/new/allNoneCtx";

const _SX = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexWrap: "wrap",
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
  notIcon: {
    ":hover": {
      cursor: "pointer",
    },
    paddingBottom: "5px",
  },
  isIcon: { paddingBottom: "5px", position: "relative" },
};
const Title = ({ name }) => <h5 className="mt-4 mb-4 text-center">{name}</h5>;

const Icons = ({ iconList, label }) => {
  const [formCtxState, setFormCtxState] = useContext(newFormCTX);
  const [noneAll, setNoneAll] = useContext(allNoneCtx);
  const [select, setSelect] = useState({});
  const handleSelect = (e, i) => {
    e.preventDefault();

    //update 'none'and 'all' UI if was selected
    setNoneAll({ none: false, all: false });
    // for svg and path tag elements add 'title' attribute as they do not have one
    if (!e.target.title) {
      e.target.title = i.name[1];
    }
    const title = e.target.title;
    // data inside "formCtxState.formData.usedIn[label]" before apply next udpate
    // label is one of : os, frameWorks, languages or principles
    const prevSet = new Set(formCtxState.formData.usedIn[label]);

    if (select[title]) {
      // remove from list
      prevSet.delete(title);
    } else {
      // delete from list
      prevSet.add(title);
    }

    // update form context data
    setFormCtxState({
      ...formCtxState,
      formData: {
        ...formCtxState.formData,
        usedIn: {
          ...formCtxState.formData.usedIn,
          [label]: prevSet,
        },
      },
    });
    // update UI
    setSelect({ ...select, [title]: select[title] ? false : true });
  };

  return (
    <div sx={_SX.root}>
      {iconList.map((i, idx) => {
        return i.isIcon ? (
          <FontAwesomeIcon
            className="mx-2 mt-2"
            sx={{
              ..._SX.isIcon,
              // if selcted update UI for this icon
              borderBottom: select[i.name[1]] && "1px solid red",
            }}
            key={idx}
            onClick={(e) => {
              handleSelect(e, i);
            }}
            title={i.name[1]}
            icon={i.name}
            style={{ height: i.height, width: i.width }}
          />
        ) : (
          <div
            className="mx-4 mt-2"
            sx={{
              ..._SX.notIcon,
              borderBottom: select[i.name[0]] && "1px solid red",
            }}
            title={i.name[0]}
            key={idx}
            onClick={(e) => {
              handleSelect(e, i);
            }}
          >
            {i.name[0]}
          </div>
        );
      })}
      <None setOptionUIstate={setSelect} optionUIstate={select} label={label} />
      <All setOptionUIstate={setSelect} optionUIstate={select} label={label} />
    </div>
  );
};

export default function SelectionList({ name, list, label }) {
  return (
    <NoneAllCtx>
      <Title name={name} />
      <Icons iconList={list} label={label} />
    </NoneAllCtx>
  );
}
