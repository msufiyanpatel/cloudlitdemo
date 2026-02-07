import * as React from "react";
import '../styles/Home.css'
import '../styles/About.css'
import { styled } from '@mui/material/styles';
import { Button, createTheme }  from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import { ThemeProvider } from "@emotion/react";



const About = () => {
  const isMobile = window.innerWidth <= 776; // Adjust the breakpoint as needed

  const containerStyle = {
    backgroundColor: "white",
    display: "flex",
    // height: "800px",
    maxWidth: "1600px",
    margin: "100px",
    flexDirection: isMobile ? "column" : "row",
  };
  const imageStyle = {
    flex: "23%",
    padding: "5px",
    // backgroundColor: "#e8f7e5",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    // justifyContent: "center",
    //alignItems: isMobile ? "center" : "center",
    alignItems: "space-between",
    justifyContent: "center",
  };

  const imgContainerStyle = {
    maxWidth: "50%",
    height: "38%",
    overflow: "hidden",
    borderRadius: "20px",
    marginLeft: "10px",
    border: "10px solid white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    //marginTop: "120px",
  };
  const contentStyle = {
    flex: "1",
    textAlign: "left",
    marginLeft: "30px",
    // paddingLeft: "10%",
    //width: "750px",
    flexDirection: "column",

    //justifyContent: "space-around"
  };

  const headingOneStyle = {
    // marginRight: isMobile ? '100px' :'0',
    fontSize: "35px",
    padding: '0',
    fontFamily: "'Cuprum', sans-serif",
    fontWeight: "bold",
    lineHeight: "1.3"
    
  };

  const paragraphStyle = {
    fontSize: "20px",
    paddingTop: '10px',
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: "500",
    // lineHeight: "1"
  };

  const buttonStyle = {
    height: "50px",
    width: "fit-content",
    color: "#ffffff",
    //marginLeft: "120px",
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    marginTop:"30px",
  
    };

  const theme = createTheme(); // Create an empty theme object

  return (
  <ThemeProvider theme={theme}>
  <div>
    <div style ={containerStyle}>
      <div id="About" style={imageStyle}>
        <div style={imgContainerStyle}>
          <img
              src="./businesswoman-posing-during-meeting-indoors-with-laptop.jpg" // Replace with the URL of your image
              alt="Professional Team 1 working"
              // style={{borderRadius: "40%"}}
            />
        </div>
        <div style={imgContainerStyle}>
          <img
              src="\two-female-one-male-business-partners-looking-computer-screen-discussing-their-project.jpg" // Replace with the URL of your image
              alt="Professional Team 2 working"
              // style={{borderRadius: "40%"}}
            />
        </div>
      </div>
      <div style={contentStyle}>
        <h3 style={headingOneStyle}>We create some things, Design for your success future.</h3>
        <p style={paragraphStyle}>Lorem Ipsum is simply dumm of free available in market the way printing and typesetting industry has been the industrys standard dummy text ever. </p>
        <ul class ="bullet-list">
          <li>Price of additional materials or parts (if needed) </li>
          <li>Transportation cost for carrying new materials/parts </li>
          <li>You will get 100% money back offer. </li>
        </ul>
        <Button variant="contained" color="primary" style={buttonStyle}>Know More</Button>
        {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
      </div>
    </div>
  </div>
  </ThemeProvider>
  );
};

export default About;

