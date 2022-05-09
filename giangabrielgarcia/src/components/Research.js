import Header from "./header-components/Header";
// import $ from 'jquery';
import Footer from "./header-components/Footer";
import ResearchCarousel from './ResearchCarousel';

const Research = () => {
    return (
        <div className='body-container'> 
            <Header />
            <div className='hide-body'>
                <h2 className='page-title text-center mt-40'>Current Research Projects</h2>
                <ResearchCarousel /> 
                <h2 className='page-title text-center mt-40'>Research Interests</h2>
                <p>I am interested in designing data-driven frameworks for <b>Predictive Analytics</b> and <b>Prescriptive Analytics</b>as motivated by and applied to high-impact problems in <b>Health Policy, Personalized Medicine,</b> and <b>Medical Decision-Making</b>. This work entails the integration of methodologies from <b>data science, machine learning, stochastic modeling,</b> and <b>stochastic optimization</b>.</p>
                <h4 className='subtitle center'> Applications </h4>
	            <p>Medical decision-making, concussion management, opioid use disorder, maternal health, post-traumatic stress order screening, chronic disease management</p>
	            <h4 className='subtitle center'> Methodology </h4>
	            <p>Predictive modeling, data-driven optimization, data science, dynamic programming, (partially observable) Markov decision processes, machine learning, stochastic optimization, robust optimization, Kalman filtering, stochastic control, applied statistics, game theory, social network analysis</p>
            </div>
            <Footer />
        </div>
    )
}

export default Research; 