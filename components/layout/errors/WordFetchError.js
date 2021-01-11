/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Spinner } from "theme-ui";

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
      <h5>Problem While Fetching Data</h5>
      <Spinner size="25px" className="mx-1 pb-2" />
    </div>
  );
}
