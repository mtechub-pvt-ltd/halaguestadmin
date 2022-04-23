import { useState, useEffect } from "react";
import axios from 'axios';
import { Avatar, Grid } from '@mui/material'
import Button from '@mui/material/Button';
import image from './image.svg'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'animate.css';
import ClipLoader from "react-spinners/ClipLoader";



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
    width: '99%',
    marginTop: '20px',
    marginBottom: '20px',
    color: 'black',
    backgroundColor: '#ada6f2',
    borderColor: '#ada6f2',
    padding: '10px'
}

const InputStyle = {
    border: ' 1px solid #2d2d3f',
    borderRadius: '4px',
    backgroundColor: '#181821',
    color: 'white',
    width: '87%',
    height: '15px',
    padding: '20px'
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
const override = {
    display: ' block',
    margin: '0 auto',
    //   borderColor: 'red',
}
const color = "white"

const heading = "ADMIN LOGIN"
function Login() {
    // Loading 
    const [loading, setLoading] = useState("");
    const [loading1, setLoading1] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 3000)
    }, [])

    // Session 
    const [user, setUser] = useState("");
    const [session, setSession] = useState("");

    //    Get 
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const headers = {
        'Content-Type': 'application/json'
    }
    const submitHandler = async(e) => {
        e.preventDefault()
        // POst Request 
        await axios.put('https://hiiguest.com/login-admin-profile', {
            email: email,
            password: password
        }, { headers }).then(response => {
            console.log(response)
            const session1 = response.data.session;

            setSession(response.data.session);
            // console.log(response.data.session);
            console.log(session1);

            let timerInterval
            Swal.fire({
                title: 'Login Successfull',
                html: 'Please wait !',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
            navigate('/home'
            ,
                {
                    state: {
                        email: email,
                    }
                }
                );
            //   navigate('/home');



        })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    title: 'Invalid Credentials',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
    }

    return (


        <div >
            {loading ?
                <ClipLoader color={color} loading={loading} css={override} size={30} />
                :
                < Grid container spacing={2} style={ContainerStyle}>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={gridCont}>
                        <Grid align='center'>
                            <Avatar src={image} variant="square" style={logoStyle} ></Avatar>
                            <h6 style={headingStyle}>{heading}</h6>
                            <input style={InputStyle} name="email" value={email} type="text" placeholder="Enter Email"
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }

                            />
                            <br /><br />
                            <input style={InputStyle} name="password" value={password} type="password" placeholder="Enter Password"
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }
                            />

                            <br />
                            <Button variant="contained" onClick={
                                submitHandler

                            } style={btn} >Login</Button>

                            <br />
                        </Grid>

                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} ></Grid>
                </Grid>
            }
        </div>

    )
}

export default Login