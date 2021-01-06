/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx, Box, Input, Alert } from "theme-ui";
import { useContext, useEffect, useState } from "react";
import { newFormCTX } from "../../ctx/forms/new/newFormCTX";
import { nameSchema } from "../newForm/schema/schema";
import { useRouter } from "next/router";

const _SX = {
  alert: {
    color: "red",
    backgroundColor: "background",
    fontSize: "12px",
  },
};

export default function Name({ edit }) {
  const router = useRouter();
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

  //every new render/rerender(when click 'back') reset next button
  // on /edit next button is not disabled
  useEffect(() => {
    setNewFormCtxState({ ...newFormCtxState, next: edit ? true : false });
  }, []);

  // when coming from a word page to edit page the name input field is filled with
  // word name by default. word is taken from nextjs router object
  useEffect(() => {
    if (edit && router.components["/[id]"]) {
      setName(router.components["/[id]"].props.pageProps.words[0].db.name);
    } else {
      // if /edit page is refreshed, redirect to index page. (one reason is word can't be taken anymore from nextjs router object)
      router.replace("/");
    }
  }, []);

  // finally update form data context with word name to be edited before sending request to API
  useEffect(() => {
    if (edit && router.components["/[id]"]) {
      setNewFormCtxState({
        next: true,
        formData: {
          ...newFormCtxState.formData,
          name: router.components["/[id]"].props.pageProps.words[0].db.name,
        },
      });
    }
  }, []);

  return (
    <Box as="form">
      <div>
        <Input
          disabled={edit ? true : false}
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
