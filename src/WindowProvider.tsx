import React from "react";

const WindowProvider = () => {
    // Declare a new state variable with the "useState" Hook
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        return () => window.removeEventListener("resize", handleWindowResize)

    }, []);

    return width < breakpoint ? <span></span> : <span></span>;
}

export default WindowProvider;