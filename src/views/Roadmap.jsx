import React from "react";
import styles from "../styles/Roadmap.module.css";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Roadmap = () => {
  return (
    <div id="Roadmap">
      <div className={styles["roadmap-container"]}>
        <div className={styles.content}>
          <h1>
            <b>
              <span className={styles["content-h1"]}>
                Roadmap To Your Successful DevOps Transformation Journey&nbsp;
              </span>
            </b>
          </h1>
          {/* <h1 className={styles["coloured-content"]}>Custom Software Development </h1>
        <h1 className ={styles["content-h1"]}>&nbsp;Success</h1> */}
          <p className={styles.paragraph}>
            As your business evolves, so must technology models. Cloudlit
            roadmap gives you on-demand access to a team of highly skilled
            experts that work alongside your team to collaboratively drive your
            cloud outcomes while continuously evolving your environment. Gain
            direct access to highly skilled cloud experts and work with them as
            you would your own team.
          </p>
          {/* <IconButton>Connect now</IconButton> */}
        </div>
        <div className={styles["box-container"]}>
          <div className={styles.box}>
            {/* <FontAwesomeIcon icon={solid("1")} /> */}
            {/* <div className={styles.circle}> */}
            <FontAwesomeIcon icon={solid("1")} className={styles.icon1} />
            {/* </div> */}
            <div className={styles["box-content"]}>
              <b>
                <h1 className={styles["box-heading"]}>
                  {" "}
                  Requirments Gathering:
                </h1>
              </b>
              <p className={styles["box-para"]}>
                Our experts will collect complete reports of your existing
                system (services,databases,middleware etc). Understand complete
                communication between different components.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            {/* <div className={styles.circle}> */}
            <FontAwesomeIcon icon={solid("2")} className={styles.icon2} />
            {/* </div> */}
            <div className={styles["box-content"]}>
              <b>
                <h1 className={styles["box-heading"]}>
                  Select right cloud platform
                </h1>
              </b>
              <p className={styles["box-para"]}>
                There are multiple cloud providers available currently in the
                market, we make sure you choose which is perfect for your
                solution.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            {/* <div className={styles.circle}> */}
            <FontAwesomeIcon icon={solid("3")} className={styles.icon3} />
            {/* </div> */}
            <div className={styles["box-content"]}>
              <b>
                <h1 className={styles["box-heading"]}>
                  {" "}
                  Integration of tools and strategies{" "}
                </h1>
              </b>
              <p className={styles["box-para"]}>
                Our integration team makes sure from the very start your
                solution is built on the latest tools and strategies. The tools
                and technologies we focus on are available here.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            {/* <div className={styles.circle}> */}
            <FontAwesomeIcon icon={solid("4")} className={styles.icon4} />
            {/* </div> */}
            <div className={styles["box-content"]}>
              <b>
                <h1 className={styles["box-heading"]}>
                  Train and build your business culture on cloud:
                </h1>
              </b>
              <p className={styles["box-para"]}>
                Our team will be involved with your IT experts and train them on
                the tools integrated and how to take full advantage of
                cloud-native techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
