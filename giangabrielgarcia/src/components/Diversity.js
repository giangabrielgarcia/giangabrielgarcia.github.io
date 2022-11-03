import { React } from 'react';

const Diversity = () => {
    return (
        <div className='body-container'> 
            <div className='hide-body'>
                <div className="callout">
                    <h4 className='page-title'>Diversity</h4>
                    <hr></hr>
                    <p className='thin-border border-style'><h5>Diversity</h5><u>Definition</u>:<i> (noun) the inclusion of individuals representing more than one national origin, color, religion, socioeconomic stratum, sexual orientation, etc.</i>
                    <small><br></br><a className='reg-link' href="http://dictionary.reference.com/browse/diversity?s=t">Dictionary.com</a></small></p>
	            </div>
                <div className='mb-50'>
                    <p>As an undergraduate student at the University of Pittsburgh, I was fortunate enough to take part in numerous organizations that have helped me to foster a deep appreciation for the 
                    power of diversity, equity, and inclusion in sciences, technology, engineering, and mathematics (STEM). Since that time,
                    I have made and will continue to make efforts to increase diversity in STEM by taking part in diversity initiatives, mentoring, and outreach. 
                    </p>
                </div>
	            <div className = "row">
                    <h5 className='subtitle fw-bold'> Diversity Links </h5>
                    <p>The organizations listed below have helped me to grow personally and professionally.<br></br> I am very grateful for the support and opportunities they have presented to me:</p>
                    <ul className='diversity-links'>
                        <li><a className='reg-link' href = "https://connect.informs.org/minorityissuesforum/home">INFORMS Minority Issues Forum</a></li>
                        <li><a className='reg-link' href="http://femmes.studentorgs.umich.edu/">Females Exceling More in Mathematics, Engineering, and Science (FEMMES)</a></li>
                        <li> IOE Diversity Initiative </li>
                        <li> <a className='reg-link' href="http://www.pittbrotherhood.com"> B.R.O.T.H.E.R.H.O.O.D. </a></li>
                        <li><a className='reg-link' href="http://www.engineering.pitt.edu/Student/Student-Programs/Excel/">Pitt EXCEL</a></li>
                        <li><a className='reg-link' href="http://www.famefund.org/programs/fameacademy/">FAME Academy </a></li>
                        <li><a className='reg-link' href="http://www.engineering.pitt.edu/SHPE/">Pitt SHPE</a></li>
                        <li><a className='reg-link' href="http://www.pittnsbe.org/">Pitt NSBE</a></li>
                    </ul>
	            </div>
        </div>
    </div>
    )
}

export default Diversity; 