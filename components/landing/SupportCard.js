/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Card, Text, Box } from "theme-ui";
import { Col } from "reactstrap";
const SuppotrCard = () => {
  const _SX = {
    root: {
      border: "1px solid",
      borderColor: "highlight",
      borderRadius: "5px",
    },
    headingAccessibility: {
      fontSize: "28px",
    },
  };
  return (
    <Col sm="12 my-4" md="4">
      <Card sx={_SX.root}>
        <Text as="h3" sx={_SX.headingAccessibility} className="mb-4 mt-2">
          Support
        </Text>
        <Box>
          <ul className="text-left">
            <li>Ko-fi</li>
            <li>fund and maintain</li>
            <li>contribute</li>
          </ul>
        </Box>
      </Card>
    </Col>
  );
};
export default SuppotrCard;
