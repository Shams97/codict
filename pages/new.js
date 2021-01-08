/**@jsxRuntime classic */
/**@jsx jsx */
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { jsx } from "theme-ui";
import Layout from "../components/layout/Layout";
import CustomStepper from "../components/newForm/Stepper";
import NewFormCtx from "../ctx/forms/new/newFormCTX";
function New({}) {
  return (
    <Layout includeSearchInput={false}>
      <NewFormCtx>
        <CustomStepper newWord={true} edit={false} />
      </NewFormCtx>
    </Layout>
  );
}

export default withAuthenticationRequired(New);
