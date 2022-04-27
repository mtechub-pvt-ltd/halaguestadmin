import './App.css';
import  React from 'react'
import Login from './Pages.js/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
import ProfileVehicle from './Components.js/ProfileVehicle';
import ProfileOrders from './Components.js/ProfileOrders';
import Image from './Components.js/Image';
import Charts from './Pages.js/Charts';
import AddDeleteTableRows from './Pages.js/AddDeleteTableRows';

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
            <Route exact path="/profilevehicle" element={<ProfileVehicle />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/profileorders" element={<ProfileOrders />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/formpost" element={<FormPost/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/imgupload" element={<ImageUpload/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/img" element={<Image/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/print" element={<Print/>}></Route>
          </Routes> 
          <Routes>
            <Route exact path="/chart" element={<Charts/>}></Route>
          </Routes> 
        
          <Routes>
            <Route exact path="/create" element={<CreateAdmin/>}></Route>
          </Routes> 
        
          <Routes>
            <Route exact path="/profiledata" element={<ProfileData/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/adddelete" element={<AddDeleteTableRows/>}></Route>
          </Routes>
          
         
        </Router>
      </div>

      

    </>
  );
}

export default App;
