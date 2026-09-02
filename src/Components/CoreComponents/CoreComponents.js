import React from 'react';
import { Link } from "react-router-dom";
import backArrow from '../../Assets/Images/back-arrow.svg';

const CoreComponents = () => {
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
              <h1>National Cancer Grid Hospitals & Institutions</h1>
              <h2>Web Design Standards</h2>
              <div className="title">
                Core Components
              </div>
            </div>
            <div className='navigation'>
              <Link to={'/core-components/accordion'}>1. Accordion</Link>
              <Link to={'/core-components/banners'}>2. Banner</Link>
              <Link to={'/core-components/buttons'}>3. Buttons</Link>
              <Link to={'/core-components/bento-grid'}>4. Image & Bento Grid</Link>
              <Link to={'/core-components/carousel'}>5. Carousel</Link>
              <Link to={'/core-components/cards'}>6. Cards</Link>
              <Link to={'/core-components/content-block-text'}>7. Content block - text</Link>
              <Link to={'/core-components/checkbox'}>8. Checkbox</Link>
              <Link to={'/core-components/dividers'}>9. Dividers</Link>
              <Link to={'/core-components/editorial-scroll-stack'}>10. Editorial Scroll Stack</Link>
              <Link to={'/core-components/footer'}>11. Footer</Link>
              <Link to={'/core-components/global'}>12. Global Navigation</Link>
              <Link to={'/core-components/hero-banner'}>13. Hero Banner</Link>
              <Link to={'/core-components/Metrics'}>14. Metrics and Trust Indicators</Link>
              <Link to={'/core-components/icons'}>15. Icons</Link>
              <Link to={'/core-components/text-input'}>16. Input fields</Link>
              <Link to={'/core-components/information-panel'}>17. Information Panel</Link>
              <Link to={'/core-components/links'}>18. Links</Link>
              <Link to={'/core-components/page-headers'}>19. Page header</Link>
              <Link to={'/core-components/pills'}>20. Pills</Link>
              <Link to={'/core-components/quick-access-panel'}>21. Quick Access Panel</Link>
              <Link to={'/core-components/related-links-panel'}>22. Related links Panel</Link>
              <Link to={'/core-components/radio-button'}>23. Radio button</Link>
              <Link to={'/core-components/search'}>24. Search bar</Link>
              <Link to={'/core-components/success-confirmation-panel'}>25. Success Confirmation Panel</Link>
              <Link to={'/core-components/tabs'}>26. Tabs</Link>
              <Link to={'/core-components/table'}>27. Tables</Link>
              <Link to={'/core-components/video-for-patient-support-centre'}>28. Video for patient support centre</Link>
              <Link to={'/core-components/wizard'}>29. Wizard</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreComponents;