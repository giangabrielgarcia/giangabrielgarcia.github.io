import { React } from 'react';
import ResearchCarousel from './ResearchCarousel';
import cv from '../assets/cv/Garcia_CV.pdf';
import manuscript1 from '../assets/manuscripts/2020-datadrivenstochastic.pdf';
import manuscript2 from '../assets/manuscripts/2019-datadrivenapproach.pdf';
import manuscript3 from '../assets/manuscripts/2018-optimalcoinsurancerates.pdf';
import manuscript4 from '../assets/manuscripts/2018-quantifyingthevalue.pdf';
import manuscript5 from '../assets/manuscripts/InterpretablePolicies_MSOM.pdf';
import manuscript6 from '../assets/manuscripts/preprint-STEMMED.pdf';
import ms_PoN from '../assets/manuscripts/2023-PriceofNaivete.pdf';

const submittedPapers = [
  {text: 'C.-Y. Liao, E. Keyvanshokooh, F. J. Pasquel, and G.-G. P. Garcia (2024). Augmenting Individualized Treatment Planning via Data-driven Clinical Role Model Selection. ', status: '(Submitted)'}, //, link: 'https://optimization-online.org/?p=23949'},

  {text: 'C. X. Bugg, Y. Yang, G.-G. P. Garcia, and K. R. Siegel (2024). Implementing Federal Food Service Guidelines in Federal and Private Worksite Cafeterias in the United States Improves Human and Planetary Health. ', status: '(Submitted)'},

  {text: 'A. K. McNealey, M. E. Meredith, G.-G. P. Garcia, S. L. Boulet, K. K. Stanhope, M. H. Platner, and L. N. Steimle (2024). Recommendations for Vaginal Birth after Cesarean Using Historic and Race-Blind Risk Calculators. ', status: '(Submitted)'},

  {text: 'C.-Y. Liao, G.-G. P. Garcia, K. Paynabar, Z. Dong, Y. Xie, and M. S. Jalali (2024). Tides Need STEMMED: A Locally Operating Spatio-Temporal Mutually Exciting Point Process with Dynamic Network for Improving Opioid Overdose Death Prediction. ', status: '(Under review)', link: 'https://arxiv.org/abs/2211.07570'},


  {text: 'Y. Yang, C.-Y. Liao, E. Keyvanshokooh, H. Shao, M. B. Weber, F. Pasquel, and G.-G. P. Garcia (2024). A Responsible Framework for Assessing, Selecting, and Explaining Machine Learning Models in Cardiovascular Disease Outcomes Among People with Type 2 Diabetes. ', status: '(Under review)'},

  {text: 'H. S. Pandey, B. Lahijanian, J. D. Schmidt, R. C. Lynall, S. P. Broglio, T. W. McAllister, M. A. McCrea, P. F. Pasquina, and G.-G. P. Garcia (2024). Quantifying the Diagnostic Utility of Baseline Testing: An Analysis of the NCAA-DoD CARE Consortium Dataset. ', status: '(Submitted).'},

  {text: 'G.-G. P. Garcia, N. Ghaffarzadegan, and M. S. Jalali (2024). Rethinking Optimal Screening Selection Rates for Post-traumatic Stress Disorder: The Impact of Social Stigma. ', status: '(Submitted)', link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4711318'},

  {text: 'G.-G. P. Garcia, E. J. Stringfellow, and M. S. Jalali (2023). Looking Back: COVID-19 and the Drug Overdose Crisis. ', status: '(Submitted)'}  
]

const peerReviewedPapers = [
  { text: 'S.J. Lee, X. Gong, G.-G. P. Garcia (2024). Modified Monotone Policy Iteration for Interpretable Policies in Markov Decision Processes and the Impact of State Ordering Rules. ', journal: 'Annals of Operations Research. ', status: '(Accepted)', link:'https://rdcu.be/dOSk2'}, //'https://optimization-online.org/?p=23723'},

  { text: 'S. Ma, A. Dehghanian, G.-G. P. Garcia, and N. Serban (2024). Learning Hidden Markov Models with Structured Dynamics. ', journal: 'INFORMS Journal on Computing. ', status: '(Accepted)'},

  {text: 'L. B. Lempke, A. J. Boltz, G.-G. P. Garcia, R. A. Syrydiuk, H. S. Pandey, M. A. McCrea, T. W. McAllister, and S. P. Broglio (2023). Optimizing Baseline and Post-Concussion Assessments Through Factor Structure Analysis: Findings from the NCAA-DoD CARE Consortium. ', journal: 'The Clinical Neuropsychologist. ', status: '(Accepted)', link: 'https://doi.org/10.1080/13854046.2023.2271614'},

  {id: 23, text: `G.-G. P. Garcia , L.L. Czerniak, M.S. Lavieri, S.W. Liebel, K. Van Pelt, P.F. Pasquina, T.W. McAllister, M.A. McCrea, S.P. Broglio, and CARE Consortium Investigators (2023). Tailoring the Symptom-Free Waiting Period in Return-to-Play from Concussion: A Simulation Analysis Using CARE Consortium Data. `, journal: "Sports Medicine. ", status: "(Accepted)", link: 'https://doi.org/10.1007/s40279-023-01901-5' },

  {id: 22, text: `S.J. Lee, G.-G. P. Garcia, K. K. Stanhope, M. Platner, and S. L. Boulet, (2023). Interpretable Machine Learning to Predict Adverse Perinatal Outcomes: Examining Marginal Predictive Value of Risk Factors throughout Pregnancy. `, journal: 'American Journal of Obstetrics & Gynecology - MFM', issue: ", 5(10).", link: 'https://doi.org/10.1016/j.ajogmf.2023.101096' },


  { id: 21, text: `G.-G. P. Garcia , L. N. Steimle, W. J. Marrero, and J. B. Sussman (2023). Interpretable Policies and the Price of Interpretability in Hypertension Treatment Planning. `, journal: "Manufacturing & Service Operations Management. ", status: "(Accepted)", link: "https://doi.org/10.1287/msom.2021.0373", download: manuscript5 },

  { id: 20, text: `G.-G. P. Garcia , M. S. Lavieri, T. W. McAllister, M. A. McCrea, S. P. Broglio, and CARE Consortium Investigators (2023). Reducing the Price of Naiveté in Return-to-play from Sports-related Concussion. `, journal: "Production and Operations Management", issue: ", 32, 3081-3099. ",
  link: 'https://doi.org/10.1111/poms.14024', download: ms_PoN },

  { id: 19, text: `S. W. Liebel, C. G. Turner, A. C. Svirsko, G.-G. P. Garcia, P. F. Pasquina, T. W. McAllister,
  M. A. McCrea, S. P. Broglio, and CARE Consortium Investigators (2023). Temporal Network Architectures of Neurocognitive Functioning and Psychological Symptoms in Collegiate Athletes Following Sport-related Concussion: A CARE Consortium Investigation. `, journal: "Journal of Neurotrauma", issue: ", 40 (15-16), 1684-1693. ", link: 'https://doi.org/10.1089/neu.2022.0431' },
  
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
  { id: 2, text: `V. Nori Naga, S. Sundar, G.-G. P. Garcia. "Analysis of Machine Learning and Ensemble Methods for Forecasting COVID-19 Cases in California." 2023 IISE Annual Meeting, New Orleans, LA, 2023, pp. 91-96. `},

  { id: 1, text: `G.-G. P. Garcia, L.L. Czerniak, M.S. Lavieri, S.W. Liebel, M.A. McCrea, T.W. McAllister, P.F. Pasquina, S.P. Broglio, and CARE Consortium Investigators. "Simulation-Optimization to Distinguish Optimal Symptom Free Waiting Period for Return-to-play from Concussion." 2022 Winter Simulation Conference (WSC), Singapore, 2022, pp. 1021-1032.`, link: "https://doi.org/10.1109/WSC57314.2022.10015285" }
]

const bookChapters = [
  {id: 1, text: 'A. K. McNealey, W. J. Marrero, L. N. Steimle, and G.-G. P. Garcia (2023). “Optimization Methods for Interpretable Treatment and Screening”. In: ', book: 'Encyclopedia of Optimization', ed: '. 3rd ed.', publisher: ' Springer, Cham. ', link: 'https://doi.org/10.1007/978-3-030-54621-2_866-1'},

  {id: 2, text: 'S. J. Lee, H. S. Pandey, and G.-G. P. Garcia (2023). “Designing Interpretable Machine Learning Models Using Mixed Integer Programming”. In: ', book: 'Encyclopedia of Optimization', ed: '. 3rd ed.', publisher: ' Springer, Cham. ', link: 'https://doi.org/10.1007/978-3-030-54621-2_867-1'}
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
      
                <p>I am interested in the design, analysis, and optimization of data-driven frameworks at the intersection of <b>Predictive Analytics</b> and <b>Prescriptive Analytics</b> as motivated by high-impact problems in <b>Medical Decision-Making</b> and <b>Health Policy</b>. My recent work emphasizes the principles of responsible AI, including <b>interpretability, equity,</b> and <b>robustness</b>. 
                This work entails the integration of methodologies from <b>operations research</b> and <b>machine learning</b>.</p>
            </div>
          </div>
          <div className='research-text'>
            <div className='research-para-margin'>
                <h4 className='subtitle fw-bold'> Applications </h4>
                <p>Medical decision-making, health policy, concussion management, chronic disease management, opioid overdose, maternal health</p>
            </div>
          </div>
          <div className='research-text'>
            <div>
                <h4 className='subtitle fw-bold'> Methodology </h4>
                <p>Predictive modeling, data-driven optimization, data science, dynamic programming, (partially observable) Markov decision processes, machine learning, stochastic optimization, robust optimization, applied statistics, simulation</p>
            </div>
          </div>
          <div className='flex-center'>
          <a target='_blank' rel='noopener noreferrer' href={cv}><button className='gray-button mt-25'>Download CV</button></a>
          </div>
          <hr></hr>
          <section>
            <h2 className='page-title text-center mt-50 mb-50'>Publications</h2>

            <div class = 'card mb-50'>
              <div class = 'card-header'>
                <a data-toggle="collapse" href="#collapse-bookchapters" aria-expanded="true" aria-controls="collapse-bookchapters" id="heading-bookchapters" class="collapsible-header">
                  <i class="fa fa-chevron-down pull-right"></i>
                  <h4 className='subtitle fw-bold publication-subtitle-card'>Book Chapters</h4>
                </a>
              </div>
              <div id="collapse-bookchapters" class="collapse show" aria-labelledby="heading-bookchapters">
                <div class = 'card-body'>
                  <ol>
                  { bookChapters.map((pubs) => {
                  return (
                    <li className='break'>{pubs.text}<b>{pubs.book}</b>{pubs.ed}{pubs.publisher}<i>{pubs.status} </i>
                    { pubs.link != null && <a className='download-link' target='_blank' rel='noopener noreferrer' href={pubs.link}><i class="fa fa-solid fa-link"></i></a> }
                    { pubs.download != null && <a href={pubs.download} className="download-link" download><i class="fa fa-solid fa-download"></i></a> }
                    </li> 
                  )})} 
                  </ol>
                </div>
              </div>
             </div>
            
            <div class = 'card mb-50'>
              <div class = 'card-header'>
              <a data-toggle="collapse" href="#collapse-submitted" aria-expanded="true" aria-controls="collapse-submitted" id="heading-submitted" class="collapsible-header">
                  <i class="fa fa-chevron-down pull-right"></i>
                <h4 className='subtitle fw-bold publication-subtitle-card'>Submitted Papers and Pre-prints</h4>
                </a>
              </div>              
              <div id="collapse-submitted" class="collapse show" aria-labelledby="heading-submitted">
                <div class = 'card-body'>
                  <ol>
                  { submittedPapers.map((pubs) => {
                  return (
                    <li className='break'>{pubs.text}<i>{pubs.journal}</i><i>{pubs.status} </i>
                    { pubs.link != null && <a className='download-link' target='_blank' rel='noopener noreferrer' href={pubs.link}><i class="fa fa-solid fa-link"></i></a> }
                    { pubs.download != null && <a href={pubs.download} className="download-link" download><i class="fa fa-solid fa-download"></i></a> }
                    </li> 
                  )})} 
                  </ol>
                </div>
              </div>
            </div>

            <div class = 'card mb-50'>
              <div class = 'card-header'>
              <a data-toggle="collapse" href="#collapse-published" aria-expanded="true" aria-controls="collapse-published" id="heading-published" class="collapsible-header">
                  <i class="fa fa-chevron-down pull-right"></i>
                <h4 className='subtitle fw-bold publication-subtitle-card'>Peer-reviewed Journal Papers</h4>
              </a>
              </div>
              <div id="collapse-published" class="collapse show" aria-labelledby="heading-published">
                <div class = 'card-body'>
                  <ol>
                  { peerReviewedPapers.map((pubs) => {
                  return (
                    <li className='break'>{pubs.text}<b>{pubs.journal}</b>{pubs.issue}<i>{pubs.status} </i>
                    { pubs.link != null && <a className='download-link' target='_blank' rel='noopener noreferrer' href={pubs.link}><i class="fa fa-solid fa-link"></i></a> }
                    { pubs.download != null && <a href={pubs.download} className="download-link" download><i class="fa fa-solid fa-download"></i></a> }
                    </li> 
                  )})} 
                  </ol>
                </div>
              </div>
            </div>

            <div class = 'card mb-50'>
              <div class = 'card-header'>
                <a data-toggle="collapse" href="#collapse-conferencepapers" aria-expanded="true" aria-controls="collapse-conferencepapers" id="heading-conferencepapers" class="collapsible-header">
                    <i class="fa fa-chevron-down pull-right"></i>
                  <h4 className='subtitle fw-bold publication-subtitle-card'>Peer-reviewed Conference Papers</h4>
                </a>
              </div>
              <div id="collapse-conferencepapers" class="collapse show" aria-labelledby="heading-conferencepapers">
                <div class = 'card-body'>
                  <ol>
                  { conferencePapers.map((pubs) => {
                  return (
                    <li className='break'>{pubs.text}<b>{pubs.journal}</b><i>{pubs.status} </i>
                    { pubs.link != null && <a className='download-link' target='_blank' rel='noopener noreferrer' href={pubs.link}><i class="fa fa-solid fa-link"></i></a> }
                    { pubs.download != null && <a href={pubs.download} className="download-link" download><i class="fa fa-solid fa-download"></i></a> }
                    </li> 
                  )})} 
                  </ol>
                </div>
              </div>
            </div>
            </section>
            <h2 className='page-title text-center mt-50'>Grants</h2>
                <p>Please see my <a className='reg-link' href={cv}>CV</a> for a complete list of my grants and funded projects.</p>

            <h2 className='page-title text-center mt-50'>Other Research</h2>
                <a className='reg-link' target='_blank' rel='noopener noreferrer' href="http://www.pitt.edu/~vacro">VaCRO: Vaccine Clinic Reconstitution Optimizer</a>
      </div>
    </div>
  )
}

export default Research; 