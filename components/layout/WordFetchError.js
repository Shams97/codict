/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";

export default function WordFetchError() {
  return (
    <div
      className="mt-4 mx-auto text-center"
      sx={{
        backgroundColor: "background",
        color: "text",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        Could not Fetch Word You Were Looking For. Try to Refresh The Page.
      </div>
    </div>
  );
}
