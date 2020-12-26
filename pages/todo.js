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
              fix final data collected inside context for the{" "}
              <code>usedIn</code> <b>when all data is selected</b>. See why next
              button is not enabled
            </li>
            <li>
              fix UI bug when <b>none</b> is selected the check button must be
              present on the UI
            </li>
            <li>
              fix UI bug when <b>all</b> is selected the check button{" "}
              <b>MUST</b> not appear on none
            </li>
            <li>build update word form page (identical to new form)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
