import lee from '../assets/images/lee-headshot.jpg';
import liao from '../assets/images/liao-headshot.jpg';
import custodio from '../assets/images/custodio-headshot.jpg';
import singh from '../assets/images/singh-headshot.jpg';
import tripathy from '../assets/images/tripathy-headshot.jpg';
import jangda from '../assets/images/jangda-headshot.jpg';
import luo from '../assets/images/luo-headshot.jpg';

const ResearchGroup = () => {
    return (
        <div className='body-container'> 
            <div className='hide-body title-spacer'>
                <h4 className='page-title mt-4'>PhD Students</h4>
                <hr></hr>
                <div className='student-profile'>
                    <img src={lee} className='student-headshot' alt='headshot of Sun Ju Lee' /> 
                    <div>
                        <h5>Sun Ju Lee</h5>
                        <p> PhD in Operations Research (Expected 2024)</p>
				        <p> I am a PhD student in Operations Research at the H. Milton Stewart School of Industrial and Systems Engineering. I received my BE and BA in Engineering Sciences with a concentration in Mechanical Engineering from Dartmouth College. My research interests lie broadly in problems motivated by health modeling and health policy applications. I am especially interested in equitable solutions to medical decision-making problems and interpretable machine learning algorithms in healthcare. Currently, I am working on personalized optimal prenatal care scheduling.</p>
                        <a target='_blank' rel='noreferrer' href="https://www.isye.gatech.edu/users/sun-ju-lee" className='reg-link'>Personal Website</a>
                    </div>
                </div>
                <div className='student-profile'>
                    <img src={liao} className='student-headshot' alt='headshot of Che-Yi Liao' /> 
                    <div>
                        <h5>Che-Yi Liao</h5>
                        <p>PhD in Industrial Engineering (Expected 2026)</p>
                        <p>I am PhD student in ISyE at Georgia Tech, holding my Masters' degree in Industrial and Operations Engineering from the University of Michigan and Bachelors in Shipping and Transportation Management from the National Taiwan Ocean University. My primary research interests lie in Healthcare Analytics and Healthcare OR where I apply Predictive Modeling, Spatial-Temporal Modeling, and Simulation to guide medical decision making. I am currently collaborating with Massachusetts General Hospital on predicting and addressing the ongoing opioid crisis.</p>
                    </div>
                </div>
                <div className='student-profile'>
                    <img src={custodio} className='student-headshot' alt='headshot of Kelsey Custodio' /> 
                    <div>
                        <h5>Kelsey Custodio</h5>
                        <p>PhD in Operations Research (Expected 2026)</p>
                        <p>I am a first-year PhD student in Operations Research, holding a MS in Operations Research from Columbia University and a BS in Industrial Engineering from Georgia Tech. My research interests are resource allocation problems and fairness in decision making models along with their applications to healthcare. Currently, I am analyzing VA wait time data to identify trends in wait times by type of consultation and location.</p>
                    </div>
                </div>
                <h4 className='page-title title-spacer'>Maters and Undergraduate Students</h4>
                <hr></hr>
                <div className='student-profile'>
                    <img src={singh} className='student-headshot' alt='headshot of Jasbir Singh' /> 
                    <div>
                        <h5>Jasbir Singh</h5>
                        <p>MS in Industrial Engineering (Expected 2022)</p>
                        <p>I am an MS student in Industrial Engineering at Georgia Tech, with expected graduation date in May 2022. I have bachelor’s degree in Industrial Engineering degree from Universidad Santa María La Antigua (Panama City, Panama). My research interests relate to the improvement of health operations, services and decision making through data analytics. Currently, I am working on topics related to health equity and the relationship between concussion identification and baseline testing at different time-points.</p>
                        <a className='reg-link' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/jasingharauz/">LinkedIn</a>
                    </div>
                </div>
                <div className='student-profile'>
                    <img src={tripathy} className='student-headshot' alt='headshot of Lisa Tripathy' /> 
                    <div>
                        <h5>Lisa Tripathy</h5>
                        <p>BS in Industrial & Systems Engineering (Expected 2023)</p>
                        <p>I am a BS student in Industrial & Systems Engineering, expecting to graduate in December 2023. My research interests involve using data analytics, statistics, and modeling towards solving problems related to healthcare operations, medical decision making, and health policy. Currently, I am working on using data analytics to quantify and measure equity in baseline testing for sports-related concussions.</p>
                        <a className='reg-link' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/lisa-tripathy-a42393178/">LinkedIn</a>
                    </div>
                </div>
                <div className='student-profile'>
                    <img src={jangda} className='student-headshot' alt='headshot of Mateen Jangda' /> 
                    <div>
                        <h5>Mateen Jangda</h5>
                        <p>BS in Industrial & Systems Engineering (Expected 2024)</p>
                        <p>I am a BS student in Data Analytics at the H. Milton Stewart School of Industrial and Systems Engineering. My research interests are in the healthcare operations and analytics field, where I am currently applying regression modeling. Currently, I am working on creating a tool which would allow us to determine which groups of individuals would most benefit from baseline testing.</p>
                        <a className='reg-link' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/mateen-jangda">LinkedIn</a>
                    </div>
                </div>
                <h4 className='page-title title-spacer'>Alumni</h4>
                <hr></hr>
                <div className='student-profile'>
                    <img src={luo} className='student-headshot' alt='headshot of Jiahui Luo' /> 
                    <div>
                        <h5>Jiahui Luo</h5>
                        <p>MS in Statistics (Graduated 2021)</p>
                        <a className='reg-link' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/jiahuiluo/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchGroup; 