import React from "react";
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

function Capabilities() {
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
              MY CAPABILITIES
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
                color="#EEEEEE"
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  lineHeight: 1.6,
                  textAlign: { xs: "center", md: "left" },
                  fontWeight: 200,
                }}
              >
                I'm always looking for opportunities to grow and improve my skills, 
                especially in areas like UX, UI, and frontend development."
              </Typography>
              <Box height={{ xs: "12px", md: "16px" }}></Box>

              <Box sx={{ pt: 3 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <Button variant="outlined" size="medium" 
                  sx={{ borderRadius: 10, borderColor: "#00ADB5",  color: "#EEEEEE", }}>
                  JAVA
                  </Button>
                  <Button variant="outlined" size="medium" 
                  sx={{ borderRadius: 10, borderColor: "#00ADB5",  color: "#EEEEEE", }}>
                  JAVA SCRIPT
                  </Button>
                  <Button variant="outlined" size="medium"
                  sx={{ borderRadius: 10, borderColor: "#00ADB5",  color: "#EEEEEE", }}>
                  REACT
                  </Button>
                  <Button variant="outlined" size="medium"
                  sx={{ borderRadius: 10, borderColor: "#00ADB5",  color: "#EEEEEE", }}>
                  HTML
                  </Button>
                </Stack>

                <Box height={{ xs: "12px", md: "16px" }}></Box>

                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <Button variant="outlined" size="medium" 
                   sx={{ borderRadius: 10, borderColor: "#00ADB5",  color: "#EEEEEE", }}>
                    CSS
                  </Button>
                  <Button variant="outlined" size="medium"
                  sx={{ borderRadius: 10, borderColor: "#00ADB5",  color: "#EEEEEE", }}>
                  Tailwind CSS
                  </Button>
                  <Button variant="outlined" size="medium"
                  sx={{ borderRadius: 10, borderColor: "#00ADB5",  color: "#EEEEEE", }}>
                  DATABAS
                  </Button>
                  <Button variant="outlined" size="medium"
                  sx={{ borderRadius: 10, borderColor: "#00ADB5",  color: "#EEEEEE", }}>
                  FIGMA
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box height={{ xs: "14px", md: "20px" }}></Box>
      </Box>
      
    </>
  );
}

export default Capabilities;
