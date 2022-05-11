import garcia from '../assets/images/garcia-headshot.jpg';
import cv from '../assets/cv/Garcia_CV.pdf';
import { React } from 'react';

const Home = () => {
    return (
        <div className='body-container'> 
        <div className='about hide-body'>
            <div className='img-container'>
                <img className='about-headshot'src={garcia} alt="Professor Garcia's professional headshot" />
                <h3 className='connect subtitle'>Connect With Me</h3>
                
                <div> 
                    <a target='_blank' rel='noopener noreferrer' href = 'mailto: giangarcia@gatech.edu'>
                    <i className="bi-envelope small-icons"></i>
                    </a>  
                    <a target='_blank' rel='noopener noreferrer' href = 'http://www.twitter.com/gian_garcia_'>
                    <i className="bi-twitter small-icons"></i>
                    </a>    
                    <a target='_blank' rel='noopener noreferrer' href = 'https://scholar.google.com/citations?user=dbT08k0AAAAJ&hl=en&oi=ao'>
                    <i className="ai ai-google-scholar small-icons" ></i>
                    </a>   
                    <a target='_blank' rel='noopener noreferrer' href = 'https://orcid.org/0000-0001-9315-0195'>
                    <i className="ai ai-orcid small-icons"></i>
                    </a>   
                    <a target='_blank' rel='noopener noreferrer' href = 'https://www.linkedin.com/in/gian-gabriel-garcia-phd-7a04b785/'>
                    <i className="bi-linkedin small-icons" style={{fontSize: "25px"}}></i>
                    </a>   
                </div>
                <a target='_blank' rel='noopener noreferrer' href = {cv}><button className='gray-button mt-25'>Download CV</button></a>
            </div>


         <div className='about-text'>
             <h2 className='center page-title'>About Me</h2>
             <p>I'm an Assistant Professor in the <a href = "https://www.isye.gatech.edu/" target='_blank' rel='noopener noreferrer' className='reg-link'>H. Milton Stewart School of Industrial and Systems Engineering</a> (ISyE) at Georgia Tech. 
		    In my research, I am interested in designing data-driven frameworks as motivated by high-impact problems in Health Policy, Personalized Medicine,and Medical Decision-Making. 
		    I am especially interested in how health equity and social dynamics impact decision-making at the patient, physician, operational, and policy levels. 
		    This research area draws problems which have both practical impact and interesting theoretical challenges.</p>
            <p>My research integrates predictive and prescriptive analytics, drawing on methodologies from data science, machine learning, stochastic modeling, and stochastic optimization. 
		    My current projects include applications in a broad range of disease and health areas including concussion, the opioid crisis, and chronic disease management. </p>
            <p>Prior to joining ISyE, I was a Postdoctoral Research Fellow in the <a className='reg-link' href="https://www.mgh-ita.org/" target='_blank' rel='noopener noreferrer'>Massachusetts General Hospital Institute for Technology Assessment</a> at the Harvard Medical School. 
		    I obtained my PhD in 2020 and MS in 2016 from the <a className='reg-link' href="https://ioe.engin.umich.edu" target='_blank' rel='noopener noreferrer'>Department of Industrial and Operations Engineering</a> at the University of Michigan
		    and my BS in Industrial Engineering from the <a  href ="https://www.engineering.pitt.edu/Departments/Industrial/" target='_blank' rel='noopener noreferrer' className='reg-link'>University of Pittsburgh</a> in 2014.</p>
            <p>In my service efforts, I am interested in increasing diversity, equity, and inclusion in STEM through mentorship and outreach.</p>
         </div>
         </div>
        </div>
    )
}

export default Home; 