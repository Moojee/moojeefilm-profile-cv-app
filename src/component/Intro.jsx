import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  Stack,
  Card,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import moojee from "../assets/moojee.png";

function Intro() {
  return (
    <>
      <Box sx={{ backgroundColor: "#222831" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between" 
          px={16} 
        >
          <Grid item xs={12} md={6} >
            <Typography
              sx={{ fontSize: "50px", color: "#EEEEEE", m: 0, lineHeight: 1 }}
            >
              Hi, I AM
            </Typography>
            <Typography
              sx={{ fontSize: "50px", color: "#00ADB5", m: 0, lineHeight: 1 }}
            >
              MOOJEEFILM
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "#EEEEEE" }}>
              moojeefilm moojeefilm moojeefilm moojeefilm
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "#EEEEEE" }}>
              moojeefilm moojeefilm moojeefilm
            </Typography>

            <Box sx={{ pt: 3 }}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#00ADB5", m: 0, mr: "3", borderRadius: 5 }}
                >
                  Contact Me
                </Button>

                <Avatar sx={{ bgcolor: "#222831" }}>
                  <EmailIcon sx={{ color: "#EEEEEE" }} />
                </Avatar>
                <Avatar sx={{ bgcolor: "#222831" }}>
                  <GitHubIcon sx={{ color: "#EEEEEE" }} />
                </Avatar>
              </Stack>
            </Box>
          </Grid>

    <Grid item xs={12} md={6} pt={8}>
    <Box
      component="img"
      src={moojee}
      alt="Moojee"
      sx={{
        width: '100%',
        maxWidth: '400px',
        borderRadius: 5,
        display: 'block',
        mx: 'auto',
      }}
    />
  </Grid>
        </Grid>
        
      </Box>
    </>
  );
}

export default Intro;
