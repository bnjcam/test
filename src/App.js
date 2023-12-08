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
    <div>
      <Benjani />
    </div>
  );
}

export default App;
