import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/14932984/pexels-photo-14932984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="postimage1"
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, magni? Architecto, hic magnam odio pariatur officia praesentium harum dolorem totam numquam officiis! At, a ipsum. Eius necessitatibus cum quis in!
      </p>
    </div>
  );
};

export default Post;
