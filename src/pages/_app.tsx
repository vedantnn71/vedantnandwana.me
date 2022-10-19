import type { AppProps } from "next/app";
import { Analytics, Loading, Seo } from "@/components";
import "@/styles/globals.scss";
import "@/styles/fonts.scss";
import "@/styles/blog.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <Seo />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
