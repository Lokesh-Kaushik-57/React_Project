import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white', p:1,  position:'fixed', bottom:0, left:0, zIndex: 1, width: '100%'}}>
        <Box sx={{ mb:0, "& svg":{
            fontSize: "30px",
            cursor: "pointer",
            mr:3
        },
        "& svg:hover": {
            color: "goldenrod",
            transform: "translateY(-5px)",
            transition: "all 400ms"
        }
         }}>
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <YouTubeIcon />
            
        </Box>
        <Typography
            sx={{"@media (max-width:600px)":{
            fontSize: '1rem'
        }}}>
            All rights reserved &copy; techinfo YT
        </Typography>
    </Box>
    </>
  )
}

export default Footer