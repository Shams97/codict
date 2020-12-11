/**@jsxRuntime classic */
/**@jsx jsx */
import { counter } from "@fortawesome/fontawesome-svg-core";
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
      color: "text",
      backgroundColor: "background",
    },
    "&:hover svg": {
      color: "primary",
    },
    "& svg:hover": {
      color: "primary",
    },
  },
  li: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default function NextDef({ availableWords }) {
  const { counter, setCounter } = availableWords;
  const handleNextDescription = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  const hadnlePrevDescription = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
  };
  return (
    <li className="ml-auto" sx={_SX.li}>
      <button className="p-1" sx={_SX.button} onClick={hadnlePrevDescription}>
        <FontAwesomeIcon width="20px" height="20px" icon="caret-left" />
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
