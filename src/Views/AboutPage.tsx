import React from "react";
import { makeStyles } from "@material-ui/styles"
import DynamicPictures from "../Components/DynamicPictures";
import AboutPageStyle from "../Styles/AboutPage.style";
import {CheckBreakPointInterfaceProps} from "../Interfaces/CheckBreakPointInterfaceProps"
import Footer from "../Components/Footer";
const useStyles = makeStyles(AboutPageStyle)

const AboutPage: React.FC<CheckBreakPointInterfaceProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.aboutPage}>
      <h1 style={{ fontFamily: "Oswald", color: "#AAAAAA", fontSize: "44px" }}>About Me</h1>
      <div className={classes.aboutPageItemsContainer}>
      <div className={classes.aboutMeDescriptionContainer}>
      <h3>Who am I?</h3>
        <p>
          <strong>Education</strong><br/>
          I'm a CS Student at Wake Forest University and am Graduating in May 2023.
        </p>
        <p>
          <strong>Hobbies</strong><br />
          <p>I enjoy running, lifting weights, reading and learning about human psychology. I love lsitening to podcasts and audiobooks, especially when I run. I also train Brazilian Jiu Jistu. Oss!🥋</p>
        </p>
        <p><strong>General</strong><br />
      <p>I love meeting new people and having great converstaions about ideas. Please reach out if you've got anything you'd like to say! </p>
        </p>
        </div>
        {!props.passedBreakPoint && <DynamicPictures />}
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;