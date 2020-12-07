/**@jsxRuntime classic */
/**@jsx jsx */
import { useContext, useEffect } from "react";
import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import mockedWords from "../mock/words";
import { wordsCtx } from "../ctx/words/wordsCtx";

export default function WordPage({ word, options }) {
  const [_, spreadWords] = useContext(wordsCtx);
  useEffect(() => {
    spreadWords(options);
  }, []);
  return (
    <Layout
      title={word.seo.title}
      description={word.seo.description}
      keywords={word.seo.keywords}>
      <h1>{word.value}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = mockedWords.map((word) => {
    return {
      params: { id: word.seo.title },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const options = mockedWords;
  const word = mockedWords.find((term) => term.seo.title === params.id);
  console.log(word);
  return { props: { word, options }, revalidate: 1 };
}
