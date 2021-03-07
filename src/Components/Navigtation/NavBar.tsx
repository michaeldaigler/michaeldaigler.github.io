import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavStyles from "./NavBar.style";
import { makeStyles } from "@material-ui/styles";
import GithubIcon from "../../assets/LinksIcons/githublogo.svg";
import LinkedInIcon from "../../assets/LinksIcons/linkInlogo.svg";
import NavButton from "./NavButton";
const useStyles = makeStyles(NavStyles);

const NavBar = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className={classes.navBar + "navbar fixed-top navbar-expand-md navbar-light bg-light"}>
        <div className={classes.navBarContainer}>
          <ul className={click ? "nav-menu active" : classes.navMenu}>
            <li className={classes.navItem}>
              <Link
                to="/"
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                to="/about"
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                to="/experience"
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                CV
              </Link>
            </li>
            <li className={classes.navItem}>
              <a
                href="https://www.linkedin.com/in/michaeldaigler/"
                style={{ color: "#00CED1", textDecoration: "none" }}
                className={classes.navLinks}
              >
                <img src={LinkedInIcon} />
              </a>
            </li>
            <li className={classes.navItem}>
              <a
                className={classes.navLinks}
              href="https://github.com/michaeldaigler"
              style={{ color: "#00CED1", textDecoration: "none" }}
            >
              <img src={GithubIcon} />
              </a>
              </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
