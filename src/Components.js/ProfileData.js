import React, { useState, useEffect } from 'react'
import { Container, Paper } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@material-ui/core/styles'
import VisibilityIcon from '@mui/icons-material/Visibility';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import axios from 'axios'
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar } from '@material-ui/core';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
const TextColor = {
    color: '#9a9cab',
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
// Dialog 
const DialogStyle = {
    // width:'100%'
    height: '400px',
    width: '500px',
}
const logoStyle = {
    width: '31%',
    height: '100%',
    marginBottom: '20px'
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

function ProfileData() {
    const { state } = useLocation();
    const classes = useStyles();
    const headers = {
        'Content-Type': 'application/json'
    }
    // Tabs 
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    //   Api 
    const [data, setData] = useState([]);

    const getAllData = () => {
        const phoneNo = state.post_id;
        axios.post('https://hiiguest.com/get-driver', {
            phoneNo: phoneNo
        }, { headers }).then(response => {
            console.log('response')
            console.log(response);
            setData(response.data);
            console.log(data);

            // setShow(true);
        })
            .catch(err => {
                console.log(err)
            })


    }
    useEffect(() => {
        getAllData();
    }, [])

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
    // Dialog 
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    // Document print 
    let componentRef = useRef(null);

    return (
        <>
        {/* AppBAr  */}
            {console.log(state.post_id)}
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} className={classes.GridStyle}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Box
                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                            >
                                <Item sx={{ flexGrow: 1 }}>
                                    <Typography variant='h6'>Profile</Typography>
                                </Item>
                                <Item>
                                    {/* startIcon={<AddIcon />} */}
                                    <Button variant="contained" color='success' >
                                        See All
                                    </Button>
                                </Item>

                            </Box>
                        </Grid>
                        {/* Seciong Grid 
                         */}
                        <Grid item xs={12} md={12}>

                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab style={TabsStyle} label="Profile" {...a11yProps(0)} />
                                        <Tab style={TabsStyle} label="Documents" {...a11yProps(1)} />
                                        <Tab style={TabsStyle} label="Bank Details" {...a11yProps(2)} />
                                        <Tab style={TabsStyle} label="Vehicles Details" {...a11yProps(3)} />
                                        {/* <Tab style={TabsStyle} label="Unapproved Dispachers" {...a11yProps(2)} /> */}
                                    </Tabs>
                                </Box>
                                {/* Tab1  */}
                                <TabPanel value={value} index={0}>


                                    <Grid container spacing={2}>

                                        <Grid item xs={12} md={12}>

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

                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data.name}

                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                {data.email}
                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                {data.phoneNo}
                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                {data.gender}
                                                            </TableCell>
                                                            {/* <TableCell style={TextColor} >{data.ownerCompany.name}</TableCell> */}
                                                            <TableCell>
                                                                {/* Checkbox  */}
                                                                <Checkbox {...label} onChange={() => checkbox(data.phoneNo)}
                                                                />
                                                            </TableCell>
                                                            <TableCell >
                                                                <button className={classes.btn} onClick={handleClickOpen('body')}>
                                                                    < VisibilityIcon />
                                                                </button>
                                                                {/* Dialog  */}
                                                                <Dialog
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    scroll={scroll}
                                                                    aria-labelledby="scroll-dialog-title"
                                                                    aria-describedby="scroll-dialog-description"
                                                                >
                                                                    <DialogTitle id="scroll-dialog-title">Driver Profile </DialogTitle>
                                                                    <DialogContent dividers={scroll === 'paper'} style={DialogStyle}>
                                                                        <DialogContentText
                                                                            id="scroll-dialog-description"
                                                                            ref={descriptionElementRef}
                                                                            tabIndex={-1}
                                                                        >
                                                                            <Grid container spacing={2}>
                                                                                <Grid item xs={6} md={6}>
                                                                                    Profile Image
                                                                                </Grid>
                                                                                <Grid item xs={6} md={6}>
                                                                                    <Avatar src={`https://hiiguest.com/${data.image}`} variant="square" style={logoStyle} ></Avatar>
                                                                                </Grid>
                                                                                <Grid item xs={6} md={6}>
                                                                                    Name
                                                                                </Grid>
                                                                                <Grid item xs={6} md={6}>{data.name}</Grid>
                                                                                <Grid item xs={6} md={6}>Phone Number</Grid>
                                                                                <Grid item xs={6} md={6}>{data.phoneNo}</Grid>
                                                                                <Grid item xs={6} md={6}>Email</Grid>
                                                                                <Grid item xs={6} md={6}>{data.email}</Grid>
                                                                                <Grid item xs={6} md={6}>Gender</Grid>
                                                                                <Grid item xs={6} md={6}>{data.gender}</Grid>
                                                                                <Grid item xs={6} md={6}>Average Rating</Grid>
                                                                                <Grid item xs={6} md={6}>{data.averageRating}</Grid>
                                                                                <Grid item xs={6} md={6}>Active Status</Grid>
                                                                                <Grid item xs={6} md={6}>{data.activeStatus}</Grid>
                                                                                <Grid item xs={6} md={6}>Profile Approved</Grid>
                                                                                <Grid item xs={6} md={6}>{data.profileApproved}</Grid>

                                                                            </Grid>

                                                                            {/* Table  */}
                                                                        </DialogContentText>
                                                                    </DialogContent>
                                                                    {/* <DialogActions>
                                                                        <Button onClick={handleClose}>Cancel</Button>
                                                                        <Button onClick={handleClose}>Subscribe</Button>
                                                                    </DialogActions> */}
                                                                </Dialog>

                                                                <button className={classes.btn1}
                                                                    onClick={() => {
                                                                        // setOpen1(true);

                                                                    }}
                                                                > <BackspaceIcon /></button>


                                                            </TableCell>
                                                        </TableRow>
                                                        {/* // ))} */}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>

                                    </Grid>

                                </TabPanel>
                                {/* Tab2  */}
                                <TabPanel value={value} index={1}>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} md={12}>

                                            <TableContainer >
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={TextColor}>Driver Name</TableCell>
                                                            <TableCell style={TextColor}>License</TableCell>
                                                            <TableCell style={TextColor}>Vehicle Ownership</TableCell>
                                                            <TableCell style={TextColor}>Vehicle Company</TableCell>
                                                            <TableCell style={TextColor}>Approve/Unapprove</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>

                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data.name}

                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                <Container>
                                                                    <ReactToPrint trigger={() =>
                                                                        <>
                                                                            {/* <Avatar src={`https://hiiguest.com/${data.documents.driverLicense}`} variant="square" style={logoStyle} ></Avatar> */}
                                                                            <button>print</button>
                                                                        </>
                                                                    }
                                                                        content={() => componentRef}

                                                                    />
                                                                    <Paper ref={el => (componentRef = el)}>
                                                                        {/* Uncomment  */}
                                                                        {/* <Avatar src={`https://hiiguest.com/${data.documents.driverLicense}`} variant="square" style={logoStyle} ></Avatar> */}
                                                                    </Paper>

                                                                </Container>

                                                                {/* <Avatar src={`https://hiiguest.com/${data.documents.driverLicense}`} variant="square" style={logoStyle} ></Avatar> */}
                                                                {/* {data.documents.driverLicense} */}
                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                <Container>
                                                                    <ReactToPrint trigger={() =>
                                                                        <>
                                                                            {/* <Avatar src={`https://hiiguest.com/${data.documents.driverLicense}`} variant="square" style={logoStyle} ></Avatar> */}
                                                                            <button>print</button>
                                                                        </>
                                                                    }
                                                                        content={() => componentRef}

                                                                    />
                                                                    <Paper ref={el => (componentRef = el)}>
                                                                        {/* Uncomment  */}
                                                                        {/* <Avatar src={`https://hiiguest.com/${data.documents.vehicleOwnership}`} variant="square" style={logoStyle} ></Avatar> */}
                                                                    </Paper>

                                                                </Container>

                                                                {/* <Avatar src={`https://hiiguest.com/${data.documents.vehicleOwnership}`} variant="square" style={logoStyle} ></Avatar> */}
                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                {/* Uncomment  */}
                                                                {/* {data.vehicleDetails.companyOfManufacture} */}
                                                            </TableCell>
                                                            {/* <TableCell style={TextColor} >{data.ownerCompany.name}</TableCell> */}
                                                            <TableCell>
                                                                {/* Checkbox  */}
                                                                <Checkbox {...label} onChange={() => checkbox(data.phoneNo)}

                                                                />
                                                            </TableCell>

                                                        </TableRow>
                                                        {/* // ))} */}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>

                                    </Grid>
                                </TabPanel>
                                {/* Bank Tab  */}
                                <TabPanel value={value} index={2}>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} md={12}>

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

                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data.name}

                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                {data.email}
                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                {data.phoneNo}
                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                {data.gender}
                                                            </TableCell>
                                                            {/* <TableCell style={TextColor} >{data.ownerCompany.name}</TableCell> */}
                                                            <TableCell>
                                                                {/* Checkbox  */}
                                                                <Checkbox {...label} onChange={() => checkbox(data.phoneNo)}

                                                                />
                                                            </TableCell>
                                                            <TableCell >
                                                                <button className={classes.btn} onClick={handleClickOpen('body')}>
                                                                    < VisibilityIcon />
                                                                </button>
                                                                {/* Dialog  */}
                                                                <Dialog
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    scroll={scroll}
                                                                    aria-labelledby="scroll-dialog-title"
                                                                    aria-describedby="scroll-dialog-description"
                                                                >
                                                                    <DialogTitle id="scroll-dialog-title">Driver Profile </DialogTitle>
                                                                    <DialogContent dividers={scroll === 'paper'} style={DialogStyle}>
                                                                        <DialogContentText
                                                                            id="scroll-dialog-description"
                                                                            ref={descriptionElementRef}
                                                                            tabIndex={-1}
                                                                        >
                                                                            <Grid container spacing={2}>
                                                                                <Grid item xs={6} md={6}>
                                                                                    Profile Image
                                                                                </Grid>
                                                                                <Grid item xs={6} md={6}>
                                                                                    <Avatar src={`https://hiiguest.com/${data.image}`} variant="square" style={logoStyle} ></Avatar>
                                                                                </Grid>
                                                                                <Grid item xs={6} md={6}>
                                                                                    Name
                                                                                </Grid>
                                                                                <Grid item xs={6} md={6}>{data.name}</Grid>
                                                                                <Grid item xs={6} md={6}>Phone Number</Grid>
                                                                                <Grid item xs={6} md={6}>{data.phoneNo}</Grid>
                                                                                <Grid item xs={6} md={6}>Email</Grid>
                                                                                <Grid item xs={6} md={6}>{data.email}</Grid>
                                                                                <Grid item xs={6} md={6}>Gender</Grid>
                                                                                <Grid item xs={6} md={6}>{data.gender}</Grid>
                                                                                <Grid item xs={6} md={6}>Average Rating</Grid>
                                                                                <Grid item xs={6} md={6}>{data.averageRating}</Grid>
                                                                                <Grid item xs={6} md={6}>Active Status</Grid>
                                                                                <Grid item xs={6} md={6}>{data.activeStatus}</Grid>
                                                                                <Grid item xs={6} md={6}>Profile Approved</Grid>
                                                                                <Grid item xs={6} md={6}>{data.profileApproved}</Grid>

                                                                            </Grid>

                                                                            {/* Table  */}
                                                                        </DialogContentText>
                                                                    </DialogContent>
                                                                    {/* <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Subscribe</Button>
                            </DialogActions> */}
                                                                </Dialog>

                                                                <button className={classes.btn1}
                                                                    onClick={() => {
                                                                        // setOpen1(true);

                                                                    }}
                                                                > <BackspaceIcon /></button>


                                                            </TableCell>
                                                        </TableRow>
                                                        {/* // ))} */}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>

                                    </Grid>


                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    {/* Vehicle Details */}
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} md={12}>

                                            <TableContainer >
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={TextColor}>Company of Manufacture</TableCell>
                                                            <TableCell style={TextColor}>Plate Number</TableCell>
                                                            <TableCell style={TextColor}>Year of Manufacture</TableCell>
                                                            {/* <TableCell style={TextColor}>Vehicle Company</TableCell> */}
                                                            <TableCell style={TextColor}>Vehicle Color</TableCell>
                                                            {/* <TableCell style={TextColor}>Action</TableCell> */}
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>

                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {/* Uncomment  */}
                                                                {/* {data.vehicleDetails.companyOfManufacture} */}

                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                {/* Uncomment */}
                                                                {/* {data.vehicleDetails.plateNumber} */}
                                                            </TableCell>
                                                            <TableCell style={TextColor} >
                                                                {/* Uncomment */}
                                                                {/* {data.vehicleDetails.yearOfManufacture} */}
                                                            </TableCell>

                                                            <TableCell style={TextColor}>
                                                                {/* Checkbox  */}
                                                                {/* Uncomment  */}
                                                                {/* {data.vehicleDetails.vehicleColor} */}


                                                            </TableCell>

                                                        </TableRow>
                                                        {/* // ))} */}
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


        </>
    )
}

export default ProfileData