import SideBar from "../../components/sidebar/SideBar"
import "./setting.css"

const Setting = () => {
  return (
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update your account</span>
                <span className="settingDeleteTitle">Delete account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <label htmlFor="fileInput">
                <i className="settingPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>

                <label>Username</label>
                <input type="text" placeholder="enter username" />
                <label>Email</label>
                <input type="email" placeholder="enter email" /> <label>Password</label>
                <input type="password"  />
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <SideBar />
    </div>
  )
}

export default Setting