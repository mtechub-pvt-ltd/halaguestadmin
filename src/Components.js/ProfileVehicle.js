import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import BusinessIcon from '@mui/icons-material/Business';
import DraftsIcon from '@mui/icons-material/Drafts';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HotelIcon from '@mui/icons-material/Hotel';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import { useNavigate } from 'react-router-dom'
import DashboardUser from '../Pages.js/DashboardUser';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CompanyTable from './CompanyTable';
import OrderTable from './OrderTable'
import AllDriversTable from './AllDriversTable';
import HotelTable from './HotelTable';
import HotelTypesTable from './HotelTypesTable';
import VehicleTable from './VehicleTable';
import Settings from './Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';

import React, { useState, useEffect } from 'react'
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
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useRef } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import image from './Images/image.svg'
import { Avatar } from '@material-ui/core';
import CustomerTable from './CustomerTable';


const logoStyle = {
    width: '100%',
    height: '100%',
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
    },BackGround: {
        backgroundColor: '#181821',
        color: 'white',
        borderBottom: ' 1px solid #262635',
        paddingLeft: '65px'

    }, iconColor: {
        color: '#9a9cab'
    },
    Header: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: '500',
        height: '30px',
        margin: '18px auto',
        display: 'block',
        color: '#83d8ae'
    }, ListStyle1: {
        marginTop: '-10px'
    }, listStyle: {
        backgroundColor: '#1f1f2b',
        color: 'white',
        height: '100%'
    }, head: {
        backgroundColor: '#1f1f2b',
        color: '#9a9cab',
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




const drawerWidth = 240;

// const useStyles = makeStyles({
    

// })
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const MarginTop = {
    marginTop: "70px"
}
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);
const override = {
    display: ' block',
    margin: '0 auto',
    //   borderColor: 'red',
}
const color = "white"
const imgStyle = {
    width: '50px',
}
function ProfileVehicle() {
    const [loading, setLoading] = useState("");
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 3000)
        getAllData();
    }, [])


   
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    let navigate = useNavigate();
    // False set show to view profile page 
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const [show4, setShow4] = React.useState(false);
    const [show5, setShow5] = React.useState(false);
    const [show6, setShow6] = React.useState(false);
    const [show7, setShow7] = React.useState(false);
    const [show8, setShow8] = React.useState(false);
    const [show9, setShow9] = React.useState(true);


    const { state } = useLocation();
    const headers = {
        'Content-Type': 'application/json'
    }

    //   Api 
    const [data, setData] = useState([]);

    const getAllData = async() => {
        // const id = state.post_id;
        await axios.get('https://hiiguest.com/get-vehicle', {
            params: {
                _id:state.post_id
              }
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
   

    return (
        <>
            <Box sx={{ display: 'flex' }} >
            {/* AppBar  */}
            <AppBar position="fixed" open={open}>
                <Toolbar className={classes.BackGround}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon className={classes.iconColor} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>

                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader className={classes.head}>
                    <div className={classes.Header} onClick={() => {
                        setShow(false);
                        setShow1(false);
                        setShow2(false)
                        setShow3(false);
                        setShow4(false);
                        setShow5(false);
                        setShow6(false);
                        setShow7(false);
                        setShow8(false);
                        setShow9(false);
                    }}>
                        <Avatar src={image} variant="square" style={logoStyle} ></Avatar>
                        {/* <img */}

                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.iconColor} /> : <ChevronRightIcon className={classes.iconColor} />}
                    </IconButton>
                </DrawerHeader>

                <List className={classes.listStyle}>

                <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                            setShow(true);
                            setShow1(false);
                            setShow2(false)
                            setShow3(false);
                            setShow4(false);
                            setShow5(false);
                            setShow6(false);
                            setShow7(false);
                            setShow8(false);
                            setShow9(false);
                        }} >
                            <ListItemIcon>
                                <DashboardIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                            setShow(false);
                            setShow1(true);
                            setShow2(false);
                            setShow3(false);
                            setShow4(false);
                            setShow5(false);
                            setShow6(false);
                            setShow7(false);
                            setShow8(false);
                            setShow9(false);

                        }}>
                            <ListItemIcon>
                            <BusinessIcon className={classes.iconColor} />

                            </ListItemIcon>
                            <ListItemText primary="Dispachers" />
                        </ListItemButton>
                    </ListItem>


                    
                   
                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                            setShow(false);
                            setShow1(false);
                            setShow2(true)
                            setShow3(false);
                            setShow4(false);
                            setShow5(false);
                            setShow6(false);
                            setShow7(false);
                            setShow8(false);
                            setShow9(false);
                        }} >
                            <ListItemIcon>
                                <HotelIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Hotels" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                            setShow(false);
                            setShow1(false);
                            setShow2(false)
                            setShow3(true);
                            setShow4(false);
                            setShow5(false);
                            setShow6(false);
                            setShow7(false);
                            setShow8(false);
                            setShow9(false);
                        }}>
                            <ListItemIcon>
                                <DirectionsBusIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Drivers" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                            setShow(false);
                            setShow1(false);
                            setShow2(false)
                            setShow3(false);
                            setShow4(true);
                            setShow5(false);
                            setShow6(false);
                            setShow7(false);
                            setShow8(false);
                            setShow9(false);
                        }} >
                            <ListItemIcon>
                                <HotelIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Guests" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                            setShow(false);
                            setShow1(false);
                            setShow2(false);
                            setShow3(false);
                            setShow4(false);
                            setShow5(true);
                            setShow6(false);
                            setShow7(false);
                            setShow8(false);
                            setShow9(false);

                        }}>
                            <ListItemIcon>
                                <ShoppingCartIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>
                    </ListItem>

                  

                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                            setShow(false);
                            setShow1(false);
                            setShow2(false)
                            setShow3(false);
                            setShow4(false);
                            setShow5(false);
                            setShow6(true);
                            setShow7(false);
                            setShow8(false);
                            setShow9(false);

                        }}>
                            <ListItemIcon>
                            <DriveEtaIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Vehicles" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                            setShow(false);
                            setShow1(false);
                            setShow2(false)
                            setShow3(false);
                            setShow4(false);
                            setShow5(false);
                            setShow6(false);
                            setShow7(true);
                            setShow8(false);
                            setShow9(false);
                        }}>
                            <ListItemIcon>
                                <StorefrontIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Hotel Types" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                        }}>
                            <ListItemIcon>
                                <AccountCircleIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                            setShow(false);
                            setShow1(false);
                            setShow2(false)
                            setShow3(false);
                            setShow4(false);
                            setShow5(false);
                            setShow6(false);
                            setShow7(false);
                            setShow8(true);
                            setShow9(false);
                        }}>
                            <ListItemIcon>
                                <SettingsIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton onClick={() => {
                        }}>
                            <ListItemIcon>
                                <AttachMoneyIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Earnings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton >
                            <ListItemIcon>
                                <DraftsIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
{/* Logout  */}
                    {/* <ListItem disablePadding className={classes.ListStyle1}>
                        <ListItemButton >
                            <ListItemIcon>
                                <DraftsIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <Link to="/logout">Logout</Link>
                        </ListItemButton>
                    </ListItem> */}
                </List>

            </Drawer>
            <Main open={open} style={MarginTop} className={classes.BackGround}>
            {/* <ProfileData/> */}
            {show ? <DashboardUser /> : null}
                {show1 ? <CompanyTable /> : null}
                {show2 ? <HotelTable /> : null}
                {show3 ? <AllDriversTable /> : null}
                {show4 ? < CustomerTable/> : null}
                {show5 ? < OrderTable/> : null}
                {show6 ? <VehicleTable /> : null}
                {show7 ? <HotelTypesTable /> : null}
                {show8 ? <Settings /> : null}
                {show9 ?   

<>
{/* {loading ?
                <ClipLoader color={color} loading={loading} css={override} size={30} /> */}
                
{/* AppBAr  */}
<ClipLoader color={color} loading={loading} css={override} size={30} />
    {console.log(state.post_id)}
    <Grid container spacing={2}>
        <Grid item xs={12} md={12} className={classes.GridStyle}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box
                        sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                    >
                        <Item sx={{ flexGrow: 1 }}>
                            <Typography variant='h6'>Vehicle Profile</Typography>
                        </Item>
                      

                    </Box>
                </Grid>
                {/* TABLE Grid  */}
                <Grid item xs={12} md={12}>
                    {/* Table container  */}
                    <TableContainer >
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                            <TableBody>
                                            <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        Vehicle Image

                                                    </TableCell>
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        {/* {data.hotelName} */}
                                                        {/* Image  */}
                                            <img style={imgStyle} src={`https://hiiguest.com/${data.image}`} />


                                                    </TableCell>
                                                    
                                                </TableRow>

                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        Vehicle Name

                                                    </TableCell>
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        {data.name}

                                                    </TableCell>
                                                    
                                                </TableRow>
                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        Seats

                                                    </TableCell>
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        {data.seats}

                                                    </TableCell>
                                                    
                                                </TableRow>
                                                {/* Second row  */}
                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        Price

                                                    </TableCell>
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        {data.price}

                                                    </TableCell>
                                                    
                                                </TableRow>
                                                {/* Row  */}
                                                
                                                 
                                                
                                                
                                            </TableBody>
                                        </Table>
                                    </TableContainer>


                </Grid>
                
            
              

            </Grid>
        </Grid>


    </Grid>

                
</>

                 : null}


            </Main>
            </Box>
        </>
    )
}

export default ProfileVehicle