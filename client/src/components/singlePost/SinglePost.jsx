import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./singlepost.css";
import { Context } from "../../context/Context";
import { useContext } from "react";

const SinglePost = () => {
  const location = useLocation(); // get post id from url
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);

  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    // fire whenever the path changes
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, { //delete method: send data instead of object directly
        data: {username: user.username}
      });
      window.location.replace("/");
    } catch (error) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && <img classname= "singlePostImg" src={PF + post.photo} alt="" />}

        <h1 className="singlePostTitle">
          {post.title}
          {/* hide edit and del */}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i
                className="singlePostIcon fa-solid fa-trash"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>

          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
