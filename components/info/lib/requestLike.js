import axios from "axios";
import useNotifications from "../../../lib/pages/useNotifications";

/**
 * like : number of likes
 * word: {name: word name , order: position of word definition inside DB}
 */
const requestLike = (word, order, fetchErrCtxState, setFetchErrCtxState) => {
  axios
    .put("/api/like", {
      data: { like: 1, word: { name: word, order } },
    })
    .then((res) => {
      useNotifications("like", {
        data: res.data.ok,
        error: undefined,
        fetchErrCtxState,
        setFetchErrCtxState,
        inComponent: false,
      });
    })
    .catch((error) => {
      if (error.isAxiosError) {
        useNotifications("like", {
          data: undefined,
          error,
          fetchErrCtxState,
          setFetchErrCtxState,
          inComponent: false,
        });
      }
    });
};
export default requestLike;
