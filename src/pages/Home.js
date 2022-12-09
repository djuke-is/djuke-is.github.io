import google from '../assets/google.png'
import apple from '../assets/apple.png'
import djuke from '../assets/djuke.png'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{
      backgroundColor: "#FF61CD",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}>
      <img src={djuke} alt="djuke" />
      <div style={{
        marginBottom: "2rem",
      }} />
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
        <a href='http://www.djuke.dk'>
          <img src={google} alt="google play" height="40" width="120" />
        </a>
        <div style={{
          marginLeft: "4px",
          marginRight: "4px"
        }} />
        <a href='http://www.djuke.dk'>
          <img src={apple} alt="app store" />
        </a>
      </div>
      <footer style={{
        position: "absolute",
        bottom: 20,
      }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
          <Link style={{
            textDecoration: "none",
            color: "#FFFFFF",
          }} to='/legal'>Legal</Link>
          <div style={{
            marginLeft: "16px",
            marginRight: "16px"
          }} />
        </div>
      </footer>
    </div>
  );
}

export default Home;
