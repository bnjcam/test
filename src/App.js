import './App.css';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Benjani from './pages/benjani'

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/benjani" element={<Benjani />} />
          </Routes>
        </Router>
  );
}

export default App;
