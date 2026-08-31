import React from 'react';
import './RelatedLinksPanel.scss';

const RelatedLinksPanel = () => {
    return (
        <div className='RelatedLinksPanelContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span> 21.</span> Related Links Panel</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section >
                        <p>The Related Links Panel is used to provide quick access to relevant or supporting pages within the same context. It helps users explore related information without disrupting their current journey.<br></br>
                        This component is typically placed alongside main content on inner pages and acts as a secondary navigation aid.                   </p>
                         </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets'>
                            <li>Provide quick access to related or supporting content</li>
                            <li>Help users navigate within the same section or category</li>
                            <li>Surface commonly accessed or important links</li>
                            <li>Support content-heavy pages with additional navigation</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>All inner pages apart from section landing pages & patient support centre</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">LAYOUT BEHAVIOUR</div>
                        Desktop - The panel expands to match the height of the main content area for a balanced layout.
                        <br></br>
                        <br></br>
                        Mobile - The panel is repositioned below the main content and appears just before the footer, ensuring it remains accessible without interrupting the primary reading flow.
                    </section>

                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border'  >
                                <p className='title'>
                                    Desktop
                                </p>

                                <div className="horizBullets2 no-margin">
                                    <ul className="bullets nospace">
                                        <li >A. Title Typography Style - Heading 2</li>
                                        <li>B. Standalone Link</li>
                                        <li>C. Container- width- 420px, Corner radius 24px, #E8E8E8</li>
                                    </ul>
                                </div>
                                <br></br>
                                <img src={require('../../../Assets/Images/related-links-panel-image-1.webp')} alt="" />

                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className='container-800'>

                                    <div className="horizBullets2 no-margin">
                                        <ul className="bullets nospace">
                                            <li >A. Title Typography Style - Heading 3</li>
                                            <li>B. Mobile Standalone Link</li>
                                            <li>C. Container- width- 320px, Corner radius 16px, #E8E8E8</li>
                                        </ul>
                                    </div>
                                    <br></br>
                                    <img src={require('../../../Assets/Images/related-links-panel-image-2.webp')} alt="" />

                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont dashed-border'  >
                                <p className='title'>
                                    Desktop
                                </p>
                                <img src={require('../../../Assets/Images/related-links-panel-image-3.webp')} alt="" />



                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <div >
                                    <img src={require('../../../Assets/Images/related-links-panel-image-4.webp')} alt="" />



                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        <p>Link labels should match the title of the page they lead to to ensure clarity and predictability. Avoid rephrasing or shortening in a way that changes meaning. The link text and destination should always be consistent and aligned.                        <br></br>
                        <br></br>
                        Link labels should be clear, specific, and easy to scan.</p>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Keep the list focused and relevant to the page content.</li>
                                    <li>Use consistent link style (#0065B2).</li>
                                    <li>Group links logically based on topic or user need.</li>

                                </ul>
                            </div>

                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not include unrelated or generic links.</li>
                                    <li>Do not mix different link styles within the same panel.</li>
                                    <li>Do not use long or complex link labels.</li>

                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RelatedLinksPanel;