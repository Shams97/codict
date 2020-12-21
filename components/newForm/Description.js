/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx, Box, Label, Textarea, Alert } from "theme-ui";
import { useContext, useEffect, useState } from "react";
import { newFormCTX } from "../../ctx/forms/new/newFormCTX";
import { descriptionSchema } from "../newForm/schema/schema";

const _SX = {
  alert: {
    color: "red",
    backgroundColor: "background",
    fontSize: "12px",
  },
};

export default function Description({}) {
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);
  const [desc, setDesc] = useState("");
  const [descAlert, setDescAlert] = useState("");

  const handleDesc = async (e) => {
    e.preventDefault();
    setDesc(() => {
      // validate asynchronously
      descriptionSchema
        .validateAsync({ description: e.target.value })
        .then(() => {
          // if ok reset alert messages
          setDescAlert("");
          // update form data context
          setNewFormCtxState({
            next: true,
            formData: {
              ...newFormCtxState.formData,
              description: e.target.value,
            },
          });
        })
        .catch((err) => {
          // if not ok udapte error message
          setDescAlert(err.message);
          // prevent next button however keep entire form ctx data
          setNewFormCtxState({ ...newFormCtxState, next: false });
        });
      // but update state anyway
      return e.target.value;
    });
  };

  //   every new render/rerender(when click 'back') reset next button
  useEffect(() => {
    setNewFormCtxState({ ...newFormCtxState, next: false });
  }, []);

  return (
    <Box as="form">
      <div>
        <Label htmlFor="name" className="mt-2">
          Name:
        </Label>
        <Textarea
          className="mt-4"
          name="description"
          placeholder="Description"
          onChange={handleDesc}
          value={desc}
        />
        {descAlert.length > 0 && <Alert sx={_SX.alert}>{descAlert}</Alert>}
      </div>
    </Box>
  );
}
