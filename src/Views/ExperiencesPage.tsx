import { makeStyles } from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";
import EightVClogo from "../assets/8VClogo.png";
import ShortStoryLogo from "../assets/ShortStory.png";
import WorksenseLogo from "../assets/Worksense_Icon_copy.png";
import GatsbyLabsLogo from "../assets/gatsbyLogo.png";
import CorningLogo from "../assets/CorningLogo.jpeg";
import ExperiencesStyle from "../Styles/Experiences.style";
import { CheckBreakPointInterfaceProps } from "../Interfaces/CheckBreakPointInterfaceProps";
import Footer from "../Components/Footer";
const useStyles = makeStyles(ExperiencesStyle);

const ExperiencesPage: React.FC<CheckBreakPointInterfaceProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.experiencePage}>
      <Fade left>
        <div className={classes.experience}>
          {" "}
          {!props.passedBreakPoint ? (
            <>
              {" "}
              <h1>
                Gatsby Labs
                <br />
                <p>
                  Incoming Sofware Engineer Intern
                  <br />
                  May 2021 - Aug 2021
                </p>
              </h1>
              <img src={GatsbyLabsLogo} />
            </>
          ) : (
            <>
              {" "}
              <img src={GatsbyLabsLogo} />{" "}
              <h1>
                Gatsby Labs
                <br />
                <p>
                  Incoming Sofware Engineer Intern
                  <br />
                  May 2021 - Aug 2021
                </p>
              </h1>
            </>
          )}
        </div>
      </Fade>
      <Fade right>
        <div className={classes.experience}>
          {" "}
          <img src={EightVClogo} />
          <h1>
            8VC <br />
            <p>Incoming Fellow</p>
          </h1>
        </div>
      </Fade>
      <Fade left>
        <div className={classes.experience}>
          {!props.passedBreakPoint ? (
            <>
              <h1>
                Worksense Analytics
                <br />
                <p>
                  {" "}
                  Software Engineer Intern
                  <br />
                  May 2020 - Aug 2020
                </p>
              </h1>{" "}
              <img src={WorksenseLogo} />
            </>
          ) : (
            <>
              {" "}
              <img src={WorksenseLogo} />
              <h1>
                Worksense Analytics
                <br />
                <p>
                  {" "}
                  Software Engineer Intern
                  <br />
                  May 2020 - Aug 2020
                </p>
              </h1>{" "}
            </>
          )}
        </div>{" "}
      </Fade>
      <Fade right>
        <div className={classes.experience}>
          {" "}
          <img src={ShortStoryLogo} />
          <h1>
            Short Story (YC S19)
            <p>
              Sofware Engineer Intern
              <br />
              Jan 2020 - May 2020
            </p>
          </h1>
        </div>
      </Fade>
      <Fade left>
        <div className={classes.experience}>
          {" "}
          {!props.passedBreakPoint ? (
            <>
              <h1>
                Corning Inc
                <br />
                <p>
                  Reaserach {"&"} Development Intern <br />
                  Jun 2018 - Aug 2018
                </p>
              </h1>
              <img src={CorningLogo} />
            </>
          ) : (
            <>
              <img src={CorningLogo} />
              <h1>
                Corning Inc
                <br />
                <p>
                  Reaserach {"&"} Development Intern <br />
                  Jun 2018 - Aug 2018
                </p>
              </h1>
            </>
          )}
        </div>
      </Fade>
      <Footer />

    </div>
  );
};
export default ExperiencesPage;
