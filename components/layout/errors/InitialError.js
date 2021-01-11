/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";

export default function InitialError({ message }) {
  return (
    <div
      sx={{
        zIndex: "2000",
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        backgroundColor: "text",
        color: "background",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{message}</div>
    </div>
  );
}
