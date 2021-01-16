/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Card, Text, Box } from "theme-ui";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <Card sx={_SX.root} className="p-2">
        <Text as="h3" sx={_SX.headingAccessibility} className="mb-4 mt-2">
          Support
        </Text>
        <Box>
          <Text>
            You can help maintain this project in many ways. Please DM me if you
            are willing to.
          </Text>

          <div className="d-flex justify-content-center mt-3">
            <a href="https://twitter.com/gist32091948" className="m-1">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://github.com/mustafaKamal-fe"
              className="m-1"
              sx={{
                color: "text",
              }}
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                width={20}
                height={20}
              />
            </a>
          </div>
        </Box>
      </Card>
    </Col>
  );
};
export default SuppotrCard;
