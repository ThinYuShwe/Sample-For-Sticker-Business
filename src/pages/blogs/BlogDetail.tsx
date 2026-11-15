import { useParams, Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import RichTextRenderer from "@/components/blogs/RichTextRenderer";

// DOMPurify library is used to sanitize HTML content to prevent XSS attacks. It removes any potentially harmful code from the HTML before rendering it in the browser.
// by npm i dompurify
function BlogDetail() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row">
        <section className="w-full lg:w-3/4 lg:pr-16">
          <Button variant="outline" className="mt-8 mb-6">
            <Link
              to="/blogs"
              className="text-muted-foreground font-semibold underline"
            >
              Back to Blogs
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="mb-4 text-3xl font-extrabold">{post.title}</h2>
              <div className="mt-2 ml-4 text-sm">
                <span>
                  by<span className="font-semibold"> {post.author}</span> on
                  <span className="font-semibold"> {post.updated_at}</span>
                </span>
              </div>
              <h3 className="mt-4 text-base font-normal">{post.content}</h3>
              <img
                className="mt-4 w-full rounded-xl"
                src={post.image}
                alt="post image"
              />

              <RichTextRenderer content={post.body} className="my-8" />
              <div className="">
                {post.tags.map((tag) => (
                  <Button variant="secondary" key={tag}>
                    {tag}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted-foreground mt-8 mb-16 text-center text-xl font-bold">
              Post not found
            </p>
          )}
        </section>
        <section className="w-full lg:mt-24 lg:w-1/4">
          <div className="mb-8 flex items-center gap-2 text-base font-semibold">
            <h3 className="">Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blogs/${post.id}`}
                className="mb-6 flex items-start gap-5"
              >
                <img src={post.image} alt="" className="w-1/4 rounded" />
                <div className="text-muted-foreground w-3/4 text-sm font-[500]">
                  <p className="line-clamp-2">{post.content}</p>
                  <i className="">... see more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetail;
