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
import Swal from 'sweetalert2'

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
function HotelTypesTable() {
     // Tabs 
     const [value, setValue] = React.useState(0);

     const handleChange = (event, newValue) => {
         setValue(newValue);
     };
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);


    const navigate = useNavigate();

    const handleClickOpen = (idData) => {
        console.log(idData);
        // setShow(false);
        navigate('/profilehotel',
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
        axios.get(`${url}get-hotel-types`)
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

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

 


    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/create-hotel-type', {
           
            name: name,
           price:price

        }, { headers }).then(response => {
            console.log(response)
            setOpenAdd(false)
            // window.alert('Created Hotel Type Successfully')
            let timerInterval
            Swal.fire({
                title: 'Created Hotel Type Successfully',
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
                                    <Typography variant='h6'>Hotels Type</Typography>
                                </Item>
                                {/* Add Hotel  */}
                                <Item>
                                    {/* startIcon={<AddIcon />} */}
                                    <Button variant="contained" color='success' onClick={handleClickOpenAdd} >
                                        + Hotel Type
                                    </Button>
                                    {/* Dialog */}
                                    <Dialog open={openAdd} onClose={handleCloseAdd}>
                                        <DialogTitle>Add Hotel</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Fill All Fields to add new Hotel Type
                                            </DialogContentText>
                                            {/* Form  */}

                                            <form onSubmit={submitHandler}>
                                                <Grid container spacing={2} className={classes.gridS}>
                                                
                                                
                                                    
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
            <Tab style={TabsStyle} label="View All Hotel Type" {...a11yProps(0)} />
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
                                    <TableCell style={TextColor}>Hotel Id</TableCell>
                                    <TableCell style={TextColor}>Name</TableCell>
                                    <TableCell style={TextColor}>Price</TableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>


                                {loading && data.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell style={TextColor} component="th" scope="row">
{row._id}

                                        </TableCell>
                                        <TableCell style={TextColor} >{row.name}</TableCell>
                                        <TableCell style={TextColor} >{row.price}</TableCell>
                                        
                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

    </TabPanel>
 
    {/* Third tab  */}
   
    </Box>
    </Grid>

                    </Grid>
                    


                </Grid>

            </Grid>


        </div>
    )
}

export default HotelTypesTable