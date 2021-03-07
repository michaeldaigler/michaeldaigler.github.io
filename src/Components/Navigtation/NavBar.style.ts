import { createStyles } from "@material-ui/styles";

export default createStyles({
  navBar: {
    backgroundColor: "#8BC6EC",
    background: "linear-gradient(130deg, #232526 0%, #414345 100%)",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  navBarContainer: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    height: "80px",
    maxWidth: "1500px",
    marginLeft: "30vw"


  },
  navbarLogo: {
    color: "#fff",
    justifySelf: "start",
    marginLeft: "20px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
  },
  navMenu: {
    display: "grid",
    gridTemplateColumns: "repeat(6, auto)",
    gridGap: "10px",
    listStyle: "none",
    textAlign: "center",
    width: "60vw",
    justifyContent: "end",

  },
  navItem: {
    height: "80px",
  },
  navLinks: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    height: "100%",
  },
});
