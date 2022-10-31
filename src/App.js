import google from './assets/google.png'
import apple from './assets/apple.png'
import djuke from './assets/djuke.png'

function App() {
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
          <a style={{
            textDecoration: "none",
            color: "#FFFFFF",
          }} href='http://www.djuke.dk'>Legal</a>
          <div style={{
            marginLeft: "16px",
            marginRight: "16px"
          }} />
          <a style={{
            textDecoration: "none",
            color: "#FFFFFF",
          }} href='http://www.djuke.dk'>Help</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
