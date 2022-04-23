import React from 'react'
import Box from '@mui/material/Box';
import AppBar1 from './AppBar1';
import MainComponent from './MainComponent';

const Container=(props)=> {
  return (
    <>
    <Box sx={{ display: 'flex' }} >
      {console.log('propsss')}
      {console.log(props.data)}
        <AppBar1 data={props.data} />
        {/* <MainComponent/> */}

    </Box>
    </>
  )
}

export default Container