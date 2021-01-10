/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Card, Text, Box } from "theme-ui";
import { Col } from "reactstrap";
const _SX = {
  root: {
    border: "1px solid",
    borderColor: "highlight",
    borderRadius: "5px",
  },
};
const WhyCard = (props) => {
  return (
    <Col sm="12 my-4" md="4">
      <Card sx={_SX.root}>
        <Text as="h3" className="mb-4 mt-2">
          Why?
        </Text>
        <Box>
          <Text className="px-3 pb-3">
            While learning something, you come across a term that makes
            absolutely no sense to you. Codict gives you a brief about it and
            further intel if you wish.
          </Text>
        </Box>
      </Card>
    </Col>
  );
};
export default WhyCard;
