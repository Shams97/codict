/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Card, Text, Box } from "theme-ui";
const _SX = {
  root: {
    border: "1px solid",
    borderColor: "highlight",
    borderRadius: "5px",
  },
};
const WhyCard = (props) => {
  return (
    <Card sx={_SX.root}>
      <Text as="h3" className="mb-4 mt-2">
        Why?
      </Text>
      <Box>
        <Text className="px-3 pb-3">
          While reading something you come across a term that makes no sense to
          you codict tells you what is going on !
        </Text>
      </Box>
    </Card>
  );
};
export default WhyCard;
