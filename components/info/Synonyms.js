/* eslint-disable react/prop-types */
/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { Col, Row } from "reactstrap";
import { Fragment } from "react";

export default function Synonyms({ words, counter }) {
  if (words[counter].db.synonyms.length > 0) {
    return (
      <Fragment>
        <Row className="my-4 col-8 mx-auto">
          <Col xs="12">
            <h5 className="mt-4">Synonyms:</h5>
          </Col>
          <Col xs="12">
            <ul
              sx={{
                listStyle: "none",
                display: "flex",
                "@media(max-width: 678px)": {
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                justifyContent: "center",
              }}
            >
              {words[counter].db.synonyms.map((term, i) => {
                return (
                  <li
                    className="my-1 mx-3 px-3 py-1"
                    sx={{
                      border: "1px solid",
                      borderColor: "text",
                      borderRadius: "10px",
                      ":hover": {
                        backgroundColor: "highlight",
                        cursor: "pointer",
                      },
                    }}
                    key={i}
                  >
                    {term}
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Fragment>
    );
  } else {
    return null;
  }
}
