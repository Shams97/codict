/* eslint-disable react/prop-types */
/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import NextDef from "./NextDef";
import DescNavItem from "./DescNavItem";
import Quote from "./Quote";

const _SX = {
  card: {
    backgroundColor: "background",
    color: "text",
    borderColor: "highlight",
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
  const { counter, wordsCount } = availableWords;
  // value of word.is the same for all list of definitions
  const word = words[0].db.name;
  return (
    <Row>
      <Col className="mx-auto" xs="12" md="10" lg="8">
        <Card className="mt-4" sx={_SX.card}>
          <CardBody>
            <Quote words={words} counter={counter}>
              {words[counter].db.description}
            </Quote>
          </CardBody>
          <CardFooter className="p-0" sx={_SX.cardFooter}>
            <ul sx={_SX.sociaList}>
              {words[counter].db.social.map((social, i) => {
                return (
                  <DescNavItem
                    social={social}
                    order={counter}
                    word={word}
                    wordsCount={wordsCount}
                    key={i}
                  />
                );
              })}
              <NextDef availableWords={availableWords} />
            </ul>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}
