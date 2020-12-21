/**@jsxRuntime classic */
/**@jsx jsx */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx } from "theme-ui";
import CreatedBy from "../info/CreatedBy";
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
<<<<<<< HEAD
  const { counter, setCounter, wordsCount, words } = availableWords;
  const handleNextDescription = (e) => {
    e.preventDefault();

    if (counter < wordsCount) {
      setCounter(counter + 1);
    } else {
      return;
    }
=======
  const { counter, setCounter, wordsCount } = availableWords;
  const handleNextDescription = (e) => {
    e.preventDefault();
    if (counter < wordsCount) setCounter(counter + 1);
>>>>>>> 7db3f380a149de84ab99e0ec5b4fa0264cff83b4
  };

  const hadnlePrevDescription = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      return;
    }
=======
    if (counter > 1) setCounter(counter - 1);
>>>>>>> 7db3f380a149de84ab99e0ec5b4fa0264cff83b4
  };
  return (
    <li className="ml-auto" sx={_SX.li}>
      <CreatedBy username={words[counter].db.user} />
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
