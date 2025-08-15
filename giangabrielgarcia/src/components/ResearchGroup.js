import { React } from 'react';
// import filler from '../assets/images/default-headshot.jpg';
import filler from '../assets/images/whitebox.jpg';
import lee from '../assets/images/lee-headshot.jpg';
import liao from '../assets/images/liao-headshot.jpg';
// import custodio from '../assets/images/custodio-headshot.jpg';
// import singh from '../assets/images/singh-headshot.jpg';
import tripathy from '../assets/images/tripathy-headshot.jpg';
// import jangda from '../assets/images/jangda-headshot.jpg';
// import luo from '../assets/images/luo-headshot.jpg';
import gong from '../assets/images/gong-headshot.JPG';
import duvvuri from '../assets/images/duvvuri-headshot.jpg';
import aguirre from '../assets/images/aguirre-headshot.jpg';
import chen from '../assets/images/chen2-headshot.jpg';
import behshad from '../assets/images/lahijanian-headshot.jpg';
import mcnealey from '../assets/images/mcnealey-headshot.jpeg';
import vivian from '../assets/images/vivian-headshot.jpg';
import pandey from '../assets/images/pandey-headshot.jpeg';
import bugg from '../assets/images/bugg-headshot.jpeg';
import grodzinsky from '../assets/images/grodzinsky-headshot.jpg';
import yixuan from '../assets/images/yixuan-headshot.jpg';
import panus from '../assets/images/panus-headshot.jpg';


const phdStudents = [
    {
        name: 'Che-Yi Liao', degree: 'PhD in Machine Learning (Expected 2026)', coadvisor: 'Kamran Paynabar',
        bio: `I am PhD student in ISyE at Georgia Tech, holding my Masters' degree in Industrial and Operations Engineering from the University of Michigan and Bachelors in Shipping and Transportation Management from the National Taiwan Ocean University. My primary research interests lie in Healthcare Analytics and Healthcare OR where I apply Predictive Modeling, Spatial-Temporal Modeling, and Simulation to guide medical decision making. I am currently collaborating with Massachusetts General Hospital on predicting and addressing the ongoing opioid crisis.`,
        awards: ['INFORMS Bonder Scholarship (2024)', 'Thos and Clair Muller Research Fellowship in Health Analytics and Health Systems (2023)', 'Finalist, Society for Medical Decision-Making Lee B. Lusted Prize for QMTD (2023)','First Prize, Society for Medical Decision-Making Lee B. Lusted Prize for QMTD (2022)', 'ISyE George Family Fellowship (2022-2024)'], photo: liao, personalSite: 'https://sites.gatech.edu/che-yi-liao/'
        
    },

    // {
    //     name: 'Kelsey Custodio', degree: 'PhD in Industrial Engineering (Expected 2026)',
    //     bio: 'I am a PhD student in Industrial Engineering, holding a MS in Operations Research from Columbia University and a BS in Industrial Engineering from Georgia Tech. My research interests are resource allocation problems and fairness in decision making models along with their applications to healthcare. Currently, I am analyzing VA wait time data to identify trends in wait times by type of consultation and location.', photo: custodio
    // },

    // {
    //     name: 'Amaya McNealey', degree: 'PhD in Industrial Engineering (Expected 2027)', coadvisor: 'Lauren Steimle', 
    //     bio: 'I am a PhD student in Industrial Engineering at the H. Milton Stewart School of Industrial and Systems Engineering. I received my B.S. in Industrial and Systems Engineering from North Carolina A&T State University. My research interests are primarily related to health policy applications along with social determinants of health. I am especially interested in equity and fairness in Machine Learning algorithms along with methods to ensure interpretability.', photo: mcnealey, linkedin: "https://www.linkedin.com/in/amaya-mcnealey-a90247170/",
    //     awards: ['ISyE George Family Fellowship (2023)']
    // },

    {
        name: 'Himadri Pandey', degree: 'PhD in Machine Learning (Expected 2027)', photo: pandey, bio: 'I am a PhD student in Industrial Engineering at the H. Milton Stewart School of Industrial and Systems Engineering. I received my BS in Computer Science, with a minor in Mathematics and Physics, from the University of Cincinnati. My research interests include the application of Machine Learning to healthcare optimization problems. My current project involves concussion diagnosis under time constraints.', linkedin: "https://www.linkedin.com/in/himadri-s-pandey/", awards: ['First Prize, INFORMS Minority Issues Forum Poster Competition (2024)', 'Georgia HIMSS David Cowan Scholarship (2024)', 'ISyE George Family Fellowships (2024)', 'ISyE Philip J. and Delores A. Scott Graduate Student Health and Wellness Award (2024)']
    },

    {name: 'Panus Sawetpiyakul', degree: 'PhD in Industrial Engineering (Expected 2030)', bio: 'I am a PhD student in Industrial Engineering at the University of Washington. I received my MS in Operations Research from Georgia Tech in 2025. I received my Bachelor in Engineering major in Information and Communication Engineering from Chulalongkorn University (Bangkok, Thailand) in 2024. My research interest lies in applying OR methodology, including stochastic modeling, simulation, and machine learning, into healthcare systems. I am now working on a personalized type II diabetes screening scheme.', photo: panus, linkedin: 'http://linkedin.com/in/panus-sawetpiyakul-7a6916129'},

    {name: 'Jade Li', degree: 'PhD in Industrial Engineering (Expected 2030)', coadvisor: 'Shan Liu', bio: '' , photo: filler},



 
    
    
]

const postDocs = [
   

]

const undergradMS = [
      


 
]

const alumni = [

    {
        name: 'Sun Ju Lee', degree: 'PhD in Operations Research (Graduated 2025)', 
        bio: 'I am a PhD student in Operations Research at the H. Milton Stewart School of Industrial and Systems Engineering. I received my BE and BA in Engineering Sciences with a concentration in Mechanical Engineering from Dartmouth College. My research interests lie broadly in problems motivated by health modeling and health policy applications. I am especially interested in equitable solutions to medical decision-making problems and interpretable machine learning algorithms in healthcare. Currently, I am working on personalized optimal prenatal care scheduling.', 
        awards: ['ISyE George Family Fellowship (2024)','Finalist, Society for Medical Decision-Making Lee B. Lusted Prize for QMTD (2022)'], personalSite: "https://sjulee.github.io/", photo: lee,
        currentposition: 'Assistant Professor, Freeman College of Management, Bucknell University'
    },

    {
        name: 'Yang Yang', degree: 'BS in Industrial & Systems Engineering, BS in Mathematics (Graduated 2025)', 
        bio: 'I am a BS student at the H. Milton Stewart School of Industrial and Systems Engineering and School of Mathematics. My research interests focus on mathematical modeling, data analytics/visualizations, and optimal policies development for better healthcare solutions. I am currently working on analyzing diabetes screening data and assessing the extent to which there are disparities.', 
        linkedin: "http://www.linkedin.com/in/yangyangvivian", photo: vivian,
        currentposition: 'PhD in Industrial Engineering, Georgia Tech',
        awards: ['ISyE Pennington Undergraduate Research Award (2025)', 'INFORMS Undergraduate Student Scholarship (2024)']
    },

    {
        name: 'Yixuan Long', degree: 'MS in Operations Research (Graduated 2025)', 
        bio: 'I am a Masters student in Operations Research at ISyE and expect to graduate in December 2024. I received my BS in IE, with minors in Computer Science and Economics, from the University of Pittsburgh and BEng in IE from Sichuan University. My research interests involve medical decision-making problems at the intersection between operations research and healthcare. Currently, I am investigating chronic disease resource allocation problems for type 2 diabetes based on related screening and intervention models.', 
        photo: yixuan, linkedin: 'https://www.linkedin.com/in/yixuan-long-570977204',
        currentposition: 'PhD in Industrial Engineering, Purdue University'
    },

    

    {
        name: 'Amaya McNealey', degree: 'PhD in Industrial Engineering (Expected 2027)', coadvisor: 'Lauren Steimle', 
        bio: 'I am a PhD student in Industrial Engineering at the H. Milton Stewart School of Industrial and Systems Engineering. I received my B.S. in Industrial and Systems Engineering from North Carolina A&T State University. My research interests are primarily related to health policy applications along with social determinants of health. I am especially interested in equity and fairness in Machine Learning algorithms along with methods to ensure interpretability.', photo: mcnealey, linkedin: "https://www.linkedin.com/in/amaya-mcnealey-a90247170/",
        awards: ['Honorable Mention, INFORMS Minority Issues Forum Poster Competition (2024)','First Prize in Data Science, Physiology, and Health at the ERN Conference in STEM (2024)','ISyE George Family Fellowship (2023-2024)']
    },

    {
        name: 'Vaishnavi Duvvuri', degree: 'BS in Industrial & Systems Engineering (Graduated 2024)', bio: `I am a BS student at the H. Milton Stewart School of Industrial and Systems Engineering. My research interests involve health policy and using data analytics to further healthcare solutions. Currently, I’m working on using data analysis to analyze delays in the surveillance of opioid-related overdose deaths.`, linkedin: "https://www.linkedin.com/in/vaishnavi-d-73481a199/", photo: duvvuri
    },

    {
        name: 'Lisa Tripathy', degree: 'BS in Industrial & Systems Engineering (Graduated 2023)', bio: 'I am a BS student in Industrial & Systems Engineering, expecting to graduate in December 2023. My research interests involve using data analytics, statistics, and modeling towards solving problems related to healthcare operations, medical decision making, and health policy. Currently, I am working on using data analytics to quantify and measure equity in baseline testing for sports-related concussions.', linkedin: "https://www.linkedin.com/in/lisa-tripathy-a42393178/", photo: tripathy
    },

    {
        name: 'Nathan Grodzinsky', degree: 'BS in Industrial & Systems Engineering (Graduated 2024)', bio: 'I am a BS student at the H. Milton Stewart School of Industrial and Systems Engineering with a concentration in advanced studies for Operations Research and Statistics. My research interests are broadly focused on applying data analytics and statistical modeling to enhance decision-making within healthcare contexts. Currently, I am involved in a project analyzing Medicaid data to understand maternal morbidity outcomes.', photo: grodzinsky, linkedin: 'https://www.linkedin.com/in/nathang42'
    },


    {
        name: 'Xingyu Gong', degree: 'BS in Industrial & Systems Engineering (Graduated 2024)', bio: `I am a BS student at the H. Milton Stewart School of Industrial and Systems Engineering concentrating in Economic and Financial system. My research interests relate to making rational and optimal policies with interpretatable decision process within the healthcare system. I’m currently working on work on developing efficient methods for interpretable treatment planning with Markov Decision Processes.`, photo: gong, linkedin: "https://www.linkedin.com/in/xingyu-gong"
    },

    {
        name: 'Caleb Bugg', degree: 'Thuesen Postdoctoral Fellow', photo: bugg, bio: 'I am a Postdoctoral Fellow in The H. Milton Stewart School of Industrial and Systems Engineering at The Georgia Institute of Technology. I received my BS in mathematics from Morehouse College and my MS and PhD in Operations Research from the University of California, Berkeley. My research seek to discover and implement quantitative methods which have a social-, civic-, and/or government-based applicatons. Utilizing the math and statistical models native to Operations Research and Management, I synthesize topics that provide an analytical basis for our society to invest in long-term, social good projects.', personalSite: 'https://www.calebxb.com/', currentposition: 'Operations Analyst at Reaching Our Sisters Everywhere, Inc.'
    },
    {
        name: 'Behshad Lahijanian', degree: 'Tennenbaum Postdoctoral Fellow', bio: 'I am a Tennenbaum Postdoctoral Fellow in the H. Milton Stewart School of Industrial and Systems Engineering at Georgia Tech. I earned my Ph.D. degree in Industrial and Systems Engineering from the University of Florida in May 2022, holding my MS and BS in Industrial Engineering from the Amirkabir University of Technology. My research focuses on decision-making by developing methods and algorithms for healthcare systems using Stochastic Programming, Multi-method Simulation, and Machine Learning.', photo: behshad, personalSite: "https://sites.google.com/view/behshadlahijanian/home", linkedin: "https://www.linkedin.com/in/behshad-lahijanian-ph-d-10984585", currentposition: 'Senior Data Scientist at JP Morgan Chase'
    },


    {
        name: 'Jacob Aguirre', degree: 'BS in Economics, Mathematics (Graduated 2022), MS in Economics (Graduated 2023)',
        bio: 'I am a PhD student in Operations Research at the Georgia Institute of Technology. My research focuses on mathematical and computational modeling, with applications in predictive medicine algorithms, medical decision-making under uncertainty, spatial-temporal analysis, and health policy.', personalSite: "http://jacobaguirre.com/", linkedin: "https://www.linkedin.com/in/jacob-aguirre9", photo: aguirre, awards: ['NSF Graduate Research Fellowship (2023)', 'GEM PhD Fellowship (2022)', 'DOE Computational Science Graduate Fellowship (2023)'], currentposition: 'PhD in Operations Research, Georgia Tech'
    },
  
    {
    name: 'Xinyu Chen', degree: 'BS in Biomedical Engineering (Graduated 2023)', bio: `I am a BS student in the Wallace H. Coulter Department of Biomedical Engineering with GT and Emory. My reseasrch interests revolve around optimization, process improvement, analyses, and planning for health system problems. Currently, I'm working on using modeling and data analysis to improve the decision-making for sports-related concussions.`, linkedin: "https://www.linkedin.com/in/xinyu-laura-chen-457a50121/", photo: chen, currentposition: 'MS in Biomedical Informatics, Harvard University'

  },


    {
        name: 'Venkatesh Nori Naga', degree: 'MS in Industrial Engineering (Graduated 2022)', linkedin:"https://www.linkedin.com/in/venkatesh-nori-naga" , photo: filler, currentposition: 'Senior Data Analyst, Home Depot'
    },    
    
    
    {
        name: 'Jasbir Singh', degree: 'MS in Industrial Engineering (Graduated 2022)', linkedin: "https://www.linkedin.com/in/jasingharauz/", photo: filler, currentposition: 'Solutions Design Engineer, Amazon'
    },


    {
        name: 'Jiahui Luo', degree: 'MS in Statistics (Graduated 2021)', linkedin: "https://www.linkedin.com/in/jiahuiluo/", photo: filler, currentposition: 'PhD student, Dartmouth College'
    },

    
    {
        name: 'Mateen Jangda', degree: 'BS in Industrial & Systems Engineering (Expected 2024)', linkedin: "https://www.linkedin.com/in/mateen-jangda", photo: filler    }
]

const ResearchGroup = () => {
    return (
        <div className='body-container'>
            <div className='hide-body'>
                <h4 className='page-title'>PhD Students</h4>
                <hr></hr>
                {
                    phdStudents.map((student) => {
                        
                       
                        return (
                        <div className='student-profile'>
                        <div className='img-container'>
                        <img src={student.photo} className='student-headshot' alt={`headshot of ${student.name}`} />
                        </div>
                        <div>
                        <h5 className='student-title-center'>{student.name}</h5>
                        <p> {student.degree} {student.coadvisor != null && <pre><i>co-advised with {student.coadvisor} </i></pre>}</p>
                        <p> {student.bio}</p>
                        { student.awards != null && <ul> 
                            {student.awards.map((award)=>{
                            return (
                                <li><i className='bi-award h5' />{award}</li>
                            )
                        })} </ul>}
                        
                        {student.personalSite != null && <a target='_blank' rel='noopener noreferrer' href={student.personalSite} className='reg-link'>Personal Website     </a>}
                        {student.linkedin != null && <p><a target='_blank' rel='noopener noreferrer' href={student.linkedin} className='reg-link'>LinkedIn</a></p>}
                    </div>
                </div>
                

                        )
                    })

                
                }

                
                <h4 className='page-title'>Postdoctoral Research Fellows</h4>
                <hr></hr>

                {
                    postDocs.map((student) => {
                        
                       
                        return (
                        <div className='student-profile'>
                        <div className='img-container'>
                        <img src={student.photo} className='student-headshot' alt={`headshot of ${student.name}`} />
                        </div>
                        <div>
                        <h5 className='student-title-center'>{student.name}</h5>
                        <p> {student.degree}</p>
                        <p> {student.bio}</p>
                        { student.awards != null && <ul> 
                            {student.awards.map((award)=>{
                            return (
                                <li><i className='bi-award h5' />{award}</li>
                            )
                        })} </ul>}
                        
                        {student.personalSite != null && <a target='_blank' rel='noopener noreferrer' href={student.personalSite} className='reg-link'>Personal Website</a>}
                        {student.linkedin != null && <p><a target='_blank' rel='noopener noreferrer' href={student.linkedin} className='reg-link'>LinkedIn</a></p>}
                    </div>
                </div>
                

                        )
                    })

                
                }
            

            <h4 className='page-title'>Masters and Undergraduate Students</h4>
                <hr></hr>
                {
                    undergradMS.map((student) => {
                        
                       
                        return (
                        <div className='student-profile'>
                        <div className='img-container'>
                        <img src={student.photo} className='student-headshot' alt={`headshot of ${student.name}`} />
                        </div>
                        <div>
                        <h5 className='student-title-center'>{student.name}</h5>
                        <p> {student.degree}</p>
                        <p> {student.bio}</p>
                        { student.awards != null && <ul> 
                            {student.awards.map((award)=>{
                            return (
                                <li><i className='bi-award h5' />{award}</li>
                            )
                        })} </ul>}
                        
                        {student.personalSite != null && <a target='_blank' rel='noopener noreferrer' href={student.personalSite} className='reg-link'>Personal Website</a>}
                        {student.linkedin != null && <p><a target='_blank' rel='noopener noreferrer' href={student.linkedin} className='reg-link'>LinkedIn</a></p>}
                    </div>
                </div>
                

                        )
                    })

                
                }

            <h4 className='page-title'>Alumni and Past Group Members</h4>
                <hr></hr>
                {
                    alumni.map((student) => {
                        
                       
                        return (
                        <div className='student-profile mb-0 mt-0'>
                        {/* <div className='img-container'>
                        <img src={student.photo} className='student-headshot' alt={`headshot of ${student.name}`} />
                        </div> */}
                        <div>
                        <h5 className='student-title-center'>{student.name}</h5>
                        
                        {student.currentposition != null && 
                        <p className='mb-0'>Current Position: {student.currentposition}</p>}
                        <p className='mb-0'> {student.degree}</p>
                        { student.awards != null && <ul> 
                            {student.awards.map((award)=>{
                            return (
                                <li><i className='bi-award h5' />{award}</li>
                            )
                        })} </ul>}
                        
                        {student.personalSite != null && <a target='_blank' rel='noopener noreferrer' href={student.personalSite} className='reg-link'>Personal Website</a>}
                        {student.linkedin != null && <p><a target='_blank' rel='noopener noreferrer' href={student.linkedin} className='reg-link'>LinkedIn</a></p>}
                        
                    </div>
                </div>
                

                        )
                    })

                
                }


                
            </div>
        </div>
    )
}

export default ResearchGroup; 