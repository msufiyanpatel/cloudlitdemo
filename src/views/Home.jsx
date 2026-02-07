/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import styles from "../styles/Home.module.css";
import { Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import devOps from "../assets/2nd picture.png";
import { green } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const buttonStyle = {
    alignSelf: "flex-start",
    height: "50px",
    width: "fit-content",
    background: "linear-gradient(to right,blue, blueviolet)",
    color: "#ffffff",
    marginRight: "-50px",
    "&:hover": {
      // backgroundColor: green[700],
    },
  };

  const navigate = useNavigate();
  const theme = createTheme(); // Create an empty theme object

  const onDiscoverButtonClick = () => {
    navigate("/about");
    //window.open('/contact');
  };

  return (
    <ThemeProvider theme={theme}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      </head>
      <div id="Home">
        <div className={styles.containerStyle}>
          <div className={styles.contentStyle}>
            {/* <h3 className={styles.headingOneStyle}></h3> */}
            <h1 className={styles.myheadingTwo}>
              Think. Build. Scale With Cloud
            </h1>
            <p className={styles.paragraghStyle}>
              As you begin your journey to embrace modern cloud native mindset,
              you may need more than just support. Cloudlit can help you
              understand how to scale your IT organization, transform your
              traditional environments, streamline your operating models and
              operate efficiently.
            </p>
            <Button variant="contained" color="primary" style={buttonStyle}
            onClick={onDiscoverButtonClick}>
              Discover More
            </Button>
            {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
          </div>
          <div className={styles.imageStyle}>
            <div className={styles.imgContainerStyle}>
              <img
                src={devOps}// Replace with the URL of your image
                alt="Circle Image"
                className={styles["circle-image"]}
                // style={{borderRadius: "40%"}}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
