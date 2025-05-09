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
    <Box id="contact" sx={{ backgroundColor: "#222831" }}>
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        px={{ xs: 3, sm: 6, md: 16 }}
        py={{ xs: 4, sm: 6, md: 6 }}
      >
        {/* LEFT SIDE */}
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
            LET'S CONNECT
          </Typography>

          <Stack
          direction="row"
          spacing={1}
          >
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "12px" },
                color: "#EEEEEE",
                textAlign: { xs: "center", md: "left" },
                mt: 2,
                fontWeight: 200,
              }}
            >
              Say Hello To Me at
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "10px", md: "12px" },
                color: "#EEEEEE",
                textAlign: { xs: "center", md: "left" },
                mt: 2,
                textDecoration: "underline",
                fontWeight: 300,
              }}
            >
              Sutitamoojee@gmail.com
            </Typography>
          </Stack>


            <Stack
            direction="row"
            spacing={1}
            >

          
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "12px" },
              color: "#EEEEEE",
              textAlign: { xs: "center", md: "left" },
              fontWeight: 200,
            }}
          >
            For Github ID
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "12px", md: "12px" },
              color: "#EEEEEE",
              textAlign: { xs: "center", md: "left" },
              textDecoration: "underline",
              fontWeight: 300,
            }}
          >
            Moojee
          </Typography>

          </Stack>

          <Box sx={{ pt: 3, mt: 2 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
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

              <a
                href="https://www.instagram.com/moojeefilm?igsh=MXJ1eWljb3R6eWNneQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Avatar sx={{ bgcolor: "#222831" }}>
                  <InstagramIcon sx={{ color: "#EEEEEE" }} />
                </Avatar>
              </a>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <Typography
              sx={{
                fontSize: { xs: "6px", md: "8px" },
                color: "#EEEEEE",
                textAlign: { xs: "center", md: "left" },
                mt: 36,
              }}
            >
              © 2025 SUTITA PATTHAMACHAINUWAT
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} ml={24}>
          {" "}
          {/* เพิ่ม ml="auto" ให้ชิดขอบขวา */}
          <Box sx={{ width: "100%", maxWidth: "420px" }}>
            {/* Name Field */}
            <Box mb={2}>
              <Typography color="#EEEEEE" sx={{ mb: 1, textAlign: "left" }}>
                Name
              </Typography>
              <TextField
                fullWidth
                size="small"
                sx={{
                  width: "480px", // เพิ่มขนาดของ TextField ให้กว้างขึ้น
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
                  width: "480px",
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
                  width: "480px",
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
                  width: "480px",
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
