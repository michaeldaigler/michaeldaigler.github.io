import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppStyle from "../Styles/App.style";
import MyPicture from "../assets/michael_pic_corrected.jpg";
import { Button } from "@material-ui/core";
const useStyles = makeStyles(AppStyle);

const Description: React.FC = () => {
  const classes = useStyles();
  const emailButtonClicked = () => {
    window.open("mailto:mdaigler2601@gmail.com?subject=Reaching out")
  }
  return (
    <React.Fragment>
      <div className={classes.descriptionContainer}>
        <img className={classes.profilePic} src={MyPicture} alt=":)" />
        <div className={classes.description}>
          <h1>Welcome to my website!</h1>

          <p>
            Take a look around! Feel free to reach out if you want to chat, talk
            about projects, or have any questions.
          </p>
          <Button className={classes.emailButton} onClick={emailButtonClicked}>Email</Button>
        </div>

      </div>

    </React.Fragment>
  );
};

export default Description;
