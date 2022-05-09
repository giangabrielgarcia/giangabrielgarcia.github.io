import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Research from './components/Research';
import ResearchGroup from './components/ResearchGroup';
import HonorsAwards from './components/HonorsAwards';
import Diversity from './components/Diversity';
import CV from './components/CV';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='/research' element={<Research />} />
        <Route path='/research-group' element={<ResearchGroup />} />
        <Route path='/honors-awards' element={<HonorsAwards />} />
        <Route path='/diversity' element={<Diversity />} />
        <Route path='/cv' element={<CV />} />
      </Routes> 
    </Router>
  );
}

export default App;
