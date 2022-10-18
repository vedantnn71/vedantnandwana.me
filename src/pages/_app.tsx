import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import "@/styles/fonts.scss";
import "@/styles/blog.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
