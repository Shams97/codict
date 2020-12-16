import "bootstrap/dist/css/bootstrap.min.css";
import WordsProvider from "../ctx/words/wordsCtx";
import {
  faMicrophoneAlt,
  faCaretLeft,
  faCaretRight,
  faThumbsUp,
  faHeartBroken,
  faEdit,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faSwimmingPool,
  faLink,
  faBook,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { faJs, faLinux } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faMicrophoneAlt,
  faCaretLeft,
  faCaretRight,
  faThumbsUp,
  faHeartBroken,
  faEdit,
  faJs,
  faLinux,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faSwimmingPool,
  faLink,
  faBook,
  faVideo
);

function MyApp({ Component, pageProps }) {
  return (
    <WordsProvider>
      <Component {...pageProps} />
    </WordsProvider>
  );
}

export default MyApp;
