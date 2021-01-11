import "bootstrap/dist/css/bootstrap.min.css";
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
import ThemeUICTX from "../ctx/themes/ThemeUI-Ctx";
import MaterialUICTX from "../ctx/themes/MateriaUI-Ctx";
import FetchErrCtx from "../ctx/notification/FetchErrCtx";
import { Provider } from "next-auth/client";

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

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeUICTX>
      <MaterialUICTX>
        <FetchErrCtx>
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        </FetchErrCtx>
      </MaterialUICTX>
    </ThemeUICTX>
  );
}
