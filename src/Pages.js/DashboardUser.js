import React from 'react'
import CustomerTable from '../Components.js/CustomerTable'
import GridDashboard from '../Components.js/GridDashboard'
import TableDashboard from '../Components.js/TableDashboard'

function DashboardUser() {
  return (
    <>
     <GridDashboard/> 
        {/* <TableDashboard/> */}
        <CustomerTable/>
    </>
  )
}

export default DashboardUser