import './App.css';
import * as React from 'react'
import Login from './Pages.js/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ViewData from './Pages.js/ViewData';
import Homepage from './Pages.js/Homepage';
import { makeStyles } from '@material-ui/core/styles'
import PostForm from './Pages.js/PostForm'
import FormPost from './Components.js/FormPost'
import FormData from './Components.js/FormData'
import UploadAndDisplayImage from './Components.js/UploadAndDisplayImage';
import ImageUpload from './Components.js/ImageUpload';

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
         
        </Router>
      </div>

    </>
  );
}

export default App;
