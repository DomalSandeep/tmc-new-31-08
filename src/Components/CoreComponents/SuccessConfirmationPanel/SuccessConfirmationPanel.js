import React from 'react';
import './SuccessConfirmationPanel.scss';

const SuccessConfirmationPanel = () => {
    return (
        <div className='SuccessConfirmationPanelContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>25.</span>  Success Confirmation Panel</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section >
                        <p>The Success Confirmation Panel is used after completing a form submission, registration, payment, or transactional flow. It confirms successful completion, reassures the user, displays key submitted information, and provides clear next steps or follow-up actions.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Used at the end of high-priority transactional journeys.</li>
                            <li>Helps users verify submitted details and access important reference information.</li>
                            <li>Can include downloadable documents, confirmation IDs, contact details, or next-step guidance.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>Form journeys</li>
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
                                <div className="horizBullets2 no-margin container-800">
                                    <ul className="bullets nospace">
                                        <li >A. Container - Width 1400px, #0F2D52 - #C6A85E</li>
                                        <li>B. Title typography style- Desktop Heading 1, #ffffff</li>
                                        <li>C. Desktop secondary button small</li>
                                        <li>D. Accent patterns</li>
                                    </ul>
                                    <ul className="bullets nospace">
                                        <li>E. Text typography style - Desktop Body default</li>
                                        <li>F. Horizontal text card</li>
                                        <li>G. GIF - 156px by 156px</li>
                                    </ul>
                                </div>
                                <br></br>
                                <div className="horizBullets2 no-margin">
                                    <img className='mrgbtm ' src={require('../../../Assets/Images/success-confirmation-panel-image-1.webp')} alt="" />

                                    <div style={{ fontSize: '12px', paddingTop: '30px' }}> Success Indicator
                                        <br></br>
                                        Visual confirmation icon or status indicator communicating successful completion.
                                        <br></br>
                                        <br></br>
                                        Confirmation Message<br></br>
                                        Primary heading confirming the completed action.
                                        <br></br>
                                        <br></br>
                                        Action Area<br></br>
                                        Primary follow-up actions such as download, print, or continue.
                                        <br></br>
                                        <br></br>
                                        Information Summary<br></br>
                                        Structured details related to the completed transaction or submission.
                                        <br></br>
                                        <br></br>
                                        Next Steps Section<br></br>
                                        Guidance for what the user should do after completion.</div>
                                </div>

                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className='container-800'>

                                    <div className="horizBullets2 no-margin">
                                        <ul className="bullets nospace">
                                            <li>A. Container - Width 320px, #0F2D52 - #C6A85E</li>
                                            <li>B. Title typography style- Mobile Heading 1, #ffffff</li>
                                            <li>C. Mobile secondary button small</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>D. Text typography style - Mobile Body default</li>
                                            <li>E. Mobile Horizontal text card</li>
                                            <li>F. GIF - 70px by 70px</li>
                                        </ul>
                                    </div>
                                    <br></br>
                                    <img src={require('../../../Assets/Images/success-confirmation-panel-image-2.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

<section>
    <div className="titlebdr mrgbtm">CONTENT</div>
    <p>The panel should prioritise clarity and reassurance. Information should be grouped into clear sections such as confirmation status, submitted details, reference information, and next steps. Actions should remain focused and limited to the most relevant follow-up tasks.</p>
</section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <p className='title'>
                                    Desktop
                                </p>
                                <img className='full-width ' src={require('../../../Assets/Images/success-confirmation-panel-image-3.webp')} alt="" />
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <img src={require('../../../Assets/Images/success-confirmation-panel-image-4.webp')} alt="" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div style={{flex:'1'}}>
                                <ul className='bullets'>
                                    <li>Clearly confirm successful completion using strong visual and textual feedback.</li>
                                    <li>Group information into scannable sections.</li>
                                    <li>Highlight important reference details such as IDs, dates, or contact information.</li>
                                    <li>Provide clear next steps to guide the user forward.</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div style={{flex:'1'}}>
                                <ul className='bullets'>
                                    <li>Don't overload the panel with excessive actions or secondary information.</li>
                                    <li>Don't use vague confirmation messaging.</li>
                                    <li>Don't hide critical reference details behind interactions.</li>
                                    <li>Don't include unrelated navigation or promotional content within the panel.</li>
                                </ul>
                            </div>
                            
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SuccessConfirmationPanel;