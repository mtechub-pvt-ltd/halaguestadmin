import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';



const useStyles = makeStyles({
    GridStyle: {
        border: ' 1px solid #e4e6ef',
        borderRadius: '5px',
        marginTop: '45px',
        padding: '30px',
        marginBottom: '10px'
    },
    GridBoxStyle: {
        border: ' 1px solid #e4e6ef',
        borderRadius: '5px',
    }, heading: {
        marginBottom: '30px'

    }, InputStyle: {
        border: ' 1px solid #2d2d3f',
        borderRadius: '4px',
        backgroundColor: '#181821',
        color: 'white',
        width: '87%',

        height: '15px',
        padding: '20px'


    }
})

const heading = {
    marginBottom: '30px'
}
const btn = {
    width: '100%',
    marginBottom: '10px',
    color: 'black',
    backgroundColor: '#ada6f2',
    borderColor: '#ada6f2'
}
function Settings() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    //Get API Axios Update-km-per hour
    const [data, setData] = useState([]);
    const url = 'https://hiiguest.com/';
    const getAllData = () => {
        axios.get(`${url}get-per-km-rate`)
            .then((response) => {
                const allData = response.data;
                console.log(allData);
                //    setData(response.data);
                setData(allData);
            })
            .catch(error => console.error(`Error:${error}`));

    }
    useEffect(() => {
        getAllData();
         getAllData1();
    }, []);
    const headers = {
        'Content-Type': 'application/json'
    }
    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/update-per-km-rate', {
            vehiclePerKmRate: data
        }, { headers }).then(response => {
            console.log(data);
            // window.alert('data updated successfully')
            setOpen(true);
        })
            .catch(err => {
                console.log(err)
            })
    }


    // Commision 

    const [data1, setData1] = useState([]);
    const getAllData1 = () => {
        axios.get(`${url}get-commission`)
            .then((response) => {
                const allData = response.data;
                console.log(allData);
                //    setData(response.data);
                setData1(allData);
            })
            .catch(error => console.error(`Error:${error}`));

    }
    const submitHandler1 = (e) => {
        e.preventDefault()
        // POst Request 
        axios.put('https://hiiguest.com/update-commission', {
            commission: data1
        }, { headers }).then(response => {
            console.log(data1);
            // window.alert('data updated successfully')
            setOpen1(true);
        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Grid container spacing={2} className={classes.GridStyle}>
                <Grid item xs={12} md={12}>
                    <Typography variant='h6' style={heading}>Settings</Typography>
                </Grid>
                {/* First Box  */}
                <Grid item xs={12} md={6} >
                    <Grid container spacing={2}  >
                        <Grid item xs={12} md={12} style={{ marginBottom: 9 }} className={classes.GridBoxStyle}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>

                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant='h6'>Update Per Km Rate</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>

                                            <Collapse in={open}>
                                                <Alert
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="inherit"
                                                            size="small"
                                                            onClick={() => {
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            <CloseIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                    sx={{ mb: 2 }}
                                                >
                                                    Close me!
                                                </Alert>
                                            </Collapse>


                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            {/* {loading && data.map((row) => ( */}

                                            <input className={classes.InputStyle} name="first" type="text" value={data}
                                                onChange={
                                                    (e) => setData(e.target.value)
                                                }
                                                placeholder="Enter Value" />

                                            {/* // ))} */}
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4}>

                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <Button variant="contained" style={btn} onClick={submitHandler}>Update</Button>
                                                </Grid>
                                                <Grid item xs={12} md={4}>

                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>


                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* change ride radius  */}
                <Grid item xs={12} md={6}  >
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={12} className={classes.GridBoxStyle}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant='h6'>Change Ride Radius</Typography>
                                        </Grid>

                                        <Grid item xs={12} md={12}>

                                            <input className={classes.InputStyle} name="first" type="text" placeholder="Enter Value"></input>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4}>

                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <Button variant="contained" style={btn} >Update</Button>
                                                </Grid>
                                                <Grid item xs={12} md={4}>

                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>


                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Change Commisiion  */}
                <Grid item xs={12} md={6}  >
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={12} className={classes.GridBoxStyle}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>

                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant='h6'>Update Commission</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>

                                            <Collapse in={open1}>
                                                <Alert
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="inherit"
                                                            size="small"
                                                            onClick={() => {
                                                                setOpen1(false);
                                                            }}
                                                        >
                                                            <CloseIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                    sx={{ mb: 2 }}
                                                >
                                                    Commision updated successfully
                                                </Alert>
                                            </Collapse>


                                        </Grid>
                                        <Grid item xs={12} md={12}>

                                            <input className={classes.InputStyle} name="first" type="text" placeholder="Enter Value"
                                            value={data1}
                                            onChange={
                                                (e) => setData1(e.target.value)
                                            }
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4}>

                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <Button variant="contained" style={btn} onClick={submitHandler1}>Update</Button>
                                                </Grid>
                                                <Grid item xs={12} md={4}>

                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Update admin credential  */}
                <Grid item xs={12} md={6}  >
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={12} className={classes.GridBoxStyle}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>

                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant='h6'>Admin Credentials</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>

                                            <input className={classes.InputStyle} name="first" type="text" placeholder="Enter Email"></input>
                                        </Grid>
                                        <Grid item xs={12} md={12}>

                                            <input className={classes.InputStyle} name="first" type="text" placeholder="Enter Password"></input>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4}>

                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <Button variant="contained" style={btn} >Update</Button>
                                                </Grid>
                                                <Grid item xs={12} md={4}>

                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Settings