import React from 'react'
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import GridDashboard from './GridDashboard';
// import TableDashboard from './TableDashboard';
import ListItemButton from '@mui/material/ListItemButton';
import DraftsIcon from '@mui/icons-material/Drafts';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HotelIcon from '@mui/icons-material/Hotel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardUser from './DashboardUser';
import DataUsers from '../Components.js/DataUsers';
// import DataUsers from './DataUsers'

const drawerWidth = 240;


const useStyles = makeStyles({
  heigthBox: {

  }, BackGround: {
    backgroundColor: '#181821',
    color: 'white',
    borderBottom: ' 1px solid #262635',
    paddingLeft: '65px'

  }, iconColor: {
    color: '#9a9cab'
  }, Header: {
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
    color: '#9a9cab',
    height: '100%'
  }, head: {
    backgroundColor: '#1f1f2b',
    color: '#9a9cab',
  }
})

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function ViewData() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        {/* Drawer  */}
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
            <div className={classes.Header}>Admin</div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.iconColor} /> : <ChevronRightIcon className={classes.iconColor} />}
            </IconButton>
          </DrawerHeader>
          {/* <Divider style={dividerColor}/> */}

          <List className={classes.listStyle}>


            {/* <List> */}
            <ListItem disablePadding className={classes.ListStyle1}>
              <ListItemButton>
                <ListItemIcon>
                  <HotelIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText primary="Guests" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.ListStyle1}>
              <ListItemButton>
                <ListItemIcon>
                  <DirectionsBusIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText primary="Dispachers" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.ListStyle1}>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCartIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.ListStyle1}>
              <ListItemButton >
                <ListItemIcon>
                  <ShoppingCartIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText primary="Companies" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.ListStyle1}>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.ListStyle1}>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.ListStyle1}>
              <ListItemButton>
                <ListItemIcon>
                  <AttachMoneyIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText primary="Earnings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.ListStyle1}>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>

        </Drawer>
        <Main open={open} style={MarginTop} className={classes.BackGround}>
          <DataUsers />
        </Main>




      </Box>

    </>
  )
}

export default ViewData