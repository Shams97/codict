/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { useContext, useState } from "react";
import Layout from "../components/layout/Layout";
import { wordsCtx } from "../ctx/words/wordsCtx";
import useLabels from "../lib/pages/useLabels";
import { Col, Container, Row } from "reactstrap";
import Sound from "../components/info/Sound";
import Description from "../components/info/Description";
import InfoTable from "../components/info/Table";
import Lists from "../components/info/ArticleLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Synonyms from "../components/info/Synonyms";
const _SX = {
  header: {
    display: "flex",
    alignItems: "center",
    margin: "5rem 0 1rem 0",
    justifyContent: "center",
  },
};

export default function WordPage({ words, options }) {
  const [_, spreadWords] = useContext(wordsCtx);
  // counter should always star at 1, this where rendered words data start off
  const [counter, setCounter] = useState(0);
  useLabels(options, spreadWords);

  return (
    <Layout>
      <Container>
        <Row>
          {/* temporary page TODO list */}
          <div
            sx={{
              position: "fixed",
              bottom: "0",
              right: "0",
              border: "1px solid",
            }}
          >
            <ul>
              <li>page is not protected</li>
              <li>
                page is pre-built using <code>getStaticPaths</code> then{" "}
                <code>getStaticProps</code>
              </li>
            </ul>
          </div>
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
            }}
          >
            <InfoTable words={words} counter={counter} />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto mt-4 col-12">
            <div sx={_SX.header}>
              <FontAwesomeIcon icon="swimming-pool" width={50} height={50} />
              <h2 className="ml-3">Dive Deeper:</h2>
            </div>
            <Row>
              <Col>
                <Lists words={words} counter={counter} links />
              </Col>
              <Col>
                <Lists words={words} counter={counter} videos />
              </Col>
              <Col>
                <Lists words={words} counter={counter} books />
              </Col>
            </Row>

            <Row className="my-4">
              <Synonyms words={words} counter={counter} />
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  //fetch words from DB
  const res = await fetch("http://localhost:3000/api/archive");
  const json = await res.json();
  const paths = json.data.map((entry) => {
    return {
      params: { id: entry.value },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch words from DB
  const listRes = await fetch("http://localhost:3000/api/archive");
  const ListJson = await listRes.json();

  // fetch pages based on words available at DB
  const wordsRes = await fetch(`http://localhost:3000/api/${params.id}`);
  const wordsJson = await wordsRes.json();

  return {
    props: {
      words: wordsJson.formated,
      options: ListJson.data,
    },
    revalidate: 1,
  };
}
