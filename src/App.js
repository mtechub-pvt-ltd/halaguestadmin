import './App.css';
import  React,{useEffect, useState} from 'react'
import Login from './Pages.js/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ViewData from './Pages.js/ViewData';
import Homepage from './Pages.js/Homepage';
import { makeStyles } from '@material-ui/core/styles'
import Logout from './Pages.js/Logout';
import CreateAdmin from './Pages.js/Create-Admin'
import ProfileData from './Components.js/ProfileData'

const useStyles = makeStyles({
  root1: {
    height: "110vh",
    background: "#181821",
    margin: '0',
    padding: '0',
    
  }
})

function App() {
  const classes = useStyles();

  // const [token, setToken] = useState("");
  // if(token===null) {
  //   return <Login setToken={setToken} />
  // }
 
  return (
    <>

      <div className={classes.root1}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/view" element={<ViewData />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/home" element={<Homepage />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/logout" element={<Logout />}></Route>
          </Routes>
          {/* <Routes>
            <Route exact path="/delete" element={<Delete/>}></Route>
          </Routes>
       
          <Routes>
            <Route exact path="/tabs" element={<Tabsui/>}></Route>
          </Routes> */}
          {/* <Routes>
            <Route exact path="/post" element={<PostForm />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/formpost" element={<FormPost/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/formdata" element={<FormData/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/upload" element={<UploadAndDisplayImage/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/img" element={<ImageUpload/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/get" element={<Getdata/>}></Route>
  </Routes>*/}

          <Routes>
            <Route exact path="/create" element={<CreateAdmin/>}></Route>
          </Routes> 
          {/* <Routes>
            <Route exact path="/postdata" element={<Postdata/>}></Route>
          </Routes> 
          <Routes>
            <Route exact path="/postdetails" element={<Postdetails/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/profile1" element={<Profile/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/print" element={<Print/>}></Route>
          </Routes> */}
          <Routes>
            <Route exact path="/profiledata" element={<ProfileData/>}></Route>
          </Routes>
          
         
        </Router>
      </div>

      

    </>
  );
}

export default App;
