import './App.css';
import  React from 'react'
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
import ProfileDriver from './Components.js/ProfileDriver';
import FormPost from './Pages.js/FormPost';
import ImageUpload from './Pages.js/ImageUpload';
import Print from './Pages.js/Print'
import ProfileHotel from './Components.js/ProfileHotel';
import ProfileCompany from './Components.js/ProfileCompany'
import ProfileCustomer from './Components.js/ProfileCustomer';

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
          <Routes>
            <Route exact path="/profile" element={<ProfileDriver />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/profilehotel" element={<ProfileHotel />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/profilecompany" element={<ProfileCompany />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/profilecustomer" element={<ProfileCustomer />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/formpost" element={<FormPost/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/imgupload" element={<ImageUpload/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/print" element={<Print/>}></Route>
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
