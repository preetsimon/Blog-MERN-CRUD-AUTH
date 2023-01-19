import "./topbar.css"

function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i> 
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://images.pexels.com/photos/4385997/pexels-photo-4385997.jpeg" alt="profile" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default TopBar