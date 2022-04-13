import React, { useState } from 'react'
import axios from 'axios';

const divStyle={
    color:'white',
    padding:'100px',

}
let IMG=null;
const FormData = () =>{
    const [image,setImage]=useState("")
    const [name, setName] = useState("");
    const [seats, setSeats] = useState("");
    const [price, setPrice] = useState("");
    const headers={
        'Content-Type':'application/json'
    }
    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/create-vehicle',{
        // image:image,
        name:name,
        seats:seats,
        price:price  
    },{headers}) .then(response => {
                console.log(response)
                window.alert('Vehicle Creted Successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }
    //Upload and display image

    const [selectedImage, setSelectedImage] = useState(null);
    const handleSubmit = async(event) => {
        // console.log(selectedImage.path);
    event.preventDefault()
    // POst Request 
      const config={
          headers:{ 'content-type': 'multipart/form-data'}
      }
      console.log(IMG);

    axios.post('https://hiiguest.com/upload-image',{
        image
    },config) 
    .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <div style={divStyle}>
    <h1>Post Data using axios</h1>
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
        </div>
      )}
      <br />

      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          IMG = event.target.files[0]
        //   console.log(IMG);

        }}
      />
      <button type='submit' onClick={handleSubmit}>Submit</button>
    <form >

        <div>
            <input type="text" name="name" value={name} placeholder="Name"
                onChange={
                    (e) => setName(e.target.value) 
                } />
        </div>
        <div>
            <input type="text" name="seats" value={seats} placeholder="Seats"
                onChange={(e) => setSeats(e.target.value) 
                } />
        </div>
        <div>
            <input type="text" name="price" value={price} placeholder="Price"
                onChange={(e) => setPrice(e.target.value) 
                } />
        </div>
        <button onClick={submitHandler} type='submit'>Submit</button>
    </form>
    <h1>File uploader </h1>

</div>
  )
}

export default FormData



