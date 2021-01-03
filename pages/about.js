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
        </ul>
      </div>
      <Text as="h1">Why?</Text>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
        lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at
        nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero,
        at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus
        bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras
        pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum
        metus, non dictum mauris. Nulla at tellus sagittis, viverra est a,
        bibendum metus.
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
