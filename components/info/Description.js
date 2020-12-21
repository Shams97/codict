/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import NextDef from "../info/NextDef";
import DescNavItem from "../info/DescNavItem";
<<<<<<< HEAD
import { Fragment } from "react";

=======
import Quote from "../info/Quote";
>>>>>>> 7db3f380a149de84ab99e0ec5b4fa0264cff83b4
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
  const { counter } = availableWords;
  return (
<<<<<<< HEAD
    <Fragment>
      <Row>
        <Col className="p-0">
          <Card className="mt-4" sx={_SX.card}>
            <CardBody>
              <CardText>{words[counter].db.description}</CardText>
            </CardBody>
            <CardFooter className="p-0" sx={_SX.cardFooter}>
              <ul sx={_SX.sociaList}>
                {words[counter].db.social.map((social, i) => {
                  return <DescNavItem social={social} i={i} key={i} />;
                })}

                <NextDef
                  availableWords={{
                    ...availableWords,
                    wordsCount: words.length - 1,
                    words,
                  }}
                />
              </ul>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <Row className="flex-column">
        <Col>
          <div
            sx={{
              width: "100%",
              marginTop: "2rem",
              overflowY: "hidden",
              overflowX: "scroll",
              "::-webkit-scrollbar": {
                height: "5px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "transparent",
                borderRadius: "10px",
              },
              "::-webkit-scrollbar-thumb:hover": {
                background: "highlight",
              },
              "&:hover::-webkit-scrollbar-thumb": {
                background: "highlight",
              },
            }}
          >
            {new Array(20).fill(1).map((item, i) => {
              return (
                <span
                  sx={{
                    padding: "1rem",
                    color: "black",
                    margin: "0 1rem",
                    borderRadius: "10px",
                    backgroundColor: "white",
                  }}
                  key={i}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </Col>
        <Col>2</Col>
      </Row>
    </Fragment>
=======
    <Row>
      <Col>
        <Card className="mt-4" sx={_SX.card}>
          <CardBody>
            <Quote words={words} counter={counter}>
              {words[counter].db.description}
            </Quote>
          </CardBody>
          <CardFooter className="p-0" sx={_SX.cardFooter}>
            <ul sx={_SX.sociaList}>
              {words[counter].db.social.map((social, i) => {
                return <DescNavItem social={social} key={i} />;
              })}
              <NextDef availableWords={availableWords} />
            </ul>
          </CardFooter>
        </Card>
      </Col>
    </Row>
>>>>>>> 7db3f380a149de84ab99e0ec5b4fa0264cff83b4
  );
}
