import React from 'react';
import myStyle from './MainPage.module.scss';
import { Grid, Box, Container } from '@mui/material';
import ResponsiveAppBar from '../../component/ResponsiveAppBar';
import Carousel from '../../component/Carousel';
import SearchBar from '../../component/SearchBar';
import SearchBar2 from '../../component/SearchBar2';
import { Categorie } from '../../component/Categorie';
import Card1 from '../../component/Card';


const MainPage = () => {
  return (
    <div className='main'>
      <Grid container justifyContent="center">
        <ResponsiveAppBar />
        <Carousel />
        <SearchBar2 />
        <Categorie />
        <Grid container justifyContent="center">
            <Box
              justifyContent="center"
              alignItems="center"
              sx={{
                p: "10px",
                backgroundColor: '#fff',
                display: 'flex',
              }}>
              <Card1 />
            </Box>
            <Box
              justifyContent="center"
              alignItems="center"
              sx={{
                p: "10px",
                backgroundColor: '#fff',
                display: 'flex',
              }}>
              <Card1 />
            </Box>
            <Box
              justifyContent="center"
              alignItems="center"
              sx={{
                p: "10px",
                backgroundColor: '#fff',
                display: 'flex',
              }}>
              <Card1 />
            </Box>
            <Box
              justifyContent="center"
              alignItems="center"
              sx={{
                p: "10px",
                backgroundColor: '#fff',
                display: 'flex',
              }}>
              <Card1 />
            </Box>
        </Grid>
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: "200px",
            width: "100%",
            height: "300px",
            backgroundColor: 'gray',
          }}>
        </Box>

      </Grid>

    </div>
  )
};

export default MainPage;
