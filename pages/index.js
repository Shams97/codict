/**@jsxRuntime classic */
/**@jsx jsx */

import { useContext } from "react";
import { jsx } from "theme-ui";
import Layout from "../components/layout/Layout";
import { wordsCtx } from "../ctx/words/wordsCtx";
import useLabels from "../lib/pages/useLabels";
import { Col, Container, Row } from "reactstrap";
import CustomCard from "../components/landing/NumbersCard";
import WhyCard from "../components/landing/WhyCard";
import SuppotrCard from "../components/landing/SupportCard";
const _SX = {
  root: {
    marginTop: "5rem",
    "@media(max-width: 35rem):": {
      marginTop: "1rem",
    },
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
};
export default function Home({ options }) {
  const [_, spreadWords] = useContext(wordsCtx);

  useLabels(options, spreadWords);

  return (
    <Layout
      title="codict"
      keywords="codict, computer, science, terms, software, development, web, development, software engineering, words"
      description="Code dictionary or, codict, is a place where Computer Science and Computer Engineering technical terms and terminology live. If while you learn something, and come across some term/word that makes no sense to you, use codict search box to find out about."
    >
      {/* children of layout */}
      <Container sx={_SX.row}>
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
              cards are fetched from client side using <code>AJAX</code>
            </li>
            <li>
              page words is rendered and supplied into <code>wordsCtx</code>{" "}
              upon rendering using <code>getStaticProps</code>
            </li>
          </ul>
        </div>
        <Row className="text-center" sx={_SX.row}>
          <Col sm="12 my-4" md="4">
            <CustomCard />
          </Col>
          <Col sm="12 my-4" md="4">
            <WhyCard />
          </Col>
          <Col sm="12 my-4" md="4">
            <SuppotrCard />
          </Col>
        </Row>
      </Container>
      {/* children of layout */}
    </Layout>
  );
}

export async function getStaticProps() {
  //fetch words from DB
  const res = await fetch("http://localhost:3000/api/archive");
  const json = await res.json();
  return {
    props: {
      options: json.data,
    },
    revalidate: 1,
  };
}
