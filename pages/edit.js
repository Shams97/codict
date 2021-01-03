/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout/Layout";
import CustomStepper from "../components/newForm/Stepper";
import NewFormCtx from "../ctx/forms/new/newFormCTX";
export default function Edit({}) {
  return (
    <Layout includeSearchInput={false}>
      <NewFormCtx>
        {/* temporary page TODO list */}
        <div
          sx={{
            position: "fixed",
            bottom: "0",
            right: "0",
            border: "1px solid",
          }}
        >
          <ul>
            <li>
              page is <b>protected</b>
            </li>
            <li>
              page is static and uses <code>AJAX</code> to send user collected
              data
            </li>
          </ul>
        </div>
        <CustomStepper edit />
      </NewFormCtx>
    </Layout>
  );
}
