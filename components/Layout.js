/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "theme-ui";
import base from "../styles/theme";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import AppNav from "../components/Navbar";
import { Container, Row, Col } from "reactstrap";
import CreatableSelect, { components } from "react-select";
import { useContext } from "react";
import { wordsCtx } from "../ctx/words/wordsCtx";

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

const Option = ({ children, ...props }) => (
  <components.Option {...props}>{children}</components.Option>
);

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
    leftCol: {
      marginTop: "8rem",
      "@media(max-width: 767px)": {
        order: 3,
        padding: "1rem",
        margin: "auto",
        marginTop: "2rem",
      },
    },
    middleCol: {
      "@media(max-width: 767px)": {
        order: 1,
      },
    },
    rightCol: {
      marginTop: "8rem",
      "@media(max-width: 767px)": {
        order: 2,
        padding: "1rem",
        margin: "auto",
        marginTop: "2rem",
      },
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
              <Col md="3" sx={_SX.leftCol}>
                <LeftSide />
              </Col>
              <Col md="6" sx={_SX.middleCol}>
                <Container>
                  <Row>
                    <Col>
                      {title !== "about" && (
                        <CreatableSelect
                          id="1"
                          instanceId="1"
                          inputId="1"
                          name="words"
                          isClearable
                          isSearchable
                          components={{ Option }}
                          onChange={handleChange}
                          onInputChange={handleInputChange}
                          options={words}
                        />
                      )}
                    </Col>
                  </Row>
                  <Row>{children}</Row>
                </Container>
              </Col>
              <Col md="3" sx={_SX.rightCol}>
                <RightSide />
              </Col>
            </Row>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}
