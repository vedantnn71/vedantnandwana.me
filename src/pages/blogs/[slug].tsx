import { MDXRemote } from 'next-mdx-remote';
import { BlogLayout } from '@/components';
import { MDXComponents as components } from '@/components';
import { Post, mdxToHtml } from '@/lib';
import { postQuery, postSlugsQuery } from '@/lib/queries';
import { sanityClient, getClient } from '@/lib/sanity-server';

export default function PostPage({ post }: { post: Post }) {
  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.content}
        components={
          {
            ...components,
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }: {
  params: any;
  preview: boolean;
}) {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params.slug
  });

  console.log({post})

  if (!post) {
    return { notFound: true };
  }

  const { html, readingTime } = await mdxToHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content: html,
        readingTime
      }
    }
  };
}

