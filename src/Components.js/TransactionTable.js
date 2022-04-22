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
    }
})
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


//end
// function createData(id, name, email, gender) {
//     return { id, name, email, gender };
// }

// const rows = [
//     createData(1, 'Rimsha Riaz', 'rimshanimo22@gmail.com', 'female'),
//     createData(2, 'Rimsha Riaz', 'rimshanimo22@gmail.com', 'female'),
//     createData(3, 'Rimsha Riaz', 'rimshanimo22@gmail.com', 'female'),
//     createData(4, 'Rimsha Riaz', 'rimshanimo22@gmail.com', 'female'),
// ];
// Dialog data 
// function createProfile(name, data) {
//     return { name, data };
// }

// const rows1 = [
//     createProfile('User Id', 1),
//     createProfile('User Name', 'Usama'),
//     createProfile('Full Name', 'Muhammad Usama'),
//     createProfile('Gender', 'Male'),
//     createProfile('Date of Birth', '--'),
//     createProfile('Country', '--'),
//     createProfile('Email', '--'),
//     createProfile('Bio', '--'),
//     createProfile('Genre', '--'),
// ];
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
function TransactionTable() {
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
        navigate('/profilevehicle',
            {
                state: {
                    post_id: idData,
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
        axios.get(`${url}get-all-vehicles`)
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
    const [Vname, setVname] = useState("");
    const [seats, setSeats] = useState("");
    const [price, setPrice] = useState("");


    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/create-vehicle', {
            image: image,
            name: Vname,
            seats: seats,
            price: price,
            

        }, { headers }).then(response => {
            console.log(response)
            window.alert('Created Vehicle Successfully')
        })
            .catch(err => {
                console.log(err)
            })
    }
   
     // Delete 
       // Alert 
    const [open1, setOpen1] = React.useState(false);
     const deleteData = (id) => {
        console.log('deleting phone no')
        console.log(id);
        axios.delete('https://hiiguest.com/delete-vehicle', {
            data: {
                _id: id
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
     //Get Specific API Axios
     const [data1, setData1] = useState([]);
     const [loading1, setLoading1] = useState(false);
     const getAllData1 = async () => {
         await axios.get(`${url}get-all-hotels`)
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
 
    return (
        <div>
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
                                    <Typography variant='h6'>Vehicles</Typography>
                                </Item>
                                {/* Add Hotel  */}
                                <Item>
                                    {/* startIcon={<AddIcon />} */}
                                    <Button variant="contained" color='success' onClick={handleClickOpenAdd} >
                                        + Vehicle
                                    </Button>
                                    {/* Dialog */}
                                    <Dialog open={openAdd} onClose={handleCloseAdd}>
                                        <DialogTitle>Add Hotel</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Fill All Fields to add new Vehicle
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
                                                            Vehicle Name :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="name" className={classes.inputStyle} value={Vname} placeholder="Enter Vehicle Name"
                                                            onChange={
                                                                (e) => setVname(e.target.value)
                                                            } 
                                                            />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>
                                                             Seats :
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="name" className={classes.inputStyle} value={seats} placeholder="Enter Seats"
                                                            onChange={
                                                                (e) => setSeats(e.target.value)
                                                            } 
                                                            />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <div className={classes.TextStyle}>

                                                           Price:
                                                        </div>
                                                    </Grid>

                                                    <Grid item xs={6} md={6}>
                                                        <input type="text" name="Name" className={classes.inputStyle} value={price} placeholder="Enter Price"
                                                            onChange={(e) => setPrice(e.target.value)
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
            <Tab style={TabsStyle} label="View All Vehicles" {...a11yProps(0)} />
        </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
        {/* Table  */}
        <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell style={TextColor}>Image</TableCell>
                                    <TableCell style={TextColor}> Name</TableCell>
                                    <TableCell style={TextColor}>Seats</TableCell>
                                    <TableCell style={TextColor}>Price</TableCell>
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
                                        <TableCell style={TextColor} >{row.name}</TableCell>
                                        <TableCell style={TextColor} >{row.seats}</TableCell>
                                        
                                        <TableCell style={TextColor} >{row.price}</TableCell>
                                       
                                        <TableCell >
                                            <button className={classes.btn} onClick={() => {
                                                                    handleClickOpen(row._id)
                                                                }}>
                                                < VisibilityIcon />
                                            </button>
                                            {/* Dialog  */}
                                           
                                            <button className={classes.btn1}
                                                onClick={() => {
                                                    console.log(row._id)
                                                    deleteData(row._id)
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
   
    
    </Box>
    </Grid>

                    </Grid>
                    


                </Grid>

            </Grid>


        </div>
    )
}

export default TransactionTable