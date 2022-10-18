import { Layout } from "@/components";
import { Post, getClient, indexQuery } from "@/lib";
import { parseISO, format } from "date-fns";
import Link from "next/link";
import cx from "classnames";

function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <div
        className={cx(
          "flex flex-col gap-3 p-4 -mx-4 rounded-xl cursor-pointer",
          "hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] hover:from-violet-600/25 hover:to-sky-900/25"
        )}
      >
        <h1 className="text-lg font-semibold text-neutral-300">{post.title}</h1>
        <p className="text-neutral-400 text-md font-medium">
          {post.excerpt ||
            "For some reason, this post has no excerpt. Looks like I forgot to add one. Sorry about that."}
        </p>
        <p className="text-neutral-400 text-md font-medium">
          {format(parseISO(post.date), "dd MMMM, yyyy")}
        </p>
      </div>
    </Link>
  );
}

export default function Blogs({ posts }: { posts: Post[] }) {
  return (
    <Layout>
        <div className="flex flex-col gap-4 w-full">
          <div>
            <h1 className="text-xl font-semibold text-neutral-300">My Blogs</h1>
            <p className="text-neutral-400 text-lg font-medium">
              I write about things which I find interesting and things that I&apos;m
              the most passionate about.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <BlogCard post={post} key={post._id} />
            ))}
          </div>
        </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery);

  return { props: { posts } };
}
