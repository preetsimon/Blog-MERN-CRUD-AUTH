import "./topbar.css"
import { Link } from "react-router-dom"


function TopBar() {
  const user = false;
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
                <li className="topListItem">
                <Link className= "link" to='/' >HOME</Link>
                </li>
                <li className="topListItem">
                <Link className= "link" to='/' >ABOUT </Link></li>
                <li className="topListItem">
                <Link className= "link" to='/' >CONTACT </Link></li>
                <li className="topListItem">
                <Link className= "link" to='/create' >WRITE </Link></li>
                <li className="topListItem">
                <Link className= "link" to='/login' >{user && "LOGOUT"}</Link></li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
<img className="topImg" src="https://images.pexels.com/photos/4385997/pexels-photo-4385997.jpeg" alt="profile" />
            ) :(
              <ul className="topList">
                <li className="topListItem">
                <Link className="link" to='/login'>LOGIN</Link>
                </li>
              </ul>
            )
          }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default TopBar