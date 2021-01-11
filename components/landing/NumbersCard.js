/**@jsxRuntime classic */
/**@jsx jsx */
import { useContext } from "react";
import { jsx, Card, Text, Box } from "theme-ui";
import { Col } from "reactstrap";
import RealData from "./RealData";
import OptimisticLine from "../optimistic/OptimisticLine";
import useSWR from "swr";
import { fetchErr } from "../../ctx/notification/FetchErrCtx";
import useNotifications from "../../lib/pages/useNotifications";

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
  headingAccessibility: {
    fontSize: "28px",
  },
};
const NumbersCard = () => {
  const [fetchErrCtxState, setFetchErrCtxState] = useContext(fetchErr);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/count/contributions", fetcher);

  useNotifications("contributions", {
    data,
    error,
    fetchErrCtxState,
    setFetchErrCtxState,
  });
  if (data) {
    return (
      <Col sm="12 my-4" md="4">
        <Card sx={_SX.root}>
          <Text
            as="h1"
            sx={_SX.headingAccessibility}
            className="mb-4 mt-2 text-center"
          >
            Numbers
          </Text>
          <Box>
            <ul className="text-left" sx={_SX.list}>
              <li className="mt-1 text-center">
                <RealData number={data.words} word="Words" />
              </li>
              <li className="mt-1">
                <RealData number={data.contributions} word="Contributions" />
              </li>
            </ul>
          </Box>
        </Card>
      </Col>
    );
  } else if (error || (!error && !data)) {
    return (
      <Col sm="12 my-4" md="4">
        <Card sx={_SX.root}>
          <Text
            as="h1"
            sx={_SX.headingAccessibility}
            className="mb-4 mt-2 text-center"
          >
            Numbers
          </Text>
          <Box>
            <ul className="text-left" sx={_SX.list}>
              <li className="mt-1 text-center">
                <OptimisticLine />
              </li>
              <li className="mt-1">
                <OptimisticLine />
              </li>
            </ul>
          </Box>
        </Card>
      </Col>
    );
  }
};
export default NumbersCard;
