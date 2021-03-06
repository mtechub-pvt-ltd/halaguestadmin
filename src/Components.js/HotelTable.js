import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@material-ui/core/Grid';
import { Avatar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BackspaceIcon from '@mui/icons-material/Backspace';
//dialog
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';
import ImageUpload from '../Pages.js/ImageUpload'
// Tabs 
import Checkbox from '@mui/material/Checkbox';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Img from './sir.jpg'
// Alert 
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


// Axios 
import axios from 'axios'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const useStyles = makeStyles({
    GridStyle: {
        border: ' 1px solid #e4e6ef',
        borderRadius: '5px',
        marginTop: '45px',
        padding: '30px',
    }, btn: {
        backgroundColor: 'transparent',
        border: ' none',
        color: 'white',
        // padding: '12px 16px',
        fontSize: ' 16px',
        cursor: 'pointer',
        borderRadius: '5px'
    }, btn1: {
        backgroundColor: 'transparent',
        border: ' none',
        color: '#fc9494',
        // padding: '12px 16px',
        fontSize: ' 16px',
        // marginLeft: '10px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    closebtn: {
        backgroundColor: '#83d8ae',
        border: ' none',
        color: 'white',
        fontSize: ' 16px',
        cursor: 'pointer',
        borderRadius: '5px'

    },
    TextColor1: {
        color: '#9a9cab',
        borderBottom: '1px solid black'
    }, CardStyle: {
        display: 'flex'
    },
    ProfileImage: {
        width: '70px',
        height: '70px',
        marginLeft: '90px',
        borderRadius: '10px'
    },
    dialogTitle: {
        marginTop: '30px',
    }, inputStyle: {
        width: '100%',
        padding: '5px',
        marginTop: '10px',
        marginBottom: '5px',
        borderRadius: '5px',
        border: '1px solid ',
        height: '20px'

    }, TextStyle: {
        color: 'black',
        marginTop: '10px',
        fontWeight: 'bold'
    }, gridS: {
        // padding:'20px'
    }, btnSubmit: {
        backgroundColor: '#36f195',
        padding: '10px',
        fontSize: '15px',
        border: 'transparent',
        borderRadius: '5px',
        color: 'white',
        marginLeft: '234px'
    }, user: {
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor: 'white',
        borderRadius: '4px',
        color: 'white',
        height: '100%',
        padding: '0px',
        width: '200px',
    }
})
const addbtn={
    height:'50px',
}

const TextColor = {
    color: '#9a9cab',
}
// Tabs 
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const TabsStyle = {
    color: 'white'

}

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#181821' : '#181821'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'white'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#181821' : '#181821',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    const classes = useStyles();

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[100],
                    }}
                >
                    <button className={classes.closebtn}><CloseIcon /></button>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const imgStyle = {
    width: '50px',
}
const HotelTable = (props) => {
    // Tabs 
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleClickOpen = (idData) => {
        console.log(idData);
        // setShow(false);
        navigate('/profilehotel',
            {
                state: {
                    post_id: idData,
                    data: props.data
                }
            });
    };
    const handleClose = () => {
        setOpen(false);
    };

    //Get API Axios
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = 'https://hiiguest.com/';
    const getAllData = () => {
        axios.get(`${url}get-all-hotels`)
            .then((response) => {
                const allData = response.data;
                console.log(allData);
                setData(response.data);
                setLoading(true)
            })
            .catch(error => console.error(`Error:${error}`));

    }
    useEffect(() => {
        getAllData();
        getAllData1();
        getAllData2();
    }, []);
    // Add 
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    const headers = {
        'Content-Type': 'application/json'
    }
    const [image, setImage] = useState("");
    const [Phno, setPhno] = useState("");
    const [hotelName, sethotelName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [hoteltype, setHotelType] = useState("");
    const [jobTitle, setJobTitle] = useState("");


    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/create-hotel', {
            image: image,
            phoneNo: Phno,
            hotelName: hotelName,
            name: name,
            email: email,
            city: city,
            hotelType: hoteltype,
            jobTitle: jobTitle

        }, { headers }).then(response => {
            console.log(response)
            // window.alert('Created Hotel Successfully')
            // window.location.reload(false);
            setOpenAdd(false);
            setData([...data, response.data]);
            let timerInterval
            Swal.fire({
                title: 'Created Hotel Successfully',
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

        })
            .catch(err => {
                console.log(err)
            })
    }
    const checkbox = (Did) => {
        console.log(Did);

        axios.put('https://hiiguest.com/approve-hotel-profile', {
            phoneNo: Did
        }, { headers }).then(response => {
            console.log(response);
            console.log('Hotel Approved')
            // setShow(true);
        })
            .catch(err => {
                console.log(err)
            })


    }
    // Delete 
    // Alert 
    const [open1, setOpen1] = React.useState(false);
    const deleteData = (phoneNo) => {
        console.log('deleting phone no')
        console.log(phoneNo);
        axios.delete('https://hiiguest.com/delete-hotel', {
            data: {
                phoneNo: phoneNo
            }
        }, { headers })
            .then(res => {
                console.log(res);
                console.log(res.data);
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success',
                        cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: {
                        backgroundColor: '#4CAF50', /* Green */
                        border: 'none',
                        color: 'white',
                        padding: '15px 32px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px'
                    }
                })

                swalWithBootstrapButtons.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Hotel has been deleted.',
                            'success'
                        )
                        //    refresh componenet 
                        axios.get(`${url}get-all-hotels`)
                            .then((response) => {
                                const allData = response.data;
                                console.log(allData);
                                setData(response.data);
                                setLoading(true)
                            })
                            .catch(error => console.error(`Error:${error}`));

                        // window.location.reload(false);
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            'Cancelled',
                            'Hotel is safe :)',
                            'error'
                        )
                    }
                })
                // setOpen1(true);
            }).catch(err => {
                console.log(err)
            })
    }
    //Get Specific API Axios Approved Hotel
    const [data1, setData1] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const getAllData1 = async () => {
        await axios.get(`${url}get-approved-hotels`)
            .then((response) => {
                console.log('Approve data')
                const allData1 = response.data;
                console.log(allData1);
                setData1(response.data);
                setLoading1(true)
                // }
            })
            .catch(error => console.error(`Error:${error}`));

    }
    //Get Specific API Axios Unapproved Hotel
    const [data2, setData2] = useState([]);
    const [loading2, setLoading2] = useState(false);
    const getAllData2 = async () => {
        await axios.get(`${url}get-unapproved-hotels`)
            .then((response) => {
                console.log('UnApprove data')
                const allData1 = response.data;
                console.log(allData1);
                setData2(response.data);
                setLoading2(true)
                // }
            })
            .catch(error => console.error(`Error:${error}`));

    }


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} className={classes.GridStyle}>

                    {/* heading */}
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={12}>
                            <Box
                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                            >
                                <Item sx={{ flexGrow: 2 }}>
                                    <Typography variant='h6'>Hotels</Typography>
                                </Item>
                                <Item sx={{ flexGrow: 1 }}>

                                    <Autocomplete
                                        id="free-solo-demo"
                                        freeSolo
                                        options={data.map((option) => option.hotelName)}
                                        renderInput={(params) => <TextField className={classes.user} {...params} label="Search" />}
                                    />
                                </Item>
                                {/* Add Hotel  */}
                                <Item>
                                    {/* startIcon={<AddIcon />} */}
                                    <Button variant="contained" color='success' style={addbtn} onClick={handleClickOpenAdd} >
                                        + Hotel
                                    </Button>
                                    {/* Dialog */}
                                    <Dialog open={openAdd} onClose={handleCloseAdd}>
                                        <DialogTitle>Add Hotel</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Fill All Fields to add new Hotel
                                            </DialogContentText>
                                            {/* Form  */}

                                            <form onSubmit={submitHandler}>
                                                <Grid container spacing={2} className={classes.gridS}>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Add Image
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        {/* <input type="text" name="image" className={classes.inputStyle} value={image} placeholder="image"
                        onChange={(e) => setImage(e.target.value) 
                        } /> */}
                                                        <ImageUpload />
                                                    </Grid>

                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Phone Number :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="name" className={classes.inputStyle} value={Phno} placeholder="Enter Phone Number"
                                                            onChange={
                                                                (e) => setPhno(e.target.value)
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Hotel Name :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="name" className={classes.inputStyle} value={hotelName} placeholder="Enter Hotel Name"
                                                            onChange={
                                                                (e) => sethotelName(e.target.value)
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>

                                                            Name:
                                                        </div>
                                                    </Grid>

                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="Name" className={classes.inputStyle} value={name} placeholder="Enter Name"
                                                            onChange={(e) => setName(e.target.value)
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Email
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="email" className={classes.inputStyle} value={email} placeholder="Enter Email"
                                                            onChange={(e) => setEmail(e.target.value)
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            City
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="city" className={classes.inputStyle} value={city} placeholder="Enter City"
                                                            onChange={(e) => setCity(e.target.value)
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Hotel Type
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="hoteltype" className={classes.inputStyle} value={hoteltype} placeholder="Enter Hotel Type"
                                                            onChange={(e) => setHotelType(e.target.value)
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Job Title
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="jobTitle" className={classes.inputStyle} value={jobTitle} placeholder="Enter Job Title"
                                                            onChange={(e) => setJobTitle(e.target.value)
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} md={6} >
                                                        <button className={classes.btnSubmit} type='submit'>Submit</button>
                                                    </Grid>

                                                </Grid>
                                            </form>

                                            {/* End form  */}
                                        </DialogContent>
                                        {/* <DialogActions>
                                            <Button onClick={handleCloseAdd}>Cancel</Button>
                                            <Button onClick={handleCloseAdd}>Subscribe</Button>
                                        </DialogActions> */}
                                    </Dialog>
                                    {/* Dialog End  */}
                                </Item>

                            </Box>
                        </Grid>
                        {/* Tabs  */}
                        <Grid item xs={12} md={12}>

                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab style={TabsStyle} label="View All Hotels" {...a11yProps(0)} />
                                        <Tab style={TabsStyle} label="Approved Hotels" {...a11yProps(1)} />
                                        <Tab style={TabsStyle} label="Unapproved Hotels" {...a11yProps(2)} />
                                        {/* <Tab style={TabsStyle} label="Online Hotels" {...a11yProps(3)} />
            <Tab style={TabsStyle} label="Offline Hotels" {...a11yProps(4)} /> */}
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    {/* Table  */}
                                    <TableContainer >
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell style={TextColor}>Image</TableCell>
                                                    <TableCell style={TextColor}>Hotel Name</TableCell>
                                                    <TableCell style={TextColor}>City</TableCell>
                                                    <TableCell style={TextColor}>Hotel Type</TableCell>
                                                    <TableCell style={TextColor}>Approved</TableCell>
                                                    <TableCell style={TextColor}>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>


                                                {loading && data.map((row) => (
                                                    <TableRow
                                                        key={row.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell style={TextColor} component="th" scope="row">

                                                            <img style={imgStyle} src={`https://hiiguest.com/${row.image}`} />

                                                        </TableCell>
                                                        <TableCell style={TextColor} >{row.hotelName}</TableCell>
                                                        <TableCell style={TextColor} >{row.city}</TableCell>

                                                        <TableCell style={TextColor} >{row.hotelType}</TableCell>
                                                        <TableCell style={TextColor} >
                                                            <Checkbox {...label} onChange={() => checkbox(row.phoneNo)} />
                                                        </TableCell>
                                                        <TableCell >
                                                            <button className={classes.btn} onClick={() => {
                                                                handleClickOpen(row.phoneNo)
                                                            }}>
                                                                < VisibilityIcon />
                                                            </button>
                                                            {/* Dialog  */}

                                                            <button className={classes.btn1}
                                                                onClick={() => {
                                                                    console.log(row.phoneNo)
                                                                    deleteData(row.phoneNo)
                                                                    // setOpen1(true);

                                                                }}
                                                            > <BackspaceIcon /></button>


                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                </TabPanel>
                                {/* Second Tab  */}
                                <TabPanel value={value} index={1}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Box
                                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                            >
                                                <Item sx={{ flexGrow: 1 }}>
                                                    <Typography variant='h6'>Approved Hotels</Typography>
                                                </Item>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            {/* Approved dispachers table  */}
                                            <TableContainer >
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={TextColor}>Image</TableCell>
                                                            <TableCell style={TextColor}>Hotel Name</TableCell>
                                                            <TableCell style={TextColor}>City</TableCell>
                                                            <TableCell style={TextColor}>Hotel Type</TableCell>
                                                            <TableCell style={TextColor}>Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {/* filter(data1=> data1.profileApproved=="true"). */}
                                                        {loading1 && data1.map((row) => (
                                                            <TableRow
                                                                key={row.name}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell style={TextColor} component="th" scope="row">
                                                                    <img style={imgStyle} src={`https://hiiguest.com/${row.image}`} />


                                                                </TableCell>
                                                                <TableCell style={TextColor} >{row.hotelName}</TableCell>
                                                                <TableCell style={TextColor} >{row.city}</TableCell>
                                                                <TableCell style={TextColor} >{row.hotelType}</TableCell>

                                                                <TableCell >
                                                                    <button className={classes.btn} onClick={() => {
                                                                        handleClickOpen(row.phoneNo)
                                                                    }}>
                                                                        < VisibilityIcon />
                                                                    </button>
                                                                    {/* Dialog  */}

                                                                    <button className={classes.btn1}
                                                                        onClick={() => {
                                                                            console.log(row.phoneNo)
                                                                            deleteData(row.phoneNo)
                                                                            // setOpen1(true);

                                                                        }}
                                                                    > <BackspaceIcon /></button>


                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>

                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                {/* Third tab  */}
                                <TabPanel value={value} index={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Box
                                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                            >
                                                <Item sx={{ flexGrow: 1 }}>
                                                    <Typography variant='h6'>Unapproved Hotels</Typography>
                                                </Item>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            {/* Approved dispachers table  */}
                                            <TableContainer >
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={TextColor}>Image</TableCell>
                                                            <TableCell style={TextColor}>Hotel Name</TableCell>
                                                            <TableCell style={TextColor}>City</TableCell>
                                                            <TableCell style={TextColor}>Hotel Type</TableCell>
                                                            <TableCell style={TextColor}>Approved</TableCell>

                                                            <TableCell style={TextColor}>Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {/* filter(data1=> data1.profileApproved=="true"). */}
                                                        {loading2 && data2.map((row) => (
                                                            <TableRow
                                                                key={row.name}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell style={TextColor} component="th" scope="row">
                                                                    <img style={imgStyle} src={`https://hiiguest.com/${row.image}`} />


                                                                </TableCell>
                                                                <TableCell style={TextColor} >{row.hotelName}</TableCell>
                                                                <TableCell style={TextColor} >{row.city}</TableCell>
                                                                <TableCell style={TextColor} >{row.hotelType}</TableCell>
                                                                <TableCell style={TextColor} >
                                                                    <Checkbox {...label} onChange={() => checkbox(row.phoneNo)} />
                                                                </TableCell>

                                                                <TableCell >
                                                                    <button className={classes.btn} onClick={() => {
                                                                        handleClickOpen(row.phoneNo)
                                                                    }}>
                                                                        < VisibilityIcon />
                                                                    </button>
                                                                    {/* Dialog  */}

                                                                    <button className={classes.btn1}
                                                                        onClick={() => {
                                                                            console.log(row.phoneNo)
                                                                            deleteData(row.phoneNo)
                                                                            // setOpen1(true);

                                                                        }}
                                                                    > <BackspaceIcon /></button>


                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>

                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={value} index={3}>113</TabPanel>
                                <TabPanel value={value} index={4}>114</TabPanel>
                            </Box>
                        </Grid>

                    </Grid>



                </Grid>

            </Grid>


        </div>
    )
}

export default HotelTable