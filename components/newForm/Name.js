/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx, Box, Label, Input, Alert } from "theme-ui";
import { useContext, useEffect, useState } from "react";
import { newFormCTX } from "../../ctx/forms/new/newFormCTX";
import { nameSchema } from "../newForm/schema/schema";

const _SX = {
  alert: {
    color: "red",
    backgroundColor: "background",
    fontSize: "12px",
  },
};

export default function Name() {
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);
  const [name, setName] = useState("");
  const [nameAlert, setNameAlert] = useState("");

  const handleName = async (e) => {
    e.preventDefault();

    setName(() => {
      // validate asynchronously
      nameSchema
        .validateAsync({ name: e.target.value })
        .then(() => {
          // if ok reset alert messages if any
          setNameAlert("");
          // udpate entire form data context for submit later
          setNewFormCtxState({
            next: true,
            formData: { ...newFormCtxState.formData, name: e.target.value },
          });
        })
        .catch((err) => {
          // if not ok udpate error message
          setNameAlert(err.message);
          // prevent next button however keep form context data
          setNewFormCtxState({
            ...newFormCtxState,
            next: false,
          });
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
        <Input
          className="mt-4"
          name="name"
          placeholder="name"
          type="text"
          onChange={handleName}
          value={name}
        />
        {nameAlert.length > 0 && <Alert sx={_SX.alert}>{nameAlert}</Alert>}
      </div>
    </Box>
  );
}
