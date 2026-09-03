import React from 'react';
import './QuickAccessPanel.scss';

const QuickAccessPanel = () => {
    return (
        <div className='QuickAccessPanelContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>21.</span>  Quick Access Panel</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section >
                        <p>                        The Quick Access Panel provides users with direct entry points to high-priority journeys based on their user type and common tasks. It helps reduce navigation effort and enables faster access to critical actions such as registration, appointments, payments, and support services.
                        </p></section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Helps users quickly identify relevant pathways based on intent or persona.</li>
                            <li>Recommended for frequently accessed actions and conversion-focused journeys.</li>
                            <li>Use a single-level panel for a small set of actions (up to six). </li>
                            <li>Use a two-level panel when actions need to be bifurcated by role or persona — recommended when role-based navigation is relevant to the hospital.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>Organisation’s homepages</li>
                                </ul>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <p className='title'>
                                    Desktop
                                </p>
                                <b >Single Level Panel</b>
                                <div className="horizBullets2 no-margin">
                                    <ul className="bullets nospace">
                                        <li >A. Container - 1375px by 368px</li>
                                        <li>B. Title typography style- Desktop Heading 2, #000000</li>
                                    </ul>
                                    <ul className="bullets nospace">
                                        <li>C. Text Pill</li>
                                        <li>D. Accent patterns</li>

                                    </ul>
                                </div>
                                <br></br>
                                <img className='mrgbtm full-width' src={require('../../../Assets/Images/quick-access-panel-single-1.webp')} alt="" />
                                <div style={{

                                }}>

                                </div>

                                <b >Multi Level Panel</b>

                                <div className='container-800'>

                                    <div className="horizBullets2 no-margin">
                                        <ul className="bullets nospace">
                                            <li>A. Container - 1375px by 201px</li>
                                            <li>B. Title typography style- Desktop Heading 2, #000000</li>
                                            <li>C. Contextual Action Pills - Text pill - Unselected default state</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>D. Contextual Action Pills - Text pill - Selected default state</li>
                                            <li>E. Text Pill</li>
                                            <li>F. Accent Pattern</li>
                                        </ul>
                                    </div>
                                    <br></br>
                                    <img class="mrgbtm full-width" src={require('../../../Assets/Images/quick-access-panel-image-1.webp')} alt="" />

                                    <b>Pill Hierarchy</b>
                                    <br></br><b>Contextual Action Pills:</b> Used for displaying relevant quick actions, shortcuts, or commonly performed tasks related to the selected category.

                                </div>
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <b >Single Level Panel</b>

                                <div className='container'>

                                    <div className="horizBullets2 no-margin">
                                        <ul className="bullets nospace">
                                            <li>A. Container - 320px by 406px</li>
                                            <li>B. Title typography style- Mobile Heading 2, #000000</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>C. Mobile Selection pill - Text pill</li>
                                        </ul>
                                    </div>
                                    <br></br>

                                    <img class="mrgbtm" src={require('../../../Assets/Images/quick-access-panel-mobile-single-1.webp')} alt="" />
                                </div>
                                 <b >Multi Level Panel</b>

                                <div className='container'>

                                    <div className="horizBullets2 no-margin">
                                        <ul className="bullets nospace">
                                            <li>A. Container - 320px by 406px</li>
                                            <li>B. Title typography style- Mobile Heading 2, #000000</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>C. Mobile Selection pill - Text pill with icon</li>
                                        </ul>
                                    </div>
                                    <br></br>

                                    <img class="mrgbtm" src={require('../../../Assets/Images/quick-access-panel-image-2.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="titlebdr mrgbtm">BEHAVIOUR</div>
                        The top selection pills act as category selectors that dynamically update the contextual quick action pills displayed below based on the selected user type or journey.

                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">RESPONSIVE BEHAVIOUR</div>
                        On mobile, the panel simplifies into vertically stacked full-width pills to improve touch accessibility and reduce horizontal crowding. Contextual secondary actions are hidden until a primary user category is selected.
                    </section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <p className='title'>
                                    Desktop
                                </p>
                                <img className='mrgbtm full-width' src={require('../../../Assets/Images/quick-access-panel-spacing-desktop-1.webp')} alt="" />
                                <img className='mrgbtm full-width' src={require('../../../Assets/Images/quick-access-panel-image-3.webp')} alt="" />
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <img src={require('../../../Assets/Images/quick-access-panel-image-4.webp')} alt="" />
                                <img src={require('../../../Assets/Images/quick-access-panel-spacing-mobile-2.webp')} alt="" />
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                                <ul className='bullets'>
                                    <li>Prioritise the most frequently used user journeys and actions.</li>
                                    <li>Keep pill labels short and action-focused.</li>
                                    <li>Use clear grouping between user categories and related actions.</li>
                                    <li>Limit the number of primary user-type options to maintain scan ability.</li>
                                    <li>Use the single-level panel when there are six or fewer actions.</li>
                                    <li>Use the two-level panel when actions differ meaningfully by user role.</li>
                                </ul>
                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                           
                                <ul className='bullets'>
                                    <li>Don't overload the panel with too many quick actions at once.</li>
                                    <li>Don't use long or descriptive sentences inside pills.</li>
                                    <li>Don't include low-priority or rarely used links.</li>
                                    <li>Don't use the component outside the homepage first fold.</li>
                                    <li>Don't use a two-level panel if the hospital doesn't have distinct role-based journeys.</li>
                                    <li>Don't exceed six contextual action pills in a single-level panel.</li>
                                </ul>
                           

                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default QuickAccessPanel;