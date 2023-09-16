import { React } from 'react';
import './index.css';
import './large.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Research from './components/Research';
import ResearchGroup from './components/ResearchGroup';
import HonorsAwards from './components/HonorsAwards';
import Diversity from './components/Diversity';
import Footer from './components/header-components/Footer';
import Header from './components/header-components/Header';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  return (
    <div>
    <BrowserRouter> 
    <Header />
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='/research' element={<Research />} />
        <Route path='/research-group' element={<ResearchGroup />} />
        <Route path='/honors-awards' element={<HonorsAwards />} />
        <Route path='/diversity' element={<Diversity />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes> 
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
