import React,{useState} from 'react'
import image from './Images/image.svg'
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
import { makeStyles } from '@material-ui/core/styles'
import { Link, useNavigate } from 'react-router-dom'
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
import ProfileData from './ProfileData';
import { Avatar } from '@mui/material';
import CustomerTable from './CustomerTable';
import TransactionTable from './TransactionTable'


const drawerWidth = 240;
const logoStyle = {
    width: '100%',
    height: '100%',
}
const useStyles = makeStyles({
    BackGround: {
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
function AppBar1() {
   
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
    const [show, setShow] = React.useState(true);
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const [show4, setShow4] = React.useState(false);
    const [show5, setShow5] = React.useState(false);
    const [show6, setShow6] = React.useState(false);
    const [show7, setShow7] = React.useState(false);
    const [show8, setShow8] = React.useState(false);
    const [show9, setShow9] = React.useState(false);

    return (
        <>
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

                    {/* <ListItem disablePadding className={classes.ListStyle1}>
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
                            setShow9(true);
                        }}>
                            <ListItemIcon>
                                <StorefrontIcon className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="Transactions" />
                        </ListItemButton>
                    </ListItem> */}

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
                {show9 ? <TransactionTable /> : null}


            </Main>
        </>
    )
}

export default AppBar1
// AppBar1.propTypes = {
//     setSession: PropTypes.func.isRequired
//   }