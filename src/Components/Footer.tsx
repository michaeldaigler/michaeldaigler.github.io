import { makeStyles } from "@material-ui/core";
import React from "react";
import Appstyles from "../Styles/App.style";
import GithubIcon from "../assets/LinksIcons/githublogo.svg";
import LinkedInIcon from "../assets/LinksIcons/linkInlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

const usetStyles = makeStyles(Appstyles);
const Footer: React.FC = () => {
  const classes = usetStyles();
  return (
    <div className={classes.footerContainer}>
      <p>© 2021 | Made by Michael Daigler (ノ◒▽◒)ノ</p>
      <a
        href="https://www.linkedin.com/in/michaeldaigler/"
        style={{ color: "#00CED1", textDecoration: "none" }}
        className={classes.footerLink}
      >
        <img src={LinkedInIcon} />
      </a>
      <a
        className={classes.footerLink}
        href="https://github.com/michaeldaigler"
        style={{ color: "#00CED1", textDecoration: "none" }}
      >
        <img src={GithubIcon} />
      </a>
      <a
        className={classes.footerLink}
        href="https://podcasts.apple.com/us/podcast/the-michael-daigler-show/id1555997059"
        style={{ color: "#00CED1", textDecoration: "" }}
      >
        <FontAwesomeIcon
          icon={faPodcast}
          size="lg"
          className={classes.podcastIcon}
        />
      </a>
    </div>
  );
};

export default Footer;
