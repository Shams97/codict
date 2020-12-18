/**@jsxRuntime classic */
/**@jsx jsx */

import { useContext } from "react";
import { jsx } from "theme-ui";
import Layout from "../components/layout/Layout";
import { wordsCtx } from "../ctx/words/wordsCtx";
import { wordsArchive } from "../mock/words";
import useLabels from "../lib/useLabels";
import { Col, Container, Row } from "reactstrap";
import CustomCard from "../components/landing/NumbersCard";
import WhyCard from "../components/landing/WhyCard";
import SuppotrCard from "../components/landing/SupportCard";

export default function Home({ options }) {
  const [_, spreadWords] = useContext(wordsCtx);
  useLabels(options, spreadWords);
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
  return (
    <Layout
      title="codict"
      description="codict is developers' dictionary. if you come across a term in the entire field of computer science, have no clue what is it about. then you are in the right place">
      <Container sx={_SX.row}>
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
    </Layout>
  );
}

export function getStaticProps() {
  const options = wordsArchive;
  return {
    props: {
      options,
    },
    revalidate: 1,
  };
}
