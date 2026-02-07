import React from "react";
import styles from "../styles/About1.module.css";
import excellence from "../assets/Execellence.png";
import innovation from "../assets/Innovation.png";
import teamwork from "../assets/TeamWork.png";
import integrity from "../assets/Integrity.png";
import ethics from "../assets/Ethics.png";
import compassion from "../assets/Compassion.png";

import picture from "../assets/3rd picture.png";
const About = () => {
  return (
    <div id="About">
      <div className={styles["about-container"]}>
        <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1>
            <span className={styles["content-h1"]}>Solving Together&nbsp;</span>
          </h1>
          {/* <h1 className={styles["coloured-content"]}>Custom Software Development </h1>
        <h1 className ={styles["content-h1"]}>&nbsp;Success</h1> */}
          <p className={styles.paragraph}>
            Businesses are under pressure today to employ cloud technologies to
            address strategic issues, build new revenue and cut expenses. You
            can achieve these advantages more quickly by switching to a cloud
            native strategy. Adoption of cloud native technology is challenging
            and requires a new way of thinking. This incorporates completely new
            architectural methodology, new techniques for environment
            deployment, monitoring, and operation.
            <br /> Cloudlit Engineering is our core to support our clients in
            complete cloud transformation journey from start to end!
          </p>

        </div>
        {/* <div className={styles.imageContainer}> */}
          <div className={styles.image}>
            <img src={picture} alt=" " />
          </div>
        {/* </div> */}
        </div>
        
        <div className={styles.section2}>
          <div className={styles["section2-div1"]}>
            <h1>
              <span
                className={styles["content-h1"]}
                style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
              >
                Who We Are&nbsp;
              </span>
            </h1>
            {/* <h1 className={styles["coloured-content"]}>Custom Software Development </h1>
        <h1 className ={styles["content-h1"]}>&nbsp;Success</h1> */}
            <p
              className={styles.paragraph}
              style={{ color: "white", width: "80%" }}
            >
              Cloudlit is a premier DevOps and IT Consulting Company that offers
              a wide range of services to meet your IT needs. Our experts will
              support you develop and deploy robust and reliable software
              solutions for your business.
              <br /> <br />
              From infrastructure automation to cloud-based solutions, we can
              help you get the most out of your technology investments. We are
              dedicated to providing our customers with world-class services,
              support, and solutions.
            </p>
            {/* <IconButton>Connect now</IconButton> */}
          </div>
          <div className={styles["section2-div2"]}>
            <h1>
              <span
                className={styles["content-h1"]}
                style={{ color: "black", fontSize: "40px", fontWeight: "bold" }}
              >
                Our Mission&nbsp;
              </span>
            </h1>
            {/* <h1 className={styles["coloured-content"]}>Custom Software Development </h1>
        <h1 className ={styles["content-h1"]}>&nbsp;Success</h1> */}
            <p
              className={styles.paragraph}
              style={{ color: "black", width: "90%" }}
            >
              Our goal is to make sure that your applications and infrastructure
              is secure, reliable, and resilient. We enable private and public
              cloud solutions for your business through our expertise with the
              world’s leading technologies with a right strategy. Cloudlit has a
              team of talented and experienced engineers who are passionate
              about helping you succeed In the ever-evolving world of
              technology.
            </p>
            {/* <IconButton>Connect now</IconButton> */}
          </div>
        </div>
        <div className={styles.section3}>
          <h1 className={styles["section3-h1"]}>
            <span>
              Our Core <b>Principles</b>&nbsp;
            </span>
          </h1>
          <div className={styles["box-container"]}>
            <div className={styles.hexagonContainer}>
              <div className={styles.hexagon}>
                <img src={excellence} style={{ fontSize: "20px" }} />
              </div>
              <h1 style={{ fontSize: "20px" }}>
                <b>Excellence </b>
              </h1>
            </div>
            <div className={styles.hexagonContainer}>
              <div className={styles.hexagon}>
                <img src={innovation} style={{ fontSize: "20px" }} />
              </div>
              <h1 style={{ fontSize: "20px" }}>
                <b>Innovation </b>
              </h1>
            </div>
            <div className={styles.hexagonContainer}>
              <div className={styles.hexagon}>
                <img src={teamwork} style={{ fontSize: "20px" }} />
              </div>
              <h1 style={{ fontSize: "20px" }}>
                <b>Teamwork </b>
              </h1>
            </div>
            <div className={styles.hexagonContainer}>
              <div className={styles.hexagon}>
                <img src={integrity} style={{ fontSize: "20px" }} />
              </div>
              <h1 style={{ fontSize: "20px" }}>
                <b>Integrity </b>
              </h1>
            </div>
            <div className={styles.hexagonContainer}>
              <div className={styles.hexagon}>
                <img src={ethics} style={{ fontSize: "20px" }} />
              </div>
              <h1 style={{ fontSize: "20px" }}>
                <b>Ethics </b>
              </h1>
            </div>
            <div className={styles.hexagonContainer}>
              <div className={styles.hexagon}>
                <img src={compassion} style={{ fontSize: "20px" }} />
              </div>
              <h1 style={{ fontSize: "20px" }}>
                <b>Compassion </b>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
