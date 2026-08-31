import React from 'react';

const Tabs = () => {
    return (
        <div className='TabsContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>25.</span> Tabs</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section >
                        <p>Tabs are used to organise related content into distinct sections, allowing users to switch between views without leaving the page.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets'>
                            <li>Used to separate content into clear, high-level categories.</li>
                            <li>Best suited for layouts with visual or media-heavy content, such as cards, galleries, programs, or featured sections.</li>
                            <li>Helps reduce scrolling by displaying one content group at a time.</li>
                            <li>Maintains context while allowing quick navigation between related sections.</li>
                        </ul>
                        
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">WHEN TO USE TABS VS SELECTION PILLS</div>
                        <ul className='bullets'>
                            <li>                            Use Tabs when the associated content is visual, media-rich, or card-based.</li>
                            <li>Use Selection Pills when the content is more text-heavy or requires a lighter, more flexible interaction pattern.
                            </li>
                            <li>Tabs provide a stronger sense of structure and hierarchy, while pills create a softer and more conversational browsing experience.
                            </li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>Resources section on homepage </li>
                                    <li>Financial assistance page</li>
                                </ul>
                            </div>
                        </div>

                    </section>

                    <section>
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>

                                    <p ><strong>1. Tabs</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography style- Desktop Heading 3</li>
                                                <li>B. Neutral line - height 3px, #C7C7C7</li>
                                                <li>C. Selection line - 12px, #0065B2</li>
                                            </ul>
                                            <img className='full-width' src={require('../../../Assets/Images/tabs-image-1.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
<p>                                    The neutral line extends to align with the width of the associated content area. For carousel layouts, the neutral line spans the full width of the container while maintaining standard page padding.
</p>                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>

                                    <p ><strong>1. Tabs</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography style- Mobile body default</li>
                                                <li>B. Neutral line - height 1px, width 320px #C7C7C7</li>
                                                <li>C. Selection line - 4px, #0065B2</li>
                                            </ul>
                                            <br></br>
                                            <img className='full-width' src={require('../../../Assets/Images/tabs-image-2.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont'>
                                <p className='title'>Desktop</p>
                                <img className='full-width' src={require('../../../Assets/Images/tabs-image-3.webp')} alt="" />

                            </div>

                            <div className='pagecont pt-40'>
                                <p className='title'>Mobile</p>
                                <img className='full-width' src={require('../../../Assets/Images/tabs-image-4.webp')} alt="" />

                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        Tab labels should be short, descriptive, and easy to scan. Use concise category names that clearly represent the content within each tab.
                        Avoid overly long labels that may wrap or reduce readability.
                        <br></br>
                        <br></br>
                        <strong>Number of tabs:</strong> Provide between two and 6 tabs in a tab view. Having more than six tabs can be overwhelming and create layout issues.
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">INTERACTION</div>
                        Only one tab can be active at a time. Selecting a tab updates the visible content within the same page context.
                        Active tabs are visually highlighted using colour and indicator styling.
                    </section>
                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use tabs for related content with equal hierarchy.</li>
                                    <li>Keep labels consistent in length and tone.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Ensure the active state is clearly visible.</li>
                                    <li>Use tabs when users may need to compare or switch between content frequently.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use tabs for unrelated content sections.</li>
                                    <li>Avoid using too many tabs in a single row.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Do not mix tabs and pills for the same interaction within one section.</li>
                                    <li>Avoid long labels that reduce scalability.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Tabs;