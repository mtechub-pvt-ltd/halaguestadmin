import * as React from 'react'
import { Avatar, Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from './logo.png'
import { alpha, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'


const logoStyle = {
    width: '31%',
    height: '100%',
    marginBottom: '20px'
}
const ContainerStyle = {
    padding: '30px',
    // backgroundColor: '#181821',
    paddingTop: '180px',
    color: '#9a9cab',
    // height:'150vh'

}

const btn = {
    width: '100%',
    marginTop: '20px',
    marginBottom: '20px',
    color: '#fff',
    backgroundColor: '#ada6f2',
    borderColor: '#ada6f2'
}
const formStyle = {
    borderColor: '#2d2d3f',
    background: '#181821',
    borderRadius: '3px',
    marginTop: '-10px',
    width: '100%'
}
const formStyleP = {
    borderColor: '#2d2d3f',
    background: '#181821',
    borderRadius: '3px',
    marginTop: '10px',
    width: '100%'

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

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #2d2d3f',
        color: 'white',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#181821' : '#2d2d3f',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            border: '1px solid #2d2d3f',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
}));
function Login() {
    let navigate = useNavigate();

    return (
        <div >
            < Grid container spacing={2} style={ContainerStyle}>
                <Grid item xs={4} md={4}></Grid>
                <Grid item xs={12} md={4} style={gridCont}>
                    <Grid align='center'>
                        <Avatar src={logo} variant="square" style={logoStyle} ></Avatar>
                        <h6 style={headingStyle}>{heading}</h6>
                        <RedditTextField
                            label="Enter Email "
                            id="reddit-input"
                            variant="filled"
                            style={formStyle}
                            
                        />
                        {/* <span>{errorMessage}</span> */}
                        <RedditTextField
                            label="Enter Password "
                            id="reddit-input"
                            variant="filled"
                            style={formStyleP}
                        />

                        <br />
                        <Button variant="contained" onClick={() => {  navigate('/home') }} style={btn} >Login</Button>
                        <br />
                    </Grid>

                </Grid>
                <Grid item xs={4} md={4} ></Grid>
            </Grid>
        </div>
    )
}

export default Login