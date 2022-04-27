import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from '@mui/material/TableContainer';
import Swal from 'sweetalert2'

// Icons
import EditIcon from "@material-ui/icons/EditOutlined";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SyncIcon from '@mui/icons-material/Sync';
import axios from "axios";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    selectTableCell: {
        width: 60,
        color: 'white'
    },
    tableCell: {
        width: 130,
        height: 40,
        color: 'white'
    },
    input: {
        width: 130,
        height: 40,
        color: 'white'
    }, GridStyle: {
        border: ' 1px solid #e4e6ef',
        borderRadius: '5px',
        marginTop: '45px',
        padding: '30px',
    }, user: {
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor: 'white',
        borderRadius: '4px',
        color: 'white',
        height: '100%',
        padding: '0px',
        width: '200px',
    }, inputStyle: {
        width: '100%',
        padding: '5px',
        marginTop: '10px',
        marginBottom: '5px',
        borderRadius: '5px',
        border: '1px solid ',
        height: '20px'

    }, sync: {
        marginTop: '15px',
        marginLeft: '19px',
        cursor: 'pointer',


    }, TextStyle: {
        color: 'black',
        marginTop: '10px',
        fontWeight: 'bold'
    }, btnSubmit: {
        backgroundColor: '#36f195',
        padding: '10px',
        fontSize: '15px',
        border: 'transparent',
        borderRadius: '5px',
        color: 'white',
        marginLeft: '234px'
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
    }
}));
const addbtn = {
    height: '50px',
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


function RoutesTable() {
    const classes = useStyles();
    //Get API Axios

    const [loading, setLoading] = useState(false);
    const url = 'https://hiiguest.com/';
    const getAllData = () => {
        axios.get(`${url}get-all-routes`)
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
        //  getAllData1();

    }, []);
    // Add 
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const [data, setData] = useState([]);



    // Search
    // const handleSearch = (event) => {
    //     console.log('search')
    //     // .toLowerCase()
    //     let value = event.target.value;
    //     let result = [];
    //     console.log(value);

    //     result = data.filter((row) => {
    //         return row.location1.search(value) != -1;
    //     });
    //     console.log('result')
    //     console.log(result);
    //     setData(result);


    // }
    // Edit 
    // Update 

    const [openUpdate, setOpenUpdate] = React.useState(false);

    const handleCloseUpdate = () => {
        setOpenUpdate(false);
    };
    const [locationUpdate1, setlocationUpdate1] = useState([]);
    const [locationUpdate2, setlocationUpdate2] = useState([]);
    const [priceupdate, setpriceupdate] = useState([]);
    const [IdData, setIdData] = useState([]);

    const onToggleEditMode = async (id) => {
        setOpenUpdate(true);
        console.log(id);
        // const getAllData1 = async() => {
        // const id = state.post_id;
        await axios.get('https://hiiguest.com/get-route', {
            params: {
                _id: id
            }
        }, { headers }).then(response => {
            console.log('response')
            console.log(response.data);
            setIdData(response.data._id);
            setlocationUpdate1(response.data.location1);
            setlocationUpdate2(response.data.location2);
            setpriceupdate(response.data.ratePerKm);

            // setShow(true);
        })
            .catch(err => {
                console.log(err)
            })






    }
    // Delete 
    // Alert 
    const [open1, setOpen1] = React.useState(false);
    const deleteData = (id) => {
        console.log('deleting phone no')
        console.log(id);
        axios.delete('https://hiiguest.com/delete-route', {
            data: {
                _id: id
            }
        }, { headers })
            .then(res => {
                console.log(res);
                console.log(res.data);
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success',
                        cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: {
                        backgroundColor: '#4CAF50', /* Green */
                        border: 'none',
                        color: 'white',
                        padding: '15px 32px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px'
                    }
                })

                swalWithBootstrapButtons.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Route has been deleted.',
                            'success'
                        )
                        //    refresh componenet 
                        axios.get(`${url}get-all-routes`)
                            .then((response) => {
                                const allData = response.data;
                                console.log(allData);
                                setData(response.data);
                                setLoading(true)
                            })
                            .catch(error => console.error(`Error:${error}`));

                        // window.location.reload(false);
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            'Cancelled',
                            'Hotel is safe :)',
                            'error'
                        )
                    }
                })
                // setOpen1(true);
            }).catch(err => {
                console.log(err)
            })
    }
    //   Add 
    const [pickup, setpickup] = useState("");
    const [dropOff, setdropOff] = useState("");
    const [price, setprice] = useState("");

    const headers = {
        'Content-Type': 'application/json'
    }
    // submitUpdate
    const submitUpdate = (e) => {
        e.preventDefault()
        // POst Request 
        axios.put('https://hiiguest.com/edit-route', {
            _id: IdData,
            location1: locationUpdate1,
            location2: locationUpdate2,
            ratePerKm: priceupdate,


        }, { headers }).then(response => {
            console.log(response)
            // window.alert('Created Route Successfully')
            setOpenUpdate(false);
            // setData([...data, response.data]);
            // Clear Dta 
            setpickup("");
            setdropOff("");
            setprice("")

            let timerInterval
            Swal.fire({
                title: 'Updated Route Successfully',
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
             //    refresh componenet 
             axios.get(`${url}get-all-routes`)
             .then((response) => {
                 const allData = response.data;
                 console.log(allData);
                 setData(response.data);
                 setLoading(true)
             })
             .catch(error => console.error(`Error:${error}`));
        })
            .catch(err => {
                console.log(err)
            })
    }
    // submit add 
    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/create-route', {
            location1: pickup,
            location2: dropOff,
            ratePerKm: price,


        }, { headers }).then(response => {
            console.log(response)
            // window.alert('Created Route Successfully')
            setOpenAdd(false);
            setData([...data, response.data]);
            // Clear Dta 
            setpickup("");
            setdropOff("");
            setprice("")

            let timerInterval
            Swal.fire({
                title: 'Created Route Successfully',
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

    const swap = (e) => {
        console.log('swap');
        console.log(pickup);
        console.log(dropOff);
        setdropOff(pickup);
        setpickup(dropOff);

    }
    const swapupdate = (e) => {
        console.log('swap');
        setlocationUpdate1(locationUpdate2);
        setlocationUpdate2(locationUpdate1);

    }



    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} className={classes.GridStyle}>

                    {/* heading */}
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={12}>
                            <Box
                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                            >
                                <Item sx={{ flexGrow: 2 }}>
                                    <Typography variant='h6'>Routes</Typography>
                                </Item>
                                {/* <Item sx={{ flexGrow: 1 }}>

                                    <Autocomplete
                                        id="free-solo-demo"
                                        freeSolo
                                        options={data.map((option) => option.name)}
                                        renderInput={(params) => <TextField className={classes.user} {...params}
                                            onChange={(event) => {
                                                handleSearch(event)

                                            }}
                                            label="Search" />}
                                    />
                                </Item> */}
                                {/* Add Hotel  */}
                                <Item>
                                    {/* startIcon={<AddIcon />} */}
                                    <Button variant="contained" style={addbtn} color='success'
                                        onClick={handleClickOpenAdd}
                                    >
                                        + Route
                                    </Button>
                                    {/* Dialog */}
                                    <Dialog open={openAdd} onClose={handleCloseAdd}>
                                        <DialogTitle>Add Routes</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Fill All Fields to add new Route
                                            </DialogContentText>
                                            {/* Form  */}

                                            <form onSubmit={submitHandler}>
                                                <Grid container spacing={2} className={classes.gridS}>

                                                    <Grid item xs={12} md={5}>
                                                        <input type="text" name="pickupLocation" className={classes.inputStyle} placeholder="PickUp location"
                                                            value={pickup}
                                                            onChange={(e) => setpickup(e.target.value)
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <SyncIcon className={classes.sync} onClick={swap} />
                                                    </Grid>
                                                    <Grid item xs={12} md={5}>
                                                        <input type="text" name="DropOff Location" className={classes.inputStyle} placeholder="DropOff Location"
                                                            value={dropOff}
                                                            onChange={(e) => setdropOff(e.target.value)
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <div className={classes.TextStyle}>
                                                            Enter Price for above Route
                                                        </div>

                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <input type="text" name="Price" className={classes.inputStyle} placeholder="Enter Price"
                                                            value={price}
                                                            onChange={(e) => setprice(e.target.value)
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
                                    </Dialog>
                                    {/* Dialog End  */}
                                </Item>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={12}>
                            {/* Table  */}
                            <TableContainer >
                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={TextColor}>PickUp Location</TableCell>
                                            <TableCell style={TextColor}>DropOff Location</TableCell>
                                            <TableCell style={TextColor}>Price</TableCell>
                                            <TableCell style={TextColor}>Actions</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>


                                        {loading && data.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >

                                                <TableCell style={TextColor} >{row.location1}</TableCell>
                                                <TableCell style={TextColor} >{row.location2}</TableCell>

                                                <TableCell style={TextColor} >{row.ratePerKm}</TableCell>

                                                <TableCell >
                                                    <button className={classes.btn}
                                                        onClick={() => onToggleEditMode(row._id)}
                                                    >
                                                        < EditIcon />
                                                    </button>


                                                    <button className={classes.btn1}
                                                        onClick={() => {
                                                            console.log(row._id)
                                                            deleteData(row._id)
                                                        }}
                                                    > <BackspaceIcon /></button>


                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {/* Dialog */}
                            <Dialog open={openUpdate} onClose={handleCloseUpdate}>
                                <DialogTitle>Update Routes</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Fill All Fields to Update Route
                                    </DialogContentText>
                                    {/* Form  */}

                                    <form onSubmit={submitUpdate}>


                                        <Grid container spacing={2} className={classes.gridS}>

                                            <Grid item xs={12} md={5}>
                                                <input type="text" name="pickupLocation" className={classes.inputStyle} placeholder="PickUp location"
                                                    value={locationUpdate1}
                                                    onChange={(e) => setlocationUpdate1(e.target.value)
                                                    }
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={2}>
                                                <SyncIcon className={classes.sync} onClick={swapupdate} />
                                            </Grid>
                                            <Grid item xs={12} md={5}>
                                                <input type="text" name="DropOff Location" className={classes.inputStyle} placeholder="DropOff Location"
                                                    value={locationUpdate2}
                                                    onChange={(e) => setlocationUpdate2(e.target.value)
                                                    }
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <div className={classes.TextStyle}>
                                                    Enter Price for the above Route
                                                </div>

                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <input type="text" name="Price" className={classes.inputStyle} placeholder="Enter Price"
                                                    value={priceupdate}
                                                    onChange={(e) => setpriceupdate(e.target.value)
                                                    }
                                                />

                                            </Grid><br/>
                                            <Grid item xs={6} md={6} >
                                                <button className={classes.btnSubmit} type='submit'>Submit</button>
                                            </Grid>

                                        </Grid>
                                    </form>

                                    {/* End form  */}
                                </DialogContent>
                            </Dialog>
                            {/* Dialog End  */}


                        </Grid>
                    </Grid>
                </Grid>
            </Grid>





        </div>
    );
}

export default RoutesTable;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<RoutesTable />, rootElement);
