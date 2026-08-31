import React from 'react';
import './SectionLandingPage.scss';

const SectionLandingPage = () => {
    return (
        <div className='SectionLandingPageContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>2.</span> Section Landing</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        The Section Landing Page acts as the primary entry point into a major content category or service area within the platform. It helps users explore broad topic groups, discover related services, and navigate deeper into specific sub-sections through structured content and guided pathways.
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>

                        <ul className='bullets'>
                            <li>Introduce a major service area or institutional category </li>
                            <li>Organise large volumes of related content into structured pathways </li>
                            <li>Support content discovery and exploration</li>
                            <li>Guide users toward relevant detail pages and journeys </li>
                            <li>Surface important programs, resources, and support information</li>

                        </ul>

                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div class="horizBullets">
                                <ul class="bullets nospace">
                                    <li>Specialities</li>
                                    <li>Treatment</li>
                                    <li>Technology</li>
                                </ul>
                                <ul class="bullets nospace">
                                    <li>Donation</li>
                                    <li>Financial Assistance</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">VARIANTS</div>
                        <div className='imageWrap'>
                            <img className='full-width' src={require('../../../Assets/Images/section-landing.webp')} alt="" />
                        </div>
                    </section>



                    <section>
                        <div className="do-donts">
                            <div className="titlebdr">GUIDELINES</div>

                            <div className="titlebg">Do's</div>
                            <div className="twocolumntext">
                                <div>
                                    <ul className="bullets">
                                        <li>Organise content into clear and meaningful groups</li>
                                        <li>Prioritise discoverability and user navigation</li>
                                        <li>Use modular sections to support scalability</li>

                                    </ul>
                                </div>
                                <div>
                                    <ul className="bullets">
                                        <li>Surface important pathways prominently </li>
                                        <li>Maintain consistent hierarchy across sections</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="titlebg red">Don'ts</div>
                            <div className="twocolumntext">
                                <div>
                                    <ul className="bullets">
                                        <li>Don't overload the page with excessive navigation choices</li>
                                        <li>Don't mix unrelated content categories within the same section</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="bullets">
                                        <li>Don't use overly promotional layouts that distract from navigation</li>
                                        <li>Don't create deep nested navigation structures unnecessarily</li>
                                        <li>Don't rely solely on visual cards without supporting labels or hierarchy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SectionLandingPage;