/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Card, Text, Box } from "theme-ui";
const SuppotrCard = (props) => {
  const _SX = {
    root: {
      border: "1px solid",
      borderColor: "highlight",
      borderRadius: "5px",
    },
  };
  return (
    <Card sx={_SX.root}>
      <Text as="h3" className="mb-4 mt-2">
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
  );
};
export default SuppotrCard;
