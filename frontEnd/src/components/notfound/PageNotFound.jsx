import { Link } from "react-router-dom";

const PageNotFound = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: "500px",
      height: "500px",
    },
    btn: {
      padding: "10px 20px",
      margin: "0 5px",
      fontSize: "1.2em",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "lightblue",
      color: "white",
      width: "100px",
      height: "100px",
      color: "blue",
      textDecoration: "none",
    },
  };
  return (
    <div className="container mt-5 " style={styles.container}>
      <h1 className="text-center">Caution 404 Page Not Found</h1>
      <img
        style={styles.img}
        src="https://tse3.mm.bing.net/th?id=OIP.FHseQxjyNfV4wHpoPYx0SwHaD2&pid=Api&P=0&h=220"
        alt="not found"
    />
      <Link to="/" style={styles.btn}>
        Back To Home
      </Link>
     
    </div>
  );
};

export default PageNotFound;
