import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Kanit, system-ui, -apple-system, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,      // มือถือ
      sm: 600,    // แท็บเล็ตเล็ก
      md: 900,    // แท็บเล็ต
      lg: 1200,   // คอมพิวเตอร์
      xl: 1536,   // หน้าจอใหญ่
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);