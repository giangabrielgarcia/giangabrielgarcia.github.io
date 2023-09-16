import { React } from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='footer-pin hide-body'> 
      <div className='body-container'>
        <div className='center'>
          <h4 className='page-title mt-50'>Privacy Policy</h4>
          <p><i>Last Updated: September 16, 2023</i></p>
        </div>
        <div>
          <h5 className="privacy-policy-headings">Transparency</h5>
          <p>Welcome to Gian Gabriel Garcia's academic website. We value your privacy and aim to be transparent about how we handle and protect your personal data. This Privacy Policy explains the type of information we collect, how we use it, and your rights regarding that information.</p>
          <h5 className="privacy-policy-headings">Information We Collect</h5>
          <p>We use Google Analytics, a web analytics tool, to collect standard internet log information and visitor behavior information. This helps us understand the number of visitors, pages visited, and how users navigate this site.</p>
          <h5 className="privacy-policy-headings">How We Use the Information</h5>
          <p>The data we collect through Google Analytics is used to:</p>
          <ul>
            <li className="bullet-points">
              Analyze user behavior to improve the website
            </li>
            <li className="bullet-points">
              Measure and analyze website performance and effectiveness
            </li>
            <li className="bullet-points">
              Understand the popularity of different content and sections
            </li>
          </ul>

          <h5 className="privacy-policy-headings">Cookies</h5>
          <p>Google Analytics uses cookies to collect this data. Cookies are small text files placed on your computer to collect standard internet information and visitor behavior. For further information, visit the
            <a target='_blank' rel='noopener noreferrer' href='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage' className="url-link"> Google Analytics' Cookie Usage page.</a>
          </p>

          <h5 className="privacy-policy-headings">Opting Out</h5>
          <p>If you wish to opt-out of Google Analytics tracking, you can install the
            <a target='_blank' rel='noopener noreferrer' href='https://tools.google.com/dlpage/gaoptout' className="url-link"> Google Analytics opt-out browser add-on.</a>
          </p>

          <h5 className="privacy-policy-headings">Your Rights</h5>
          <p>Depending on where you reside, you may have rights pertaining to your personal data, including:</p>
          <ul>
            <li className="bullet-points">
              The right to be informed about the collection and use of your data
            </li>
            <li className="bullet-points">
              The right to access the personal data we hold about you            
            </li>
            <li className="bullet-points">
              The right to rectification if personal data held is inaccurate
            </li>
          </ul>

          <h5 className="privacy-policy-headings">Privacy Policy Changes</h5>
          <p>We may occasionally update this policy. Any changes will be posted on this page. Please check back periodically to ensure you are aware of any updates.</p>

          <h5 className="privacy-policy-headings">Contact Information</h5>
          <p>If you have questions about our privacy policy or practices, please contact me at <a target='_blank' rel='noopener noreferrer' href='mailto: giangarcia@gatech.edu' className="url-link"> giangarcia@gatech.edu</a></p>
        </div>
      </div>
    </div>
)
}

export default PrivacyPolicy;