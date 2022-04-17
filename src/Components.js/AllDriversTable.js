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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const useStyles = makeStyles({
    GridStyle: {
        border: ' 1px solid #e4e6ef',
        borderRadius: '5px',
        marginTop: '45px',
        padding: '30px',
    }, btn: {
        backgroundColor: '#83d8ae',
        border: ' none',
        color: 'white',
        padding: '12px 16px',
        fontSize: ' 16px',
        cursor: 'pointer',
        borderRadius: '5px'
    }, btn1: {
        backgroundColor: '#fc9494',
        border: ' none',
        color: 'white',
        padding: '12px 16px',
        fontSize: ' 16px',
        marginLeft: '10px',
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


function AllDriversTable() {
    const headers = {
        'Content-Type': 'application/json'
    }
    const checkbox = (Did) => {
        console.log(Did);

        axios.put('https://hiiguest.com/approve-driver-profile', {
            phoneNo:Did
        },{ headers }).then(response => {
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
        navigate('/profiledata',
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
    const getAllData = () => {
        axios.get(`${url}get-all-drivers`)
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

    //Get Specific API Axios
    const [data1, setData1] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const getAllData1 = () => {
        axios.get(`${url}get-all-drivers`)
            .then((response) => {
                const allData = response.data;
                console.log(allData);
                setData1(response.data);
                setDriver(response.data);
                console.log('data driver')
                console.log(driver);
                setLoading1(true)
            })
            .catch(error => console.error(`Error:${error}`));

    }

    const [driver, setDriver] = useState([]);

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
                                    <Button variant="contained" color='success' >
                                        See All
                                    </Button>
                                </Item>

                            </Box>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={12}>

                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab style={TabsStyle} label="View All Dispachers" {...a11yProps(0)} />
                                    <Tab style={TabsStyle} label="Approved/Unapproved  Dispachers" {...a11yProps(1)} />
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
                                                <TableCell style={TextColor}>Approve/Unapprove</TableCell>
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
                                                    <TableCell >
                                                        <button className={classes.btn} onClick={() => {
                                                            handleClickOpen(row.phoneNo)
                                                        }}>
                                                            < VisibilityIcon />
                                                        </button>
                                                        {/* Dialog  */}

                                                        <button className={classes.btn1}
                                                            onClick={() => {
                                                                setOpen1(true);

                                                            }}
                                                        > <BackspaceIcon /></button>


                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Approved Dispachers
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

export default AllDriversTable