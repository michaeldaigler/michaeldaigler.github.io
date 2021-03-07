import logo from "./logo.svg";
import "./App.css";
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import AppStyle from "./Styles/App.style";
import HomePage from "./Views/HomePage";
import NavBar from "./Components/Navigtation/NavBar";
import AboutPage from "./Views/AboutPage";
import ExperiencesPage from "./Views/ExperiencesPage";
import Footer from "./Components/Footer";
import ViewportProvider, {useViewPort} from "./Context/ViewportProvider";
const useStyles = makeStyles(AppStyle);

const App = () => {
  const classes = useStyles();
  const { width, height } = useViewPort();
  const passedBreakPoint = width < 580;
  useEffect(() => {

  })
  return (
    <ViewportProvider>
    <div className={classes.app + " container"}>

      <BrowserRouter>
      <NavBar />
        <Switch>

            <Route path="/" exact component={() => <HomePage passedBreakPoint={ passedBreakPoint}/>} />

            <Route path="/about" exact component={() => <AboutPage passedBreakPoint={ passedBreakPoint}/>} />
            <Route path="/experience" exact component={() => <ExperiencesPage passedBreakPoint={ passedBreakPoint}/>} />

        </Switch>
        </BrowserRouter>

      </div>
      </ViewportProvider>
  );
};

export default App;
