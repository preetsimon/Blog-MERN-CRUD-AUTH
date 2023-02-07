import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import SinglePost from "./pages/singlePost/SinglePostPage";
import Create from "./pages/create/Create";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";

import {BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate} from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./context/Context";


const ProtectedRoute = ({ user, redirectPath = '/login' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>
  {/* <TopBar />  */}
  <Outlet />
  </>;
};

// make all routes private except login
// const PrivateRoute = ({ isAuthenticated, ...props }) => {
//   return isAuthenticated ? (
//     <>
//       {/* go to child component */}
//       <Header />
//       <Outlet />
//     </>
//   ) : (
//     <Navigate replace to="/login" />
//   );
// };

function App() {
  // const user = false;
  // const [user, isUser] = useState(true);
  const {user} = useContext(Context);

  return (
    <Router>
<TopBar/>
<Routes>

  <Route path="/login" 
  element= {<Login  />}>
   </Route>

  <Route path="/" 
  element={<ProtectedRoute user={user} />}> 
  <Route path="/" element={<Home/>}/>
  </Route>

  <Route path="/create" 
  element={<ProtectedRoute user={user} />}> 
  <Route path="/create" element={<Create/>}/>
  </Route>

  <Route path="/settings" 
  element={<ProtectedRoute user={user} />}> 
  <Route path="/settings" element={<Setting/>}/>
  </Route>

  <Route path="/post/:postId" 
  element={<ProtectedRoute user={user} />}> 
  <Route path="/post/:postId" element={<SinglePost/>}/>
  </Route>

</Routes>
    </Router>
  );
}

export default App;
