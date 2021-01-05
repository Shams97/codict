/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import Head from "next/head";
import { useRouter } from "next/router";
import AppNav from "../navbar/Navbar";
import { Container, Row, Col } from "reactstrap";
import CreatableSelect from "react-select";
import { useContext } from "react";
import { wordsCtx } from "../../ctx/words/wordsCtx";
import Menu from "./Menu";
import Option from "./Option";
import NoOptionsMessage from "./NoOptionMessage";
import ThemeUICTX from "../../ctx/themes/ThemeUI-Ctx";
import MaterialUICTX from "../../ctx/themes/MateriaUI-Ctx";

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
const _SX = {
  header: {
    height: "100px",
  },
  grid: {
    height: "100%",
    gridTemplateColumns: "25% 50% 25%",
    gridGap: 0,
  },
  div: {
    width: "100%",
  },
};
export default function Layout({
  children,
  title,
  description,
  keywords = defaultKeywords,
  includeSearchInput = true,
}) {
  const router = useRouter();
  const [words, _] = useContext(wordsCtx);

  const handleChange = (inputValue, { action }) => {
    // on user selection
    // use next router here to navigate to selected word page
    inputValue !== null && router.replace(`/${inputValue.value}`);
  };
  const handleInputChange = (inputValue, actionMeta) => {
    //  on user typing
  };

  return (
    <div sx={_SX.div}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* Twitter */}
        <meta name="twitter:card" content={description} key="twcard" />
        <meta name="twitter:creator" content="codict" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={"https://www.codict.io"} key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="codict" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <ThemeUICTX>
        <MaterialUICTX>
          <header sx={_SX.header}>
            <AppNav />
          </header>
          <main>
            <Container>
              {/* app page without react-select input */}
              {!includeSearchInput ? (
                <Row>
                  <Col md="12 mt-4">{children}</Col>
                </Row>
              ) : (
                <Row>
                  {/* app page with react-select */}
                  <Col xs="12" md="8" className="mx-auto my-4">
                    <CreatableSelect
                      id="1"
                      instanceId="1"
                      inputId="1"
                      name="words"
                      isClearable
                      isSearchable
                      components={{ Option, Menu, NoOptionsMessage }}
                      onChange={handleChange}
                      onInputChange={handleInputChange}
                      options={words}
                      placeholder="Search"
                    />
                  </Col>
                  <Col md="12 mt-4">{children}</Col>
                </Row>
              )}
            </Container>
          </main>
        </MaterialUICTX>
      </ThemeUICTX>
    </div>
  );
}
