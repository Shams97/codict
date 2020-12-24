import { Container } from "@material-ui/core";
import { Col, Row } from "reactstrap";

export default function todo() {
  return (
    <Container>
      <Row>
        <Col className="mx-auto">
          <h1>TODO:</h1>
          <ul>
            <li>
              Add to <code>usedIn</code> of the new word form the ability of
              user can pick{" "}
              <i>
                <b>all options</b>
              </i>{" "}
              or{" "}
              <i>
                <b>none</b>
              </i>{" "}
              alongside multiple options
            </li>
            <li>build update word form page (identical to new form)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
