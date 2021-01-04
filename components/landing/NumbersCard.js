/**@jsxRuntime classic */
/**@jsx jsx */
import { useEffect, useState } from "react";
import { jsx, Card, Text, Box } from "theme-ui";
import axios from "axios";
import RealData from "./RealData";
import OptimisticLine from "./OptimisticLine";

const _SX = {
  root: {
    border: "1px solid",
    borderColor: "highlight",
    borderRadius: "5px",
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
  },
};
const CustomCard = () => {
  const [wordsCount, setWC] = useState(null);
  const [contributersCount, setCC] = useState(null);

  useEffect(() => {
    // fetch number of all words from DB
    axios.get("/api/count/words").then((res) => {
      setWC(res.data.message);
    });
    // fetch number of all contributers
    axios.get("/api/count/contributors").then((res) => {
      setCC(res.data.message);
    });
  }, []);

  return (
    <Card sx={_SX.root}>
      <Text as="h5" className="mb-4 mt-2 text-center">
        Numbers
      </Text>
      <Box>
        <ul className="text-left" sx={_SX.list}>
          <li className="mt-1 text-center">
            {wordsCount === null ? (
              <OptimisticLine />
            ) : (
              <RealData number={wordsCount} word="Words" />
            )}
          </li>
          <li className="mt-1">
            {contributersCount === null ? (
              <OptimisticLine />
            ) : (
              <RealData number={contributersCount} word="Contributors" />
            )}
          </li>
        </ul>
      </Box>
    </Card>
  );
};
export default CustomCard;
