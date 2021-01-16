/* eslint-disable react/prop-types */
/**@jsxRuntime classic */
/**@jsx jsx */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx } from "theme-ui";
const _SX = {
  button: {
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    ":focus": {
      outline: "none",
    },
    "& svg": {
      color: "primary",
      backgroundColor: "background",
    },
    "&:hover svg": {
      color: "text",
    },
    "& svg:hover": {
      color: "text",
    },
  },
  li: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default function NextDef({ availableWords }) {
  const { counter, setCounter, wordsCount } = availableWords;
  const handleNextDescription = (e) => {
    e.preventDefault();
    if (counter < wordsCount) {
      setCounter(counter + 1);
    }
  };

  const hadnlePrevDescription = (e) => {
    e.preventDefault();
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <li className="ml-auto" sx={_SX.li}>
      <button className="p-1" sx={_SX.button}>
        <FontAwesomeIcon
          width="20px"
          height="20px"
          icon="caret-left"
          onClick={hadnlePrevDescription}
        />
      </button>
      <button className="p-1" sx={_SX.button}>
        <FontAwesomeIcon
          width="20px"
          height="20px"
          icon="caret-right"
          onClick={handleNextDescription}
        />
      </button>
    </li>
  );
}
