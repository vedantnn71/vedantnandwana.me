import type { AppProps } from "next/app";
import { Loading, Seo } from "@/components";
import "@/styles/globals.scss";
import "@/styles/fonts.scss";
import "@/styles/blog.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <Seo />
      <Component {...pageProps} />
    </>
  );
}

export default App;
