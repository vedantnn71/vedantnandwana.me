import { PropsWithChildren, Suspense } from "react";
import { BlogContainer } from "@/components";
import { Post, urlForImage } from "@/lib";
import { parseISO, format } from "date-fns";

export function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: Post }>) {
  return (
    <BlogContainer
      title={`${post.title} – Vedant Nandwana`}
      description={post.excerpt}
      image={post.coverImage ? urlForImage(post.coverImage).url() : ""}
      date={new Date(post.date).toISOString()}
      type="article"
    >
      <article className="mb-16 flex w-full flex-col items-start">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-2xl">
          {post.title}
        </h1>
        <div className="flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="text-sm text-neutral-400">
              {format(parseISO(post.date), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
        <Suspense fallback={null}>
          <div className="prose-dark my-6 flex w-full max-w-none flex-col gap-5 text-neutral-300">
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
              {"Discuss on Twitter"}
            </a>
            {" • "}
            <a
              href="https://github.com/vedantnn7/vedantnandwana.me/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Suggest Change"}
            </a>
          </div>
        </Suspense>
      </article>
    </BlogContainer>
  );
};
