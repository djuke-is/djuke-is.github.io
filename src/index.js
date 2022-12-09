import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import NoPage from "./pages/NoPage";

export default function App() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="legal" element={<Legal />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);