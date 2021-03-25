import { createStyles } from "@material-ui/styles";

export default createStyles({
  navBar: {
    backgroundColor: "#8BC6EC",
    background: "linear-gradient(130deg, #232526 0%, #414345 100%)",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    position: "sticky",
    top: 0,
    zIndex: 999,
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
  navBarContainer: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    height: "80px",
    maxWidth: "1500px",
    marginLeft: "30vw",
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
      marginLeft: "0px",
    },

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)and (orientation: portrait)": {
      marginLeft: "0px",
      overflowX: "scroll"
    },

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)": {},

    /* ----------- iPhone 6+, 7+ and 8+ ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
      marginLeft: "0px",
      overflowX: "scroll"
    },

    /* Portrait */
    "@media only screen  and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {},

    /* Landscape */
    "@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)": {},

    /* ----------- iPhone X ----------- */

    /* Portrait and Landscape */
    "@media only screen and (min-device-width: 375px)  and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
      marginLeft: "0px",
      overflowX: "scroll"
    },

    /* Portrait */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)": {
      marginLeft: "0px",
    },

    /* Landscape */
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)and (orientation: landscape)": {},
    // "@media screen and (max-width: 375px)": {

  },
  navbarLogo: {
    color: "#fff",
    justifySelf: "start",
    marginLeft: "20px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
  },
  navMenu: {
    display: "grid",
    gridTemplateColumns: "repeat(7, auto)",
    gridGap: "10px",
    listStyle: "none",
    textAlign: "center",
    width: "60vw",
    justifyContent: "end",
    "@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
      gridGap: "0px"
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
  navItem: {
    height: "80px",
  },
  navLinks: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    height: "100%",
  },
  podcastIcon: {
    // height: "100px",
    color: "#9599E2"
  }
});
