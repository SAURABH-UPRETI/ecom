import React from "react";
import "./Blog.css";
import Blog1img from "../img/blog/blog-1.jpg";
import Blog2img from "../img/blog/blog-2.jpg";
import Blog3img from "../img/blog/blog-3.jpg";
import Blog4img from "../img/blog/blog-4.jpg";
import Blog5img from "../img/blog/blog-5.jpg";
import Blog6img from "../img/blog/blog-6.jpg";
import Blog7img from "../img/blog/blog-7.jpg";
import Blog8img from "../img/blog/blog-8.jpg";
import Blog9img from "../img/blog/blog-9.jpg";
function Blog() {
  return (
    <>
      <div className="container">Home Blog</div>
      <div className="container d-flex flex-row justify-content-between">
        <img src={Blog1img}></img>

        <div className="d-flex flex-column ">
          <img src={Blog2img} className=""></img>
          <img src={Blog3img}></img>
        </div>
        <div className="d-flex flex-column ">
          <img src={Blog4img} className=""></img>
          <img src={Blog5img}></img>
        </div>
      </div>
    </>
  );
}

export default Blog;
