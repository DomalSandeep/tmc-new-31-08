import React from 'react';
import './Dividers.scss';


const Dividers = () => {
    return (
        <div className='DividersContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>9.</span>  Divider</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>Dividers are used to create visual separation between sections, organise related content, and improve content scannability across pages. Different divider styles are used based on the hierarchy and density of the content.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Separate distinct sections of content on a page</li>
                            <li>Create clear visual hierarchy between components</li>
                            <li>Improve readability in long-form or content-heavy layouts</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>Between content sections on inner pages.</li>
                                <li>Between FAQ accordion items.</li>
                            </ul>
                            <ul className='bullets nospace'>
                                <li>Below tabs and navigation elements.</li>
                                <li>Between tightly grouped components or stacked content blocks.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrapBg padbtm'>
                            <div className='pagecont'>
                                <p className='title'>
                                    Desktop
                                </p>
                                <div >
                                    <p style={{ borderBottom: '3px solid #0065B2', paddingBottom: '20px' }}><strong> 1. Section Divider — Blue</strong></p>
                                    <br></br>
                                </div>
                                <div >
                                    <p style={{ borderBottom: '2px solid #C7C7C7', paddingBottom: '20px' }}><strong> 2. Content Divider — Grey</strong></p>
                                    <br></br>
                                </div>

                            </div>
                            <div className='pagecont'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div >
                                    <p style={{ borderBottom: '1.5px solid #0065B2', paddingBottom: '20px' }}><strong>1. Section Divider — Blue</strong></p>
                                    <br></br>
                                </div>
                                <div >
                                    <p style={{ borderBottom: '1px solid #C7C7C7', paddingBottom: '20px' }}><strong>2. Content Divider — Grey</strong></p>
                                    <br></br>
                                </div>

                            </div>

                        </div>
                        <p class="title">Desktop & Mobile </p>
                        <ul >
                            <li>
                                <b>1. Section Divider — Blue</b> <br />

                                <ul className='bullets nospace'>
                                    <li>Used for separating major sections on content-heavy inner pages.</li>
                                    <li>Applied across all inner pages except Home Page and Section Landing Pages.</li>
                                    <li>Creates stronger visual hierarchy and section distinction.</li>
                                    <li>Typically paired with larger spacing values.</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <b>2. Content Divider — Grey</b> <br />

                                <ul className='bullets nospace'>
                                    <li>Used for subtle separation between closely related or compact content elements.</li>
                                    <li>Used within FAQs, tabs, accordions, and grouped components</li>
                                    <li>Creates lightweight visual separation without overpowering the layout</li>
                                    <li>Typically paired with tighter spacing values</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border '>
                                <div className='container-800'>
                                    <p className='title'>Desktop</p>

                                    <p className='pt-40'><strong>    1. Blue Divider</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. line - 3px, #0065B2</li>

                                            </ul>
                                            <br></br>
                                            <img className='full-width' src={require('../../../Assets/Images/divider-image-1.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>   2. Grey Divider</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. line - 2px, #C7C7C7 </li>
                                            </ul>
                                            <br></br>
                                            <img className='full-width' src={require('../../../Assets/Images/divider-image-2.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='pagecont pt-40 container-800'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>

                                    <p className='pt-40'><strong>    1. Blue Divider</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. line - 1.5px, #0065B2</li>

                                            </ul>
                                            <br></br>
                                            <img className='full-width' src={require('../../../Assets/Images/divider-image-3.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>   2. Grey Divider</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. line - 1px, #C7C7C7 </li>
                                            </ul>
                                            <br></br>
                                            <img className='full-width' src={require('../../../Assets/Images/divider-image-4.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use blue dividers to separate major content sections on inner pages</li>
                                    <li>Use grey dividers within tightly grouped UI components</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Maintain consistent spacing above and below dividers</li>
                                    <li>Align dividers to the content grid/container</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use blue dividers inside dense components like FAQs or tables</li>
                                    <li>Do not place multiple dividers too closely together</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use dividers as decorative elements without structural purpose</li>
                                    <li>Avoid inconsistent divider lengths across similar layouts</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Dividers;