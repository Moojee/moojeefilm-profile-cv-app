import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll"; // ✅ เอาตัวนี้ตัวเดียวพอ

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Work", to: "work" },
    { label: "About", to: "about" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#222831",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        <Typography
          sx={{
            flexGrow: 1,
            color: "#EEE",
            fontWeight: 700,
            whiteSpace: "nowrap",
            fontSize: { xs: 12, sm: 14, md: 16 },
          }}
        >
          SUTITA PATTHAMACHAINUWAT
        </Typography>

        {/* desktop */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                duration={800}
                offset={-70} // กัน navbar บัง
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    color: "#EEE",
                    cursor: "pointer",
                    "&:hover": { color: "#00ADB5" },
                  }}
                >
                  {item.label}
                </Box>
              </ScrollLink>
            ))}
          </Box>
        )}

        {/* mobile dropdown แบบที่ทำ */}
        {isMobile && (
          <Box
            sx={{ position: "relative" }}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: "100%",
                mt: 1,
                background: "#222831",
                borderRadius: 2,
                overflow: "hidden",
                maxHeight: menuOpen ? 300 : 0,
                opacity: menuOpen ? 1 : 0,
                transition: "all .25s",
              }}
            >
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={800}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      px: 2.5,
                      py: 1.2,
                      color: "#EEE",
                      "&:hover": { background: "#393E46" },
                    }}
                  >
                    {item.label}
                  </Box>
                </ScrollLink>
              ))}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
