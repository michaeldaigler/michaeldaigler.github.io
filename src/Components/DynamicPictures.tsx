import { render } from "react-dom";
import React, { useState, useCallback, CSSProperties, useEffect } from "react";
import { useTransition, animated, AnimatedValue, config } from "react-spring";
import AboutPageStyle from "../Styles/AboutPage.style";
import { makeStyles } from "@material-ui/core";
import MichaelPic1 from "../assets/michael_pic_corrected.jpg";

import MichaelPic2 from "../assets/lookingIntoDistance.jpeg";
import MichaelPic3 from "../assets/SunglassesMe.jpeg";

const useStyles = makeStyles(AboutPageStyle);




const slides = [
  { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
  { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
  { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
  { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
]


const pictures = [
  { id: 0, imagePath: MichaelPic1 },
  { id: 1, imagePath: MichaelPic2 },
  {id: 2, imagePath: MichaelPic3}
]

const DynamicPictures = () => {
  const classes = useStyles();
  const [index, set] = useState(0)
  const transitions = useTransition(pictures[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 5000), [])
  return (<div className={classes.dynamicPicContainer}>
  {transitions.map(({ item, props, key }) => (

    <animated.div
      key={key}
      className={classes.dynamicPic}
      style={{ ...props, backgroundImage: `url(${item.imagePath})` , backgroundSize: "cover"}}
    />
  ))}
  </div>)
}
export default DynamicPictures;


