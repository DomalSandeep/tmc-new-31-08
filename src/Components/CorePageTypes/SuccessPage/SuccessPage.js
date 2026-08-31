import React from 'react';
import './SuccessPage.scss';

const SuccessPage = () => {
    return (
        <div className='SuccessPageContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>8.</span>Success page  </h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Success Page confirms the successful completion of a user action, process, or transaction. It reassures users that their task has been completed correctly while providing important reference information, next steps, and supporting actions where required.</p>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Confirm successful completion of an action</li>
                            <li>Reassure users with clear status communication </li>
                            <li>Provide transaction or submission details </li>
                            <li>Surface next steps and follow-up actions</li>
                            
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>All form journeys</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrapBg padbtm'>
                            <img className='full-width' src={require('../../../Assets/Images/success-page.webp')} alt="" />

                        </div>
                    </section>


                </div>
            </div>
        </div>
    );
};

export default SuccessPage;

