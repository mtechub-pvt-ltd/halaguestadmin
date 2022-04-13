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
import Img from './sir.jpg'
// Alert 
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import { makeStyles } from '@material-ui/core/styles'
// Axios 
import axios from 'axios'

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

function HotelTable() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState(false);

    const handleClickOpen = (idData) => {
        setOpen(true);
        console.log(idData);
        // Call API TO GET BY ID 
        // setId(idData);

    };

    const handleClose = () => {
        setOpen(false);
    };
    // Alert 
    const [open1, setOpen1] = React.useState(false);
    //Get API Axios
    const [data, setData] = useState([]);
    const [loading,setLoading]= useState(false);
    const url = 'https://hiiguest.com/';
    const getAllData = () => {
        axios.get(`${url}get-all-orders`)
            .then((response) => {
                const allData = response.data;
                // console.log(allData);
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
     const [loading1,setLoading1]= useState(false);
     const getAllData1 = () => {
         axios.get(`${url}get-all-companies`)
             .then((response) => {
                 const allData = response.data;
                 console.log(allData);
                 setData1(response.data);
                 setLoading1(true)
             })
             .catch(error => console.error(`Error:${error}`));
 
     }
    //  useEffect(() => {
    //      getAllData1();
    //  }, []);
 

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

                            </Box>
                        </Grid>

                    </Grid>
                    {/* Table  */}
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell style={TextColor}>Order No</TableCell>
                                    <TableCell style={TextColor}>Payment Method</TableCell>
                                    <TableCell style={TextColor}>Order Date</TableCell>
                                    <TableCell style={TextColor}>Order Time</TableCell>
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
                                        <TableCell style={TextColor} >{row.paymentMethod}</TableCell>
                                        <TableCell style={TextColor} >{row.orderDate}</TableCell>
                                        <TableCell style={TextColor} >{row.orderTime}</TableCell>
                                        <TableCell >
                                        {/* onClick={handleClickOpen(row.orderNo)}  */}
                                            <button className={classes.btn} onClick={()=>{
                                                handleClickOpen(row.orderNo)
                                            }}>
                                                < VisibilityIcon/>
                                            </button>
                                            {/* Dialog  */}
                                            <BootstrapDialog className={classes.dialogWidth}
                                                onClose={handleClose}
                                                aria-labelledby="customized-dialog-title"
                                                open={open}
                                            >
                                                <BootstrapDialogTitle className={classes.dialogTitle} id="customized-dialog-title" onClose={handleClose}>
                                                    Order Details
                                                </BootstrapDialogTitle>
                                                <DialogContent >
                                                    {/* Table  */}
                                                    <TableContainer >
                                                        <Table aria-label="simple table" >
                                                        {/* {rows1.map((row) => ( */}
                                                            {/* <TableHead>
                                                                <TableRow>
                                                                    <TableCell className={classes.TextColor1}>
                                                                        <div className={classes.CardStyle}>
                                                                            <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                                                                                Profile Image
                                                                            </Typography>
                                                                        </div>
                                                                    </TableCell>
                                                                    <TableCell className={classes.TextColor1}>
                                                                        <Avatar alt="Image" className={classes.ProfileImage} variant="square" src={Img} />
                                                                    </TableCell>

                                                                </TableRow>
                                                            </TableHead> */}
                                                            <TableBody>
                                                                
                                                                {loading1 && data1.map((row) => (
                                                                    <TableRow
                                                                        key={row.name}
                                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                    >
                                                                        <TableCell className={classes.TextColor1} component="th" scope="row">
                                                                            <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                                                                                {row.name}
                                                                            </Typography>
                                                                        </TableCell>
                                                                        <TableCell className={classes.TextColor1} component="th" scope="row">
                                                                            <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                                                                                {row.data}
                                                                            </Typography>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                             {/* ))} */}
                                                        </Table>
                                                    </TableContainer>

                                                </DialogContent>

                                            </BootstrapDialog>
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


                </Grid>

            </Grid>


        </div>
    )
}

export default HotelTable