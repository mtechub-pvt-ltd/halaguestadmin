import React from 'react'
import {Link} from 'react-router-dom'

function Logout() {
  return (
    <div>
        <h1>You have been logout Successfully!!</h1>
        <Link to='/'>Back to Login</Link>
    </div>
  )
}

export default Logout