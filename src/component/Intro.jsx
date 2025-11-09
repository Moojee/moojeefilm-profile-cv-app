import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForumIcon from "@mui/icons-material/Forum";
import moojee from "../assets/moojee.png";
import moojeefilm from "../assets/moojeefilm.png";
import { Link } from "react-scroll";

function Intro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        backgroundColor: "#222831",
        minHeight: { xs: "auto", md: "calc(100vh - 64px)" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2.5, sm: 4, md: 8 },
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 6 }}
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
      >
        {/* ---------- Left side (Text Section) ---------- */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "left" },
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "38px", md: "48px", lg: "56px" },
              color: "#EEEEEE",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Hi, I AM
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "38px", md: "48px", lg: "56px" },
              color: "#00ADB5",
              fontWeight: 700,
              lineHeight: 1.1,
              mt: 0.5,
            }}
          >
            MOOJEEFILM
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "18px" },
              color: "#EEEEEE",
              fontWeight: 300,
              mt: 2,
            }}
          >
            Suthita Patthamachainuwat
          </Typography>

          {/* --- Buttons & Icons --- */}
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={{ xs: 2, sm: 2.5 }}
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems="center"
            sx={{ mt: { xs: 3.5, sm: 4 } }}
          >
            <Link to="contact" smooth duration={1000}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#00ADB5",
                  borderRadius: 10,
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  py: { xs: 1.2, md: 1.4 },
                  px: { xs: 4, md: 5 },
                  minWidth: { xs: "160px", sm: "180px" },
                  fontWeight: 500,
                  "&:hover": { bgcolor: "#008a91" },
                }}
              >
                Contact Me
              </Button>
            </Link>

            <Stack direction="row" spacing={2}>
              {/* LINE */}
              <a
                href="https://line.me/ti/p/KYx1zdM7BW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  sx={{
                    bgcolor: "#222831",
                    border: "2px solid #EEEEEE",
                    width: { xs: 42, sm: 44, md: 48 },
                    height: { xs: 42, sm: 44, md: 48 },
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: "#00ADB5",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <ForumIcon
                    sx={{
                      color: "#EEEEEE",
                      fontSize: { xs: 20, sm: 22, md: 24 },
                    }}
                  />
                </Avatar>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Moojee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  sx={{
                    bgcolor: "#222831",
                    border: "2px solid #EEEEEE",
                    cursor: "pointer",
                    width: { xs: 42, sm: 44, md: 48 },
                    height: { xs: 42, sm: 44, md: 48 },
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: "#00ADB5",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <GitHubIcon
                    sx={{
                      color: "#EEEEEE",
                      fontSize: { xs: 20, sm: 22, md: 24 },
                    }}
                  />
                </Avatar>
              </a>
            </Stack>
          </Stack>
        </Grid>

        {/* ---------- Right side (Image Section) ---------- */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, md: 2 },
            pb: { xs: 2, sm: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src={moojee}
            alt="moojee"
            sx={{
              width: "100%",
              maxWidth: {
                xs: "260px",
                sm: "320px",
                md: "400px",
                lg: "450px",
              },
              borderRadius: 5,
              boxShadow: "0 8px 24px rgba(0, 173, 181, 0.15)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Intro;
