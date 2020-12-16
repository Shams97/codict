/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "theme-ui";
import base from "../../styles/theme";
import AppNav from "../navbar/Navbar";
import { Container, Row, Col } from "reactstrap";
import CreatableSelect from "react-select";
import { useContext } from "react";
import { wordsCtx } from "../../ctx/words/wordsCtx";
import Menu from "./Menu";
import Option from "./Option";

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
}) {
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
  const router = useRouter();
  const [words, _] = useContext(wordsCtx);

  const handleChange = (inputValue, { action }) => {
    // on user selection
    // use next router here to navigate to selected word page
    inputValue !== null && router.replace(`/${inputValue.label}`);
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
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={"https://www.codict.io"} key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="codict" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <ThemeProvider theme={base}>
        <header sx={_SX.header}>
          <AppNav />
        </header>
        <main>
          <Container>
            <Row>
              <Col xs="12" md="8" className="mx-auto my-4">
                {title !== "about" && (
                  <CreatableSelect
                    id="1"
                    instanceId="1"
                    inputId="1"
                    name="words"
                    isClearable
                    isSearchable
                    components={{ Option, Menu }}
                    onChange={handleChange}
                    onInputChange={handleInputChange}
                    options={words}
                  />
                )}
              </Col>
              <Col md="12 mt-4">{children}</Col>
            </Row>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}
