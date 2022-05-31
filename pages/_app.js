import { ThemeProvider } from "../context/theme";
// import {SSRProvider} from '@react-aria/ssr'

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp;