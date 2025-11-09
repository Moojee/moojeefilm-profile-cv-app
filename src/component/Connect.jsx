import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForumIcon from "@mui/icons-material/Forum";
import InstagramIcon from "@mui/icons-material/Instagram";

function Connect() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#222831",
        py: { xs: 5, sm: 6, md: 7 },
        px: { xs: 2.5, sm: 4, md: 10, lg: 16 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 5 }}
        alignItems="flex-start"
        maxWidth="lg"
        sx={{ mx: "auto" }}
      >
        {/* LEFT SIDE */}
        <Grid item xs={12} md={5}>
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "38px", md: "48px" },
              color: "#EEEEEE",
              lineHeight: 1.05,
              textAlign: { xs: "center", md: "left" },
              fontWeight: 700,
            }}
          >
            LET&apos;S CONNECT
          </Typography>

          {/* email line */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent={{ xs: "center", md: "flex-start" }}
            sx={{ mt: 2 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "11px", md: "12px" },
                color: "#EEEEEE",
                fontWeight: 200,
              }}
            >
              Say hello to me at
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "11px", md: "12px" },
                color: "#EEEEEE",
                textDecoration: "underline",
                fontWeight: 300,
              }}
            >
              Sutitamoojee@gmail.com
            </Typography>
          </Stack>

          {/* github id line */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent={{ xs: "center", md: "flex-start" }}
            sx={{ mt: 1 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "11px", md: "12px" },
                color: "#EEEEEE",
                fontWeight: 200,
              }}
            >
              GitHub ID
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "11px", md: "12px" },
                color: "#EEEEEE",
                textDecoration: "underline",
                fontWeight: 300,
              }}
            >
              Moojee
            </Typography>
          </Stack>

          {/* social icons */}
          <Box sx={{ pt: 3 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems="center"
            >
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

              {/* <a
                href="https://www.instagram.com/moojeefilm?igsh=MXJ1eWljb3R6eWNneQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#222831",
                    border: "1px solid #EEEEEE",
                    transition: "all 0.25s",
                    "&:hover": {
                      borderColor: "#00ADB5",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <InstagramIcon sx={{ color: "#EEEEEE" }} />
                </Avatar>
              </a> */}
            </Stack>
          </Box>

          {/* footer */}
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "9px" },
              color: "#EEEEEE",
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 4, md: 6 },
              opacity: 0.6,
            }}
          >
            © 2025 SUTITA PATTHAMACHAINUWAT
          </Typography>
        </Grid>

        {/* RIGHT SIDE - FORM */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 480,
              ml: { xs: 0, md: "auto" },   // ชิดขวาเฉพาะจอใหญ่
            }}
          >
            {/* Name Field */}
            <Box mb={2}>
              <Typography color="#EEEEEE" sx={{ mb: 1, textAlign: "left" }}>
                Name
              </Typography>
              <TextField
                fullWidth
                size="small"
                sx={{
                  bgcolor: "#393E46",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: "#00ADB5" },
                    "&.Mui-focused fieldset": { borderColor: "#00ADB5" },
                  },
                  "& .MuiInputBase-input": {
                    color: "#EEEEEE",
                  },
                }}
              />
            </Box>

            {/* Email Field */}
            <Box mb={2}>
              <Typography color="#EEEEEE" sx={{ mb: 1, textAlign: "left" }}>
                Email
              </Typography>
              <TextField
                fullWidth
                size="small"
                sx={{
                  bgcolor: "#393E46",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: "#00ADB5" },
                    "&.Mui-focused fieldset": { borderColor: "#00ADB5" },
                  },
                  "& .MuiInputBase-input": {
                    color: "#EEEEEE",
                  },
                }}
              />
            </Box>

            {/* Subject Field */}
            <Box mb={2}>
              <Typography color="#EEEEEE" sx={{ mb: 1, textAlign: "left" }}>
                Subject
              </Typography>
              <TextField
                fullWidth
                size="small"
                sx={{
                  bgcolor: "#393E46",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: "#00ADB5" },
                    "&.Mui-focused fieldset": { borderColor: "#00ADB5" },
                  },
                  "& .MuiInputBase-input": {
                    color: "#EEEEEE",
                  },
                }}
              />
            </Box>

            {/* Message Field */}
            <Box mb={2}>
              <Typography color="#EEEEEE" sx={{ mb: 1, textAlign: "left" }}>
                Message
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                sx={{
                  bgcolor: "#393E46",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: "#00ADB5" },
                    "&.Mui-focused fieldset": { borderColor: "#00ADB5" },
                  },
                  "& .MuiInputBase-input": {
                    color: "#EEEEEE",
                  },
                }}
              />
            </Box>

            {/* Submit Button */}
            <Box mt={3} sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#00ADB5",
                  borderRadius: 5,
                  px: 4,
                  "&:hover": {
                    bgcolor: "#008a91",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Connect;
