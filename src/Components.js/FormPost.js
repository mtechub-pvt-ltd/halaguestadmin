
// FUnctional com 
import React, { useState } from 'react'
import axios from 'axios';

const divStyle={
    color:'white',
    padding:'100px',

}
function FormPost() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const headers={
        'Content-Type':'application/json'
    }
    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/create-hotel-type',{
        name:name,
        price:price  
    },{headers}) .then(response => {
                console.log(response)
                window.alert('Hotel Creted Successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div style={divStyle}>
            <h1>Post Data using axios</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="name" value={name} placeholder="Name"
                        onChange={
                            (e) => setName(e.target.value) 
                        } />
                </div>
                <div>
                    <input type="text" name="price" value={price} placeholder="Price"
                        onChange={(e) => setPrice(e.target.value) 
                        } />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormPost