import React from 'react'
import Box from '@mui/material/Box';
import AppBar1 from './AppBar1';

const Container=(props)=> {
  return (
    <>
    <Box sx={{ display: 'flex' }} >
      {console.log('propsss')}
      {console.log(props.data)}
        <AppBar1 data={props.data} />
    </Box>
    </>
  )
}

export default Container