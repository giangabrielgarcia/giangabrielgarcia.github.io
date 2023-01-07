import { React } from 'react';
import filler from '../assets/images/default-headshot.jpg';
import lee from '../assets/images/lee-headshot.jpg';
import liao from '../assets/images/liao-headshot.jpg';
import custodio from '../assets/images/custodio-headshot.jpg';
import singh from '../assets/images/singh-headshot.jpg';
import tripathy from '../assets/images/tripathy-headshot.jpg';
import jangda from '../assets/images/jangda-headshot.jpg';
import luo from '../assets/images/luo-headshot.jpg';
import gong from '../assets/images/gong-headshot.JPG';
import duvvuri from '../assets/images/duvvuri-headshot.jpg';
import aguirre from '../assets/images/aguirre-headshot.jpg';
import chen from '../assets/images/chen2-headshot.jpg';
import behshad from '../assets/images/lahijanian-headshot.jpg';
import mcnealey from '../assets/images/mcnealey-headshot.jpeg';

const ResearchGroup = () => {
    return (
        <div className='body-container'>
            <div className='hide-body'>
                <h4 className='page-title'>PhD Students</h4>
                <hr></hr>
                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={lee} className='student-headshot' alt='headshot of Sun Ju Lee' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Sun Ju Lee</h5>
                        <p> PhD in Operations Research (Expected 2024)</p>
                        <p> I am a PhD student in Operations Research at the H. Milton Stewart School of Industrial and Systems Engineering. I received my BE and BA in Engineering Sciences with a concentration in Mechanical Engineering from Dartmouth College. My research interests lie broadly in problems motivated by health modeling and health policy applications. I am especially interested in equitable solutions to medical decision-making problems and interpretable machine learning algorithms in healthcare. Currently, I am working on personalized optimal prenatal care scheduling.</p>
                        <ul>
                            <li><i className='bi-award h5' />Finalist, Society for Medical Decision-Making Lee B. Lusted Prize for <i>QMTD</i> (2022)</li>
                        </ul>
                        <a target='_blank' rel='noopener noreferrer' href="https://www.isye.gatech.edu/users/sun-ju-lee" className='reg-link'>Personal Website</a>
                    </div>
                </div>
                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={liao} className='student-headshot' alt='headshot of Che-Yi Liao' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Che-Yi Liao</h5>
                        <p>PhD in Machine Learning (Expected 2026)</p>
                        <p>I am PhD student in ISyE at Georgia Tech, holding my Masters' degree in Industrial and Operations Engineering from the University of Michigan and Bachelors in Shipping and Transportation Management from the National Taiwan Ocean University. My primary research interests lie in Healthcare Analytics and Healthcare OR where I apply Predictive Modeling, Spatial-Temporal Modeling, and Simulation to guide medical decision making. I am currently collaborating with Massachusetts General Hospital on predicting and addressing the ongoing opioid crisis.</p>
                        <ul>
                            <li><i className='bi-award h5' />First Prize, Society for Medical Decision-Making Lee B. Lusted Prize for <i>QMTD</i> (2022)</li>
                            <li>ISyE George Family Fellowship (2022)</li>
                        </ul>
                        <a target='_blank' rel='noopener noreferrer' href="https://sites.gatech.edu/che-yi-liao/" className='reg-link'>Personal Website</a>
                    </div>
                </div>
                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={custodio} className='student-headshot' alt='headshot of Kelsey Custodio' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Kelsey Custodio</h5>
                        <p>PhD in Industrial Engineering (Expected 2026)</p>
                        <p>I am a PhD student in Industrial Engineering, holding a MS in Operations Research from Columbia University and a BS in Industrial Engineering from Georgia Tech. My research interests are resource allocation problems and fairness in decision making models along with their applications to healthcare. Currently, I am analyzing VA wait time data to identify trends in wait times by type of consultation and location.</p>
                    </div>
                </div>
                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={mcnealey} className='student-headshot' alt='headshot of Amaya McNealey' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Amaya McNealey</h5>
                        <p>PhD in Industrial Engineering (Expected 2026)</p>
                        <p>I am a PhD student in Industrial Engineering at the H. Milton Stewart School of Industrial and Systems Engineering. I received my B.S. in Industrial and Systems Engineering from North Carolina A&T State University. My research interests are primarily related to health policy applications along with social determinants of health. I am especially interested in equity and fairness in Machine Learning algorithms along with methods to ensure interpretability. </p>
                        <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/amaya-mcnealey-a90247170/" className='reg-link'>LinkedIn</a>
                    </div>
                </div>
                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={filler} className='student-headshot' alt='headshot of Himadri Pandey' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Himadri Pandey</h5>
                        <p>PhD in Machine Learning (Expected 2026)</p>
                        <p>I am a PhD student in Machine Learning, ...</p>
                    </div>
                </div>

                <h4 className='page-title title-spacer'>Postdoctoral Research Fellows</h4>
                <hr></hr>
                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={behshad} className='student-headshot' alt='headshot of Behshad Lahijanian' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Behshad Lahijanian</h5>
                        <p>I am a Tennenbaum Postdoctoral Fellow in the H. Milton Stewart School of Industrial and Systems Engineering at Georgia Tech. I earned my Ph.D. degree in Industrial and Systems Engineering from the University of Florida in May 2022, holding my MS and BS in Industrial Engineering from the Amirkabir University of Technology. My research focuses on decision-making by developing methods and algorithms for healthcare systems using Stochastic Programming, Multi-method Simulation, and Machine Learning.</p><a className='reg-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/xinyu-laura-chen-457a50121/">LinkedIn</a>
                        <a target='_blank' rel='noopener noreferrer' href="https://sites.google.com/view/behshadlahijanian/home" className='reg-link'>Personal Website</a>
                    </div>
                </div>

                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={filler} className='student-headshot' alt='headshot of Caleb Bugg' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Caleb Bugg</h5>
                    </div>
                </div>

                <h4 className='page-title title-spacer'>Masters and Undergraduate Students</h4>
                <hr></hr>

                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={aguirre} className='student-headshot' alt='headshot of Jacob Aguirre' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Jacob Aguirre</h5>
                        <p>MS in Health Economics (Expected 2023)</p>
                        <p>I am currently a masters student at the Georgia Institute of Technology,  pursuing majors in economics and mathematics. My research focuses on mathematical and computational modeling, with applications in predictive medicine algorithms, medical decision-making under uncertainty, spatial-temporal analysis, and health policy. </p>
                        <a className='reg-link' target='_blank' rel='noopener noreferrer' href="http://jacobaguirre.com/">Personal Site</a>
                        , <a className='reg-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/jacob-aguirre9">LinkedIn</a>
                    </div>
                </div>

                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={chen} className='student-headshot' alt='headshot of Xinyu Chen' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Xinyu Chen</h5>
                        <p>BS in Biomedical Engineering (Expected 2023)</p>
                        <p>I am a BS student in the Wallace H. Coulter Department of Biomedical Engineering with GT and Emory. My reseasrch interests revolve around optimization, process improvement, analyses, and planning for health system problems. Currently, I'm working on using modeling and data analysis to improve the decision-making for sports-related concussions. </p>
                        <a className='reg-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/xinyu-laura-chen-457a50121/">LinkedIn</a>
                    </div>
                </div>

                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={gong} className='student-headshot' alt='headshot of Xingyu Gong' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Xingyu Gong</h5>
                        <p>BS in Industrial & Systems Engineering (Expected 2024)</p>
                        <p>I am a BS student at the H. Milton Stewart School of Industrial and Systems Engineering concentrating in Economic and Financial system. My research interests relate to making rational and optimal policies with interpretatable decision process within the healthcare system. I’m currently working on work on developing efficient methods for interpretable treatment planning with Markov Decision Processes.</p>
                        <a className='reg-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/xingyu-gong">LinkedIn</a>
                    </div>
                </div>

                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={filler} className='student-headshot' alt='headshot of Yang Yang' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Yang Yang</h5>
                        <p>BS in Industrial & Systems Engineering (Expected 2025)</p>
                    </div>
                </div>


                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={duvvuri} className='student-headshot' alt='headshot of Vaishnavi Duvvuri' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Vaishnavi Duvvuri</h5>
                        <p>BS in Industrial & Systems Engineering (Expected 2024)</p>
                        <p>I am a BS student at the H. Milton Stewart School of Industrial and Systems Engineering. My research interests involve health policy and using data analytics to further healthcare solutions. Currently, I’m working on using data analysis to analyze delays in the surveillance of opioid-related overdose deaths.</p>
                        <a className='reg-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/vaishnavi-d-73481a199/">LinkedIn</a>
                    </div>
                </div>

                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={tripathy} className='student-headshot' alt='headshot of Lisa Tripathy' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Lisa Tripathy</h5>
                        <p>BS in Industrial & Systems Engineering (Expected 2023)</p>
                        <p>I am a BS student in Industrial & Systems Engineering, expecting to graduate in December 2023. My research interests involve using data analytics, statistics, and modeling towards solving problems related to healthcare operations, medical decision making, and health policy. Currently, I am working on using data analytics to quantify and measure equity in baseline testing for sports-related concussions.</p>
                        <a className='reg-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/lisa-tripathy-a42393178/">LinkedIn</a>
                    </div>
                </div>

                <h4 className='page-title title-spacer'>Alumni and Past Group Members</h4>
                <hr></hr>
                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={luo} className='student-headshot' alt='headshot of Jiahui Luo' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Jiahui Luo</h5>
                        <p>MS in Statistics (Graduated 2021)</p>
                        <a className='reg-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/jiahuiluo/">LinkedIn</a>
                    </div>
                </div>
                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={singh} className='student-headshot' alt='headshot of Jasbir Singh' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Jasbir Singh</h5>
                        <p>MS in Industrial Engineering (Graduated 2022)</p>
                        <a className='reg-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/jasingharauz/">LinkedIn</a>
                    </div>
                </div>
                <div className='student-profile'>
                    <div className='img-container'>
                        <img src={jangda} className='student-headshot' alt='headshot of Mateen Jangda' />
                    </div>
                    <div>
                        <h5 className='student-title-center'>Mateen Jangda</h5>
                        <p>BS in Industrial & Systems Engineering (Expected 2024)</p>
                        <a className='reg-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/mateen-jangda">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchGroup; 