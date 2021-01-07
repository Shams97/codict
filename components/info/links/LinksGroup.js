/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { Row, Col } from "reactstrap";
import Lists from "./Lists";

export default function LinksGroup({ words, counter }) {
  return (
    <Row className="mb-4">
      <Col className="mx-auto mt-4 col-8">
        {words[counter].db.articlesLinks.length > 0 && (
          <Lists words={words} counter={counter} links />
        )}

        {words[counter].db.videosLinks.length > 0 && (
          <Lists words={words} counter={counter} videos />
        )}

        {words[counter].db.booksLinks.length > 0 && (
          <Lists words={words} counter={counter} books />
        )}
      </Col>
    </Row>
  );
}
