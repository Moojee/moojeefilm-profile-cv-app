import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "../component/Navbar";
import Intro from "../component/Intro";
import About from "../component/About";
import Capabilities from "../component/Capabilities";
import Experience from "../component/Experience";
import Connect from "../component/Connect";

function Homepage() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Intro />
      <About />
      <Capabilities/>
      <Experience />
      <Connect />
    </>
  );
}

export default Homepage;
