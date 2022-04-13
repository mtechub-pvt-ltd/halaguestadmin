// import "./ImageUpload.css";
import { useState, useRef } from "react";
import axios from "axios";
function ImageUpload() {
  const [image, setImage] = useState("");
  const [imageFile, setFile] = useState();
  const [imagePreview, setPreview] = useState();
  const inputEl = useRef(null); //variable to referring hidden input
  const getImage = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));//set preview
 }
  const uploadImage = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("MyImage", imageFile);
    // formData.append("image", imageFile);
    axios({
      method: "Post",
      url: "https://hiiguest.com/upload-image",
      data: formData,
    })
     .then((response) => {
      const { data } = response;
      setImage(data.url);
      console.log(response)
    })
     .catch((err) => {
      console.log(err);
    });
  }
return (
    <div className="ImageUpload">
      <h4>Image from server</h4>
      <div className="imageBox">
        <img src={image} width="100%"></img>
      </div>
      <hr></hr>
      <h4>Image Preview</h4>
      <form onSubmit={uploadImage}>
        <div className="imageBox">
          <img src={imagePreview} width="100%"></img>
        </div>
        <input type="file"
          onChange={getImage}
          style={{display: "none"}} //hiding input
          ref={inputEl} //set inputEl to referring this element
        ></input>
        <button
          onClick={() => inputEl.current.click()}
        >select image</button>
        <button type="submit">upload</button>
      </form>
    </div>
  );
}
export default ImageUpload;