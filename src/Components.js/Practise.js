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
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


//dialog
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// Alert 
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import { makeStyles } from '@material-ui/core/styles'
// Axios 
import axios from 'axios'
// Checkbox 
import Checkbox from '@mui/material/Checkbox';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProfileData from './ProfileData';
// Dialog 
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ImageUpload from '../Pages.js/ImageUpload'

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
    }, HeadingDialog: {
        color: 'black',
        marginTop: '10px',
        fontWeight: 'bold',
        justifyContent: 'center',
        marginLeft: '36%'

    }, btnSubmit: {
        backgroundColor: '#36f195',
        padding: '10px',
        fontSize: '15px',
        border: 'transparent',
        borderRadius: '5px',
        color: 'white',
        marginLeft: '234px'
    }, dot: {
        height: "25px",
        width: '25px',
        backgroundColor: 'green',
        borderRadius: '50%',
        display: 'inline-block'

    }, dot1: {
        height: "25px",
        width: '25px',
        backgroundColor: 'red',
        borderRadius: '50%',
        display: 'inline-block'

    }
})

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
const TextColor = {
    color: '#9a9cab',
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


function Practise() {
    // Active status 
    const headers = {
        'Content-Type': 'application/json'
    }
    const checkbox = (Did) => {
        console.log(Did);

        axios.put('https://hiiguest.com/approve-driver-profile', {
            phoneNo: Did
        }, { headers }).then(response => {
            console.log(response);
            console.log('working fine')
            // setShow(true);
        })
            .catch(err => {
                console.log(err)
            })


    }

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
        navigate('/profile',
            {
                state: {
                    post_id: idData,
                }
            });
    };
    const handleClose = () => {
        setOpen(false);
    };
    // Alert 
    const [open1, setOpen1] = React.useState(false);
    //Get API Axios
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = 'https://hiiguest.com/';
    const getAllData = async () => {
        await axios.get(`${url}get-all-drivers`)
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
        // getAllDataUpdate();
    }, []);

    //Get Specific API Axios
    const [data1, setData1] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const getAllData1 = async () => {
        await axios.get(`${url}get-all-drivers`)
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

    // Add 
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    const [compPhno, setcompPhno] = useState("");
    const [comName, setcompName] = useState("");
    const [image, setImage] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [VcompanyOfManufacture, setVcompanyOfManufacture] = useState("");
    const [VplateNumber, setVplateNumber] = useState("");
    const [Vyearofmanuf, setVyearofmanuf] = useState("");
    const [vehicleColor, setvehicleColor] = useState("");
    const [driverLicense, setdriverLicense] = useState("");
    const [vehicleOwnership, setvehicleOwnership] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/create-driver', {
            company: {
                phoneNo: compPhno,
                name: comName
            },
            image: image,
            phoneNo: phoneNo,
            name: name,
            email: email,
            gender: gender,
            vehicleDetails: {
                companyOfManufacture: VcompanyOfManufacture,
                plateNumber: VplateNumber,
                yearOfManufacture: Vyearofmanuf,
                vehicleColor: vehicleColor
            }, documents: {
                driverLicense: driverLicense,
                vehicleOwnership: vehicleOwnership
            }

        }, { headers }).then(response => {
            console.log(response)
            window.alert('Create DriverSuccessfully')
        })
            .catch(err => {
                console.log(err)
            })
    }
    // Update 
    const [openUpdate, setOpenUpdate] = React.useState(false);

    const handleClickOpenUpdate = (phoneNo) => {
        console.log('Edit')
        console.log(phoneNo);
        axios.post('https://hiiguest.com/get-driver', {
            phoneNo: phoneNo
        }).then((response) => {
            console.log('updating data')
            const allData = response.data;
            console.log(allData);
            // setcompPhno1(allData.ownerCompany.phoneNo);
            console.log(allData.ownerCompany.phoneNo)

            //    setData(response.data);
            // setData1(allData);
        })
            .catch(error => console.error(`Error:${error}`));

    };

    const handleCloseUpdate = () => {
        setOpenUpdate(false);
    };
    const [compPhno1, setcompPhno1] = useState("");
    const [comName1, setcompName1] = useState("");
    const [image1, setImage1] = useState("");
    const [phoneNo1, setphoneNo1] = useState("");
    const [name1, setName1] = useState("");
    const [email1, setEmail1] = useState("");
    const [gender1, setGender1] = useState("");
    const [VcompanyOfManufacture1, setVcompanyOfManufacture1] = useState("");
    const [VplateNumber1, setVplateNumber1] = useState("");
    const [Vyearofmanuf1, setVyearofmanuf1] = useState("");
    const [vehicleColor1, setvehicleColor1] = useState("");
    const [driverLicense1, setdriverLicense1] = useState("");
    const [vehicleOwnership1, setvehicleOwnership1] = useState("");

    const submitHandlerUpdate = (e) => {
        e.preventDefault()
        // POst Request 
        axios.put('https://hiiguest.com/edit-driver', {
            company: {
                phoneNo: compPhno1,
                name: comName1
            },
            image: image1,
            phoneNo: phoneNo1,
            name: name,
            email: email1,
            gender: gender1,
            vehicleDetails: {
                companyOfManufacture: VcompanyOfManufacture1,
                plateNumber: VplateNumber1,
                yearOfManufacture: Vyearofmanuf1,
                vehicleColor: vehicleColor1
            }

        }, { headers }).then(response => {
            console.log(response)
            window.alert('Create Driver Successfully')
        })
            .catch(err => {
                console.log(err)
            })
    }
    // Delete 
    const deleteData = (phoneNo) => {
        console.log('deleting phone no')
        console.log(phoneNo);
        axios.delete('https://hiiguest.com/delete-driver', {
            data: {
                phoneNo: phoneNo
            }
        }, { headers })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setOpen1(true);
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            {/* {show ? */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} className={classes.GridStyle}>

                    {/* heading */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Collapse in={open1}>
                                <Alert variant="filled" severity="error"
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
                                    Data Deleted Successfully
                                </Alert>
                            </Collapse>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box
                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                            >
                                <Item sx={{ flexGrow: 1 }}>
                                    <Typography variant='h6'>Drivers</Typography>
                                </Item>
                                <Item>
                                    {/* startIcon={<AddIcon />} */}
                                    <Button variant="contained" color='success' onClick={handleClickOpenAdd} >
                                        + Driver
                                    </Button>
                                    {/* Dialog */}
                                    <Dialog open={openAdd} onClose={handleCloseAdd}>
                                        <DialogTitle>Add Driver</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Fill All Fields to add new driver
                                            </DialogContentText>
                                            {/* Form  */}

                                            {/* <h1>Post Data using axios</h1> */}
                                            <form onSubmit={submitHandler}>
                                                <Grid container spacing={2} className={classes.gridS}>
                                                    <Grid item xs={12} md={12}>
                                                        <div className={classes.HeadingDialog}>
                                                            Company Details
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Company Phone Number :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="name" className={classes.inputStyle} value={compPhno} placeholder="Enter Company Phone Number"
                                                            onChange={
                                                                (e) => setcompPhno(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>

                                                            Company Name:
                                                        </div>
                                                    </Grid>

                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="compName" className={classes.inputStyle} value={comName} placeholder="Enter Company Name"
                                                            onChange={(e) => setcompName(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <div className={classes.HeadingDialog}>
                                                            Personal Details
                                                        </div>
                                                    </Grid>
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
                                                            Phone Number
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="price" className={classes.inputStyle} value={phoneNo} placeholder="Enter Phone Number"
                                                            onChange={(e) => setphoneNo(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Name:
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="name" className={classes.inputStyle} value={name} placeholder="Enter Name"
                                                            onChange={(e) => setName(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Email:
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="email" className={classes.inputStyle} value={email} placeholder="Enter Email"
                                                            onChange={(e) => setEmail(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Gender:
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="gender" className={classes.inputStyle} value={gender} placeholder="Enter Gender"
                                                            onChange={(e) => setGender(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <div className={classes.HeadingDialog}>
                                                            Vehicle Details
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Company Of Manufacture :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="VcompanyOfManufacture" className={classes.inputStyle} value={VcompanyOfManufacture} placeholder="Enter Company of Manufacture"
                                                            onChange={(e) => setVcompanyOfManufacture(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Plate Number :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="VplateNumber" className={classes.inputStyle} value={VplateNumber} placeholder="Enter Plate Number"
                                                            onChange={(e) => setVplateNumber(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Year Of Manufacture :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="Vyearofmanuf" className={classes.inputStyle} value={Vyearofmanuf} placeholder="Enter Year of Manufacture"
                                                            onChange={(e) => setVyearofmanuf(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Vehicle Color :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="vehicleColor" className={classes.inputStyle} value={vehicleColor} placeholder="Enter Vehicle Color"
                                                            onChange={(e) => setvehicleColor(e.target.value)
                                                            } />
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <div className={classes.HeadingDialog}>
                                                            Documents Details
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Driver License :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        {/* <input type="text" name="vehicleColor" value={driverLicense} placeholder="driverLicense"
                        onChange={(e) => setdriverLicense(e.target.value) 
                        } /> */}
                                                        <ImageUpload />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                            Vehicle Ownership :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        {/* <input type="text" name="vehicleColor" value={vehicleOwnership} placeholder="vehicleOwnership"
                        onChange={(e) => setvehicleOwnership(e.target.value) 
                        } /> */}
                                                        <ImageUpload />
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

                    </Grid>
                    <Grid item xs={12} md={12}>

                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab style={TabsStyle} label="View All Drivers" {...a11yProps(0)} />
                                    <Tab style={TabsStyle} label="Approved Drivers" {...a11yProps(1)} />
                                    <Tab style={TabsStyle} label="Unapproved Drivers" {...a11yProps(2)} />
                                    <Tab style={TabsStyle} label="Online Drivers" {...a11yProps(3)} />
                                    <Tab style={TabsStyle} label="Offline Drivers" {...a11yProps(4)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <TableContainer >
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell style={TextColor}>Driver Name</TableCell>
                                                <TableCell style={TextColor}>Email</TableCell>
                                                <TableCell style={TextColor}>Phone Number</TableCell>
                                                <TableCell style={TextColor}>Vehicle Company</TableCell>
                                                <TableCell style={TextColor}>Approved</TableCell>
                                                <TableCell style={TextColor}>Online Status</TableCell>
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
                                                        {row.name}

                                                    </TableCell>
                                                    <TableCell style={TextColor} >{row.email}</TableCell>
                                                    <TableCell style={TextColor} >{row.phoneNo}</TableCell>
                                                    <TableCell style={TextColor} >{row.ownerCompany.name}</TableCell>
                                                    <TableCell style={TextColor} >
                                                        <Checkbox {...label} onChange={() => checkbox(row.phoneNo)} />
                                                    </TableCell>
                                                    {/* Active status  */}
                                                    <TableCell style={TextColor} >
                                                        {/* {
                                                            
                                                            setActive(row.activeStatus)
                                                            } */}

                                                        {/* <span className={classes.dot}></span> */}
                                                        {row.activeStatus ? <span className={classes.dot}></span> : <span className={classes.dot1}></span>}

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
                                                        > <BackspaceIcon />
                                                        </button>
                                                        {/* Edit Driver APIS  */}
                                                        {/* <button className={classes.btn}

                                                        onClick={handleClickOpenUpdate(row.phoneNo)}

                                                        > <EditIcon /></button> */}
                                                        {/* Dialog */}
                                                        <Dialog open={openUpdate} onClose={handleCloseUpdate}>
                                                            <DialogTitle>Update Driver</DialogTitle>
                                                            <DialogContent>
                                                                <DialogContentText>
                                                                    Fill All Fields to update driver
                                                                </DialogContentText>
                                                                {/* Form  */}

                                                                <form onSubmit={submitHandler}>
                                                                    <Grid container spacing={2} className={classes.gridS}>
                                                                        <Grid item xs={12} md={12}>
                                                                            <div className={classes.HeadingDialog}>
                                                                                Company Details
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Company Phone Number :
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="name" className={classes.inputStyle} value={compPhno} placeholder="Enter Company Phone Number"
                                                                                onChange={
                                                                                    (e) => setcompPhno(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>

                                                                                Company Name:
                                                                            </div>
                                                                        </Grid>

                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="compName" className={classes.inputStyle} value={comName} placeholder="Enter Company Name"
                                                                                onChange={(e) => setcompName(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={12} md={12}>
                                                                            <div className={classes.HeadingDialog}>
                                                                                Personal Details
                                                                            </div>
                                                                        </Grid>
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
                                                                                Phone Number
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="price" className={classes.inputStyle} value={phoneNo} placeholder="Enter Phone Number"
                                                                                onChange={(e) => setphoneNo(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Name:
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="name" className={classes.inputStyle} value={name} placeholder="Enter Name"
                                                                                onChange={(e) => setName(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Email:
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="email" className={classes.inputStyle} value={email} placeholder="Enter Email"
                                                                                onChange={(e) => setEmail(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Gender:
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="gender" className={classes.inputStyle} value={gender} placeholder="Enter Gender"
                                                                                onChange={(e) => setGender(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={12} md={12}>
                                                                            <div className={classes.HeadingDialog}>
                                                                                Vehicle Details
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Company Of Manufacture :
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="VcompanyOfManufacture" className={classes.inputStyle} value={VcompanyOfManufacture} placeholder="Enter Company of Manufacture"
                                                                                onChange={(e) => setVcompanyOfManufacture(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Plate Number :
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="VplateNumber" className={classes.inputStyle} value={VplateNumber} placeholder="Enter Plate Number"
                                                                                onChange={(e) => setVplateNumber(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Year Of Manufacture :
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="Vyearofmanuf" className={classes.inputStyle} value={Vyearofmanuf} placeholder="Enter Year of Manufacture"
                                                                                onChange={(e) => setVyearofmanuf(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Vehicle Color :
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <input type="text" name="vehicleColor" className={classes.inputStyle} value={vehicleColor} placeholder="Enter Vehicle Color"
                                                                                onChange={(e) => setvehicleColor(e.target.value)
                                                                                } />
                                                                        </Grid>
                                                                        <Grid item xs={12} md={12}>
                                                                            <div className={classes.HeadingDialog}>
                                                                                Documents Details
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Driver License :
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            {/* <input type="text" name="vehicleColor" value={driverLicense} placeholder="driverLicense"
                        onChange={(e) => setdriverLicense(e.target.value) 
                        } /> */}
                                                                            <ImageUpload />
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <div className={classes.TextStyle}>
                                                                                Vehicle Ownership :
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            {/* <input type="text" name="vehicleColor" value={vehicleOwnership} placeholder="vehicleOwnership"
                        onChange={(e) => setvehicleOwnership(e.target.value) 
                        } /> */}
                                                                            <ImageUpload />
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6} >
                                                                            <button className={classes.btnSubmit} type='submit'>Submit</button>
                                                                        </Grid>
                                                                    </Grid>


                                                                </form>
                                                                {/* End form  */}
                                                            </DialogContent>
                                                        </Dialog>
                                                        {/* Dialog End  */}


                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12}>
                                        <Box
                                            sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                        >
                                            <Item sx={{ flexGrow: 1 }}>
                                                <Typography variant='h6'>Approved Drivers</Typography>
                                            </Item>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        {/* Approved dispachers table  */}
                                        <TableContainer >
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell style={TextColor}>Driver Name</TableCell>
                                                        <TableCell style={TextColor}>Email</TableCell>
                                                        <TableCell style={TextColor}>Phone Number</TableCell>
                                                        <TableCell style={TextColor}>Vehicle Company</TableCell>
                                                        <TableCell style={TextColor}>Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {/* filter(data1=> data1.profileApproved=="true"). */}
                                                    {loading1 && data1.filter(data1 => data1.profileApproved == true).map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {row.name}

                                                            </TableCell>
                                                            <TableCell style={TextColor} >{row.email}</TableCell>
                                                            <TableCell style={TextColor} >{row.phoneNo}</TableCell>
                                                            <TableCell style={TextColor} >{row.ownerCompany.name}</TableCell>

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
                            <TabPanel value={value} index={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12}>
                                        <Box
                                            sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                        >
                                            <Item sx={{ flexGrow: 1 }}>
                                                <Typography variant='h6'>Unapproved Drivers</Typography>
                                            </Item>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        {/* Unapproved dispachers table  */}
                                        <TableContainer >
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell style={TextColor}>Driver Name</TableCell>
                                                        <TableCell style={TextColor}>Email</TableCell>
                                                        <TableCell style={TextColor}>Phone Number</TableCell>
                                                        <TableCell style={TextColor}>Vehicle Company</TableCell>
                                                        <TableCell style={TextColor}>Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {/* filter(data1=> data1.profileApproved=="true"). */}
                                                    {loading1 && data1.filter(data1 => data1.profileApproved == false).map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {row.name}

                                                            </TableCell>
                                                            <TableCell style={TextColor} >{row.email}</TableCell>
                                                            <TableCell style={TextColor} >{row.phoneNo}</TableCell>
                                                            <TableCell style={TextColor} >{row.ownerCompany.name}</TableCell>

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
                            <TabPanel value={value} index={3}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12}>
                                        <Box
                                            sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                        >
                                            <Item sx={{ flexGrow: 1 }}>
                                                <Typography variant='h6'>Online Drivers</Typography>
                                            </Item>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        {/* Unapproved dispachers table  */}
                                        <TableContainer >
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell style={TextColor}>Driver Name</TableCell>
                                                        <TableCell style={TextColor}>Email</TableCell>
                                                        <TableCell style={TextColor}>Phone Number</TableCell>
                                                        <TableCell style={TextColor}>Vehicle Company</TableCell>
                                                        <TableCell style={TextColor}>Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {/* filter(data1=> data1.profileApproved=="true"). */}
                                                    {loading1 && data1.filter(data1 => data1.activeStatus == true).map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {row.name}

                                                            </TableCell>
                                                            <TableCell style={TextColor} >{row.email}</TableCell>
                                                            <TableCell style={TextColor} >{row.phoneNo}</TableCell>
                                                            <TableCell style={TextColor} >{row.ownerCompany.name}</TableCell>

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
                            <TabPanel value={value} index={4}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12}>
                                        <Box
                                            sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                        >
                                            <Item sx={{ flexGrow: 1 }}>
                                                <Typography variant='h6'>Offline Drivers</Typography>
                                            </Item>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        {/* Unapproved dispachers table  */}
                                        <TableContainer >
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell style={TextColor}>Driver Name</TableCell>
                                                        <TableCell style={TextColor}>Email</TableCell>
                                                        <TableCell style={TextColor}>Phone Number</TableCell>
                                                        <TableCell style={TextColor}>Vehicle Company</TableCell>
                                                        <TableCell style={TextColor}>Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {/* filter(data1=> data1.profileApproved=="true"). */}
                                                    {loading1 && data1.filter(data1 => data1.activeStatus == false).map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {row.name}

                                                            </TableCell>
                                                            <TableCell style={TextColor} >{row.email}</TableCell>
                                                            <TableCell style={TextColor} >{row.phoneNo}</TableCell>
                                                            <TableCell style={TextColor} >{row.ownerCompany.name}</TableCell>

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
                        </Box>
                    </Grid>
                    {/* Table  */}



                </Grid>

            </Grid>


            {/* :
                <ProfileData/>
            }  */}





        </div>
    )
}

export default Practise