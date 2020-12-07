import "bootstrap/dist/css/bootstrap.min.css";
import WordsProvider from "../ctx/words/wordsCtx";

function MyApp({ Component, pageProps }) {
  return (
    <WordsProvider>
      <Component {...pageProps} />
    </WordsProvider>
  );
}

export default MyApp;
