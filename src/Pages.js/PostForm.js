
import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component {
    constructor(props){
        super(props)

        this.state={
            userId:'',
            title:'',
            body:''
        }
    }

    changeHandler =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler =e  =>{
        e.preventDefault()
        console.log(this.state)
        // POst Request 
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    // Upload Image 
    // let formData= new FormData();
    state={
        file:null
    }
      handlefile(e){
        //   console.log(e.target.files,'$$$$');
        //   console.log(e.target.files[0],"$$$$");
        let file= e.target.files[0]
        this.setState({file:file})
      }
      handleFileUpload(e){
          console.log(this.state,"THE STATE ---- $$$$");
          let file=this.state.file
          let formdata =new FormData()
          formdata.append("image",file)
          formdata.append("name","Arjun")
          axios({
              url:'/some/api',
              method:"POST",
              headers:{
                  authorization:"token"
              }

          }).then((res)=>{
            //handle
          },(err)=>{
              //err
          })
      }
  render() {
      const {userId,title,body}=this.state
    return (
        <div>
            <h1>Post Data using axios</h1>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="userId" value={userId} 
                onChange={
                    this.changeHandler
                }/>
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={
                    this.changeHandler
                }/>
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={
                    this.changeHandler
                }/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <h1>Post Image using axios</h1>
        <div>
        <input type="file" name="file" onChange={(e)=>this.handlefile(e)}/>
        <button onClick={(e)=>this.handleFileUpload}>Upload Image</button>
        </div>
        
    </div>
    )
  }
}

export default PostForm