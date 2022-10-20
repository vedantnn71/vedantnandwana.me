import Head from "next/head";

export function Seo() {
  const meta = {
    title: "Vedant Nandwana",
    description: "A developer who loves to tinker with pixels.",
    image: "/social.png",
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={"https://vedantnandwana.me"} />
      <link rel="canonical" href={"https://vedantnandwana.me"} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vedantnn7" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
}
