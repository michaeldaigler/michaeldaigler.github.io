import { makeStyles } from "@material-ui/core";
import React, { useRef, useState, useEffect } from "react";
import Trail from "./Trail";
import AppStyle from "../Styles/App.style";

const useStyles = makeStyles(AppStyle);

const DynamicTitle = (props) => {
  const classes = useStyles();
  const [open, set] = useState(true);
  const [open2, set2] = useState(false)
  const closedCount = useRef(0);
  useEffect(() => {
    setInterval(() => {
      set((state) => !state);

    }, 5000);
  }, []);

  console.log(closedCount.current)
  return (
    <React.Fragment >
      <div className={classes.trailsContainer}>
      <Trail open={open}>
      <span>Hello!</span>
      </Trail>
      <Trail open={!open}>
          <span>Stay </span>
          <span>a while</span>
        </Trail>
        </div>
    </React.Fragment>
  );
};

// const DynamicTitle: React.FC = () => {
//     const classes = useStyles();
//     const ref = useRef<any[]>([]);
//     const [items, set] = useState<String[]>(["Michael Daigler"]);

//     const transformation = useTransition(items, null, {
//         from: {
//             opacity: 0,
//             height: 0,
//             lineHeight: 80,
//             transform: "translate3d(0,-40px,0)",
//             color: "#8fa5b6",
//             fontSize: "44px",
//         },
//         enter: [
//             { opacity: 1, height: 80, lineHeight: 80 },
//             { transform: "translate3d(0,0px,0)", color: "#28d79f" },
//         ],
//         leave: [
//             { transform: "translate3d(0,-40px,0)" },
//             { color: "#c23369" },
//             { lineHeight: 80 },
//             { opacity: 0, height: 0 },
//         ],
//         update: { color: "#28b4d7" },
//     });

//     const reset = useCallback(() => {
//         ref.current.map(clearTimeout)
//         ref.current = [];
//         set([]);

//     }, []);

//     useEffect(() => {
//         setInterval(() => {
//             reset()
//         },5000)

// }, [reset]);

//   return (
//     <div>
//       {transformation.map(({ item, props: { lineHeight, ...rest }, key }) => (
//         <animated.div
//           className={classes.headerTransitionItem}
//           key={key}
//           style={rest}
//           onClick={reset}
//         >
//           <animated.div style={{ overflow: "hidden", height: lineHeight }}>
//             {item}
//           </animated.div>
//         </animated.div>
//       ))}
//     </div>
//   );
// };

export default DynamicTitle;
