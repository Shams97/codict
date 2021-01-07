/**@jsxRuntime classic */
/**@jsx jsx */
import { Col, Row } from "reactstrap";
import { jsx, Text } from "theme-ui";
import SuppotrCard from "../components/landing/SupportCard";
import Layout from "../components/layout/Layout";
export default function About() {
  return (
    <Layout
      title="About"
      keywords="codict, computer, science, terms, software, development, web, development, software engineering, words"
      description="Code dictionary or, codict, is a place where Computer Science and Computer Engineering technical terms and terminology live. If while you learn something, and come across some term/word that makes no sense to you, use codict search box to find out about."
      includeSearchInput={false}
    >
      <Text as="h1">Why?</Text>
      <Text as="p" className="mt-4">
        Welcome to codict <sup>&reg;</sup> world. Have you ever been reading or
        learning something new, like a new technology, or simply, just the new
        Javascript framework everybody is talking about? We all do!!. this is
        how we live as computer programmers of all kinds. What really used to be
        annoying to me, as i was learning is, an article author for example,
        mentions something that looks compeletly new to me. Something that makes
        me feel i know nothing!!. Reality is, as you are learning and come
        across such things, you don't need to pause the entire universe and go
        learn that little annoying thing, as this could be recursively infinite
        and when you may face another unknown term as you go. Hence, from my
        experience, all you rally need to do, is to get a rough idea about that
        myestirous thing and continue your learning journey. Codict{" "}
        <sup>&reg;</sup> comes to rescue. With the help of the community, you
        will find curated definitions and brief introductions to to whatever
        term you might face as you learn.
      </Text>
      <Row
        className="text-center"
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Col sm="12 my-4" md="4">
          <SuppotrCard />
        </Col>
      </Row>
      <footer className="text-center mx-auto mt-4">
        codict with love{" "}
        <a href="https://twitter.com/gist32091948">@gistcodee</a>
      </footer>
    </Layout>
  );
}
