import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <>

    <AppBar sx={{ backgroundColor:'#222831' }}  position="static">
        <Toolbar>
          <Typography sx={{ ml: "10px", flexGrow: 1 }}>SUTITA PATTHAMACHAINUWAT</Typography>
          <Typography  sx={{ mr: "32px", textDecoration:'none', color:'white'  }} > Work </Typography>
          <Typography  sx={{ mr: "32px", textDecoration:'none', color:'white' }}> About </Typography>
          <Typography  sx={{ mr: "32px", textDecoration:'none', color:'white' }} > Contact </Typography>
        </Toolbar>
    </AppBar>


    </>
  )
}

export default Navbar