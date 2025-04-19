import React from "react";
import moojeefilm from "../assets/moojeefilm.jpg";
import { Box, Grid } from "@mui/material";

function Photo() {
  return (
    <Box sx={{ backgroundColor: "#222831", p: 4 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Box
            component="img"
            src={moojeefilm}
            alt="moojeefilm"
            sx={{
              width: "70%",           // เต็ม Grid ที่กำหนด (แต่ Grid ไม่ได้เต็ม 100%)
              height: "auto",
              borderRadius: 5,
              display: "block",
              mx: "auto",              // จัดกลาง
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Photo;
