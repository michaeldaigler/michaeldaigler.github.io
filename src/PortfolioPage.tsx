import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Link, Grid, Box, CssBaseline, Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { WbSunny, Brightness3 } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "./Components/CopyRight/CopyRight";
import MyPicture from "./assets/Michael_YellowStone_SunglassesCropped.jpg";
import EightVClogo from "./assets/8VClogo.png";
import ShortStoryLogo from "./assets/ShortStory.png";
import WorksenseLogo from "./assets/Worksense_Icon_copy.png";
import GatsbyLabsLogo from "./assets/gatsbyLogo.png";
import CorningLogo from "./assets/CorningLogo.jpeg";
import GithubIcon from "./assets/LinksIcons/githublogo.svg";
import CV_Icon from "./assets/CV_Icon_Tinted.png"
import LinkedInIcon from "./assets/LinksIcons/linkInlogo.svg";
import MyResume from "./files/Michael_Daigler_Resume_Website4-18-21.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardMedia,
  FormControl,
  FormGroup,
} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import PortfolioPageStyle from "./PortfolioPage.style";


const useStyles = makeStyles((theme) => ({
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
    backgroundColor: "#cfd8dc",
    borderRadius: 10,

    display: "flex",
    flexDirection: "row",
    fontSize: "1.2rem",
  },
  podcastIcon: {
    color: "#9599E2",
  },
  linkItem: {
    height: "50px",
    listStyle: "none",
  },
  linkItemCV: {

    listStyle: "none",
    " & img": {
      height: "40px",
      fill: 'sepia(100%)'
    }
  },
  iconLinks: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    height: "100%",
  },
}));


interface PortfolioPageProps {
  setTheme: () => void;

}

const ProfilePage: React.FC<PortfolioPageProps> = (props) => {

  const classes = useStyles();
  const emailButtonClicked = () => {
    window.open("mailto:mdaigler2601@gmail.com?subject=Reaching out");
  };
  const setTheme = () => {
    props.setTheme();
    return;
  };
  return (
    <div className={classes.websiteContainer}>
      <Container component="div" className={classes.portfolioMainContainer}>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row aria-setsize={150}>
            <FormControlLabel
              aria-setsize={60}
              value="Light Mode"
              control={
                <Switch
                  className={classes.customSwitchColor}
                  onClick={setTheme}
                  size="medium"
                  icon={
                    <Brightness3
                      className={classes.darkMode}
                      fontSize="small"
                    />
                  }
                  checkedIcon={
                    <WbSunny className={classes.lightMode} fontSize="small" />
                  }
                />
              }
              label=""
              labelPlacement="start"
            />
          </FormGroup>
        </FormControl>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h2"
            style={{ fontFamily: "Inconsolata" }}
          >
            Michael Daigler
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CardMedia
                  className={classes.myPicture}
                  image={MyPicture}
                  src={MyPicture}
                />
                <div className={classes.aboutMeDescription}>
                  <h1>Welcome to my website!</h1>
                  <p>
                    Take a look around! Feel free to reach out if you want to
                    chat, talk about projects, or have any questions.
                  </p>
                </div>

                <Button
                  className={classes.emailButton}
                  onClick={emailButtonClicked}
                >
                  Email
                </Button>
              </Grid>

              <Grid item xs={12}>
                <div className={classes.aboutMeDescription}>
                  <h1>Who am I?</h1>
                  <p>
                    <strong>Education</strong>
                    <br />
                    I'm a CS Student at Wake Forest University and am Graduating
                    in May 2023.
                  </p>
                  <p>
                    <strong>Hobbies {"&"} Interests</strong>
                    <br />
                    <p>
                      I enjoy running, lifting weights, reading and learning
                      about human psychology. I also love philosophical conversations about things that relate to meaning and the metaphysics of reality.<br />I love listening to podcasts
                      and audiobooks, especially when I run. I also train
                      Brazilian Jiu Jistu. Oss!🥋
                      <br /> I also have an interests in the crypto-space (i.e.,
                      NFT's, Blockchain, DeFi, etc.). Check out my NFT
                      collection{" "}
                      <a href="https://opensea.io/accounts/merkle_">
                        <strong>Here</strong>
                      </a>
                    </p>
                  </p>
                  <p>
                    <strong>General</strong>
                    <br />
                    <p>
                      I love meeting new people and having great converstaions
                      about ideas. Please reach out if you've got anything you'd
                      like to say!{" "}
                    </p>
                  </p>
                </div>
                <h3>Links:</h3>
                <div className={classes.myLinksContainer}>
                <li className={classes.linkItemCV}>
                    <a
                      href={MyResume}
                      style={{ color: "#00CED1", textDecoration: "none" }}
                      className={classes.iconLinks}
                    >
                      <img src={CV_Icon} />
                    </a>
                  </li>
                  <li className={classes.linkItem}>
                    <a
                      href="https://www.linkedin.com/in/michaeldaigler/"
                      style={{ color: "#00CED1", textDecoration: "none" }}
                      className={classes.iconLinks}
                    >
                      <img src={LinkedInIcon} />
                    </a>
                  </li>
                  <li className={classes.linkItem}>
                    <a
                      className={classes.iconLinks}
                      href="https://github.com/michaeldaigler"
                      style={{ color: "#00CED1", textDecoration: "none" }}
                    >
                      <img src={GithubIcon} />
                    </a>
                  </li>
                  <li className={classes.linkItem}>
                    <a
                      className={classes.iconLinks}
                      href="https://podcasts.apple.com/us/podcast/the-michael-daigler-show/id1555997059"
                      style={{ color: "#00CED1", textDecoration: "" }}
                    >
                      <FontAwesomeIcon
                        icon={faPodcast}
                        size="lg"
                        className={classes.podcastIcon}
                      />
                    </a>
                  </li>
                </div>
              </Grid>

              <Grid xs={12} spacing={3}>
                <Typography
                  component="h1"
                  variant="h2"
                  style={{ fontFamily: "Inconsolata" }}
                >
                  Experience
                </Typography>
              </Grid>
              <Grid xs={12} spacing={2}>
                <Card className={classes.experienceCard}>
                  <div className={classes.experience}>
                    <a href="https://gatsbyevents.surge.sh">
                      <CardMedia
                        image={GatsbyLabsLogo}
                        src={GatsbyLabsLogo}
                        className={classes.experienceImage}
                      />
                    </a>
                    <h1>
                      Gatsby Labs
                      <br />
                    </h1>
                    <p>
                      Incoming Software Engineer Intern
                      <br />
                      May 2021 - Aug 2021
                    </p>
                  </div>
                </Card>
              </Grid>
              <Grid xs={12} spacing={2}>
                <Card
                  component="div"
                  variant="elevation"
                  className={classes.experienceCard}
                >
                  <div className={classes.experience}>
                    {" "}
                    <a href="https://8vc.com">
                      <CardMedia
                        src={EightVClogo}
                        image={EightVClogo}
                        className={classes.experienceImage}
                      />
                    </a>
                    <div>
                      <h1>
                        8VC <br />
                      </h1>
                      <p>Incoming Fellow</p>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid xs={12} spacing={2}>
                <Card className={classes.experienceCard}>
                  <div className={classes.experience}>
                    <a href="https://worksenseanalytics.com">
                      <CardMedia
                        src={WorksenseLogo}
                        image={WorksenseLogo}
                        className={classes.experienceImage}
                      />
                    </a>
                    <div className={classes.infoDiv}>
                      <h1>
                        Worksense Analytics
                        <br />
                      </h1>
                      <p>
                        {" "}
                        Software Engineer Intern
                        <br />
                        May 2020 - Aug 2020
                      </p>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid xs={12} spacing={4}>
                <Card className={classes.experienceCard}>
                  <div className={classes.experience}>
                    <a href="https://my.shortstorybox.com">
                      <CardMedia
                        src={ShortStoryLogo}
                        image={ShortStoryLogo}
                        className={classes.experienceImage}
                      />
                    </a>
                    <div className={classes.infoDiv}>
                      <h1>Short Story (YC S19)</h1>
                      <p>
                        Software Engineer Intern
                        <br />
                        Jan 2020 - May 2020
                      </p>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid xs={12} spacing={4}>
                <Card className={classes.experienceCard}>
                  <div className={classes.experience}>
                    <a href="https://www.corning.com/worldwide/en.html">
                      <CardMedia
                        src={CorningLogo}
                        image={CorningLogo}
                        className={classes.experienceImage}
                      />
                    </a>
                    <div className={classes.infoDiv}>
                      <h1>
                        Corning Inc
                        <br />
                      </h1>
                      <p>
                        Research {"&"} Development Intern <br />
                          Jun 2018 - Aug 2018
                        </p>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              spacing={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.contactButton}
                onClick={emailButtonClicked}
              >
                Contact
              </Button>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2" color="secondary"></Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};
export default ProfilePage;
