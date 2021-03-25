import { createStyles } from "@material-ui/styles";

export default createStyles((theme) => ({
    websiteContainer: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "Inconsolata",
      backgroundColor: theme.palette.primary.dark,
      "& :h1": {
        fontFamily: "Inconsolata",
      },
    },
    paper: {
      marginTop: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Inconsolata",
    },
    portfolioMainContainer: {
      margin: theme.spacing(2, 2, 2, 2),
      justifyContent: "center",
      backgroundColor: theme.palette.primary.main,
      alignItems: "center",
      boxShadow: theme.shadows[10],
      borderRadius: 10,
    },
    lockIconAvatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.grey[500],
    },
    lockIconAvatarDisabled: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: theme.palette.secondary.main,
    },
    submitDisabled: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: theme.palette.grey[500],
    },
    experienceCard: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(4),
      margin: theme.spacing(2, 0, 0, 0),
      boxShadow: theme.shadows[10],
    },
    experienceImage: {
      height: 100,
      width: 100,
      transform: "scale(0.8)",
      justifyContent: "center",
    },
    experience: {
      "& p": {
        fontSize: "22px",
      },
    },
    infoDiv: {
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
    },
    emailButton: {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
      width: "100px",
      fontStretch: "10px",
      fontWeight: "bold",
      fontFamily: "Inconsolata",
      "&:hover": {
        backgroundColor: " #AAA",
        color: "white",
        width: "100px",
        broderRadius: "10px",
      },
    },
    myPicture: {
      height: 200,
      width: 200,
      borderRadius: 100,
    },
    lightMode: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.warning.light,
      borderRadius: 10,
      boxShadow: theme.shadows[1],
    },
    darkMode: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.primary.light,
      borderRadius: 10,
      boxShadow: theme.shadows[1],
      transition: "2s",
      transform: "rotate(25deg)",
    },
    contactButton: {
      backgroundColor: theme.palette.primary.dark,
      padding: theme.spacing(2, 2, 2, 0),
      margin: theme.spacing(3, 0, 0, 0),
      fontFamily: "Inconsolata",
      width: "75%",
      textTransform: "none",
      fontSize: 18,
      "& span": {
        fontFamily: "Inconsolata",
        color: theme.palette.common.black,
      },
    },
    customSwitchColor: {
      color: theme.palette.primary.light,
    },
    aboutMeDescription: {
      "& p": {
        fontSize: 18,
      },
    },
    myLinksContainer: {
      display: "flex",
      flexDirection: "row",
    },
    podcastIcon: {
      color: "#9599E2",
    },
    navItem: {
      height: "50px",
      listStyle: "none",
    },
    navLinks: {
      color: "#fff",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      padding: "0.5rem 1rem",
      height: "100%",
    },
  }));
