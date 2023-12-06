import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Benjani from './pages/benjani'
import Index from './pages';
import SignIn from './pages/signin';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/benjani" element={<Benjani />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
