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
    },
    user: {
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
const OrderTable = (props) => {
     // Search 
     const [searchtext, setsearchtext] = React.useState("")
     const [allData, setAllData] = useState([]);
     const handleSearch = (event) => {
         console.log('search')
         // .toLowerCase()
         let value = event.target.value;
         let result = [];
         console.log(value);
                      
         result = data1.filter((row) => {
             return row.orderBy.name.search(value) != -1;
         });
         console.log('result')
         console.log(result);
         setData(result);
  
 
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
        navigate('/profileorders',
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
        axios.get(`${url}get-all-orders`)
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
        getAllData3();
        getAllData4();
        getAllData5();
    }, []);

    const headers = {
        'Content-Type': 'application/json'
    }


    // Delete 
    // Alert 
    const [open1, setOpen1] = React.useState(false);
    const deleteData = (id) => {
        console.log('deleting Id')
        console.log(id);
        axios.delete('https://hiiguest.com/delete-order', {
            data: {
                _id: id
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
                            'Order has been deleted.',
                            'success'
                        )
                                               //    refresh componenet 
                axios.get(`${url}get-all-orders`)
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
    //Get Specific API Axios Completed Orders
    const [data1, setData1] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const getAllData1 = async () => {
        await axios.get(`${url}get-completed-orders`)
            .then((response) => {
                console.log('Completed Orders data')
                const allData1 = response.data;
                console.log(allData1);
                setData1(response.data);
                setLoading1(true)
                // }
            })
            .catch(error => console.error(`Error:${error}`));

    }
    //Get Specific API Axios Scheduled Orders
    const [data2, setData2] = useState([]);
    const [loading2, setLoading2] = useState(false);
    const getAllData2 = async () => {
        await axios.get(`${url}get-scheduled-orders`)
            .then((response) => {
                console.log('Scheduled Orders data')
                const allData1 = response.data;
                console.log(allData1);
                setData2(response.data);
                setLoading2(true)
                // }
            })
            .catch(error => console.error(`Error:${error}`));

    }
    //Get Specific API Axios Canceled Orders
    const [data3, setData3] = useState([]);
    const [loading3, setLoading3] = useState(false);
    const getAllData3 = async () => {
        await axios.get(`${url}get-cancelled-orders`)
            .then((response) => {
                console.log('Completed Orders data')
                const allData1 = response.data;
                console.log(allData1);
                setData3(response.data);
                setLoading3(true)
                // }
            })
            .catch(error => console.error(`Error:${error}`));

    }
    //Get Specific API Axios bill cleared Orders
    const [data4, setData4] = useState([]);
    const [loading4, setLoading4] = useState(false);
    const getAllData4 = async () => {
        await axios.get(`${url}get-bill-cleared-orders`)
            .then((response) => {
                console.log('Completed Orders data')
                const allData1 = response.data;
                console.log(allData1);
                setData4(response.data);
                setLoading4(true)
                // }
            })
            .catch(error => console.error(`Error:${error}`));

    }
    //Get Specific API Axios bil Uncleared Orders
    const [data5, setData5] = useState([]);
    const [loading5, setLoading5] = useState(false);
    const getAllData5 = async () => {
        await axios.get(`${url}get-bill-uncleared-orders`)
            .then((response) => {
                console.log('Completed Orders data')
                const allData1 = response.data;
                console.log(allData1);
                setData5(response.data);
                setLoading5(true)
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
                                    <Typography variant='h6'>Orders</Typography>
                                </Item>
                                <Item sx={{ flexGrow: 1 }}>

                                    <Autocomplete
                                        id="free-solo-demo"
                                        freeSolo
                                        options={data.map((option) => option.orderBy.name)}
                                        renderInput={(params) => <TextField className={classes.user} {...params} 
                                        onChange={(event) =>{
                                            handleSearch(event)
                                          
                                       }}
                                       label="Search" />}
                                    />
                                </Item>


                            </Box>
                        </Grid>
                        {/* Tabs  */}
                        <Grid item xs={12} md={12}>

                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab style={TabsStyle} label="All Orders" {...a11yProps(0)} />
                                        <Tab style={TabsStyle} label="Completed Orders" {...a11yProps(1)} />
                                        <Tab style={TabsStyle} label="Scheduled Orders" {...a11yProps(2)} />
                                        <Tab style={TabsStyle} label="Cancelled Orders" {...a11yProps(3)} />
                                        <Tab style={TabsStyle} label="Billed Orders" {...a11yProps(4)} />
                                        <Tab style={TabsStyle} label="Unbilled Orders" {...a11yProps(5)} />

                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    {/* Table  */}
                                    <TableContainer >
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell style={TextColor}>Order No</TableCell>
                                                    <TableCell style={TextColor}>Name</TableCell>
                                                    <TableCell style={TextColor}>Hotel Name</TableCell>
                                                    <TableCell style={TextColor}>Vehicle Name</TableCell>
                                                    <TableCell style={TextColor}>Address</TableCell>
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
                                                            {row.orderNo}


                                                        </TableCell>
                                                        <TableCell style={TextColor} >{row.orderBy.name}</TableCell>
                                                        <TableCell style={TextColor} >{row.orderBy.hotelName}</TableCell>

                                                        <TableCell style={TextColor} >{row.selectedVehicle.name}</TableCell>
                                                        <TableCell style={TextColor} >
                                                            {row.dropoffLocation.address}
                                                        </TableCell>
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
                                {/* Second Tab  */}
                                <TabPanel value={value} index={1}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Box
                                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                            >
                                                <Item sx={{ flexGrow: 1 }}>
                                                    <Typography variant='h6'>Completed Orders</Typography>
                                                </Item>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            {/* completed orders table  */}
                                            <TableContainer >
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={TextColor}>Order No</TableCell>
                                                            <TableCell style={TextColor}>Name</TableCell>
                                                            <TableCell style={TextColor}>Hotel Name</TableCell>
                                                            <TableCell style={TextColor}>Vehicle Name</TableCell>
                                                            <TableCell style={TextColor}>Address</TableCell>
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
                                                                    {row.orderNo}


                                                                </TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.name}</TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.hotelName}</TableCell>

                                                                <TableCell style={TextColor} >{row.selectedVehicle.name}</TableCell>
                                                                <TableCell style={TextColor} >
                                                                    {row.dropoffLocation.address}
                                                                </TableCell>

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
                                                    <Typography variant='h6'>Scheduled Orders</Typography>
                                                </Item>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            {/* Scheduled Orders table  */}
                                            <TableContainer >
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={TextColor}>Order No</TableCell>
                                                            <TableCell style={TextColor}>Name</TableCell>
                                                            <TableCell style={TextColor}>Hotel Name</TableCell>
                                                            <TableCell style={TextColor}>Vehicle Name</TableCell>
                                                            <TableCell style={TextColor}>Address</TableCell>
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
                                                                    {row.orderNo}


                                                                </TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.name}</TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.hotelName}</TableCell>

                                                                <TableCell style={TextColor} >{row.selectedVehicle.name}</TableCell>
                                                                <TableCell style={TextColor} >
                                                                    {row.dropoffLocation.address}
                                                                </TableCell>

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
                                                    <Typography variant='h6'>Cancelled Orders</Typography>
                                                </Item>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            {/* Scheduled Orders table  */}
                                            <TableContainer >
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={TextColor}>Order No</TableCell>
                                                            <TableCell style={TextColor}>Name</TableCell>
                                                            <TableCell style={TextColor}>Hotel Name</TableCell>
                                                            <TableCell style={TextColor}>Vehicle Name</TableCell>
                                                            <TableCell style={TextColor}>Address</TableCell>
                                                            <TableCell style={TextColor}>Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {/* filter(data1=> data1.profileApproved=="true"). */}
                                                        {loading3 && data3.map((row) => (
                                                            <TableRow
                                                                key={row.name}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell style={TextColor} component="th" scope="row">
                                                                    {row.orderNo}


                                                                </TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.name}</TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.hotelName}</TableCell>

                                                                <TableCell style={TextColor} >{row.selectedVehicle.name}</TableCell>
                                                                <TableCell style={TextColor} >
                                                                    {row.dropoffLocation.address}
                                                                </TableCell>

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
                                                    <Typography variant='h6'>Bill Cleared Orders</Typography>
                                                </Item>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            {/* Scheduled Orders table  */}
                                            <TableContainer >
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={TextColor}>Order No</TableCell>
                                                            <TableCell style={TextColor}>Name</TableCell>
                                                            <TableCell style={TextColor}>Hotel Name</TableCell>
                                                            <TableCell style={TextColor}>Vehicle Name</TableCell>
                                                            <TableCell style={TextColor}>Address</TableCell>
                                                            <TableCell style={TextColor}>Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {/* filter(data1=> data1.profileApproved=="true"). */}
                                                        {loading4 && data4.map((row) => (
                                                            <TableRow
                                                                key={row.name}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell style={TextColor} component="th" scope="row">
                                                                    {row.orderNo}


                                                                </TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.name}</TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.hotelName}</TableCell>

                                                                <TableCell style={TextColor} >{row.selectedVehicle.name}</TableCell>
                                                                <TableCell style={TextColor} >
                                                                    {row.dropoffLocation.address}
                                                                </TableCell>

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

                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Box
                                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                            >
                                                <Item sx={{ flexGrow: 1 }}>
                                                    <Typography variant='h6'>Unbilled Orders</Typography>
                                                </Item>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            {/* Scheduled Orders table  */}
                                            <TableContainer >
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={TextColor}>Order No</TableCell>
                                                            <TableCell style={TextColor}>Name</TableCell>
                                                            <TableCell style={TextColor}>Hotel Name</TableCell>
                                                            <TableCell style={TextColor}>Vehicle Name</TableCell>
                                                            <TableCell style={TextColor}>Address</TableCell>
                                                            <TableCell style={TextColor}>Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {/* filter(data1=> data1.profileApproved=="true"). */}
                                                        {loading5 && data5.map((row) => (
                                                            <TableRow
                                                                key={row.name}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell style={TextColor} component="th" scope="row">
                                                                    {row.orderNo}


                                                                </TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.name}</TableCell>
                                                                <TableCell style={TextColor} >{row.orderBy.hotelName}</TableCell>

                                                                <TableCell style={TextColor} >{row.selectedVehicle.name}</TableCell>
                                                                <TableCell style={TextColor} >
                                                                    {row.dropoffLocation.address}
                                                                </TableCell>

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

                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            </Box>
                        </Grid>

                    </Grid>



                </Grid>

            </Grid>


        </div>
    )
}

export default OrderTable