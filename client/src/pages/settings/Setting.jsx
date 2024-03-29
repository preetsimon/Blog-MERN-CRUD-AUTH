import { useContext, useState } from "react"
import axios from "axios"
import SideBar from "../../components/sidebar/SideBar"
import "./setting.css"

import {Context} from "../../context/Context"
const Setting = () => {
const { user, dispatch } = useContext(Context); // limitations of useContext
 const PF = "http://localhost:5000/images/"

const [file, setFile] = useState(null);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
    const res = await axios.put("/users/"+user._id, updatedUser);
    setSuccess(true);
    dispatch({type:"UPDATE_SUCCESS", payload: res.data})
    } catch (err) {
        dispatch({type: "UPDATE_FAILURE"})
    }
  };
  return (
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update your account</span>
                <span className="settingDeleteTitle">Delete account</span>
            </div>
            <form className="settingForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="" />
                </div>
                <label htmlFor="fileInput">
                <i className="settingPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])}/>

                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/> 
                <label>Password</label>
                <input type="password"  onChange={e=>setPassword(e.target.value)}/>
                <button className="settingSubmit" type="submit">Update</button>
                {
                    success && <span style={{color:"green", textAlign:"center", margin:"20px"}}>Profile is updated </span>
                }
            </form>
        </div>
        <SideBar />
    </div>
  )
}

export default Setting