import Image from 'next/future/image';
import { PropsWithChildren, Suspense } from 'react';
import { Nav, BlogContainer } from '@/components';
import { Post, urlForImage } from '@/lib';
import { parseISO, format } from 'date-fns';

export const BlogLayout = ({
  children,
  post
}: PropsWithChildren<{ post: Post }>) => {
  return (
    <BlogContainer
      title={`${post.title} – Vedant Nandwana`}
      description={post.excerpt}
      image={post.coverImage ? urlForImage(post.coverImage).url() : ""}
      date={new Date(post.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-around w-full mx-4 mb-16">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-2xl">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="text-sm text-neutral-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
        <Suspense fallback={null}>
          <div className="w-full my-6 prose dark:prose-dark max-w-none">
            {children}
          </div>
          <div className="text-sm text-neutral-400">
            <a
              href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                `https://vedantnandwana.me/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Discuss on Twitter'}
            </a>
            {` • `}
            <a
              href="https://github.com/vedantnn7/vedantnandwana.me/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Suggest Change'}
            </a>
          </div>
        </Suspense>
      </article>
    </BlogContainer>
  );
}

