import { HashRouter } from 'react-router-dom';
import './App.css';
import Index from './pages';
import Benjani from './pages/benjani'

function App() {
  return (
   <HashRouter>
    <Route path='/' component={<Index />} />
    <Route path='/benjani' component={<Benjani />} />
   </HashRouter>
  );
}

export default App;
