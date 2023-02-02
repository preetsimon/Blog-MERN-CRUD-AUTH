import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./singlepost.css";

const SinglePost = () => {
  const location = useLocation(); // get post id from url
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    // fire whenever the path changes
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && <img src={post.photo} alt="" />}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.username}</b>
          </span>
       
          <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
