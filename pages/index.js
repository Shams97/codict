/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import Layout from "../components/layout/Layout";
import { Container, Row } from "reactstrap";
import NumbersCard from "../components/landing/NumbersCard";
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
export default function Home() {
  return (
    <Layout
      title="codict"
      description="Code dictionary or, codict, is a place where Computer Science and Computer Engineering technical terms and terminology live. If while you learn something, and come across some term/word that makes no sense to you, use codict search box to find out about."
    >
      {/* children of layout */}
      <Container sx={_SX.row}>
        <Row className="text-center" sx={_SX.row}>
          <NumbersCard />
          <WhyCard />
          <SuppotrCard />
        </Row>
      </Container>
      {/* children of layout */}
    </Layout>
  );
}
