import Header from "./header-components/Header";
import cv from '../assets/Garcia_CV.pdf';
import { useState } from 'react'; 
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const CV = () => {
    const [numPage, setNumPages] = useState(11);
    const [pageNumber, setPageNumber] = useState(1); 

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPage);
        setPageNumber(1); 
    }
    const changePage = (offSet) => {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }
    const changePageBack = () => {
        changePage(-1);
    }
    const changePageNext = () => {
        changePage(+1);
    }

    return (
        <div className='body-container'> 
            <Header />
            <div className='hide-body'>
                {/* <object className='mt-50'width="50%" height="100%" data={cv} type="application/pdf"> </object> */}
                <div id='center-pdf'>
                    <Document id='document' file={cv} onLoadSuccess={onDocumentLoadSuccess}> 
                        <Page id='pdf' width="1000" pageNumber={pageNumber}/> 
                    </Document>
                </div>
       
                {/* <p className='center'>Page {pageNumber} of {numPage}</p> */}
                <div className='center'>
                    { pageNumber > 1 && 
                    <button className='gray-button-sm' onClick={changePageBack}>Prev Page</button>
                    }
                    { pageNumber < numPage && 
                    <button className='gray-button-sm' onClick={changePageNext}>Next Page</button>
                    }
                </div>
           
            </div>
        </div>
    )
}

export default CV; 