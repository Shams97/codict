/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout/Layout";
import CustomStepper from "../components/newForm/Stepper";
import NewFormCtx from "../ctx/forms/new/newFormCTX";

export default function New({}) {
  return (
    <Layout noInput>
      <NewFormCtx>
        <CustomStepper />
      </NewFormCtx>
    </Layout>
  );
}
