import React from 'react'
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-scroll"; 
function Navbar() {
  return (
    <>

<AppBar sx={{ backgroundColor: "#222831" }} position="static">
      <Toolbar>
        <Typography sx={{ ml: "10px", flexGrow: 1 }}>
          SUTITA PATTHAMACHAINUWAT
        </Typography>
        {/* ใช้ Link จาก react-scroll สำหรับการ scroll ไปยัง section ที่ต้องการ */}
        <Link to="work" smooth={true} duration={1000} >
          <Button sx={{ mr: "32px", textDecoration: "none", color: "white" }}>
            Work
          </Button>
        </Link>
        <Link to="about" smooth={true} duration={1000} >
          <Button sx={{ mr: "32px", textDecoration: "none", color: "white" }}>
            About
          </Button>
        </Link>
        <Link to="contact" smooth={true} duration={1000} >
          <Button sx={{ mr: "32px", textDecoration: "none", color: "white" }}>
            Contact
          </Button>
        </Link>
      </Toolbar>
    </AppBar>


    </>
  )
}

export default Navbar