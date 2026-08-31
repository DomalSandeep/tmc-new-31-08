import React from 'react';
import './PreviewPage.scss';

const PreviewPage = () => {
    return (
        <div className='PreviewPageContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>7.</span> Preview Page</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Preview Page allows users to review, verify, and validate information before completing a final action or submission. It acts as a confirmation checkpoint within transactional or form-based workflows, helping reduce errors and improve user confidence before proceeding.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Allow users to review entered information</li>
                            <li>Prevent submission errors before final confirmation</li>
                            <li>Increase user confidence in transactional workflows</li>
                            <li>Provide a structured summary of collected data</li>
                            <li>Support editing before final submission</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>All forms</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrap mrgtp20'>
                            <img className='full-width' src={require('../../../Assets/Images/preview-page.webp')} alt="" />
                        </div>
                    </section>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;