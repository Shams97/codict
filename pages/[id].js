/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import Layout from "../components/layout/Layout";
import { Container } from "reactstrap";
import Description from "../components/info/Description";
import InfoTable from "../components/info/Table";
import Synonyms from "../components/info/Synonyms";
import LinksGroup from "../components/info/links/LinksGroup";
import { useRouter } from "next/router";
import useSWR from "swr";
import OptimisticDescription from "../components/optimistic/Description";
import OptimisticTable from "../components/optimistic/Table";
import WordFetchError from "../components/layout/errors/WordFetchError";
import { object } from "joi";

const _SX = {
  header: {
    display: "flex",
    alignItems: "center",
    margin: "5rem 0 1rem 0",
    justifyContent: "center",
  },
};

export default function WordPage() {
  const [initialError, setInitialError] = useState({
    isError: false,
    message: "",
  });
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  /************************************************
   ************************************************
   ******** FETCH WORD DATA FROM API/DB************
   ************************************************
   ************************************************
   */
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    router.query.id ? `/api/${router.query.id}` : null,
    fetcher
  );

  if (error || (data && data.formated === null)) {
    return (
      <Layout title="codict" description="codict">
        <Container>
          <WordFetchError />
        </Container>
      </Layout>
    );
  } else if (data) {
    let title, description, keywords, words;

    ({ title, description, keywords } = data.formated[0].seo);

    words = data.formated.sort((a, b) => {
      return b.db.social[0].count - a.db.social[0].count;
    });

    return (
      <Layout
        title={data ? title : "codict"}
        description={data ? description : "codict"}
        keywords={data ? keywords : ["codict"]}
      >
        <Container>
          <Description
            words={words}
            availableWords={{
              counter,
              setCounter,
              wordsCount: words.length - 1,
            }}
          />

          <Fragment>
            <InfoTable words={words} counter={counter} />
            <Synonyms words={words} counter={counter} />
            <LinksGroup words={words} counter={counter} />
          </Fragment>
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout title={"codict"} description={"codict"} keywords={["codict"]}>
        <Container>
          <OptimisticDescription />

          <OptimisticTable />
        </Container>
      </Layout>
    );
  }
}
