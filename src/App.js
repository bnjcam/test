import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Benjani from './pages/benjani'
import Index from './pages';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/benjani" element={<Benjani />} />
          </Routes>
        </Router>
  );
}

export default App;
