import "./post.css";
import React from "react";
import { Link } from "react-router-dom";
//import Posts from "../posts/Posts";
export default function Post({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
    {post.photo && (
      <img
        className="postImg"
        src={PF + post.photo}
        alt=""
      />
    )}
      <div className="postInfo">
        <div className="postCats">
        {
          post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))
        }
          
          <span className="postCat">Life</span>
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">
           {post.title}
        </span>
        </Link>
        
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p>
          {post.desc}
      </p>
    </div>
  );
}
