import { Container, Paper } from '@mui/material';
import React, { useEffect } from 'react'
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';
import logo from './logo.png'
function Print() {
  useEffect(()=>{

  },[])
  let componentRef= useRef(null);
  return (
    <div>
      <Container>
        <ReactToPrint trigger={()=>
        <div>
        <button>print</button>
        </div>
        }
        content={()=>componentRef}
        
        />
        <Paper ref={el=>(componentRef= el)}>
          <img src={logo}/>
        </Paper>

      </Container>
    </div>
  )
}

export default Print
