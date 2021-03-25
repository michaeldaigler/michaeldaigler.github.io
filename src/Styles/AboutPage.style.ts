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
    "@media screen and (max-width: 375px)": {
      width: "375px",
      height: "875px",
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
  aboutPage: {
    backgroundColor: "#232526",

    width: "auto ",
    height: "auto",
    maxWidth: "100%",
    // maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    "& h1": {
      textAlign: "center",
    },
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


  aboutPageItemsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    // overflow: "overlay",
    "& h1": {
      textAlign: "center",
    },
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)and (orientation: portrait)": {
      flexDirection: "column",
      width: "auto",
    },

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)": {},

    /* ----------- iPhone 6+, 7+ and 8+ ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {},

    /* Portrait */
    "@media only screen  and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {
      flexDirection: "column",
      width: "auto",
    },

    /* Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)": {},

    /* ----------- iPhone X ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 375px)  and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
      flexDirection: "column",
      width: "auto",
    },

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {},

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)and (orientation: landscape)": {},
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
      innerHeight: "200px"
    },
    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)and (orientation: portrait)": {
      padding: "10px",
      width: "80vw",
      margin: "0px 20px 10px 20px"
    },

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)": {},

    /* ----------- iPhone 6+, 7+ and 8+ ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {},

    /* Portrait */
    "@media only screen  and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {
      flexDirection: "column",
      width: "auto",
    },

    /* Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)": {},

    /* ----------- iPhone X ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 375px)  and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {},

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {
      flexDirection: "column",
      width: "auto",
    },

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)and (orientation: landscape)": {},

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
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)and (orientation: portrait)": {
      flexDirection: "column",
      width: "50vw",

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
  },
  dynamicPicContainer: {
    cursor: "pointer",
    width: "500px",
    height: "500px",
    fontWeight: 800,
    fontSize: "120px",
    textShadow: "0px 2px 40px #00000020, 0px 2px 5px #00000030",
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)and (orientation: portrait)": {
      padding: "10px",
      width: "300px",
      margin: "0px 20px 10px 20px"
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

  },
  dynamicPic: {
    willChange: "opacity",
    width: "500px",
    position: "absolute",
    height: "500px",
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)and (orientation: portrait)": {
      padding: "10px",
      width: "300px",
      margin: "0px 20px 10px 20px"
    },

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)": {},

    /* ----------- iPhone 6+, 7+ and 8+ ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
      padding: "10px",
      width: "300px",
      margin: "0px 20px 10px 20px"
    },

    /* Portrait */
    "@media only screen  and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {
      padding: "10px",
      width: "300px",
      margin: "0px 20px 10px 20px"
    },

    /* Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)": {},

    /* ----------- iPhone X ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 375px)  and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {},

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {},

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)and (orientation: landscape)": {},
  },


  podcastIcon: {
    height: "100px",
    color: "#9599E2"
  }
});
