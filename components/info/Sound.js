import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "reactstrap";
import { Text } from "theme-ui";
export default function Sound({ sound = "", name }) {
  if (sound.length >= 1) {
    return (
      <Row>
        <Col>
          <div>
            <FontAwesomeIcon
              icon="microphone-alt"
              width="25px"
              height="25px"
              className="mr-2"
            />
            :
            <Text as="span" className="mx-2">
              {sound.length >= 1 ? sound : name}
            </Text>
          </div>
        </Col>
      </Row>
    );
  }
}
