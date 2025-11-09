import React from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <CssBaseline />
      
      <GlobalStyles
        styles={{
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          },
          "html, body": {
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            overflow: "auto",
          },
          body: {
            backgroundColor: "#222831",
            fontFamily: "Kanit, system-ui, -apple-system, sans-serif",
            minHeight: "100vh",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          },
          "#root": {
            width: "100%",
            minHeight: "100vh", // ✅ เพิ่มบรรทัดนี้!
            display: "flex",
            flexDirection: "column",
          },
          a: {
            textDecoration: "none",
            color: "inherit",
          },
          // ทำให้รูปภาพ responsive
          img: {
            maxWidth: "100%",
            height: "auto",
          },
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;