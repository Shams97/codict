/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx, Box } from "theme-ui";
import { useContext, useEffect, useState } from "react";
import { newFormCTX } from "../../../ctx/forms/new/newFormCTX";
import Item from "./Item";

import {
  generateframeWorksIcons,
  generateLangIcons,
  generateOSicons,
  generatePrinciples,
} from "./options";

const options = [
  {
    type: "Languages",
    label: "languages",
    list: generateLangIcons(),
  },
  {
    type: "Frame Works",
    label: "frameWorks",
    list: generateframeWorksIcons(),
  },
  {
    type: "Operating Systems",
    label: "os",
    list: generateOSicons(),
  },
  {
    type: "Principles",
    label: "principles",
    list: generatePrinciples(),
  },
];

const _SX = {
  alert: {
    color: "red",
    backgroundColor: "background",
    fontSize: "12px",
  },
};

export default function UsedIn({}) {
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);

  //   every new render/rerender(when click 'back') reset next button
  useEffect(() => {
    setNewFormCtxState({ ...newFormCtxState, next: false });
  }, []);

  return (
    <Box as="form">
      <div>
        {options.map((opt, i) => {
          return (
            <div key={i}>
              <h5 className="mt-3 mb-2 text-center">
                {opt.type}{" "}
                {!newFormCtxState.next && (
                  <span sx={{ fontSize: "10px", color: "primary" }}>
                    (Pick one)
                  </span>
                )}
              </h5>

              <div className="d-flex justify-content-center">
                {opt.list.map((item, idx) => {
                  return <Item item={item} key={idx} category={opt.label} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
