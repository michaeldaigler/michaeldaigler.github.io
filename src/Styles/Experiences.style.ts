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
      height: "100vh",
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

  experiencePage: {
    background: "inherit",
    display: "flex",
    flexDirection: "column",
      margin: "0px 0px 0px 0px",
    overflow: "scroll",
    height: "auto",
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
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
        flexDirection: "column",
        "& img": {
            marginInline: "200px",
            height: "100px",
            width: "100px",
          },
    },

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)and (orientation: portrait)": {

    },

    /* Landscape */
      "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)": {
          flexDirection: "column",
          "& img": {
            marginInline: "200px",
            height: "100px",
            width: "100px",
          },
    },

    /* ----------- iPhone 6+, 7+ and 8+ ----------- */

    /* Portrait and Landscape */
      "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
          flexDirection: "column",
          "& img": {
            marginInline: "200px",
            height: "100px",
            width: "100px",
          },
    },

    /* Portrait */
      "@media only screen  and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {
          flexDirection: "column",
          "& img": {
            marginInline: "200px",
            height: "100px",
            width: "100px",
          },
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
});
