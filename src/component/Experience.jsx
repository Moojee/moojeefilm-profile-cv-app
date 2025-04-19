import React from 'react'
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  Button,
  Avatar,
} from "@mui/material";

function Experience() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>

<Box
      sx={{
        backgroundColor: "#222831",
        py: { xs: 4, sm: 6, md: 6 },
        px: { xs: 3, sm: 6, md: 16 },
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {/* Left side - Title */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: { xs: "36px", sm: "45px", md: "50px" },
              color: "#EEEEEE",
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            MY EXPERIENCE
          </Typography>
        </Grid>

        {/* Right side - Content */}
        <Grid item xs={12} md={6} pt={{ xs: 2, md: 1 }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "600px" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Typography
              color="#393E46"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee
              Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee
              Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee
              Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee
            </Typography>
            <Box height={{ xs: "12px", md: "16px" }}></Box>
            <Typography
              color="#EEEEEE"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee
              Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee
              Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee Moojee
            </Typography>
            
          </Box>
        </Grid>
      </Grid>
      <Box height={{ xs: "14px", md: "20px" }}></Box>
    </Box>
    
    
    </>
  )
}

export default Experience