import './index.css';
import './large.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Research from './components/Research';
import ResearchGroup from './components/ResearchGroup';
import HonorsAwards from './components/HonorsAwards';
import Diversity from './components/Diversity';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='/research' element={<Research />} />
        <Route path='/research-group' element={<ResearchGroup />} />
        <Route path='/honors-awards' element={<HonorsAwards />} />
        <Route path='/diversity' element={<Diversity />} />
      </Routes> 
    </Router>
  );
}

export default App;
