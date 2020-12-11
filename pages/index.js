/**@jsxRuntime classic */
/**@jsx jsx */

import { useContext } from "react";
import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import { wordsCtx } from "../ctx/words/wordsCtx";
import { wordsArchive } from "../mock/words";
import useLabels from "../lib/useLabels";

export default function Home({ options }) {
  const [_, spreadWords] = useContext(wordsCtx);
  useLabels(options, spreadWords);
  return (
    <Layout
      title="codict"
      description="codict is developers' dictionary. if you come across a term in the entire field of computer science, have no clue what is it about. then you are in the right place">
      <p>Add new word</p>
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
