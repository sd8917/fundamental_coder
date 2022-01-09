import React from "react";
import Blog_Card from "./Blog_Card";
import "../Styles/blog.css";
function Blog() {
  return (
    <div className="container pt-4 pb-4">
      <h3>Blogs</h3>

      <Blog_Card />
    </div>
  );
}

export default Blog;
