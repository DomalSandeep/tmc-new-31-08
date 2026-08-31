import React from 'react';
import { Link } from "react-router-dom";
import backArrow from '../../Assets/Images/back-arrow.svg';
import './InformationArchitecture.scss';

const InformationArchitecture = () => {
  const excelUrl = "/information-architecture-tmc-and-hospitals.xlsx";

  return (
    <div className='InformationArchitectureContent'>
      <div className='cover-section'>
        <div className='container'>
          <div className="columns">
            <div>
              <div>
                <div className='back-arrow-wrap'>
                  <Link to="/">
                    <img className='back-arrow' src={backArrow} alt="Back" />
                  </Link>
                </div>
                <h1>TATA Memorial Centre & Hospitals</h1>
                <h2>Web Design Standards</h2>
                <div className="title">
                  Information Architecture
                </div>
                <p className="ia-description">Explore the complete site structure and content hierarchy designed <br></br> for Tata Memorial Centre and its hospitals.</p>
                <div className='ia-buttons'>                  <a href={excelUrl} download="information-architecture-tmc-and-hospitals.xlsx" className="btn-download">Download</a>

                  <a href="/information-architecture-tmc-and-hospitals.pdf" target="_blank" rel="noopener noreferrer" type="application/pdf" className="btn-view">View </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationArchitecture;