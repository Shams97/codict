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

<<<<<<< HEAD:components/Layout.js
const Option = ({ children, ...props }) => {
  const themeUiCtx = useThemeUI();
  const { colorMode } = themeUiCtx;

  return (
    <components.Option
      {...props}
      sx={{
        backgroundColor: "background",
        color: "text",
        borderRadius: "3px",
        ":hover": {
          backgroundColor: colorMode === "light" ? "muted" : "text",
          color: colorMode === "light" ? "text" : "background",
        },
      }}
    >
      {children}
    </components.Option>
  );
};

const Menu = ({ children, ...props }) => {
  return (
    <components.Menu
      {...props}
      sx={{
        backgroundColor: "background",
        borderColor: "text",
        border: "1px solid",
        borderRadius: "5px",
        padding: "0 5px",
      }}
    >
      {children}
    </components.Menu>
  );
};

=======
>>>>>>> 7db3f380a149de84ab99e0ec5b4fa0264cff83b4:components/layout/Layout.js
export default function Layout({
  children,
  title,
  description,
  keywords = defaultKeywords,
  noInput = false,
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
<<<<<<< HEAD:components/Layout.js
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
              <Col xs="12" className="mt-4">
                {children}
              </Col>
            </Row>
          </Container>
        </main>
      </ThemeProvider>
=======
      <ThemeUICTX>
        <MaterialUICTX>
          <header sx={_SX.header}>
            <AppNav />
          </header>
          <main>
            <Container>
              {noInput ? (
                <Row>
                  <Col md="12 mt-4">{children}</Col>
                </Row>
              ) : (
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
                        components={{ Option, Menu, NoOptionsMessage }}
                        onChange={handleChange}
                        onInputChange={handleInputChange}
                        options={words}
                      />
                    )}
                  </Col>

                  <Col md="12 mt-4">{children}</Col>
                </Row>
              )}
            </Container>
          </main>
        </MaterialUICTX>
      </ThemeUICTX>
>>>>>>> 7db3f380a149de84ab99e0ec5b4fa0264cff83b4:components/layout/Layout.js
    </div>
  );
}
