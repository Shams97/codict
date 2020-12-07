import theme from "../styles/theme";

export default function JsonTheme() {
  return <pre>{JSON.stringify(theme, undefined, 4)}</pre>;
}
