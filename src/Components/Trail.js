import { makeStyles } from "@material-ui/core";
import React from "react";
import { useTrail, animated as a } from "react-spring";
import { transform } from "typescript";
import AppStyle from "../Styles/App.style";

const useStyles = makeStyles(AppStyle);

function Trail({ open, children, ...props }) {
  const classes = useStyles();
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className={classes.trailsMain} {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index] + Math.random() * 100000}
            className={classes.trailsText}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default Trail;
