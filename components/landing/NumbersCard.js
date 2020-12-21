/**@jsxRuntime classic */
/**@jsx jsx */
import { useEffect, useState } from "react";
import { jsx, Card, Text, Box } from "theme-ui";
const CustomCard = (props) => {
  const [wordsCount, setWC] = useState(2000);
  const [contributersCount, setCC] = useState(1000);
  const [topToday, setTopToday] = useState("..");
  const [topThree, setTopThree] = useState([]);
  const _SX = {
    root: {
      border: "1px solid",
      borderColor: "highlight",
      borderRadius: "5px",
    },
  };
  useEffect(() => {
    // fetch from DB
    setWC(2078);
    setCC(328);
    setTopThree(["SSR", "React", "KISS"]);
    setTopToday("Node");
  }, []);
  return (
    <Card sx={_SX.root}>
      <Text as="h3" className="mb-4 mt-2">
        Numbers
      </Text>
      <Box>
        <ul className="text-left">
          <li>{wordsCount} words</li>
          <li>{contributersCount} contributers</li>
          <li>{topToday} is the most searched word today</li>
          <li>
            {topThree.map((term, i) => (
              <span className="pr-2" key={i}>
                {term},
              </span>
            ))}{" "}
            are the most searched words
          </li>
        </ul>
      </Box>
    </Card>
  );
};
export default CustomCard;
