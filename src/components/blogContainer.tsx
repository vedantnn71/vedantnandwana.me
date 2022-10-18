import { ReactNode } from "react";
import { Layout } from "@/components";
import { useRouter } from "next/router";
import Head from "next/head";

type Meta = {
  title: string;
  description: string;
  image: string;
  date: string;
  type: string;
};

type BlogContainerProps = {
  children: ReactNode;
  title: string;
  description: string;
  image: string;
  date: string;
  type: string;
};

export function BlogContainer(props: BlogContainerProps) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta: Meta = { ...customMeta };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://vedantnandwana.me${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://vedantnandwana.me${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Vedant Nandwana" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vedantnn7" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Layout>
        <div className="flex flex-col gap-4 w-full">
          {children}
        </div>
      </Layout>
    </>
  );
}
