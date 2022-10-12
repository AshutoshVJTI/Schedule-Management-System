import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/user"><Button variant="contained">User</Button></Link>
        <Link to="/rooms"><Button variant="contained">Rooms</Button></Link>
        <Link to="/meeting"><Button variant="contained">Meeting</Button></Link>
      </nav>
    </div>
  )
}

export default Landing