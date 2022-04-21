import React,{useState,useEffect} from 'react'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HotelIcon from '@mui/icons-material/Hotel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { makeStyles } from '@material-ui/core/styles'
import driver from './driver.png'
import hotel from './Images/hotel.png'
import guest from './Images/guests.png'
import InsertChartIcon from '@mui/icons-material/InsertChart';
import dispachers from './Images/dispacher.png'
import { Avatar } from '@mui/material';
import axios from 'axios';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const useStyles = makeStyles({
    number:{
        fontSize: '20px',
        lineHeight: '32px',
        // marginBottom: '-16px',
        display:'flex'
    
    },
     remarks:{
        lineHeight: '25px',
        marginTop: '10px',
        fontSize: '13px',
        color: '#9a9cab'
    },
    btn:{
        // backgroundColor: '#83d8ae',
        border: ' none',
        // color: 'white',
        // padding: '12px 16px',
        width:'70px',
        fontSize: ' 32px',
        cursor: 'pointer',
        borderRadius: '20px',
        
    },
    btn1: {
        backgroundColor: '#fc9494',
        border: ' none',
        color: 'white',
        padding: '12px 16px',
        fontSize: ' 16px',
        cursor: 'pointer',
        borderRadius: '5px'
    },
    btn2: {
        backgroundColor: '#ada6f2',
        border: ' none',
        color: 'white',
        padding: '12px 16px',
        fontSize: ' 16px',
        cursor: 'pointer',
        borderRadius: '5px'
    },
    btn4:{
        backgroundColor: '#5044c9',
        border: ' none',
        color: 'white',
        padding:' 11px 24px',
        fontSize: '39px',
        cursor: 'pointer',
        borderRadius: '17px'
    },
    iconStyle:{
        marginTop:'3px',
        marginRight:'4px'
    }
})
 const styleBtn = {
    border: ' none',
    // color: 'white',
    // padding: '12px 16px',
    width:'70px',
    height:'70px',
    fontSize: ' 32px',
    cursor: 'pointer',
    borderRadius: '24px',

}
const styleBtn1 = {
    border: ' none',
    // color: 'white',
    // padding: '12px 16px',
    width:'70px',
    height:'70px',
    fontSize: ' 32px',
    cursor: 'pointer',
    borderRadius: '24px',

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


function GridOrders() {
    const classes = useStyles();
     // Get customers 
     const [data, setData] = useState([]);
     const url = 'https://hiiguest.com/';
     const getAllData = () => {
         axios.get(`${url}get-all-orders`)
             .then((response) => {
                 const allData = response.data;
                 console.log(allData.length);
                 setData(allData.length);
              //    setData(response.data);
                 // setLoading(true)
             })
             .catch(error => console.error(`Error:${error}`));
  
     }
      // Get Sales 
      const [data1, setData1] = useState([]);
      const getAllData1 = () => {
          axios.get(`${url}get-all-sales`)
              .then((response) => {
                  const allData = response.data;
                  console.log('sales')
                  console.log(allData.salesLength);
                  setData1(allData.salesLength);
               //    setData(response.data);
                  // setLoading(true)
              })
              .catch(error => console.error(`Error:${error}`));
   
      }
    useEffect(() => {
        getAllData();
        getAllData1();
    
    }, []);
    
  return (
    <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  
                    <Box
                        sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                    >
                        <Item sx={{ flexGrow: 1 }}>
                            <div className={classes.number}>
                                <span className={classes.iconStyle}><ShoppingBasketIcon/></span>
                                {/* Get get-per-km-rate */}

                                 <span>
                                     {data}

                                 </span>
                                 </div><br />
                            <div className={classes.remarks}>Total Orders</div>
                        </Item>
                        <Item>
                            {/* <button > */}
                                 <Avatar alt="Remy Sharp" variant="square" style={styleBtn} src={dispachers}/>
                                 {/* </button> */}

                        </Item>

                    </Box>
                </Grid>
                {/* <Grid item xs={12} md={4}></Grid> */}
                {/* second card  */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                    >
                        <Item sx={{ flexGrow: 1 }}>
                            <div className={classes.number}>
                                <span className={classes.iconStyle}><HotelIcon/></span>
                                 <span>{data1}</span>
                                 </div><br />
                            <div className={classes.remarks}>Total Sales</div>
                        </Item>
                        
                        <Item>
                        <Avatar alt="Remy Sharp" variant="square" style={styleBtn1} ><InsertChartIcon/></Avatar>

                        </Item>

                    </Box>

                </Grid>
               
            </Grid>
        </div>
  )
}

export default GridOrders