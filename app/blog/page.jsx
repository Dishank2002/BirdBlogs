import React from "react";
import FirstBlog from "@/components/FirstBlog";
import OtherBlogs from "@/components/OtherBlogs";
import { fetchData } from "@/lib/api";

async function fetchBlogs() {
  try {
    const blogs = await fetchData("/api/blog");
    return blogs;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
}

const Blog = async () => {
  const blogs = await fetchBlogs();

  const firstBlog = blogs && blogs[0];
  const otherBlogs = blogs?.length > 0 && blogs.slice(1);
  return (
    <div>
      {blogs?.length > 0 ? (
        <>
          <div className="container">
            <h2 className="text-center my-10">
              <span className="text-primaryColor">Trending</span> Blog
            </h2>
            <FirstBlog firstBlog={firstBlog} />
            <OtherBlogs otherBlogs={otherBlogs} />
          </div>
        </>
      ) : (
        <h3>No Blogs...</h3>
      )}
    </div>
  );
};

export default Blog;
