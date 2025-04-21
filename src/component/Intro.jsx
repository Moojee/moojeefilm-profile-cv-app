import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  Stack,
  Card,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForumIcon from '@mui/icons-material/Forum';
import moojee from "../assets/moojee.png";
import { Link } from "react-scroll";

function Intro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ backgroundColor: "#222831" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          px={{ xs: 3, sm: 6, md: 16 }}
          py={{ xs: 4, sm: 6, md: 6 }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "36px", sm: "45px", md: "50px" },
                color: "#EEEEEE",
                m: 0,
                lineHeight: 1,
                textAlign: { xs: "center", md: "left" },
                fontWeight: "bold",
              }}
            >
              Hi, I AM
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "36px", sm: "45px", md: "50px" },
                color: "#00ADB5",
                m: 0,
                lineHeight: 1,
                textAlign: { xs: "center", md: "left" },
                fontWeight: "bold",
              }}
            >
              MOOJEEFILM
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                color: "#EEEEEE",
                textAlign: { xs: "center", md: "left" },
                fontWeight: 200,
              }}
            >
              Suthita Patthamachainuwat
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                color: "#EEEEEE",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              
            </Typography>

            <Box sx={{ pt: 3 }}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Link to="contact" smooth={true} duration={1000}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#00ADB5",
                      m: 0,
                      mr: "3",
                      borderRadius: 10,
                      fontSize: { xs: "14px", md: "16px" },
                      py: { xs: 1, md: 1.2 }, // ความสูงกำลังดี
                      px: { xs: 3, md: 4 }, // ความกว้างซ้าย-ขวากำลังพอดี
                      minWidth: { xs: "120px", md: "150px" }, // กว้างพอประมาณ
                    }}
                  >
                    Contact Me
                  </Button>
                </Link>


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
          </Grid>

          <Grid item xs={12} md={6} pt={{ xs: 4, md: 8 }} mb={{ xs: 3, md: 0 }}>
            <Box
              component="img"
              src={moojee}
              alt="Moojee"
              sx={{
                width: "100%",
                maxWidth: { xs: "300px", md: "400px" },
                borderRadius: 5,
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Intro;
