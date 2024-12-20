import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "./components/Layouts/Header";

function Home() {
  return (
    <Box>
      <Header />
      <Typography sx={{ textAlign: "center", mt: 2 }}>
        Bienvenue sur l'accueil
      </Typography>
    </Box>
  );
}

export default Home;
