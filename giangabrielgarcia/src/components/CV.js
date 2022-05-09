import Header from "./header-components/Header";
import cv from '../assets/Garcia_CV.pdf';

const CV = () => {
    return (
        <div className='body-container'> 
            <Header />
            <object className='mt-50'width="100%" height="1000" data={cv} type="application/pdf">   </object>
            {/* <a href={cv}><button className='gray-button'>Download CV</button></a> */}
        </div>
    )
}

export default CV; 