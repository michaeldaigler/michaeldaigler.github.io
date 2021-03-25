import classes from '*.module.css';
import { Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    fontFamily: "Inconsolata",
    fontSize: 18,
    fontWeight: 500,
  }
}))

function Copyright() {
  const classes = useStyles();
  return (
      <div className={classes.footer}>
      <Typography style={{ fontFamily: "Inconsolata" }}  align="center">
        {'Copyright  © 2021 '}
        <Link color="inherit" href="/" style={{fontFamily: "Inconsolata"}}>
        | Made by Michael Daigler (ノ◒▽◒)ノ
        </Link>{' '}
        {'.'}
      </Typography>
      </div>
    );
}
export default Copyright;