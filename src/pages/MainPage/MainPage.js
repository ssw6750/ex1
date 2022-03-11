import React from "react";
import { Grid, Box, Container } from "@mui/material";
import ResponsiveAppBar from "../../component/ResponsiveAppBar";
import SearchBar2 from "../../component/SearchBar2";
import { Categorie } from "../../component/Categorie";
import Card from "../../component/Card";

const MainPage = () => {
  return (
    <div className="main">
      <Container
        sx={{
          minWidth: { xs: "100%", md: "1200px" },
          maxWidth: { xs: "100%", md: "2560px" },
        }}
        disableGutters={true}
        container
        justifyContent="center"
      >
        <ResponsiveAppBar />
        <SearchBar2 />
        <Categorie />
        <Card/>
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: "200px",
            width: "100",
            height: "300px",
            backgroundColor: "gray",
          }}
        ></Box>
      </Container>
    </div>
  );
};

export default MainPage;
