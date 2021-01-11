/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { useContext, useEffect, useState } from "react";
import { fetchErr } from "../../../ctx/notification/FetchErrCtx";
import { Spinner } from "reactstrap";

const _SX = {
  root: {
    zIndex: "3000",
    position: "fixed",
    right: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.4rem",
    backgroundColor: "red",
    borderRadius: "5px",
    fontSize: "13px",
  },
  message: {
    fontWeight: "bold",
    color: "text",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function FetchErrorNotification() {
  const [fetchErrCtxState, _] = useContext(fetchErr);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (fetchErrCtxState.size > 0) {
      !render && setRender(true);
    } else {
      render && setRender(false);
    }
  }, [fetchErrCtxState]);

  if (render) {
    return (
      <div className="m-4" sx={_SX.root}>
        <div sx={_SX.message}>Something is wrong</div>
        <Spinner className="mx-2" size="sm" />
      </div>
    );
  } else {
    return null;
  }
}
