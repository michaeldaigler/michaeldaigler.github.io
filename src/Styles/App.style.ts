import { createStyles } from "@material-ui/styles";
export default createStyles({
  app: {
    backgroundColor: "#232526",
    width: "100%",
    height: "auto",

    display: "flex",
    flexDirection: "column",
    "& h1": {
      textAlign: "center",
      alignSelf: "center",
    },
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
      width: "100vw",
      height: "120vh",
    },

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)and (orientation: portrait)": {
      width: "100vw",
      height: "120vh",
    },

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)": {},

    /* ----------- iPhone 6+, 7+ and 8+ ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {},

    /* Portrait */
    "@media only screen  and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {},

    /* Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)": {},

    /* ----------- iPhone X ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 375px)  and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {},

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {},

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)and (orientation: landscape)": {},
    // "@media screen and (max-width: 375px)": {
    //   width: "100%",
    //   height: "100%",
    // },

    // // Small devices (landscape phones, less than 768px)
    // "@media (max-width: 767.98px) ": {
    //   display: "flex",
    //   flexDirection: "column",
    // },

    // // Medium devices (tablets, less than 992px)
    // "@media (max-width: 991.98px)": {
    //   display: "flex",
    //   flexDirection: "column",
    // },

    // // Large devices (desktops, less than 1200px)
    // "@media (max-width: 1199.98px)": {
    //   display: "flex",
    //   flexDirection: "column",
    // },
  },
  homePage: {
    backgroundColor: "#232526",

    width: "auto ",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    "& h1": {
      textAlign: "center",
    },
  },
  titleAndDescriptionContainer: {
    display: "flex",
    flexDirection: "row",
    "@media screen and (max-width: 375px)": {
      display: "flex",
      flexDirection: "column",
    },
    "@media (max-width: 575.98px)": {
      display: "flex",
      flexDirection: "column",
      width: "100px",
    },

    // Small devices (landscape phones, less than 768px)
    "@media (max-width: 767.98px) ": {
      display: "flex",
      flexDirection: "column",
    },

    // Medium devices (tablets, less than 992px)
    "@media (max-width: 991.98px)": {
      display: "flex",
      flexDirection: "column",
    },

    // Large devices (desktops, less than 1200px)
    "@media (max-width: 1199.98px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  descriptionContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "100px 0px 0px 0px",
    width: "500px",
    height: "100vh",
    "@media screen and (max-width: 375px)": {
      display: "flex",
      flexDirection: "column",
    },
    "@media (max-width: 575.98px)": {
      display: "flex",
      flexDirection: "column",
      width: "100px",
    },

    // Small devices (landscape phones, less than 768px)
    "@media (max-width: 767.98px) ": {
      display: "flex",
      flexDirection: "column",
    },

    // Medium devices (tablets, less than 992px)
    "@media (max-width: 991.98px)": {
      display: "flex",
      flexDirection: "column",
    },

    // Large devices (desktops, less than 1200px)
    "@media (max-width: 1199.98px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  description: {
    textAlign: "left",
    height: "200px",
    width: "500px",
    backgroundColor: "inherit",
    font: "white",

    margin: "0px 0px 0px 10px",
    borderRadius: "10px",
    padding: "10px",
    "& h1": {
      color: "#AAA",
      fontSize: "44px",
    },
    "& p": {
      width: "auto",
      fontSize: "24px",
      color: "#AAA",
      fontFamiy: "Oswald",
    },
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
      minWidth: "300px",
      width: "auto",
    },

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)and (orientation: portrait)": {
      minWidth: "300px",
      width: "auto",
    },

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)": {},

    /* ----------- iPhone 6+, 7+ and 8+ ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {},

    /* Portrait */
    "@media only screen  and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {},

    /* Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)": {},

    /* ----------- iPhone X ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 375px)  and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {},

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {},

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)and (orientation: landscape)": {},
    // "@media screen and (max-width: 375px)": {
  },
  emailButton: {
    position: "relative",
    backgroundColor: "#414345",
    height: "50px",
    color: "white",
    width: "100px",
    fontFamily: "Oswald",
    fontStretch: "10px",
    "&:hover": {
      backgroundColor: " #AAA",
      height: "50px",
      color: "white",
      width: "100px",
      broderRadius: "10px",
    },
  },
  profilePic: {
    width: "200px",
    height: "200px",
    border: "1px solid black",
    borderRadius: "500px",
  },
  headerTransitionItem: {
    overflow: "hidden",
    width: "100%",
    height: "auto",
    color: "white",
    display: "flex",
    justifyContent: "flexStart",
    alignItems: "center",
    fontSize: "5em",
    fontWeight: 800,
    textTransform: "uppercase",
    willChange: "transform, opacity, height",
    whiteSpace: "nowrap",
    cursor: "pointer",
    lineHeight: "80px",
  },
  trailsContainer: {
    position: "relative",
    width: "50vw",
    height: "auto",
    "@media screen and (max-width: 375px)": {
      marginTop: "200px",
    },
    "@media (max-width: 767.98px) ": {
      display: "flex",
      flexDirection: "column",
      margin: "100px",
      marginTop: "200px",
    },

    // Medium devices (tablets, less than 992px)
    "@media (max-width: 991.98px)": {
      display: "flex",
      flexDirection: "column",
      marginTop: "200px",
    },

    // Large devices (desktops, less than 1200px)
    "@media (max-width: 1199.98px)": {
      display: "flex",
      flexDirection: "column",
      marginTop: "200px",
    },
  },
  trailsMain: {
    position: "absolute",
    width: "50vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  trailsText: {
    position: "relative",
    width: " 100%",
    height: "140px",
    lineHeight: "100px",
    color: "#9599E2",
    fontSize: "7em",
    fontWeight: 800,
    letterSpacing: "-2px",
    willChange: "transform, opacity",
    // overflow: "hidden",
    "@media screen and (max-width: 375px)": {},
    "@media (max-width: 767.98px) ": {},

    // Medium devices (tablets, less than 992px)
    "@media (max-width: 991.98px)": {},

    // Large devices (desktops, less than 1200px)
    "@media (max-width: 1199.98px)": {},
  },
  aboutPage: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    "& h1": {
      textAlign: "center",
    },
  },
  aboutMeDescriptionContainer: {
    width: "40vw",
    justifyContent: "center",
    padding: "10px",
    maxHeight: "calc(100vh - 50px)",
    backgroundColor: "inherit",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px 0px",
    margin: "0px 0px 10px 0px",
    "& h3": {
      color: "white",
    },
    "& p": {
      color: "white",
      fontFamily: "Oswald",
      fontSize: "24px",
    },
  },
  dynamicSlider: {
    cursor: "pointer",
    position: "relative",
    width: "500px",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: 800,
    fontSize: "120px",
    willChange: "opacity",
    textShadow: "0px 2px 40px #00000020, 0px 2px 5px #00000030",
  },
  dynamicPicContainer: {
    cursor: "pointer",
    width: "500px",
    height: "500px",
    fontWeight: 800,
    fontSize: "120px",
    textShadow: "0px 2px 40px #00000020, 0px 2px 5px #00000030",
  },
  dynamicPic: {
    willChange: "opacity",
    width: "500px",
    position: "absolute",
    height: "500px",
  },
  experiencePage: {
    background: "inherit",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    margin: "100px 0px 0px 0px",
    height: "150%",
    "& h1": {
      textAlign: "center",
    },
    alignItems: "center",
  },
  experience: {
    fontFamily: "Oswald",
    color: "white",
    display: "flex",
    justifyContent: "",
    "& img": {
      marginInline: "-50px",
      height: "100px",
      width: "100px",
    },
    "& h1": {
      marginInline: "0px",
      width: "500px",
    },
    "& p": {
      fontSize: "22px",
    },
  },
  footerContainer: {
    position: "relative",
    bottom: 0,
    width: "auto",
    padding: "10px",
    height: "40px",
    backgroundColor: "#414345",
    textAlign: "center",
    color: "#AAA",
    fontFamily: "Oswald",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerLinkItem: {
    listStyle: "none",
  },
  footerLink: {
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "15px",
    marginInlineEnd: "0px",
  },
  podcastIcon: {
    color: "#9599E2"
  }
});
