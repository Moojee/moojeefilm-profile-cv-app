import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Element } from "react-scroll";

function Portfolio() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ตัวอย่างข้อมูลโปรเจกต์ สามารถเพิ่มได้ตามจริง
  const projects = [
    {
      title: "ThaiTrip AI",
      image: "/assets/thaitrip.jpg",
      desc: "AI Travel Planner webapp using React + Python backend with weather and Google Map integration.",
      link: "https://example.com/thaitrip",
    },
    {
      title: "RunDiary",
      image: "/assets/rundiary.jpg",
      desc: "Running diary app built with Next.js and Supabase for tracking daily workouts and images.",
      link: "https://example.com/rundiary",
    },
    {
      title: "Dongra Food Costing",
      image: "/assets/dongra.jpg",
      desc: "Restaurant backend and food cost management system built with React + Google Sheets API.",
      link: "https://example.com/dongra",
    },
  ];

  return (
    <Element name="portfolio">
      <Box
        sx={{
          backgroundColor: "#222831",
          py: { xs: 5, sm: 6, md: 8 },
          px: { xs: 3, sm: 6, md: 14, lg: 18 },
        }}
      >
        <Grid
          container
          spacing={3}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {/* Title */}
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: { xs: "32px", sm: "42px", md: "50px" },
                fontWeight: "bold",
                color: "#EEEEEE",
                textAlign: "center",
                mb: { xs: 3, sm: 5 },
              }}
            >
              MY PORTFOLIO
            </Typography>
          </Grid>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#393E46",
                  borderRadius: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 24px rgba(0, 173, 181, 0.25)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00ADB5",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#EEEEEE",
                      fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      fontWeight: 300,
                      mb: 2,
                    }}
                  >
                    {project.desc}
                  </Typography>
                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#00ADB5",
                      borderRadius: 8,
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { backgroundColor: "#0099a2" },
                    }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Element>
  );
}

export default Portfolio;
