/**@jsxRuntime classic */
/**@jsx jsx */
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { jsx } from "theme-ui";
import Layout from "../../components/layout/Layout";
import CustomStepper from "../../components/newForm/Stepper";
import NewFormCtx from "../../ctx/forms/new/newFormCTX";

// what to show while siging user in
const onRedirecting = () => {
  return (
    /**
     * TODO: Build a custom Redirecting Component to be used here and inside the Auth0Provider as well.
     */
    <div>
      <h1>Signing you in....</h1>
    </div>
  );
};

function Edit() {
  const router = useRouter();

  return (
    <Layout includeSearchInput={false}>
      <NewFormCtx>
        <CustomStepper edit={true} newWord={false} word={router.query.id} />
      </NewFormCtx>
    </Layout>
  );
}

export default withAuthenticationRequired(Edit, {
  onRedirecting,
});
