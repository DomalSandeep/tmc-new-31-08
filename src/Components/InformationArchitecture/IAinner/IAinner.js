import React from 'react';
import '../InformationArchitecture.scss';  // ← Parent styles
import './IAinner.scss';  

const IAinner = () => {
    const excelUrl = "/information-architecture-tmc-and-hospitals.xlsx";  

    return (
<div className='IAinnerContent InformationArchitectureContent'>  
            <div className="headTitleBg">
                <div className="container">
                    <h1>Information Architecture</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className='container'>
                    <p className="ia-description">Explore the complete site structure and content hierarchy designed <br /> for Tata Memorial Centre and its hospitals.</p>
                    <div className='ia-buttons'>
                        <a href={excelUrl} download="information-architecture-tmc-and-hospitals.xlsx" className="btn-download">Download</a>
                        <a href="/information-architecture-tmc-and-hospitals.pdf" target="_blank" rel="noopener noreferrer" type="application/pdf" className="btn-view">View</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IAinner;