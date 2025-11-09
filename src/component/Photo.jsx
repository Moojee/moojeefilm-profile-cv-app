// import React from "react";
// import { Box, Grid } from "@mui/material";
// import moojeefilm from "../assets/moojeefilm.jpg";

// function Photo() {
//   return (
//     <Box
//       id="photo"
//       sx={{
//         backgroundColor: "#222831",
//         py: { xs: 5, sm: 6, md: 8 }, // padding แนวตั้งตามขนาดจอ
//         px: { xs: 2, sm: 4, md: 10, lg: 16 },
//       }}
//     >
//       <Grid
//         container
//         justifyContent="center"
//         alignItems="center"
//         sx={{
//           textAlign: "center",
//         }}
//       >
//         <Grid item xs={12} sm={10} md={8} lg={6}>
//           <Box
//             component="img"
//             src={moojeefilm}
//             alt="moojeefilm"
//             sx={{
//               width: "100%", // ให้เต็มกริด
//               maxWidth: { xs: "90%", sm: "80%", md: "100%" }, // จำกัดขนาดตามจอ
//               height: "auto",
//               borderRadius: { xs: 3, sm: 4, md: 5 }, // มุมโค้งน้อยลงบนมือถือ
//               boxShadow: "0 8px 24px rgba(0, 173, 181, 0.2)",
//               display: "block",
//               mx: "auto",
//               transition: "transform 0.4s ease, box-shadow 0.4s ease",
//               "&:hover": {
//                 transform: "scale(1.02)",
//                 boxShadow: "0 12px 32px rgba(0, 173, 181, 0.35)",
//               },
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Photo;
