// import { Outlet } from "react-router-dom";
import { posts } from "@/data/posts";
import BlogPostList from "@/components/blogs/BlogPostList";

// This file sends the posts array to the BlogPostList component.
function Blog() {
  return (
    <div className="container mx-auto">
      <h1 className="mt-8 text-center text-2xl font-bold md:text-left">
        Latest Blog Posts
      </h1>
      <BlogPostList posts={posts} />
    </div>
  );
}

export default Blog;
