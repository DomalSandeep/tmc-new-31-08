import React from 'react';
import './InformationPanel.scss';

const InformationPanel = () => {
    return (
        <div className='InformationPanelContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>16. </span>Information Panel</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        Information Panels are used within forms and transactional flows to provide users with important contextual information, instructions, supporting details, or next steps related to the task they are completing.
                        <br></br> These panels help reduce confusion, improve clarity, and keep supporting information visible without interrupting the primary workflow.                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Display contextual information related to a form or process
                            </li>
                            <li>Provide supporting details, instructions, or requirements
                            </li>
                            <li>Inform users about next steps or expected outcomes
                            </li>
                            <li>Highlight event, registration, or donation-related information
                            </li>
                            <li>Keep important guidance visible throughout multi-step flows</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>All forms</li>
                                    <li>Login journey</li>
                                    <li>Contact us journey</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">LAYOUT BEHAVIOUR</div>
                        <p>                        Desktop - The panel expands to match the height of the main content area for a balanced layout.
                        </p>
                        <br></br>
                        <p>                        Mobile - The Information Panel collapses into an expandable accordion placed above the form content to reduce scrolling and prioritise the primary task flow.
                        </p>

                    </section>

                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <div className=''>
                                    <div>
                                        <p className='title'>
                                            Desktop
                                        </p>
                                        <div className='container-800'>
                                            <div className="horizBullets2">
                                                <ul className="bullets nospace">
                                                    <li>A. Title Typography Style - Desktop heading 2</li>
                                                    <li>B. Body copy typography style- Desktop body default</li>
                                                    <li>C. Container- width- 420px, Corner radius 24px, #E6F0FF</li>
                                                </ul>
                                            </div>
                                            <img  src={require('../../../Assets/Images/information-panel-image-4.webp')} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className="horizBullets2" style={{ gap: '140px' }}>
                                    <ul className="bullets nospace">
                                        <li><b>1. Collapsed state</b></li>
                                        <li>A. Title Typography Style - Mobile Heading 3</li>
                                        <li>B. Chevron - 24px</li>
                                        <li>C. Container - width- 320px, Height- 66px, Corner radius 16px, #E6F0FF</li>
                                        <br></br>
                                        <br></br>
                                        <img className=' full-width' src={require('../../../Assets/Images/information-panel-image-2.webp')} alt="" />

                                    </ul>
                                    <ul className="bullets nospace">
                                        <li><b>2. Expanded state</b></li>
                                        <li>A. Title Typography Style - Mobile Heading 3</li>
                                        <li>B. Chevron - 24px</li>
                                        <li>C. Container - width- 320px, Height- 66px, Corner radius 16px, #E6F0FF</li>
                                        <li>D. Body copy- Mobile body default</li>
                                        <br></br>
                                        <img className=' full-width' src={require('../../../Assets/Images/information-panel-image-3.webp')} alt="" />

                                    </ul>
                                </div>

                            </div>

                        </div>

                    </section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <div>
                                    <p className='title'>
                                        Desktop
                                    </p>
                                    <img src={require('../../../Assets/Images/information-panel-image-1.webp')} alt="" />
                                </div>
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <img className='full-width ' src={require('../../../Assets/Images/information-panel-image-5.webp')} alt="" />
                            </div>

                        </div>

                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                       <p> Content inside Information Panels should be concise, informative, and directly relevant to the user’s current task. Avoid long paragraphs where bullet points or grouped information can improve readability.
                        <br></br>Use clear headings that immediately communicate the purpose of the information.</p>

                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Keep information directly relevant to the current form or process</li>
                                    <li>Use concise headings and structured content</li>
                                    <li>Prioritise important instructions and key details</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Use bullet points for document lists or procedural guidance</li>
                                    <li>Ensure the panel remains visually secondary to the main task flow</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not overload the panel with excessive or unrelated information</li>
                                    <li>Do not use Information Panels for critical alerts or error states</li>
                                    <li>Avoid lengthy paragraphs without structure</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Do not place primary actions inside the panel</li>
                                    <li>Avoid using multiple Information Panels side-by-side within the same form layout</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default InformationPanel;