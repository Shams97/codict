import { useEffect } from "react";

/**
 *
 * @param {*} src
 * @param {*} context
 *
 * Updates a global context with existing network fetch errors.
 * if errors exist, a warning indicator is displayed in the UI. the function either runs
 * as a custom hook inisde functional components, or inisde regular functions
 * that implement network requests.
 */
export default function useNotifications(src, context) {
  const {
    data,
    error,
    fetchErrCtxState,
    setFetchErrCtxState,
    inComponent = true,
  } = context;

  if (inComponent) {
    useEffect(() => {
      if (error) {
        if (!fetchErrCtxState.has(src)) {
          setFetchErrCtxState((prev) => {
            let set = new Set(prev);
            set.add(src);
            return set;
          });
        }
      } else if (data) {
        setFetchErrCtxState((prev) => {
          let set = new Set(prev);
          if (set.has(src)) {
            set.delete(src);
            return set;
          } else return prev;
        });
      }
    }, [data, error]);
  } else {
    if (error) {
      if (!fetchErrCtxState.has(src)) {
        setFetchErrCtxState((prev) => {
          let set = new Set(prev);
          set.add(src);
          return set;
        });
      }
    } else if (data) {
      setFetchErrCtxState((prev) => {
        let set = new Set(prev);
        if (set.has(src)) {
          set.delete(src);
          return set;
        } else return prev;
      });
    }
  }
}
