/**@jsxRuntime classic */
/**@jsx jsx */
import { useRouter } from "next/router";
import { jsx } from "theme-ui";
import Layout from "../../components/layout/Layout";
import CustomStepper from "../../components/newForm/Stepper";
import NewFormCtx from "../../ctx/forms/newFormCTX";
import { useSession } from "next-auth/client";
import AccessDenied from "../../components/auth/AccessDenied";

function Edit() {
  const router = useRouter();
  const [session, loading] = useSession();
  if (loading) return null;

  if (!loading && !session) {
    return (
      <Layout includeSearchInput={false}>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <Layout includeSearchInput={false}>
      <NewFormCtx>
        <CustomStepper edit={true} newWord={false} word={router.query.id} />
      </NewFormCtx>
    </Layout>
  );
}

export default Edit;
