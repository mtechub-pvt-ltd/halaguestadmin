import React, { useState } from 'react'
import axios from 'axios';
import { Avatar, Grid } from '@mui/material'
import Button from '@mui/material/Button';
import image from './image.svg'
import { useNavigate } from 'react-router-dom'


const logoStyle = {
    width: '31%',
    height: '100%',
    marginBottom: '20px'
}
const ContainerStyle = {
    padding: '30px',
    paddingTop: '180px',
    color: '#9a9cab',

}

const btn = {
    width: '100%',
    marginTop: '20px',
    marginBottom: '20px',
    color: 'black',
    backgroundColor: '#ada6f2',
    borderColor: '#ada6f2'
}

const InputStyle={
    border: ' 1px solid #2d2d3f',
    borderRadius: '4px',
    backgroundColor:'#181821',
    color:'white',
    width:'87%',
   
    height:'15px',
    padding:'20px'


}

const headingStyle = {
    fontSize: '16px'
}
const gridCont = {
    padding: '30px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-70px'
}

const heading = "ADMIN LOGIN"
function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const headers={
        'Content-Type':'application/json'
    }
    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/create-admin-profile',{
        email:email,
        password:password 
    },{headers}).then(response => {
                console.log(response)
                window.alert('Admin Creted Successfully')
                // navigate('/home')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div >
            < Grid container spacing={2} style={ContainerStyle}>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
                <Grid item xs={12} sm md={4} style={gridCont}>
                    <Grid align='center'>
                        <Avatar src={image} variant="square" style={logoStyle} ></Avatar>
                        <h6 style={headingStyle}>{heading}</h6>
                        <input style={InputStyle} name="email" value={email} type="text" placeholder="Enter Email"
                        onChange={
                            (e) => setEmail(e.target.value) 
                        }
                        
                        />
                        <br /><br/>
                        <input style={InputStyle} name="password" value={password} type="text" placeholder="Enter Password"
                        onChange={
                            (e) => setPassword(e.target.value) 
                        }
                        />

                        <br />
                        <Button variant="contained" onClick={
                            //  navigate('/home')
                            submitHandler
                              } style={btn} >Create</Button>
                        <br />
                    </Grid>

                </Grid>
                <Grid item xs={4} md={4} ></Grid>
            </Grid>
        </div>
    )
}

export default Login