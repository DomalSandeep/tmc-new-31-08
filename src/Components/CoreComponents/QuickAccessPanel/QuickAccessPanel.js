import React from 'react';
import './QuickAccessPanel.scss';

const QuickAccessPanel = () => {
    return (
        <div className='QuickAccessPanelContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>20.</span>  Quick Access Panel</h1>
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
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>Hospital homepages</li>
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
                                <div className="horizBullets2 no-margin">
                                    <ul className="bullets nospace">
                                        <li >A. Container - 1375px by 368px</li>
                                        <li>B. Title typography style- Desktop Heading 2, #000000</li>
                                    </ul>
                                    <ul className="bullets nospace">
                                        <li>C. Desktop Primary Selection Pills - Text pill with icon - Unselected default state</li>
                                        <li>D. Desktop Primary Selection pill - Text pill with icon - Selected default state</li>
                                        <li>E. Contextual Action Pills - Text pill unselected</li>
                                        <li>F. Accent patterns</li>
                                    </ul>
                                </div>
                                <br></br>
                                <img className='mrgbtm full-width' src={require('../../../Assets/Images/quick-access-panel-image-1.webp')} alt="" />
                                <div style={{
                                    paddingLeft: '80px'
                                }}>
                                    <b>Pill Hierarchy</b>
                                    <br></br>
                                    <b>Primary Selection Pills:</b> Used for switching between user groups, categories, or high-level journeys.
                                    <br></br><b>Contextual Action Pills:</b> Used for displaying relevant quick actions, shortcuts, or commonly performed tasks related to the selected category.

                                </div>
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className='container-800'>

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
                                    <img src={require('../../../Assets/Images/quick-access-panel-image-2.webp')} alt="" />
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
                                <img className='mrgbtm full-width' src={require('../../../Assets/Images/quick-access-panel-image-3.webp')} alt="" />
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <img src={require('../../../Assets/Images/quick-access-panel-image-4.webp')} alt="" />
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Prioritise the most frequently used user journeys and actions.</li>
                                    <li>Keep pill labels short and action-focused.</li>
                                    <li>Use clear grouping between user categories and related actions.</li>
                                    <li>Limit the number of primary user-type options to maintain scan ability.</li>

                                </ul>
                            </div>

                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't overload the panel with too many quick actions at once.</li>
                                    <li>Don't use long or descriptive sentences inside pills.</li>
                                    <li>Don't include low-priority or rarely used links.</li>
                                    <li>Don't use the component outside the homepage first fold.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default QuickAccessPanel;