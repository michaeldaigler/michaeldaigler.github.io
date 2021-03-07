import { Button } from "@material-ui/core";
import buttonStyles from "../../Styles/buttonStyle.style";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(buttonStyles);
const NavButton = () => {
    const classes = useStyles()
    return (
        <Button className={classes.button}>Hi</Button>
    )
}

export default NavButton;