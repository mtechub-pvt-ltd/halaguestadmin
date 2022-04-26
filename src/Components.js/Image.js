// import React, { Component } from 'react'

// import axios from 'axios';
// const FormData = require('form-data');
// const headers = {
//     'Content-Type': 'application/json'
// }

// export default class Image extends Component() {
//     constructor(props) {
//         super(props)
//         this.state = {
//             selectedfile: ''
//         }
//     }
//     myHandler =(event)=>{
//         this.setState({
//             selectedfile:event.target.files[0]
//         })
//     }
//     submitHandler =async(event)=>{
//         event.preventDefault();
//         var url="https://hiiguest.com/upload-image"
//         const formdata=new FormData();
//         formdata.append('myfile',this.state.selectedfile,this.state.selectedfile.name);
//         formdata.append('name','demo');
//         let response=await axios.post(url,formdata);
//         console.log(response)
//     }
//     render() {

//         return (
//             <div>
//                  <form onSubmit={this.submitHandler}>
//                      <input type="file" name="myfile"
//                         onChange={this.myHandler} />
//                     <input type="submit" value="upload"
//                          />
//                 </form>
//             </div>
//         )
//     }
// }

import React, { useState } from 'react'
import axios from 'axios';
const FormData = require('form-data');

function Image() {
    const [selectedFile,setSelectedFile]=useState('')
    const submitHandler= async(e) => {
   e.preventDefault();
   console.log('submit');
   const headers = {
        'Content-Type': 'application/json'
    }
   var url="https://hiiguest.com/upload-image"
           const formdata=new FormData();
           formdata.append('myfile',setSelectedFile(selectedFile.name));
           formdata.append('name','demo');
        //    axios 
           axios.post('https://hiiguest.com/upload-image',{
            image:formdata
        },{headers}) .then(response => {
                    console.log('Image Uploaded')
                    console.log(response);
                })
                .catch(err => {
                    console.log(err)
                })
                // End Axios

        //    let response=await axios.post(url,formdata);
        //    console.log(response)
        //    console.log(selectedFile)
    }
  return (
    <div>
         <form onSubmit={submitHandler}>
                      <input type="file" name="myfile"
                        onChange={(e) => setSelectedFile(e.target.files[0])} />
                    <input type="submit" value="upload"
                         />
                </form>
    </div>
  )
}

export default Image
