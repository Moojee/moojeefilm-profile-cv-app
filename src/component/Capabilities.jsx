import React from "react";
import { Element } from "react-scroll";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";

function Capabilities() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // สไตล์ปุ่มซ้ำๆ เอาออกมาเป็นตัวแปร
  const skillButtonSx = {
    borderRadius: 10,
    borderColor: "#00ADB5",
    color: "#EEEEEE",
    textTransform: "none",
    fontSize: { xs: "12px", sm: "13px" },
    px: { xs: 2.4, sm: 3 },
  };

  return (
    <Element name="capabilities">
      <Box
        sx={{
          backgroundColor: "#222831",
          py: { xs: 5, sm: 6, md: 7 },
          px: { xs: 2.5, sm: 4, md: 10, lg: 16 },
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
              MY CAPABILITIES
            </Typography>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
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
                I&apos;m always looking for opportunities to grow and improve my
                skills, especially in areas like UX, UI, and frontend
                development.
              </Typography>

              {/* กล่องปุ่มสกิล */}
              <Box
                sx={{
                  mt: { xs: 3, sm: 3.5 },
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.4,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button variant="outlined" sx={skillButtonSx}>
                  JAVA
                </Button>
                <Button variant="outlined" sx={skillButtonSx}>
                  JavaScript
                </Button>
                <Button variant="outlined" sx={skillButtonSx}>
                  REACT
                </Button>
                <Button variant="outlined" sx={skillButtonSx}>
                  HTML
                </Button>
                <Button variant="outlined" sx={skillButtonSx}>
                  CSS
                </Button>
                <Button variant="outlined" sx={skillButtonSx}>
                  Tailwind CSS
                </Button>
                <Button variant="outlined" sx={skillButtonSx}>
                  DATABASE
                </Button>
                <Button variant="outlined" sx={skillButtonSx}>
                  FIGMA
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
}

export default Capabilities;
