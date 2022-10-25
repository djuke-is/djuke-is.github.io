import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "DJuke"
  })

  return (
    <div className="App">
      <header className="App-header">
        <p style={{
          color: "#FFFFFF"
        }}>
          This webpage is under construction
        </p>
      </header>
    </div>
  );
}

export default App;
