/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { Col } from "reactstrap";
import { Fragment } from "react";

export default function Synonyms({ words, counter }) {
  return (
    <Fragment>
      <Col xs="12">
        <h5>Synonyms:</h5>
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
            justifyContent: "space-between",
          }}>
          {words[counter].db.synonyms.map((term, i) => {
            return (
              <li
                className="my-1"
                key={i}
                sx={{
                  display: "inline-block",
                  fontSize: "14px",
                  ":hover": {
                    cursor: "pointer",
                    color: "highlight",
                  },
                  padding: "5px",
                }}>
                {term}
              </li>
            );
          })}
        </ul>
      </Col>
    </Fragment>
  );
}
