import React, { useState, useEffect, createContext, useContext } from "react";

const viewportContext = createContext({ width: 0, height: 0 })

const ViewportProvider = ({ children }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)
    const breakpoint = 620;

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        return () => window.removeEventListener("resize", handleWindowResize)

    }, []);

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    )
}

export default ViewportProvider;
export const  useViewPort = () => {
    const { width, height } = useContext(viewportContext)
    console.log(width)
    return { width, height }
}
