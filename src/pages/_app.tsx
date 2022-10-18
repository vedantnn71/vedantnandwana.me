import type { AppProps } from "next/app";
import { Loading } from "@/components";
import "@/styles/globals.scss";
import "@/styles/fonts.scss";
import "@/styles/blog.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

export default App;
