import React from 'react';
import './Cover.scss';
import { Link } from "react-router-dom";


const Cover = () => (
  <>
    <div className='maincover-section'>
      <div className='cover-title'>
        <div className="cover-content">
          <h1>TATA Memorial Centre & Hospitals </h1>
          <h2>Web Design Standards</h2>
        </div>
        <img src={require('../../Assets/Images/tmc-bg.webp')} alt="cover" />
      </div>

      <div className="title">

        <Link to={'/guidelines'}>GUIDELINES</Link>
        <Link to={'/core-page-type'}>Core Page Types</Link>
        <Link to={'/core-components'}>Core ComponentS</Link>
        <Link to={'/information-architecture'}>Information Architecture</Link>
                <Link to={'/figma'}>Figma Design Files</Link>


      </div>
    </div>
  </>
);

export default Cover;
