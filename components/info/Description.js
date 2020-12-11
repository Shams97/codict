/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { Card, CardBody, CardFooter, CardText, Col, Row } from "reactstrap";
import NextDef from "../info/NextDef";
import DescNavItem from "../info/DescNavItem";

const _SX = {
  card: {
    backgroundColor: "background",
    color: "text",
    borderColor: "gray",
  },
  cardFooter: {
    backgroundColor: "background",
    color: "text",
    border: "none",
  },
  sociaList: {
    display: "flex",
    listStyleType: "none",
    flexDirection: "row",
    margin: 0,
    padding: 0,
    textAlign: "center",
    alignItems: "center",
  },
};

export default function Description({ words, availableWords }) {
  const { counter } = availableWords;
  return (
    <Row>
      <Col>
        <Card className="mt-4" sx={_SX.card}>
          <CardBody>
            <CardText>{words[counter].db.description}</CardText>
          </CardBody>
          <CardFooter className="p-0" sx={_SX.cardFooter}>
            <ul sx={_SX.sociaList}>
              {words[counter].db.social.map((social, i) => {
                return <DescNavItem social={social} i={i} />;
              })}
              <NextDef availableWords={availableWords} />
            </ul>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}
