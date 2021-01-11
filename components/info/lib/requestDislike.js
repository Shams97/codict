import axios from "axios";
import useNotifications from "../../../lib/pages/useNotifications";

/**
 * send dislike request
 * dislike : number of likes
 * word: {name: word name , order: position of word definition inside DB}
 */
const requestDislike = (word, order, fetchErrCtxState, setFetchErrCtxState) => {
  axios
    .put("/api/dislike", {
      data: { dislike: 1, word: { name: word, order } },
    })
    .then(() => {
      useNotifications("like", {
        data,
        error: undefined,
        fetchErrCtxState,
        setFetchErrCtxState,
        inComponent: false,
      });
    })
    .catch((error) => {
      if (error.hasOwnProperty("isAxiosError")) {
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
export default requestDislike;
