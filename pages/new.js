/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout/Layout";
import CustomStepper from "../components/newForm/Stepper";
import NewFormCtx from "../ctx/forms/new/newFormCTX";

export default function New({}) {
  return (
    <Layout includeSearchInput={false}>
      <NewFormCtx>
        <CustomStepper newWord={true} edit={false} />
      </NewFormCtx>
    </Layout>
  );
}
