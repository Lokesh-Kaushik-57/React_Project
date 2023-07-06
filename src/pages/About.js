import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign: 'center',
        p:2,
        "& h4": {
          fontWeight: 'bold',
          my:2,
        },
        "& p":{
          textAlign: 'justify'
        },
        "@media (max-width:600px)":{
          mt:0,
        }
      }}>
        <Typography variant="h4">Welcome to our Website</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          consequatur modi eum ipsam quidem deleniti unde pariatur recusandae
          commodi. Voluptate natus odio, debitis beatae quod laborum ut ullam
          reprehenderit nobis hic exercitationem, laudantium expedita quae
          facere omnis, fugiat minus quas consequatur aperiam harum iusto eius?
          Ducimus perferendis omnis consequuntur incidunt!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          fugiat quisquam reiciendis optio repellat accusantium quaerat, eos
          eaque ab assumenda vero ratione saepe ullam culpa praesentium odit
          ipsum esse. Illo consequatur provident, accusamus corrupti vero
          repellat debitis consequuntur ab magnam dolor amet repudiandae dicta
          qui vel, nihil consectetur quis cumque.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
