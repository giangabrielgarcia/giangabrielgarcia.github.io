import { React } from 'react';
import ResearchCarousel from './ResearchCarousel';
import cv from '../assets/cv/Garcia_CV.pdf';
import manuscript1 from '../assets/manuscripts/2020-datadrivenstochastic.pdf';
import manuscript2 from '../assets/manuscripts/2019-datadrivenapproach.pdf';
import manuscript3 from '../assets/manuscripts/2018-optimalcoinsurancerates.pdf';
import manuscript4 from '../assets/manuscripts/2018-quantifyingthevalue.pdf';
import manuscript5 from '../assets/manuscripts/preprint-monotonepolicies.pdf';
import manuscript6 from '../assets/manuscripts/preprint-STEMMED.pdf';
import ms_PoN from '../assets/manuscripts/2023-PriceofNaivete.pdf';

const submittedPapers = [
  { text: 'X. Gong, S.J. Lee, G.-G. P. Garcia (2023). Analysis of Monotone Policy Iteration for Interpretable Policies in Markov Decision Processes: Impact of State Ordering Rules. ', status: '(Under review)'},

  { text: `C.-Y. Liao, G.-G. P. Garcia, K. Paynabar, Z. Dong, Y. Xie, and M. S. Jalali (2022). Tides Need STEMMED: A Locally Operating Spatio-Temporal Mutually Exciting Point Process with Dynamic Network for Improving Opioid Overdose Death Prediction. `, status: `(Under revision)`, link: 'https://arxiv.org/abs/2211.07570', download: manuscript6 },

  { text: `S.J. Lee, G.-G. P. Garcia, K. K. Stanhope, M. Platner, and S. L. Boulet, (2022). Interpretable Machine Learning to Predict Adverse Perinatal Outcomes: Examining Marginal Predictive Value of Risk Factors throughout Pregnancy. `, status: "(Under revision)" },

  {text: 'L. B. Lempke, A. J. Boltz, G.-G. P. Garcia, R. A. Syrydiuk, H. S. Pandey, M. A. McCrea, T. W. McAllister, and S. P. Broglio (2023). Optimizing Baseline and Post-Concussion Assessments Through Factor Structure Analysis: Findings from the NCAA-DoD CARE Consortium', status: '(Under review)'},

  { text: 'S. Ma, A. Dehghanian, G.-G. P. Garcia, and N. Serban (2022). Learning Hidden Markov Models with Structured Dynamics. ', status: '(Under revision)'},
 
   { text: `G.-G. P. Garcia , L.L. Czerniak, M.S. Lavieri, S.W. Liebel, K. Van Pelt, P.F. Pasquina, T.W. McAllister, M.A. McCrea, S.P. Broglio, and CARE Consortium Investigators. Tailoring the Symptom-Free Waiting Period in Return-to-Play from Concussion: A Simulation Analysis Using CARE Consortium Data. `, status: "(Under revision)" }
]

const peerReviewedPapers = [

  { id: 21, text: `G.-G. P. Garcia , L. N. Steimle, W. J. Marrero, and J. B. Sussman (2023). Interpretable Policies and the Price of Interpretability in Hypertension Treatment Planning. `, journal: "Manufacturing & Service Operations Management. ", status: "(Accepted)", link: "https://optimization-online.org/?p=17279", download: manuscript5 },

  { id: 20, text: `G.-G. P. Garcia , M. S. Lavieri, T. W. McAllister, M. A. McCrea, S. P. Broglio, and CARE Consortium Investigators (2023). Reducing the Price of Naiveté in Return-to-play from Sports-related Concussion. `, journal: "Production and Operations Management. ", status: "(Accepted)",
  link: 'https://doi.org/10.1111/poms.14024', download: ms_PoN },

  { id: 19, text: `S. W. Liebel, C. G. Turner, A. C. Svirsko, G.-G. P. Garcia, P. F. Pasquina, T. W. McAllister,
  M. A. McCrea, S. P. Broglio, and CARE Consortium Investigators (2023). Temporal Network Architectures of Neurocognitive Functioning and Psychological Symptoms in Collegiate Athletes Following Sport-related Concussion: A CARE Consortium Investigation. `, journal: "Journal of Neurotrauma. ", status: "(Accepted)", link: 'https://doi.org/10.1089/neu.2022.0431' },
  
  { id: 18, text: `K. E. Nolan, J. B. Caccese, A. P. Kontos, T. A. Buckley, G.-G. P. Garcia, N. Port, S. P. Broglio, T. W. McAllister, M. A. McCrea, P. F. Pasquina, J. P. Hayes, and CARE Consortium Investigators (2023). Primary and Secondary Risk Factors Associated with Concussion Symptom Clusters in Collegiate Athletes: Results from the NCAA-DoD Grand Alliance CARE Consortium, `, journal: "The Orthopaedic Journal of Sports Medicine", issue: ", 11(4). ", link: 'https://doi.org/10.1177%2F23259671231163581' },

  { id: 17, text: `J. B. Caccese, G.-G. P. Garcia, A.P. Kontos, N. Port, K. Valerio, S.P. Broglio, M.A. McCrea, T.W. McAllister, P.F. Pasquina, T.A. Buckley and CARE Consortium Investigators (2023). Test-Retest Reliability and Efficacy of Individual Symptoms in Concussion Management, `, journal: "Clinical Journal of Sports Medicine", issue:", 33(1), 52-60. ", link: "https://doi.org/10.1097/JSM.0000000000001084" }, 

  { id: 16, text: `L. L. Czerniak, S. W. Liebel, H. Zhou, G.-G. P. Garcia, M. S. Lavieri, M. A. McCrea, T. W. McAllister, S. P. Broglio, and CARE Consortium Investigators (2023). Sensitivity and Specificity of the ImPACT Neurocognitive Test in Collegiate Athletes and United States Military Cadets with ADHD and/or LD: Findings from the NCAA-DoD CARE Consortium, `, journal: "Sports Medicine", issue: ", 53, 747–759", link: "https://doi.org/10.1007/s40279-022-01768-y" },

  { id: 15, text: `G.-G. P. Garcia, R. Dehghanpoor, E. J. Stringfellow, M. Gupta, J. Rochelle, E. Mason, T. Pujol, and M. S. Jalali (2022). Identifying and Characterizing Advice-Seekers for Recovery from Opioid Use Disorder: Social Media Analysis, `, journal: "International Journal of Environmental Research and Public Health", issue:", 19(10), 6281. ", link: "https://doi.org/10.3390/ijerph19106281" },

  { id: 14, text: `G.-G. P. Garcia, E.J. Stringfellow, C. DiGennaro, N. Poellinger, J. Wood, S.E. Wakeman, and M.S. Jalali (2022). Opioid Overdose Decedent Characteristics during COVID-19, `, journal: "Annals of Medicine", issue:", 54(1), 1081–1088. ", link: "https://doi.org/10.1080/07853890.2022.2067350" },

  { id: 13, text: `C.-Y. Liao, G.-G. P. Garcia, C. DiGennaro, and M.S. Jalali (2022). Racial Disparities in Opioid Overdose Deaths in Massachusetts, `, journal: "JAMA Network Open", issue:", 5(4), e229081. ", link: "https://doi.org/10.1001/jamanetworkopen.2022.9081" }, 

  { id: 12, text: `G.-G. P. Garcia , C.M. Schumb, M.S. Lavieri, H. Koffijberg, T.W. McAllister, M.A. McCrea, S.P. Broglio, and CARE Consortium Investigators (2022). Developing Insights for Possible and Probable Acute Concussions Using Cluster Analysis, `, journal: "Journal of Neurotrauma", issue:", 39 (1-2), 102-113. ", link: "https://doi.org/10.1089/neu.2020.7399"},

  { id: 11, text: `C. DiGenarro, G.-G. P. Garcia, E.J. Stringfellow, and M.S. Jalali. (2021). Changes in Characteristics of Drug Overdose Death Trends during the COVID-19, `, journal: "International Journal of Drug Policy", issue:  ", 2021 Dec;98:103392. ", link: 'https://doi.org/10.1016/j.drugpo.2021.103392'}, 

  { id: 10, text: `L.L. Czerniak, S.W. Liebel, G.-G. P. Garcia, M.S. Lavieri, M.A. McCrea, T.W. McAllister, S.P. Broglio, and CARE Consortium Investigators (2021). Sensitivity and Specificity of Computer-Based Neurocognitive Assessments in Sport-Related Concussion: Findings from the NCAA-DoD CARE Consortium, `, journal: "Sports Medicine", issue:
  ", 51 (2), 351-365.", link: "https://doi.org/10.1007/s40279-020-01393-7" }, 

  { id: 9, text: `S.W. Liebel, K.L. Van Pelt, G.-G. P. Garcia, L.L. Czerniak, M.A. McCrea, T.W. McAllister, S.P. Broglio, and CARE Consortium Investigators (2020). The Relationship Between Sport-related Concussion and Sensation-Seeking, `, journal:  "International Journal of Molecular Sciences", issue:", 21 (23), 9097. ", link: "https://doi.org/10.3390/ijms21239097" }, 

  { id: 8, text: `G.-G. P. Garcia , J. Yang, M.S. Lavieri, T.W. McAllister, M.A. McCrea, S.P. Broglio, and CARE Consortium Investigators (2020). Optimizing the Components of the Sport Concussion Assessment Tool for Acute Concussion Assessment, `, journal: "Neurosurgery", issue: ", 87 (5), 971-981. ", link: "https://academic.oup.com/neurosurgery/article/doi/10.1093/neuros/nyaa150/5841232" }, 

  { id: 7, text: `G.-G. P. Garcia, M.S. Lavieri, R. Jiang, M.A. McCrea, T.W. McAllister, S.P. Broglio, and CARE Consortium Investigators (2020). Data-driven Stochastic Optimization Approaches to Determine Decision Boundaries for Risk Estimation Models, `, journal: "IISE Transactions", issue:", 52 (10), 1098-1121. ", link: "https://www.tandfonline.com/doi/full/10.1080/24725854.2020.1725254", download: manuscript1 }, 

  { id: 6, text: `G.-G. P. Garcia, M. S. Lavieri, C. Andrews, X. Liu, M. P. Van Oyen, M. A. Kass, M. O. Gordon, and J. D. Stein (2019). Using Kalman Filtering to Forecast Visual Field and Intraocular Pressure Trajectory in Patients with Ocular Hypertension, `, journal: "JAMA Ophthalmology", issue:", 137 (12), 1416-1423. ", link: "https://jamanetwork.com/journals/jamaophthalmology/article-abstract/2755407" }, 

  { id: 5, text: `G.-G. P. Garcia, M.S. Lavieri, R. Jiang, M.A. McCrea, T.W. McAllister, S.P. Broglio, and CARE Consortium Investigators (2019). A Data-driven Approach to Unlikely, Possible, Probable, and Definite Acute Concussion Assessment, `, journal: "Journal of Neurotrauma", issue:", 36 (10), 1571-1583. ", download: manuscript2 }, 

  { id: 4, text: `G.-G. P. Garcia, K. Nitta, M.S. Lavieri, C. Andrews, X. Liu, E. Lobaza, M.P. Van Oyen, K. Sugiyama, and J.D. Stein (2019). Using Kalman Filtering to Forecast Disease Progression for Patients with Normal Tension Glaucoma, `, journal: "American Journal of Ophthalmology", issue:", 199, 111-119. ", link: "https://doi.org/10.1016/j.ajo.2018.10.012" }, 

  { id: 3, text: `G.J. Schell, G.-G. P. Garcia , M.S. Lavieri, J.B. Sussman, and R.A. Hayward (2018). Optimal Coinsurance Rates for a Heterogeneous Population under Inequality and Resource Constraints, `, journal: "IISE Transactions", issue:", 51 (1), 74-91. ", link: "https://doi.org/10.1080/24725854.2018.1499053", download: manuscript3 }, 

  { id: 2, text: `G.-G. P. Garcia, S.P. Broglio, M.S. Lavieri, M.A. McCrea, T.W. McAllister, and CARE Consortium Investigators (2018). Quantifying the Value of Multidimensional Assessment Models for Acute Concussion: An Analysis of Data from the NCAA-DoD Care Consortium, `, journal: "Sports Medicine", issue:", 48 (7), 1739-1749. ", link: "https://doi.org/10.1007/s40279-018-0880-x", download: manuscript4 }, 

  { id: 1, text: `M. Mofrad, G.-G. P. Garcia, L.M. Maillart, B.A. Norman, and J. Rajgopal (2016). Customizing Immunization Clinic Operations to Minimize Open Vial Waste, `, journal: "Socio-Economic Planning Sciences", issue:", 54 (March 2016), 1-17. ", link: "https://doi.org/10.1016/j.seps.2015.10.007" }
]

const conferencePapers = [
  { id: 2, text: `V. Nori Naga, S. Sundar, G.-G. P. Garcia. "Analysis of Machine Learning and Ensemble Methods for Forecasting COVID-19 Cases in California." 2023 IISE Annual Meeting. `, status: "(Accepted)" },

  { id: 1, text: `G.-G. P. Garcia, L.L. Czerniak, M.S. Lavieri, S.W. Liebel, M.A. McCrea, T.W. McAllister, P.F. Pasquina, S.P. Broglio, and CARE Consortium Investigators. "Simulation-Optimization to Distinguish Optimal Symptom Free Waiting Period for Return-to-play from Concussion." 2022 Winter Simulation Conference (WSC), Singapore, 2022, pp. 1021-1032.`, link: "https://doi.org/10.1109/WSC57314.2022.10015285" }
]

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
          </div>
          <div className='research-text'>
            <div className='research-para-margin'>
                <h4 className='subtitle fw-bold'> Applications </h4>
                <p>Medical decision-making, health policy, concussion management, opioid overdose, maternal health, chronic disease management</p>
            </div>
          </div>
          <div className='research-text'>
            <div>
                <h4 className='subtitle fw-bold'> Methodology </h4>
                <p>Predictive modeling, data-driven optimization, data science, dynamic programming, (partially observable) Markov decision processes, machine learning, stochastic optimization, robust optimization, Kalman filtering, stochastic control, applied statistics, game theory, simulation</p>
            </div>
          </div>
          <div className='flex-center'>
          <a target='_blank' rel='noopener noreferrer' href={cv}><button className='gray-button mt-25'>Download CV</button></a>
          </div>
          <hr></hr>
          <section>
            <h2 className='page-title text-center mt-50'>Publications</h2>
            <h4 className='subtitle fw-bold publication-subtitle'>Submitted Papers and Pre-prints</h4>
            <ol>
            { submittedPapers.map((pubs) => {
            return (
              <li className='break'>{pubs.text}<i>{pubs.journal}</i><i>{pubs.status}</i>
              <a className='url-link' target='_blank' rel='noopener noreferrer' href={pubs.link}> {pubs.link}</a>
              { pubs.download != null && <a href={pubs.download} className="bi-download download-link" download> </a> }
              </li> 
            )})} 
            </ol>
            <h4 className='subtitle fw-bold publication-subtitle'>Peer-reviewed Journal Papers</h4>
            <ol>
            { peerReviewedPapers.map((pubs) => {
            return (
              <li className='break'>{pubs.text}<b>{pubs.journal}</b>{pubs.issue}<i>{pubs.status}</i>
              <a className='url-link' target='_blank' rel='noopener noreferrer' href={pubs.link}> {pubs.link}</a>
              { pubs.download != null && <a href={pubs.download} className="bi-download download-link" download> </a> }
              </li> 
            )})} 
            </ol>
            <h4 className='subtitle fw-bold publication-subtitle'>Peer-reviewed Conference Papers</h4>
              <ol>
              { conferencePapers.map((pubs) => {
              return (
                <li className='break'>{pubs.text}<i>{pubs.journal}</i><i>{pubs.status}</i>
                <a className='url-link' target='_blank' rel='noopener noreferrer' href={pubs.link}> {pubs.link}</a>
                { pubs.download != null && <a href={pubs.download} className="bi-download download-link" download> </a> }
                </li> 
              )})} 
              </ol>
            </section>
            <h2 className='page-title text-center mt-50'>Other Research</h2>
                <a className='reg-link' target='_blank' rel='noopener noreferrer' href="http://www.pitt.edu/~vacro">VaCRO: Vaccine Clinic Reconstitution Optimizer</a>
      </div>
    </div>
  )
}

export default Research; 