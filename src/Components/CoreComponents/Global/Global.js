import React from 'react';
import './Global.scss';

const Global = () => {
    return (
        <div className='GlobalContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>12.</span>  Global Navigation</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>                        The Global Navigation is a three-tier navigation system designed to organise institutional information, branding, and high-priority user actions in a structured and scalable manner. It supports quick discovery, clear hierarchy, and consistent access to core journeys across the platform.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets'>
                            <li>The Global Navigation is used as the primary way-finding system across the entire platform and should remain persistent and consistent across all major pages.
                            </li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets '>
                                    <li>All pages</li>

                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">Behaviour</div>


                        <b>Desktop Behaviour</b>
                        <p>                        Tier 3 navigation items expand into mega menus that display grouped navigation links in a structured multi-column layout. This allows users to explore deeper sections of the platform without leaving the current page while maintaining clear visibility of related categories and featured pathways.
                        </p>
                        <br></br>

                        Desktop Interaction

                        <ul className='bullets'>
                            <li>Mega menus open on hover</li>
                            <li>Navigation links are grouped into clear content categories</li>
                            <li>Supports quick discovery of deep-level pages and services</li>
                        </ul>
                        <br></br>

                        <b>Mobile Behaviour</b>
                        <p>On mobile, the navigation condenses into a hamburger-triggered left-side drawer to optimise space and touch accessibility. The drawer contains the complete navigation structure, including utility actions, search, primary categories, and nested navigation links.
                        </p>
                        <br></br>
                        Mobile Interaction
                        <ul className='bullets'>
                            <li>Navigation opens through a hamburger menu trigger</li>
                            <li>Menu expands into a full-height left-side drawer</li>
                            <li>Search remains accessible within the drawer</li>
                            <li>Primary navigation categories use accordion behaviour</li>
                            <li>Nested links progressively expand within categories</li>
                        </ul>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">NAVIGATION STRUCTURE</div>

                        <p class="title" style={{ marginBottom: '10px' }}>Desktop</p>
                        <b>Tier 1 — Utility Navigation</b>
                        <br />
                        <p>Contains global utility actions and secondary platform-level links.
                            <br />
                            Includes - Donate, Clinical Trials, News, Careers, Language Selector, Search, Login, Settings
                        </p>
                        <br />

                        <b>Tier 2 — Institutional Branding</b>
                        <br />
                        <p> Dedicated branding layer containing institutional identity and affiliations.
                            <br />
                            Includes - Primary institutional logo, Partner and affiliated logos, Government/institutional identifiers, Organisation naming
                        </p>                        <br />

                        <b>Tier 3 — Primary Navigation</b>
                        <br />
                        <p> Contains primary navigation categories and high-priority actions.
                            <br />
                            Includes - Main navigation categories, Mega menu triggers, Core service journeys, Primary CTA buttons
                        </p>
                        <br />

                        <p class="title" style={{ marginBottom: '10px' }}>Mobile</p>
                        <p>                        <b>Tier 1 — </b>Language Selector
                        </p>
                        <br />

                        <b>Tier 2 — Institutional Branding</b>
                        <br />
                        <p>Dedicated branding layer containing institutional identity and affiliations.
                            <br />
                            Includes - Primary institutional logo, Partner and affiliated logos, Government/institutional identifiers, Organisation naming
                        </p>
                        <br />
                        <p>                        <b>Tier 3 — </b>Hamburger menu, Primary CTA buttons
                        </p>
                    </section>


                    <section>
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <p className='title'>Desktop</p>
                                <p>                                <b>Default state</b></p>
                                <div className="horizBullets2 no-margin">
                                    <ul className="bullets">
                                        <li>A. Tier 1</li>
                                        <li>B. Tier 2</li>
                                        <li>C. Tier 3</li>
                                    </ul>
                                    <ul className="bullets">
                                        <li>D. Mobile primary button small</li>
                                        <li>E. Text typography style - Desktop body large, #191D76</li>
                                        <li>F. Secondary button small</li>
                                    </ul>
                                    <ul className="bullets">
                                        <li>G. Text typography style - Desktop body default, #ffffff</li>
                                        <li>H. Logo - 88px</li>
                                    </ul>
                                </div>
                                <img className='full-width' src={require('../../../Assets/Images/global-navi-image-1.webp')} alt="" />
                                <br />

                                <p><b>Open state</b></p>
                                <div className="horizBullets2 no-margin">
                                    <ul className="bullets">
                                        <li>A. Active State Indicator Line - 8px, #191D76</li>
                                        <li>B. Group Heading (not clickable)</li>
                                        <li>C. Navigation link - Desktop heading 4</li>
                                    </ul>
                                    <ul className="bullets">
                                        <li>D. Container - width 1920px, #ffffff 70% (glass 80%)</li>
                                        <li>E. Navigation link - hover/selected state - Desktop heading 4 with icon, #191D76</li>
                                    </ul>
                                </div>
                                <img className='full-width' src={require('../../../Assets/Images/global-navi-image-2.webp')} alt="" />
                            </div>
                            <div className="pagecont pt-40">


                                <p className='title pt-40'>Mobile</p>
                                <div style={{ display: 'flex', gap: '100px' }}>
                                    <div>
                                        <p>                                        <b>Default state</b>
                                        </p>
                                        <div className="horizBullets2 no-margin" style={{ gap: '20px' }}>
                                            <ul className="bullets" style={{ flex: 'none' }}>
                                                <li>A. Tier 1</li>
                                                <li>B. Tier 2</li>
                                                <li>C. Tier 3</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Mobile primary button small</li>
                                                <li>E. Text typography style - Mobile body default</li>
                                                <li>F. Mobile primary button</li>
                                            </ul>
                                        </div>

                                        <img className='full-width' src={require('../../../Assets/Images/global-navi-image-3.webp')} alt="" />

                                    </div>
                                    <div>
                                        <p><b>Opened state</b></p>

                                        <div className="horizBullets2 no-margin" style={{ gap: '20px' }}>
                                            <ul className="bullets" style={{ flex: 'none' }}>
                                                <li>A. Tier 1</li>
                                                <li>B. Tier 2</li>
                                                <li>C. Tier 3</li>
                                            </ul>
                                            <ul className="bullets" style={{ flex: 'none' }}>

                                                <li>D. Ham burger icon - 24px</li>
                                                <li>E. Icon - 24px</li>
                                                <li>F. Line seprator</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>G. open accordion background - #ffffff 10%</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/global-navi-image-4.webp')} alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <p className='title'>Desktop</p>

                                <img className='full-width' src={require('../../../Assets/Images/global-navi-image-5.webp')} alt="" />
                                <br />

                            </div>
                            <div className="pagecont pt-40">
                                <p className='title pt-40'>Mobile</p>
                                <img className='full-width' src={require('../../../Assets/Images/global-navi-image-6.webp')} alt="" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div style={{ flex: '1' }}>
                                <ul className='bullets'>
                                    <li>Maintain clear hierarchy between utility, branding, and primary navigation.</li>
                                    <li>Prioritise high-frequency actions within visible navigation areas.</li>
                                    <li>Group related links logically within mega menus.</li>
                                    <li>Keep navigation labels concise and universally understandable.</li>
                                </ul>
                            </div>

                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div style={{ flex: '1' }}>
                                <ul className='bullets'>
                                    <li>Don't overload primary navigation with too many top-level categories.</li>
                                    <li>Don't place critical transactional actions inside deeply nested menus.</li>
                                    <li>Don't duplicate navigation items across multiple tiers unnecessarily.</li>
                                    <li>Don't use long or ambiguous menu labels.</li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Global;