import Header from "./header-components/Header";
// import $ from 'jquery';
import Footer from "./header-components/Footer";
import ResearchCarousel from './ResearchCarousel';

const Research = () => {
    return (
        <div className='body-container'> 
            <Header />
            <div className='hide-body'>

            <ResearchCarousel /> 
            </div>
            <Footer />
        </div>
    )
}

export default Research; 