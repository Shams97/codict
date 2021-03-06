/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import { useContext, useEffect } from "react";
import { newFormCTX } from "../../../ctx/forms/newFormCTX";
import { Container } from "reactstrap";
import SelectionList from "./SelectionList";

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

export default function UsedIn() {
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);

  //every new render/rerender(when click 'back') reset data input and enable next button
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
      next: true,
    });
  }, []);

  return (
    <Container>
      {/* loop all four options (languages, frameWorks,...) */}
      {options.map((opt, i) => {
        return (
          <SelectionList
            name={opt.type}
            label={opt.label}
            list={opt.list}
            key={i}
          />
        );
      })}
    </Container>
  );
}
