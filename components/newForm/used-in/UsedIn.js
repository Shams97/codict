/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import { useContext, useEffect } from "react";
import { newFormCTX } from "../../../ctx/forms/new/newFormCTX";
import UsedInContext from "../../../ctx/usedin/usedInCtx";
import Item from "./Item";
import { Row, Container } from "reactstrap";

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
  prompt: { fontSize: "10px", color: "primary" },
  set: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default function UsedIn({}) {
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);

  //   every new render/rerender(when click 'back') reset next button
  useEffect(() => {
    setNewFormCtxState({
      ...newFormCtxState,
      formData: {
        ...newFormCtxState.formData,
        usedIn: {
          languages: new Set(),
          os: new Set(),
          frameWorks: new Set(),
          principles: new Set(),
        },
      },
      next: false,
    });
  }, []);

  return (
    <Container className="w-100">
      <UsedInContext>
        {options.map((opt, i) => {
          return (
            <Row key={i} className="d-flex flex-column mt-4">
              <h5 className="mt-4 mb-2 text-center">
                {opt.type}{" "}
                {!newFormCtxState.next && (
                  <span sx={_SX.prompt}>(Pick one)</span>
                )}
              </h5>

              <div sx={_SX.set}>
                {opt.list.map((item, idx) => {
                  return <Item item={item} key={idx} category={opt.label} />;
                })}
              </div>
            </Row>
          );
        })}
      </UsedInContext>
    </Container>
  );
}
