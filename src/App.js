import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Benjani from './pages/benjani'
import Index from './pages';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/benjani" element={<Benjani />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
