import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles"
import AppStyle from "../Styles/App.style";
import Description from "../Components/Description";
import NavBar from "../Components/Navigtation/NavBar";
import DynamicTitle from "../Components/DynamicTitle";
import DynamicPictures from "../Components/DynamicPictures";
import Footer from "../Components/Footer";
import { useViewPort } from "../Context/ViewportProvider";
import {CheckBreakPointInterfaceProps} from "../Interfaces/CheckBreakPointInterfaceProps"
const useStyles = makeStyles(AppStyle)

const HomePage: React.FC<CheckBreakPointInterfaceProps> = (props) => {
  const {widht, height} = useViewPort()

  const classes = useStyles();
  if (props.passedBreakPoint) {
    return  (
      <div className={classes.homePage}>
        <div className={ classes.titleAndDescriptionContainer}>
        <Description />

        </div>
        <Footer />

      </div>)
  }
  return  (
    <div className={classes.homePage}>
      <div className={ classes.titleAndDescriptionContainer}>
        <DynamicTitle />
      <Description />

      </div>
      <Footer />

    </div>
  );
}

export default HomePage;


