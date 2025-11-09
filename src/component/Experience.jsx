import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="experience"
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
            MY EXPERIENCE
          </Typography>
        </Grid>

        {/* Right side - Content */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: "100%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                color: "#EEEEEE",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                fontWeight: 300,
                mb: { xs: 2.5, md: 3 },
              }}
            >
              Project Experience
            </Typography>

            {/* Card / Block สำหรับโปรเจ็กต์ */}
            <Box
              sx={{
                backgroundColor: "#1f242b",
                border: "1px solid rgba(238,238,238,0.06)",
                borderRadius: 3,
                p: { xs: 2.5, sm: 3 },
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              <Typography
                sx={{
                  color: "#EEEEEE",
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                AI-based Travel Planning Assistant
              </Typography>

              <Typography
                sx={{
                  color: "#EEEEEE",
                  fontSize: { xs: "13px", sm: "14px", md: "15px" },
                  lineHeight: 1.7,
                  fontWeight: 200,
                  textAlign: { xs: "left", md: "left" },
                }}
              >
                My team developed an AI-based travel planning assistant.
                I was fully responsible for the frontend—from UX/UI design to
                building the web interface using JavaScript, with React and
                Tailwind CSS as the main tools.
              </Typography>

              <Stack
                direction="row"
                spacing={1.5}
                flexWrap="wrap"
                mt={2.5}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 173, 181, 0.08)",
                    border: "1px solid rgba(0, 173, 181, 0.3)",
                    borderRadius: 999,
                    px: 1.6,
                    py: 0.5,
                    color: "#EEEEEE",
                    fontSize: "12px",
                  }}
                >
                  React
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 173, 181, 0.08)",
                    border: "1px solid rgba(0, 173, 181, 0.3)",
                    borderRadius: 999,
                    px: 1.6,
                    py: 0.5,
                    color: "#EEEEEE",
                    fontSize: "12px",
                  }}
                >
                  Tailwind CSS
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 173, 181, 0.08)",
                    border: "1px solid rgba(0, 173, 181, 0.3)",
                    borderRadius: 999,
                    px: 1.6,
                    py: 0.5,
                    color: "#EEEEEE",
                    fontSize: "12px",
                  }}
                >
                  UI / UX
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
