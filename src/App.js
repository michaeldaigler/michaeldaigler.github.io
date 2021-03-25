import "./App.css";
import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import AppStyle from "./Styles/App.style";

import PortfolioPage from "./PortfolioPage"
import { createMuiTheme } from "@material-ui/core";
import { light, dark} from './theme'
const useStyles = makeStyles(AppStyle);

const App = () => {
  const classes = useStyles();
  const [theme, setTheme] = useState(true)

  const appliedTheme = createMuiTheme(theme ? light : dark)
  console.log(appliedTheme.palette.type)
  console.log(appliedTheme.palette.primary)
  return (

    <div>
      <ThemeProvider theme={appliedTheme}>
        <PortfolioPage setTheme={() => setTheme(!theme)}/>
      </ThemeProvider>

    </div>

  );
};

export default App;
