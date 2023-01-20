import './singlepost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/14932984/pexels-photo-14932984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="singlePostImg" />

            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.

                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>

            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>SIMON</b></span>
                <span className="singlePostDate">1 hr ago</span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam quae ipsa dolore. Libero molestias voluptatum nisi quibusdam neque in nulla voluptatibus numquam voluptatem quam. Aspernatur aliquid aliquam ex voluptates!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam quae ipsa dolore. Libero molestias voluptatum nisi quibusdam neque in nulla voluptatibus numquam voluptatem quam. Aspernatur aliquid aliquam ex voluptates!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam quae ipsa dolore. Libero molestias voluptatum nisi quibusdam neque in nulla voluptatibus numquam voluptatem quam. Aspernatur aliquid aliquam ex voluptates!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam quae ipsa dolore. Libero molestias voluptatum nisi quibusdam neque in nulla voluptatibus numquam voluptatem quam. Aspernatur aliquid aliquam ex voluptates!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam quae ipsa dolore. Libero molestias voluptatum nisi quibusdam neque in nulla voluptatibus numquam voluptatem quam. Aspernatur aliquid aliquam ex voluptates!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam quae ipsa dolore. Libero molestias voluptatum nisi quibusdam neque in nulla voluptatibus numquam voluptatem quam. Aspernatur aliquid aliquam ex voluptates!
            </p>
        </div>
    </div>
  )
}

export default SinglePost