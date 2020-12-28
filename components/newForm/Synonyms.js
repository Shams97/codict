/**@jsxRuntime classic */
/**@jsx jsx */
import { useState, useContext, useEffect } from "react";
import { jsx, Input, Button } from "theme-ui";
import { newFormCTX } from "../../ctx/forms/new/newFormCTX";

const _SX = {
  remove: {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    backgroundColor: "background",
    color: "text",
  },
  tag: {
    borderRadius: "10px",
    ":hover": {
      backgroundColor: "highlight",
    },
  },
};

export default function Synonyms() {
  const [type, setType] = useState("");
  const [words, setWords] = useState([]);
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);
  const handleRemove = (e) => {
    e.preventDefault();
    let tempArr = [...words];
    // remove unwanted words
    tempArr.splice(e.target.id, 1);
    setWords(tempArr);
  };

  const handleChange = (e) => {
    e.preventDefault();
    // on space tag word entered as a synynom word to be added to context object
    if (e.nativeEvent.data === " ") {
      setWords([...words, type]);
      // then empty the input field
      setType("");
    } else {
      // otherwise keep following with change event
      setType(e.target.value);
    }
  };

  //   every time words state object is updated, will be merged (added to) with the form context
  useEffect(() => {
    setNewFormCtxState({
      ...newFormCtxState,
      next: true,
      formData: {
        ...newFormCtxState.formData,
        synonyms: words,
      },
    });
  }, [words]);

  return (
    <div>
      <Input
        value={type}
        className="border mt-4"
        onChange={handleChange}
      ></Input>
      <div className="mt-4 d-flex justify-content-center flex-wrap">
        {words.map((w, i) => {
          return (
            <div
              sx={_SX.tag}
              className="border px-2 py-1 mx-2 d-flex align-items-center mt-4"
              key={i}
            >
              {w}
              <Button
                className="ml-2"
                id={i}
                sx={_SX.remove}
                onClick={handleRemove}
              >
                x
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
