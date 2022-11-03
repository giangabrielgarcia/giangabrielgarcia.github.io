import { React } from 'react';
import ResearchCarousel from './ResearchCarousel';
import cv from '../assets/cv/Garcia_CV.pdf';
import manuscript1 from '../assets/manuscripts/2020-datadrivenstochastic.pdf';
import manuscript2 from '../assets/manuscripts/2019-datadrivenapproach.pdf';
import manuscript3 from '../assets/manuscripts/2018-optimalcoinsurancerates.pdf';
import manuscript4 from '../assets/manuscripts/2018-quantifyingthevalue.pdf';
import manuscript5 from '../assets/manuscripts/preprint-monotonepolicies.pdf';


const Research = () => {
    return (
        <div className='body-container'> 
            <div className='hide-body'>
                <h2 className='page-title text-center'>Current Research Projects</h2>
                <ResearchCarousel /> 
                <h2 className='page-title text-center mt-50'>Research Summary</h2>
                <hr></hr>
                <div className='research-text'>
                    <div className='research-para-margin'>
                        <h4 className='subtitle fw-bold'> Interests </h4>
                        <p>I am interested in designing responsible data-driven frameworks for <b>Predictive Analytics</b> and <b>Prescriptive Analytics</b> as motivated by and applied to high-impact problems in <b>Health Policy, Personalized Medicine,</b> and <b>Medical Decision-Making</b>. 
                        This work entails the integration of methodologies from <b>data science, machine learning, stochastic modeling, simulation,</b> and <b>stochastic optimization</b>.</p>
                    </div>
                    <div className='research-para-margin'>
                        <h4 className='subtitle fw-bold'> Applications </h4>
                        <p>Medical decision-making, concussion management, opioid use disorder, maternal health, post-traumatic stress order screening, chronic disease management</p>
                    </div>
                    <div>
                        <h4 className='subtitle fw-bold'> Methodology </h4>
                        <p>Predictive modeling, data-driven optimization, data science, dynamic programming, (partially observable) Markov decision processes, machine learning, stochastic optimization, robust optimization, Kalman filtering, stochastic control, applied statistics, game theory, simulation, social network analysis</p>
                    </div>
                </div>
                <div className='flex-center'>
                <a target='_blank' rel='noopener noreferrer' href={cv}><button className='gray-button mt-25'>Download CV</button></a>
                </div>
                <hr></hr>
                <section>
                    <h2 className='page-title text-center mt-50'>Publications</h2>
                    <h4 className='subtitle fw-bold publication-subtitle'>Submitted and Working Papers</h4>
                        <ol>
                            <li className='break'>C.-Y. Liao, <b>G.-G. P. Garcia</b>, K. Paynabar, Z. Dong, Y. Xie, and M. S. Jalali (2022). "Tides Need STEMMED: A Locally Operating 
                            Spatio-Temporal Mutually Exciting Point Process with Dynamic Network for Improving Opioid Overdose Death Prediction". (<i>Submitted</i>)
                            </li>

                            <li className='break'> S.J. Lee, <b>G.-G. P. Garcia</b>, K. K. Stanhope, M. Platner, and S. L. Boulet (2022). "Interpretable Machine Learning to Predict 
                            Adverse Perinatal Outcomes: Examining Marginal Predictive Value of Risk Factors throughout Pregnancy". (<i>Submitted</i>)                           
                            </li>

                            <li className='break'>S. W. Liebel, C. G. Turner, A. C. Svirsko, <b>G.-G. P. Garcia</b>, P. F. Pasquina, T. W. McAllister,
                            M. A. McCrea, S. P. Broglio, and CARE Consortium Investigators (2022). "Temporal Network Architectures of Neurocognitive Functioning 
                            and Psychological Symptoms in Collegiate Athletes Following Sport-related Concussion: A CARE Consortium Investigation". 
                            (<i>Submitted</i>)
                            </li>

                            <li className='break'> <b>G.-G. P. Garcia </b>, M. S. Lavieri, T. W. McAllister, M. A. McCrea, S. P. Broglio, and CARE Consortium Investigators. “Reducing the Price of Naiveté in Return-to-play from Sports-related Concussion”. (<i>Under Revision</i>)</li>

                            <li className='break'><b>G.-G. P. Garcia </b>, L. N. Steimle, W. J. Marrero, J. B. Sussman. "Interpretable Policies and the Price of Interpretability in Hypertension Treatment Planning." (<i>Under Revision</i>) &nbsp; 
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://optimization-online.org/?p=17279">https://optimization-online.org/?p=17279</a> 
                            <a href={manuscript5} className="bi-download download-link" download> </a></li>

                            
                            <li className='break'> V. Nori Naga, S. Sundar, G.-G. P. Garcia, “Analysis of Machine Learning and Ensemble Methods for Forecasting COVID-19 Cases in 
                            California”. (<i>Submitted</i>)</li>
                            
                            
                            <li className='break'><b> G.-G. P. Garcia </b>, L.L. Czerniak, M.S. Lavieri, S.W. Liebel, K. Van Pelt, P.F. Pasquina, 
                            T.W. McAllister, M.A. McCrea, S.P. Broglio, and CARE Consortium Investigators. 
                            "Tailoring the Symptom-Free Waiting Period in Return-to-Play from Concussion: A Simulation Analysis Using CARE Consortium Data." (<i>Submitted</i>)</li>

                        
                        </ol>
                    


                    <h4 className='subtitle fw-bold publication-subtitle'>Peer-reviewed Journal Papers</h4>
                        <ol>
                            <li classname='break'>K. E. Valerio, J. B. Caccese, A. P. Kontos, T. A. Buckley, <b>G.-G. P. Garcia</b>, N. Port, S. P. Broglio, T. W. McAllister, 
                            M. A. McCrea, P. F. Pasquina, J. P. Hayes, and CARE Consortium Investigators, (2022). "Primary and Secondary Risk Factors Associated with Concussion 
                            Symptom Clusters in Collegiate Athletes: Results from the NCAA-DoD Grand Alliance CARE Consortium", <i>The Orthopaedic Journal of Sports Medicine</i> (Accepted).
                            </li>

                            <li className='break'> J. B. Caccese, <b>G.-G. P. Garcia</b>, A.P. Kontos, N. Port, K. Valerio, S.P. Broglio, M.A. McCrea, T.W. McAllister, P.F. Pasquina, 
                            T.A. Buckley, (2022). "Test-Retest Reliability and Efficacy of Individual Symptoms in Concussion Management", <i>Clinical Journal of Sports Medicine</i>, (Accepted). </li>
                            
                            <li className='break'>L. L. Czerniak, S. W. Liebel, H. Zhou, <b>G.-G. P. Garcia</b>, M. S. Lavieri, M. A. McCrea, T. W. McAllister, 
                            S. P. Broglio, and CARE Consortium Investigators, (2022). 
                            "Sensitivity and Specificity of the ImPACT Neurocognitive Test in Collegiate Athletes and United States Military Cadets with ADHD and/or LD: 
                            Findings from the NCAA-DoD CARE Consortium", <i>Sports Medicine</i>, (Accepted). 
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1007/s40279-022-01768-y"> https://doi.org/10.1007/s40279-022-01768-y</a></li>			                            

                            <li className='break'><b>G.-G. P. Garcia</b>, R. Dehghanpoor, E. J. Stringfellow, M. Gupta, J. Rochelle, E. Mason, T. Pujol,
                                M. S. Jalali, (2022) "Identifying and Characterizing Advice-Seekers for Recovery
                                from Opioid Use Disorder: Social Media Analysis",<i>&nbsp; International Journal of Environmental
                                Research and Public Health</i>, 19(10), 6281. 
                                <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.3390/ijerph19106281"> https://doi.org/10.3390/ijerph19106281</a></li>			
			

                            <li className='break'><b>G.-G. P. Garcia</b>, E.J. Stringfellow, C. DiGennaro, N. Poellinger, J. Wood, S.E. Wakeman, M.S. Jalali, (2022) 
                            "Opioid Overdose Decedent Characteristics during COVID-19",<i>&nbsp; Annals of Medicine</i>, 54(1), 1081–1088.
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1080/07853890.2022.2067350"> https://doi.org/10.1080/07853890.2022.2067350</a></li>			

                            <li className='break'> C.-Y. Liao, <b>G.-G. P. Garcia</b>, C. DiGennaro, M.S. Jalali, (2022) "Racial Disparities in Opioid Overdose Deaths in Massachusetts",<i>&nbsp; JAMA Network Open</i>, 5(4), e229081.
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1001/jamanetworkopen.2022.9081"> https://doi.org/10.1001/jamanetworkopen.2022.9081</a></li>

                            <li className='break'> <b> G.-G. P. Garcia </b>, C.M. Schumb, M.S. Lavieri, H. Koffijberg, T.W. McAllister, M.A. McCrea, S.P. Broglio, (2022) "Developing Insights for Possible and Probable Acute Concussions Using Cluster Analysis", <i>&nbsp; Journal of Neurotrauma</i>, 39 (1-2), 102-113. &nbsp;
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1089/neu.2020.7399">https://doi.org/10.1089/neu.2020.7399</a></li>

                            <li className='break'> C. DiGenarro, <b>G.-G. P. Garcia</b>, E.J. Stringfellow, M.S. Jalali. "Changes in Characteristics of Drug Overdose Death Trends during the COVID-19", (2021) <i>&nbsp; International Journal of Drug Policy</i>, 98 (<i>Accepted</i>).&nbsp; 
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1016/j.drugpo.2021.103392">https://doi.org/10.1016/j.drugpo.2021.103392</a></li>

                            <li className='break'> L.L. Czerniak, S.W. Liebel, <b>G.-G. P. Garcia</b>, M.S. Lavieri, M.A. McCrea, T.W. McAllister, S.P. Broglio, (2021) "Sensitivity and Specificity of Computer-Based Neurocognitive Assessments in Sport-Related Concussion: Findings from the NCAA-DoD CARE Consortium", <i>&nbsp; Sports Medicine</i>, 51 (2), 351-365. &nbsp; 
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1007/s40279-020-01393-7">https://doi.org/10.1007/s40279-020-01393-7</a></li>

                            <li className='break'> S.W. Liebel, K.L. Van Pelt, <b> G.-G. P. Garcia</b>, L.L. Czerniak, M.A. McCrea, T.W. McAllister, S.P. Broglio, (2020) "The Relationship Between Sport-related Concussion and Sensation-Seeking",<i>&nbsp; International Journal of Molecular Sciences</i>, 21 (23), 9097. &nbsp; 
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.3390/ijms21239097">https://doi.org/10.3390/ijms21239097</a></li>	

                            <li className='break'> <b> G.-G. P. Garcia </b>, J. Yang, M.S. Lavieri, T.W. McAllister, M.A. McCrea, S.P. Broglio, and CARE Consortium Investigators, (2020) "Optimizing the Components of the Sport Concussion Assessment Tool for Acute Concussion Assessment", 
                            <i>&nbsp; Neurosurgery</i>, 87 (5), 971-981. &nbsp; 
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://academic.oup.com/neurosurgery/article/doi/10.1093/neuros/nyaa150/5841232">https://academic.oup.com/neurosurgery/article/doi/10.1093/neuros/nyaa150/5841232</a></li>

                            <li className='break'> <b>G.-G. P. Garcia</b>, M.S. Lavieri, R. Jiang, M.A. McCrea, T.W. McAllister, S.P. Broglio, and CARE Consortium Investigators, (2020) "Data-driven Stochastic Optimization Approaches to Determine Decision Boundaries for Risk Estimation Models", <i>&nbsp; IISE Transactions</i>, 52 (10), 1098-1121. &nbsp; 
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href = "https://www.tandfonline.com/doi/full/10.1080/24725854.2020.1725254">https://www.tandfonline.com/doi/full/10.1080/24725854.2020.1725254</a>
                            <a href={manuscript1} className='bi-download download-link' download> </a></li>

                            <li className='break'><b>G.-G. P. Garcia</b>, M. S. Lavieri, C. Andrews, X. Liu, M. P. Van Oyen, M. A. Kass, M. O. Gordon, and J. D. Stein, (2019) "Using Kalman Filtering to Forecast Visual Field and Intraocular Pressure Trajectory in Patients with Ocular Hypertension", <i>&nbsp; JAMA Ophthalmology</i>, 137 (12), 1416-1423. &nbsp; 
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href = "https://jamanetwork.com/journals/jamaophthalmology/article-abstract/2755407">https://jamanetwork.com/journals/jamaophthalmology/article-abstract/2755407</a></li>
                            
                            <li className='break'> <b>G.-G. P. Garcia</b>, M.S. Lavieri, R.  Jiang, M.A. McCrea, T.W. McAllister, S.P. Broglio, and CARE Consortium Investigators, (2019) "A Data-driven Approach to Unlikely, Possible, Probable, and Definite Acute Concussion Assessment",
                            <i>&nbsp; Journal of Neurotrauma</i>, 36 (10), 1571-1583. &nbsp; 
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href = "https://doi.org/10.1089/neu.2018.6098">https://doi.org/10.1089/neu.2018.6098</a>  
                            <a href={manuscript2} className="bi-download download-link" download> </a></li>

                            <li className='break'> <b>G.-G. P. Garcia</b>, K. Nitta, M.S. Lavieri, C. Andrews, X. Liu, E. Lobaza, M.P. Van Oyen, K. Sugiyama, and J.D. Stein, (2019) "Using Kalman Filtering to Forecast Disease Progression for Patients with Normal Tension Glaucoma", <i> &nbsp; American Journal of Ophthalmology</i>, 199, 111-119. &nbsp;
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1016/j.ajo.2018.10.012">https://doi.org/10.1016/j.ajo.2018.10.012</a></li>

                            <li className='break'> G.J. Schell<b>, G.-G. P. Garcia </b>, M.S. Lavieri, J.B. Sussman, R.A. Hayward, (2018) "Optimal Coinsurance Rates for a Heterogeneous Population under Inequality and Resource Constraints", <i>&nbsp; IISE Transactions</i>, 51 (1), 74-91. &nbsp;
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1080/24725854.2018.1499053">https://doi.org/10.1080/24725854.2018.1499053</a>
                            <a href={manuscript3} className="bi-download download-link" download> </a></li>

                            <li className='break'><b>G.-G. P. Garcia</b>, S.P. Broglio, M.S. Lavieri, M.A. McCrea, T.W. McAllister, and CARE Consortium Investigators, (2018) "Quantifying the Value of Multidimensional Assessment Models for Acute Concussion: An Analysis of Data from the NCAA-DoD Care Consortium", <i>&nbsp; Sports Medicine</i>, 48 (7), 1739-1749. &nbsp;
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1007/s40279-018-0880-x">https://doi.org/10.1007/s40279-018-0880-x</a>
                            <a href={manuscript4} className="bi-download download-link" download> </a></li>

                            <li className='break'>M. Mofrad<b>, G.-G. P. Garcia</b>, L.M. Maillart, B.A. Norman, J. Rajgopal, (2016) “Customizing Immunization Clinic Operations to Minimize Open Vial Waste”, <i>&nbsp; Socio-Economic Planning Sciences</i>, 54 (March 2016), 1-17. &nbsp;
                            <a className='url-link' target='_blank' rel='noopener noreferrer' href="https://doi.org/10.1016/j.seps.2015.10.007">https://doi.org/10.1016/j.seps.2015.10.007</a></li>	
                        </ol>
                    <h4 className='subtitle fw-bold publication-subtitle'>Peer-reviewed Conference Papers</h4>
                        <ol>
                            <li className='break'><b>G.-G. P. Garcia</b>, L.L. Czerniak, M.S. Lavieri, S.W. Liebel, M.A. McCrea, T.W. McAllister, P.F. Pasquina, S.P. Broglio, and CARE Consortium Investigators. "Simulation-Optimization to Distinguish Optimal Symptom Free Waiting Period for Return-to-play from Concussion." <i>Proceedings of the 2022 Winter Simulation Conference</i>, (Accepted)</li> 
                        </ol>
                    </section>
                    <h2 className='page-title text-center mt-50'>Other Research</h2>
                        <a className='reg-link' target='_blank' rel='noopener noreferrer' href="http://www.pitt.edu/~vacro">VaCRO: Vaccine Clinic Reconstitution Optimizer</a>
            </div>
        </div>
    )
}

export default Research; 