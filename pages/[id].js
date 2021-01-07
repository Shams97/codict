/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import Layout from "../components/layout/Layout";
import { Container } from "reactstrap";
import Description from "../components/info/Description";
import InfoTable from "../components/info/Table";
import Synonyms from "../components/info/Synonyms";
import InitialError from "../components/layout/InitialError";
import LinksGroup from "../components/info/links/LinksGroup";
import { useRouter } from "next/router";
import useSWR from "swr";
import OptimisticDescription from "../components/optimistic/Description";
import OptimisticTable from "../components/optimistic/Table";

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

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    router.query.id ? `/api/${router.query.id}` : null,
    fetcher
  );
  if (error) {
    setInitialError({
      isError: true,
      message: "Something Went Wrong...Refresh the page.",
    });
  } else {
    let title, description, keywords, words;
    if (data) {
      ({ title, description, keywords } = data.formated[0].seo);

      words = data.formated.sort((a, b) => {
        return b.db.social[0].count - a.db.social[0].count;
      });
    }

    return (
      <Layout
        title={data ? "codict" : title}
        description={data ? "codict" : description}
        keywords={data ? "codict" : keywords}
      >
        <Container>
          {/* if error fetching word data display initial error component */}
          {initialError.isError && <InitialError message={initialError} />}

          {!data ? (
            <OptimisticDescription />
          ) : (
            <Description
              words={words}
              availableWords={{
                counter,
                setCounter,
                wordsCount: words.length - 1,
              }}
            />
          )}
          {data ? (
            <Fragment>
              <InfoTable words={words} counter={counter} />
              <Synonyms words={words} counter={counter} />
              <LinksGroup words={words} counter={counter} />
            </Fragment>
          ) : (
            <OptimisticTable />
          )}
        </Container>
      </Layout>
    );
  }
}
