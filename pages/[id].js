/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { useContext, useState } from "react";
import Layout from "../components/layout/Layout";
import mockedWords, { wordsArchive } from "../mock/words";
import { wordsCtx } from "../ctx/words/wordsCtx";
import useLabels from "../lib/useLabels";
import { Col, Container, Row } from "reactstrap";
import Sound from "../components/info/Sound";
import Description from "../components/info/Description";
import InfoTable from "../components/info/Table";
import Lists from "../components/info/ArticleLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const _SX = {
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
  },
};

export default function WordPage({ words, options }) {
  const [_, spreadWords] = useContext(wordsCtx);
  const [counter, setCounter] = useState(1);

  useLabels(options, spreadWords);

  return (
    <Layout>
      <Container>
        <Row>
          <Col className="mx-auto" xs="12" md="7" lg="8">
            <Sound
              sound={words[counter].db.sound}
              name={words[counter].db.name}
            />
            <Description
              words={words}
              availableWords={{
                counter,
                setCounter,
                wordsCount: words.length - 1,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col
            md="8"
            className="mx-auto"
            lg="6"
            sx={{
              marginTop: "4rem",
            }}>
            <InfoTable words={words} counter={counter} />
          </Col>
        </Row>
        <Row>
          <Col md="8" lg="6" className="mx-auto mt-4">
            <div sx={_SX.header}>
              <FontAwesomeIcon icon="swimming-pool" width={50} height={50} />
              <h2 className="ml-3">Dive Deeper:</h2>
            </div>
            <Lists words={words} counter={counter} links />
            <Lists words={words} counter={counter} videos />
            <Lists words={words} counter={counter} books />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = wordsArchive.map((word) => {
    return {
      params: { id: word.label },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const options = wordsArchive;
  const words = mockedWords;

  return { props: { words, options }, revalidate: 1 };
}
