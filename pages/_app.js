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
import { Auth0Provider } from "@auth0/auth0-react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // where to redirect user after login
  const onRedirectCallback = (appState) => {
    console.log(appState);
    if (appState) {
      router.push(appState);
    }
  };

  // what to show while siging user in
  const onRedirecting = () => {
    return (
      <div>
        <h1>Signing you in....</h1>
      </div>
    );
  };
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH_REDIRECT_URI}
      onRedirectCallback={onRedirectCallback}
      onRedirecting={onRedirecting}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
