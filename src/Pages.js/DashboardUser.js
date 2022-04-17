import React from 'react'
import CustomerTable from '../Components.js/CustomerTable'
import GridDashboard from '../Components.js/GridDashboard'
import GridOrders from '../Components.js/GridOrders'
import TableDashboard from '../Components.js/TableDashboard'

function DashboardUser() {
  return (
    <>
     <GridDashboard/> 
     <GridOrders/>
        {/* <TableDashboard/> */}
        <CustomerTable/>
    </>
  )
}

export default DashboardUser