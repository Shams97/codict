/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";

const _SX = {
  socialItem: {
    backgroundColor: "background",
    color: "text",
    ":hover": {
      cursor: "pointer",
    },
  },
  name: {
    color: "text",
    fontWeight: "bold",
    fontSize: "14px",
    ":hover": {
      color: "secondary",
    },
  },
};
export default function CreatedBy({ username }) {
  return (
    <cite className="ml-auto" sx={_SX.socialItem}>
      <span sx={_SX.name}>@{username}</span>
    </cite>
  );
}
