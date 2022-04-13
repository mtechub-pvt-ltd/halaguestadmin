import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles'
import DashboardUser from '../Pages.js/DashboardUser';


const drawerWidth = 240;
const useStyles = makeStyles({
    BackGround: {
        backgroundColor: '#181821',
        color: 'white',
        borderBottom: ' 1px solid #262635',
        paddingLeft: '65px'

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
function MainComponent() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
  return (
<>
<Main open={open} style={MarginTop} className={classes.BackGround}>
    
<DashboardUser />

</Main>
</>
  )
}

export default MainComponent