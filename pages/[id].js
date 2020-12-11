/**@jsxRuntime classic */
/**@jsx jsx */
import { useContext, useState } from "react";
import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import mockedWords, { wordsArchive } from "../mock/words";
import { wordsCtx } from "../ctx/words/wordsCtx";
import useLabels from "../lib/useLabels";
import { Col, Container, Row } from "reactstrap";
import Sound from "../components/info/Sound";
import Description from "../components/info/Description";

export default function WordPage({ words, options }) {
  const [_, spreadWords] = useContext(wordsCtx);
  const [counter, setCounter] = useState(1);
  useLabels(options, spreadWords);

  return (
    <Layout>
      <Container>
        <Row>
          <Col md="6 mx-auto">
            <Sound
              sound={words[counter].db.sound}
              name={words[counter].db.name}
            />
            <Description
              words={words}
              availableWords={{ counter, setCounter }}
            />
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
