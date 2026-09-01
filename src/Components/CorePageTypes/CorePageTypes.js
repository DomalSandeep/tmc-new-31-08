import React from 'react';
import { Link } from "react-router-dom";
import backArrow from '../../Assets/Images/back-arrow.svg';

const CorePageTypes = () => {
  return (
    <>
      <div className='cover-section'>
        <div className='container'>
          <div className="columns">
            <div>
              <div className='back-arrow-wrap'>
                <Link to="/">
                  <img className='back-arrow' src={backArrow} alt="Back" />
                </Link>
              </div>
              <h1>TATA Memorial Centre & Hospitals</h1>
              <h2>Web Design Standards</h2>
              <div className="title">
                Core Page Types
              </div>
            </div>
            <div className='navigation'>
              <Link to={'/core-page-type/home-page'}>1. Home Page</Link>
              <Link to={'/core-page-type/home-page-selector'}>2. Home page Selector</Link>
              <Link to={'/core-page-type/section-landing-page'}>3. Section landing page</Link>
              <Link to={'/core-page-type/text-with-media-page'}>4. Information pages</Link>
              <Link className='sub-menu' to={'/core-page-type/text-with-media-page'}>4.1 Text with media page</Link>
              <Link className='sub-menu' to={'/core-page-type/card-list'}>4.2 Card list page</Link>
              <Link className='sub-menu' to={'/core-page-type/card-list-with-media-page'}>4.3 Card list with media page</Link>
              <Link className='sub-menu' to={'/core-page-type/accordion-list-page'}>4.4 Accordion list page</Link>
              <Link to={'/core-page-type/table-pages'}>5. Table page</Link>
              <Link to={'/core-page-type/grid-of-cards'}>6. Grid of cards</Link>
              <Link to={'/core-page-type/forms'}>7. Form page</Link>
              <Link to={'/core-page-type/preview-page'}>8. Preview page</Link>
              <Link to={'/core-page-type/success-page'}>9. Success page</Link>
              <Link to={'/core-page-type/choose-interstitial-page'}>10. Interstitial page</Link>
              <Link to={'/core-page-type/search-results'}>11. Search Results</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorePageTypes;