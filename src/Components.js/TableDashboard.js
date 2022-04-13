import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    GridStyle:{
        border: ' 1px solid #e4e6ef',
        borderRadius: '5px',
        marginTop: '45px',
        padding: '30px',
    
    },btn:{
        backgroundColor: '#83d8ae',
        border: ' none',
        color: 'white',
        padding: '12px 16px',
        fontSize: ' 16px',
        cursor: 'pointer',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor:'#9ee3c1'
         },
    }, TextColor:{
        color:'#9a9cab',
        alignItems:'center'
    }
    
})

const TextColor={
    color:'#9a9cab',
    alignItems:'center'
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

function createData(id, name, email, gender) {
    return { id, name, email, gender };
}

const rows = [
    createData(1, 'Rimsha Riaz', 'rimshanimo22@gmail.com', 'female'),
    createData(2, 'Rimsha Riaz', 'rimshanimo22@gmail.com', 'female'),
    createData(3, 'Rimsha Riaz', 'rimshanimo22@gmail.com', 'female'),
    createData(4, 'Rimsha Riaz', 'rimshanimo22@gmail.com', 'female'),
];
function TableDashboard() {
    let navigate = useNavigate();
  const classes = useStyles();

    return (
        <div >
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} className={classes.GridStyle}>

                    {/* heading */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Box
                                sx={{ display: 'flex', p: 1, bgcolor: '#181821', borderRadius: 1 }}
                            >
                                <Item sx={{ flexGrow: 1 }}>
                                    <Typography variant='h6'>Recent Customers</Typography>
                                </Item>
                                <Item>
                                    <button className={classes.btn}
                                    onClick={() => {
                                        navigate('/view')
                                    }}
                                    > See All</button>

                                </Item>

                            </Box>
                        </Grid>

                    </Grid>
                    {/* Table  */}
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell style={TextColor}>#</TableCell>
                                    <TableCell style={TextColor}>Name</TableCell>
                                    <TableCell style={TextColor}>Email</TableCell>
                                    <TableCell style={TextColor}>Gender</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell style={TextColor} component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell style={TextColor} >{row.name}</TableCell>
                                        <TableCell style={TextColor} >{row.email}</TableCell>
                                        <TableCell style={TextColor} >{row.gender}</TableCell>
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

export default TableDashboard