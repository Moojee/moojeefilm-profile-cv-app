import React from "react";
import { Element } from "react-scroll";

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
import ForumIcon from "@mui/icons-material/Forum";

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Element Element name="about">
      <Box
        sx={{
          backgroundColor: "#222831",
          py: { xs: 5, sm: 6, md: 7 },
          px: { xs: 2, sm: 4, md: 10, lg: 16 }, // ลดนิดบน xs
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          alignItems="flex-start"
          justifyContent="space-between"
          maxWidth="lg"
          sx={{ mx: "auto" }}
        >
          {/* Left side - Title */}
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "38px", md: "48px" },
                color: "#EEEEEE",
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
                lineHeight: 1.05,
              }}
            >
              ABOUT ME
            </Typography>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                width: "100%",
                mx: { xs: "auto", md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  color: "#EEEEEE",
                  fontSize: { xs: "13px", sm: "14px", md: "16px" },
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                Currently a 4th-year student at Southeast Asia University,
                majoring in Digital Technology and Innovation under the Faculty
                of Liberal Arts and Science.
              </Typography>

              <Box height={{ xs: 10, sm: 12, md: 16 }} />

              <Typography
                sx={{
                  color: "#EEEEEE",
                  fontSize: { xs: "13px", sm: "14px", md: "16px" },
                  lineHeight: 1.7,
                  fontWeight: 200,
                }}
              >
                I&apos;m passionate about web design and development—whether
                it&apos;s UX/UI, or frontend work. Simply put, I enjoy and feel
                confident in creative design that lets me bring ideas to life.
              </Typography>

              {/* Buttons / Icons */}
              <Box sx={{ pt: { xs: 3, sm: 3.5 } }}>
                <Stack
                  direction={isMobile ? "column" : "row"}
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  alignItems={{ xs: "center", md: "flex-start" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#00ADB5",
                      borderRadius: 10,
                      fontSize: { xs: "13px", md: "15px" },
                      py: { xs: 1, md: 1.1 },
                      px: { xs: 3.5, md: 4 },
                      minWidth: { xs: "160px", md: "175px" },
                      fontWeight: 500,
                      "&:hover": {
                        bgcolor: "#0099a2",
                      },
                    }}
                  >
                    DOWNLOAD RESUME
                  </Button>

                  {/* ✅ แยก Stack แนวนอนออกมาเฉพาะ Avatar */}
                  <Stack direction="row" spacing={2}>
                    {/* LINE */}
                    <a
                      href="https://line.me/ti/p/KYx1zdM7BW"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#222831",
                          border: "1px solid #EEEEEE",
                          width: { xs: 40, sm: 42, md: 46 },
                          height: { xs: 40, sm: 42, md: 46 },
                          transition: "all 0.25s",
                          "&:hover": {
                            borderColor: "#00ADB5",
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        <ForumIcon sx={{ color: "#EEEEEE" }} />
                      </Avatar>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/Moojee"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#222831",
                          border: "1px solid #EEEEEE",
                          cursor: "pointer",
                          width: { xs: 40, sm: 42, md: 46 },
                          height: { xs: 40, sm: 42, md: 46 },
                          transition: "all 0.25s",
                          "&:hover": {
                            borderColor: "#00ADB5",
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        <GitHubIcon sx={{ color: "#EEEEEE" }} />
                      </Avatar>
                    </a>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
}

export default About;
