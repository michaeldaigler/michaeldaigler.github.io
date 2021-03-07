import { makeStyles } from "@material-ui/core";
import React from "react";
import Appstyles from "../Styles/App.style";
import GithubIcon from "../assets/LinksIcons/githublogo.svg";
import LinkedInIcon from "../assets/LinksIcons/linkInlogo.svg";

const usetStyles = makeStyles(Appstyles);
const Footer: React.FC = () => {
    const classes = usetStyles()
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
        </div>
    )
}

export default Footer;