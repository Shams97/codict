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
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faLinux,
  faJava,
  faNodeJs,
  faJenkins,
  faJoomla,
  faCss3Alt,
  faAngular,
  faSass,
  faRaspberryPi,
  faMagento,
  faLaravel,
  faBootstrap,
  faWordpressSimple,
  faReact,
  faLess,
  faPython,
  faGulp,
  faGrunt,
  faHtml5,
  faLinode,
  faUbuntu,
  faPhp,
  faSwift,
  faRust,
  faRedhat,
  faSuse,
  faFedora,
  faCentos,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faCheck,
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
  faVideo,
  faJava,
  faNodeJs,
  faJenkins,
  faJoomla,
  faCss3Alt,
  faAngular,
  faSass,
  faRaspberryPi,
  faMagento,
  faLaravel,
  faBootstrap,
  faWordpressSimple,
  faReact,
  faLess,
  faPython,
  faGulp,
  faGrunt,
  faHtml5,
  faLinode,
  faUbuntu,
  faPhp,
  faSwift,
  faRust,
  faUbuntu,
  faRedhat,
  faSuse,
  faFedora,
  faCentos,
  faWindows
);

function MyApp({ Component, pageProps }) {
  return (
    <WordsProvider>
      <Component {...pageProps} />
    </WordsProvider>
  );
}

export default MyApp;
