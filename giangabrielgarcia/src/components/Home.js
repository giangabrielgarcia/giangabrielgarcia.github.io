import Header from "./header-components/Header";
import garcia from '../assets/images/garcia-headshot.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div> 
        <Header />
        <div className='about'>
        <div className='img-container'>
            <img src={garcia} alt="Professor Garcia's professional headshot" />
            <h3 className='connect'>Connect With Me</h3>
                
            <div> 
            <Link href="mailto:giangarcia@gatech.edu">
          <span class="glyphicon glyphicon-envelope"></span>
        </Link>   
		<Link href="http://www.twitter.com/gian_garcia_" target="_blank">
		<i class="fa fa-twitter"></i></Link>
		
		<Link href = "https://scholar.google.com/citations?user=dbT08k0AAAAJ&hl=en&oi=ao" target="_blank"> 
		<i class="ai ai-google-scholar"></i>
		</Link>
		
		<Link href = "https://orcid.org/0000-0001-9315-0195" target="_blank"> 
		<i class="ai ai-orcid"></i>
		</Link>
		
		<Link href="https://www.linkedin.com/in/gian-gabriel-garcia-7a04b785/" target="_blank">
		<i class="fa fa-linkedin-square"></i></Link>
            </div>
        </div>
         <div className='about-text'>
             <h2 className='center'>About Me</h2>
             <p>I'm an Assistant Professor in the <a href = "https://www.isye.gatech.edu/">H. Milton Stewart School of Industrial and Systems Engineering</a> (ISyE) at Georgia Tech. 
		    In my <a href="Research.html">research</a>, I am interested in designing data-driven frameworks as motivated by high-impact problems in <b>Health Policy, Personalized Medicine,</b> and <b>Medical Decision-Making</b>. 
		    I am especially interested in how <b>health equity</b> and <b>social dynamics</b> impact decision-making at the patient, physician, operational, and policy levels. 
		    This research area draws problems which have both practical impact and interesting theoretical challenges.</p>
            <p>My research integrates predictive and prescriptive analytics, drawing on methodologies from <b>data science, machine learning, stochastic modeling,</b> and <b>stochastic optimization</b>. 
		    My current projects include applications in a broad range of disease and health areas including concussion, the opioid crisis, and chronic disease management. </p>
            <p>Prior to joining ISyE, I was a Postdoctoral Research Fellow in the <a href="https://www.mgh-ita.org/">Massachusetts General Hospital Institute for Technology Assessment</a> at the Harvard Medical School. 
		    I obtained my PhD in 2020 and MS in 2016 from the <a href="https://ioe.engin.umich.edu">Department of Industrial and Operations Engineering</a> at the University of Michigan
		    and my BS in <a href ="https://www.engineering.pitt.edu/Departments/Industrial/">Industrial Engineering</a> from the University of Pittsburgh in 2014.</p>
            <p>In my service efforts, I am interested in increasing <a href="Diversity.html">diversity, equity, and inclusion</a> in STEM through mentorship and outreach.</p>
         </div>
         </div>
        </div>
    )
}

export default Home; 