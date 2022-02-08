import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Container, Grid, Typography} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';
import sq1 from '../images/ex1.jpg';
import sq2 from '../images/cat.jpg';

function ca(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: sq1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: sq2
        }
    ]             

    return (
        <Grid container justifyContent="center">
        <Box 
            justifyContent="center"
            alignItems="center"
            sx={{ color: '#000', height: '650px', width: '2560px'}}>
        <Carousel  
        indicatorIconButtonProps={{
            style: {
                padding: '10px',    // 1
                color: 'grey'       // 3
            }
        }}     
        indicatorContainerProps={{
            style: {
                marginTop: '0', // 5               
                textAlign: 'center', // 4

                buttonWrapper: {
                    position: "absolute",
                    height: "100px",
                    backgroundColor: "transparent",
                    top: "calc(50% - 70px)",
                    '&:hover': {
                        '& $button': {
                            backgroundColor: "black",
                            filter: "brightness(120%)",
                            opacity: "0.4"
                        }
                    }
                },
                fullHeightHoverWrapper: {
                    height: "100%",
                    top: "0"
                },
                buttonVisible:{
                    opacity: "1"
                },
                buttonHidden:{
                    opacity: "0",
                },
                button: {
                    margin: "0 10px",
                    position: "relative",
                    backgroundColor: "#494949",
                    top: "calc(50% - 20px) !important",
                    color: "white",
                    fontSize: "30px",
                    transition: "200ms",
                    cursor: "pointer",
                    '&:hover': {
                        opacity: "0.6 !important"
                    },
                },
                // Applies to the "next" button wrapper
                next: {
                    right: 0
                },
                // Applies to the "prev" button wrapper
                prev: {
                    left: 0
                },

                indicators: {
                    width: "100%",
                    marginTop: "10px",
                    textAlign: "center"
                },
                indicator: {
                    cursor: "pointer",
                    transition: "200ms",
                    padding: 0,
                    color: "#afafaf",
                    '&:hover': {
                        color: "#1f1f1f"
                    },
                    '&:active': {
                        color: "#1f1f1f"
                    }
                },
                indicatorIcon: {
                    fontSize: "15px",
                },
                // Applies to the active indicator
                active: {           
                    color: "#494949"
                }
            }
    
        }}>
            {
                items.map( (item, i) => <Item key={i} item={item} img={sq1} /> )
            }
        </Carousel>
        </Box>
        </Grid>
    )
}

function Item(props)
{    
    return (
            <Box
                style={{
                    backgroundImage: `url(${props.item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition:"center",
                    height: "600px",
                    color: "#fff"
                }}
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{ bgcolor: '#000', height: '600px', width: '100%'}}> 
                <Typography variant="h1" component="div" gutterBottom>
                    {props.item.name}
                </Typography> 
                           
            </Box>

    )
}



export default ca;
