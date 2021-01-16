/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import Layout from "../components/layout/Layout";
import CustomStepper from "../components/form/Stepper";
import NewFormCtx from "../ctx/forms/newFormCTX";
import { useSession } from "next-auth/client";
import AccessDenied from "../components/auth/AccessDenied";

function New() {
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
        <CustomStepper newWord={true} edit={false} />
      </NewFormCtx>
    </Layout>
  );
}

export default New;
