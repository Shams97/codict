/**@jsxRuntime classic */
/**@jsx jsx */
import { useState } from "react";
import { jsx, Card, Text, Box } from "theme-ui";
import { Col } from "reactstrap";
import RealData from "./RealData";
import OptimisticLine from "../optimistic/OptimisticLine";
import useSWR from "swr";

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
const NumbersCard = () => {
  const [wordsCount, setWC] = useState(0);
  const [contributersCount, setCC] = useState(0);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/count/contributions", fetcher);

  // this condition prevents react-too many re-renders!!
  if (data && wordsCount < 1) {
    if (!(wordsCount > 0)) {
      setWC(data.words);
      setCC(data.contributions);
    }
  }

  return (
    <Col sm="12 my-4" md="4">
      <Card sx={_SX.root}>
        <Text as="h5" className="mb-4 mt-2 text-center">
          Numbers
        </Text>
        <Box>
          <ul className="text-left" sx={_SX.list}>
            <li className="mt-1 text-center">
              {wordsCount === 0 ? (
                <OptimisticLine />
              ) : (
                <RealData number={wordsCount} word="Words" />
              )}
            </li>
            <li className="mt-1">
              {contributersCount === 0 ? (
                <OptimisticLine />
              ) : (
                <RealData number={contributersCount} word="Contributions" />
              )}
            </li>
          </ul>
        </Box>
      </Card>
    </Col>
  );
};
export default NumbersCard;
