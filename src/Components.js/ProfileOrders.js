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
import CustomerTable from './CustomerTable';
import List from '@mui/material/List';
import {  useNavigate } from 'react-router-dom'
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
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar } from '@material-ui/core';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import image from './Images/image.svg'
import DirectionsIcon from '@mui/icons-material/Directions';
import RoutesTable from './RoutesTable';

const logoStyle = {
    width: '100%',
    height: '100%',
}


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
    }, BackGround: {
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
// Dialog 
const DialogStyle = {
    // width:'100%'
    height: '400px',
    width: '500px',
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
function ProfileOrders() {
    const [loading, setLoading] = useState("");
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 3000)
        getAllData();
        getTrans();
        getOrders();
        getVehicleDetails();
        getOrderFor();
        getOrderBy();
        getDropOffLocation();
        getPickupLocation();
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
    const imgStyle = {
        width: '50px',
    }
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
    const [show10, setShow10] = React.useState(false);



    const { state } = useLocation();
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

    const getAllData = async () => {
        const id = state.post_id;
        await axios.post('https://hiiguest.com/get-order', {
            orderNo: id
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
    // Documents  Api 
    const [data1, setData1] = useState([]);

    const getVehicleDetails = async () => {
        const id = state.post_id;
        await axios.post('https://hiiguest.com/get-order', {
            orderNo: id
        }, { headers }).then(response => {
            console.log('response Vehicle')
            console.log(response.data.selectedVehicle);
            setData1(response.data.selectedVehicle);
            console.log(data1);

            // setShow(true);
        })
            .catch(err => {
                console.log(err)
            })


    }
       // Pickup lOcation  Api 
       const [dataA, setDataA] = useState([]);

       const getPickupLocation = async () => {
           const id = state.post_id;
           await axios.post('https://hiiguest.com/get-order', {
               orderNo: id
           }, { headers }).then(response => {
               console.log('response Address')
               console.log(response.data.pickupLocation);
               setDataA(response.data.pickupLocation);
               console.log(dataA);
   
               // setShow(true);
           })
               .catch(err => {
                   console.log(err)
               })
   
   
       }
        // Pickup lOcation  Api 
        const [dataD, setDataD] = useState([]);

        const getDropOffLocation = async () => {
            const id = state.post_id;
            await axios.post('https://hiiguest.com/get-order', {
                orderNo: id
            }, { headers }).then(response => {
                console.log('response Address')
                console.log(response.data.dropoffLocation);
                setDataD(response.data.dropoffLocation);
                console.log(dataD);
    
                // setShow(true);
            })
                .catch(err => {
                    console.log(err)
                })
    
    
        }
    // Order by  Api 
    const [dataC, setDataC] = useState([]);

    const getOrderBy = async () => {
        const id = state.post_id;
        await axios.post('https://hiiguest.com/get-order', {
            orderNo: id
        }, { headers }).then(response => {
            console.log('response orderBy')
            console.log(response.data.orderBy);
            setDataC(response.data.orderBy);
            console.log(dataC);

            // setShow(true);
        })
            .catch(err => {
                console.log(err)
            })


    }
    //  Vehicle Api 
    const [data2, setData2] = useState([]);

    const getOrderFor = async () => {
        const id = state.post_id;
        await axios.post('https://hiiguest.com/get-order', {
            orderNo: id
        }, { headers }).then(response => {
            console.log('response order for')
            console.log(response.data.orderFor);
            setData2(response.data.orderFor);
            console.log(data2);

            // setShow(true);
        })
            .catch(err => {
                console.log(err)
            })


    }
    // useEffect(() => {
    
    // }, [])

    const checkbox = async (Did) => {
        console.log(Did);

        await axios.put('https://hiiguest.com/approve-driver-profile', {
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
    const [openDiag, setOpenDiag] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpenScr = (scrollType) => () => {
        setOpenDiag(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpenDiag(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (openDiag) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [openDiag]);
    // Document print 
    let componentRef = useRef(null);
    // Transaction Dialog 
    // Add 
    const [openTrans, setOpenTrans] = React.useState(false);

    const handleClickOpenTrans = () => {
        setOpenTrans(true);
    };

    const handleCloseTrans = () => {
        setOpenTrans(false);
    };
    // Order Dialog 
    // Add 
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    //  Orders Api 
    const [ordersdata, setOrdersData] = useState([]);
    const [ordersloading, setOrdersLoading] = useState(false);
    const getOrders = async () => {
        await axios.get(`https://hiiguest.com/get-driver-orders`, {
            params: {
                phoneNo: state.post_id
            }
        })
            .then((response) => {
                console.log('Orders')
                const allData = response.data;

                console.log(allData);
                setOrdersData(response.data);
                setOrdersLoading(true)
            })
            .catch(error => console.error(`Error:${error}`));

    }
    //  Transaction Api 
    const [transdata, setTransData] = useState([]);
    const [transloading, setTransLoading] = useState(false);
    const getTrans = async () => {
        await axios.get('https://hiiguest.com/get-driver-history', {
            params: {
                phoneNo: state.post_id
            }
        })
            .then((response) => {
                console.log('History')
                const allData = response.data;
                console.log(allData);
                setTransData(response.data);
                setTransLoading(true);
            })
            .catch(error => console.error(`Error:${error}`));
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
                            setShow10(false);

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
                                setShow10(false);

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
                                setShow10(false);


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
                                setShow10(false);

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
                                setShow10(false);

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
                                setShow10(false);

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
                                setShow10(false);

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
                                setShow10(false);



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
                                setShow10(false);

                            }}>
                                <ListItemIcon>
                                    <StorefrontIcon className={classes.iconColor} />
                                </ListItemIcon>
                                <ListItemText primary="Hotel Types" />
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
                            setShow8(false);
                            setShow9(false);
                            setShow10(true);
                        }}>
                            <ListItemIcon>
                                <DirectionsIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Routes" />
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
                    {show1 ? <CompanyTable data ={state.data}/> : null}
                    {show2 ? <HotelTable data ={state.data}/> : null}
                    {show3 ? <AllDriversTable data ={state.data}/> : null}
                    {show4 ? < CustomerTable data ={state.data}/> : null}
                    {show5 ? < OrderTable data ={state.data}/> : null}
                    {show6 ? <VehicleTable data ={state.data}/> : null}
                    {show7 ? <HotelTypesTable /> : null}
                    {show8 ? <Settings data ={state.data}/> : null}
                    {show10 ? <RoutesTable /> : null}
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
                                                    <Typography variant='h6'>Orders Profile</Typography>
                                                </Item>
                                                <Item>
                                                    {/* startIcon={<AddIcon />} */}
                                                    {/* <Button variant="contained" color='success'
                                                        onClick={handleClickOpenTrans}
                                                    >
                                                        Transaction
                                                    </Button> */}
                                                    {/* Dialog */}
                                                    <Dialog className={classes.DialogWidth} open={openTrans} onClose={handleCloseTrans}>
                                                        <DialogTitle>Transaction Details</DialogTitle>
                                                        <DialogContent>
                                                            {/* Call Api Orders */}
                                                            <Grid container spacing={2}>
                                                                <Grid item xs={12} md={12}>

                                                                    <TableContainer >
                                                                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                                            <TableHead>
                                                                                <TableRow>
                                                                                    <TableCell style={TextColor}>Transaction No</TableCell>
                                                                                    <TableCell style={TextColor}>Time</TableCell>
                                                                                    <TableCell style={TextColor}>Price</TableCell>

                                                                                </TableRow>
                                                                            </TableHead>
                                                                            <TableBody>

                                                                                {transloading && transdata.map((row) => (
                                                                                    <TableRow
                                                                                        key={row.name}
                                                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                                    >
                                                                                        <TableCell style={TextColor} component="th" scope="row">
                                                                                            {row.transactionNo}

                                                                                        </TableCell>
                                                                                        <TableCell style={TextColor} >
                                                                                            {row.time}
                                                                                        </TableCell>
                                                                                        <TableCell style={TextColor} >{row.price}</TableCell>


                                                                                    </TableRow>
                                                                                ))}
                                                                            </TableBody>
                                                                        </Table>
                                                                    </TableContainer>



                                                                    {/* End  */}
                                                                </Grid>

                                                            </Grid>



                                                        </DialogContent>

                                                    </Dialog>
                                                    {/* Dialog End  */}
                                                </Item>
                                                <Item>
                                                    {/* startIcon={<AddIcon />} */}
                                                    {/* <Button variant="contained" color='success'
                                                        onClick={handleClickOpenAdd}
                                                    //  onClick={handleClickOpenAdd} 
                                                    >
                                                        Orders
                                                    </Button> */}
                                                    {/* Dialog */}
                                                    <Dialog className={classes.DialogWidth} open={openAdd} onClose={handleCloseAdd}>
                                                        <DialogTitle>Order Details</DialogTitle>
                                                        <DialogContent>
                                                            {/* Call Api Transaction */}
                                                            <Grid container spacing={2}>
                                                                <Grid item xs={12} md={12}>

                                                                    <TableContainer >
                                                                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                                            <TableHead>
                                                                                <TableRow>
                                                                                    <TableCell style={TextColor}>Order No</TableCell>
                                                                                    <TableCell style={TextColor}>Image</TableCell>
                                                                                    <TableCell style={TextColor}>Name</TableCell>
                                                                                    <TableCell style={TextColor}>Phone Number</TableCell>
                                                                                    <TableCell style={TextColor}>Email</TableCell>
                                                                                    <TableCell style={TextColor}>City</TableCell>
                                                                                    <TableCell style={TextColor}>Hotel type</TableCell>
                                                                                    <TableCell style={TextColor}>Job Title</TableCell>
                                                                                    <TableCell style={TextColor}>Vehicle Name</TableCell>
                                                                                </TableRow>
                                                                            </TableHead>
                                                                            <TableBody>

                                                                                {ordersloading && ordersdata.map((row) => (
                                                                                    <TableRow
                                                                                        key={row.name}
                                                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                                    >
                                                                                        <TableCell style={TextColor} component="th" scope="row">
                                                                                            {row.orderNo}

                                                                                        </TableCell>
                                                                                        <TableCell style={TextColor} >
                                                                                            {row.orderBy.image}
                                                                                        </TableCell>
                                                                                        <TableCell style={TextColor} >{row.orderBy.name}</TableCell>
                                                                                        <TableCell style={TextColor} >{row.orderBy.phoneNo}</TableCell>
                                                                                        <TableCell style={TextColor} >{row.orderBy.email}</TableCell>
                                                                                        <TableCell style={TextColor} >{row.orderBy.city}</TableCell>
                                                                                        <TableCell style={TextColor} >{row.orderBy.hotelType}</TableCell>
                                                                                        <TableCell style={TextColor} >{row.orderBy.jobTitle}</TableCell>
                                                                                        <TableCell style={TextColor} >{row.selectedVehicle.name}</TableCell>

                                                                                    </TableRow>
                                                                                ))}
                                                                            </TableBody>
                                                                        </Table>
                                                                    </TableContainer>



                                                                    {/* End  */}
                                                                </Grid>

                                                            </Grid>



                                                        </DialogContent>

                                                    </Dialog>
                                                    {/* Dialog End  */}
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
                                                                Order no

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data.orderNo}

                                                            </TableCell>

                                                        </TableRow>
                                                        {/* Second row  */}
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Order Date

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data.orderDate}

                                                            </TableCell>

                                                        </TableRow>
                                                        {/* Row  */}
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Order Time

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data.orderTime}

                                                            </TableCell>

                                                        </TableRow>
                                                        {/* // ))} */}
                                                        {/* Row  */}
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Payment Method

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data.paymentMethod}

                                                            </TableCell>

                                                        </TableRow>

                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Total Amount

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data.totalAmount}

                                                            </TableCell>

                                                        </TableRow>
                                                        {/* Row  */}



                                                        {/* Row  */}


                                                    </TableBody>
                                                </Table>
                                            </TableContainer>


                                        </Grid>
                                        {/* Company */}
                                        <Grid item xs={12} md={12}>
                                            <Box
                                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                            >
                                                <Item sx={{ flexGrow: 1 }}>
                                                    <Typography variant='h6'>Order By Details</Typography>
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
                                                                Image

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">

                                                                {dataC.image}

                                                            </TableCell>


                                                        </TableRow>
                                                        {/* Second row  */}
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Phone Number

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {dataC.phoneNo}


                                                            </TableCell>

                                                        </TableRow>

                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Hotel Name

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {dataC.hotelName}


                                                            </TableCell>

                                                        </TableRow>

                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Name

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {dataC.name}


                                                            </TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Email

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {dataC.email}


                                                            </TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                City

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {dataC.city}


                                                            </TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        Hotel Type

                                                    </TableCell>
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                    {dataC.hotelType}


                                                    </TableCell>
                                                    
                                                </TableRow>
                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                        Job Title

                                                    </TableCell>
                                                    <TableCell style={TextColor} component="th" scope="row">
                                                    {dataC.jobTitle}


                                                    </TableCell>
                                                    
                                                </TableRow>

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>


                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Box
                                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                            >
                                                <Item sx={{ flexGrow: 1 }}>
                                                    <Typography variant='h6'>Order For</Typography>
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
                                                                Name

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data2.name}

                                                            </TableCell>

                                                        </TableRow>
                                                        {/* Second row  */}
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Phone Number

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data2.phoneNo}

                                                            </TableCell>

                                                        </TableRow>
                                                        {/* Row  */}
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                City

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data2.city}

                                                            </TableCell>

                                                        </TableRow>
                                                        {/* // ))} */}
                                                  
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>


                                        </Grid>
                                        {/* Selected Vehicle */}
                                        <Grid item xs={12} md={12}>
                                            <Box
                                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                                            >
                                                <Item sx={{ flexGrow: 1 }}>
                                                    <Typography variant='h6'>Selected Vehicle</Typography>
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
                                                                Image

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                <img style={imgStyle} src={`https://hiiguest.com/${data1.image}`} />

                                                                {/* {data1.driverLicense} */}

                                                            </TableCell>


                                                        </TableRow>
                                                        {/* Second row  */}
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Name

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data1.name}


                                                            </TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Seats

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data1.seats}


                                                            </TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Price

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {data1.price}


                                                            </TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                               Pickup Location

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {dataA.address}


                                                            </TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                Dropoff Location

                                                            </TableCell>
                                                            <TableCell style={TextColor} component="th" scope="row">
                                                                {dataD.address}


                                                            </TableCell>

                                                        </TableRow>
                                                        

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>


                                        </Grid>
                                        {/* Seciong Grid 
                 */}


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

export default ProfileOrders