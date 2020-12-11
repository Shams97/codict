import "bootstrap/dist/css/bootstrap.min.css";
import WordsProvider from "../ctx/words/wordsCtx";
import {
  faMicrophoneAlt,
  faCaretLeft,
  faCaretRight,
  faThumbsUp,
  faHeartBroken,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faMicrophoneAlt,
  faCaretLeft,
  faCaretRight,
  faThumbsUp,
  faHeartBroken,
  faEdit
);

function MyApp({ Component, pageProps }) {
  return (
    <WordsProvider>
      <Component {...pageProps} />
    </WordsProvider>
  );
}

export default MyApp;
