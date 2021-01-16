/* eslint-disable react/prop-types */
/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import AppNav from "./navbar/Navbar";
import { Container, Row, Col } from "reactstrap";
import Search from "./search/Search";
import CustomHead from "./Head";
import FetchError from "./notifications/FetchError";

const defaultKeywords = [
  "computer",
  "science",
  "software",
  "development",
  "CS",
  "python",
  "javascript",
  "linux",
];

export default function Layout({
  children,
  title,
  description,
  keywords = defaultKeywords,
  includeSearchInput = true,
  bluredBg = false,
}) {
  const _SX = {
    header: {
      height: "100px",
    },

    div: {
      width: "100%",
      filter: bluredBg && "blur(8px)",
    },
  };
  return (
    <div sx={_SX.div}>
      <header sx={_SX.header}>
        <CustomHead
          title={title}
          description={description}
          keywords={keywords}
        />
        <AppNav />
      </header>
      <main className="mt-4">
        <FetchError />
        <Container>
          <Row>
            {includeSearchInput && <Search />}
            <Col md="12 mt-4">{children}</Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
