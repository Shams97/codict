/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout/Layout";
import CustomStepper from "../components/newForm/Stepper";
import NewFormCtx from "../ctx/forms/new/newFormCTX";
export default function Edit() {
  return (
    <Layout includeSearchInput={false}>
      <NewFormCtx>
        <CustomStepper edit={true} newWord={false} />
      </NewFormCtx>
    </Layout>
  );
}
