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
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ForumIcon from '@mui/icons-material/Forum';

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id="about"
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
            ABOUT ME
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
                fontSize: { xs: "12px", md: "18px" },
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "left" },
                fontWeight: 300,
              }}
            >
              Currently a 4th-year student at Southeast Asia University, 
              majoring in Digital Technology and Innovation under the Faculty of Liberal Arts and Science.
            </Typography>
            <Box height={{ xs: "12px", md: "16px" }}></Box>
            <Typography
              color="#EEEEEE"
              sx={{
                fontSize: { xs: "12px", md: "18px" },
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "left" },
                fontWeight: 200,
              }}
            >
              I'm passionate about web design and development—whether it's UX/UI, or frontend work. 
              Simply put, I enjoy and feel confident in creative design that lets me bring ideas to life.
            </Typography>
            <Box sx={{ pt: 3 }}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#00ADB5",
                    m: 0,
                    mr: "3",
                    borderRadius: 10,
                    fontSize: { xs: "14px", md: "16px" },
                    py: { xs: 1, md: 1.2 }, // ความสูงกำลังดี
                    px: { xs: 3, md: 4 },   // ความกว้างซ้าย-ขวากำลังพอดี
                    minWidth: { xs: "120px", md: "150px" }, // กว้างพอประมาณ
                  }}
                >
                  
                  DONWLOAD RESUME
                </Button>

                <a
                href="https://line.me/ti/p/KYx1zdM7BW"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                > 
                <Avatar sx={{ bgcolor: "#222831" }}>
                  <ForumIcon sx={{ color: "#EEEEEE" }} />
                </Avatar>
                </a>
                
                <a
                  href="https://github.com/Moojee"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Avatar sx={{ bgcolor: "#222831", cursor: "pointer" }}>
                    <GitHubIcon sx={{ color: "#EEEEEE" }} />
                  </Avatar>
                </a>

              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
