import React from 'react';

const BentoGrid = () => {
    return (
        <div className='BentoGridContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>4. </span> Bento Grid</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        Bento Grids are used to present multiple related content items in a visually engaging, editorial-style layout with varied card sizes and compositions.                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Showcase featured stories or testimonials</li>
                            <li>Present visually rich editorial content</li>
                            <li>Highlight human-centric narratives and campaigns</li>
                            <li>Create dynamic layouts using mixed card sizes</li>
                            <li>Break monotony in media-heavy sections</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className='horizBullets'>
                                <ul className='bullets nospace'>
                                    <li>Home pages</li>
                                    <li>Donations section landing page</li>
                                </ul>
                                <ul className='bullets nospace'>
                                    <li>Why choose TMC as an international patient</li>
                                    <li>Financial assistance</li>
                                </ul>
                            </div>
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
                                    <p><strong>  1. Homepage Bento Grid</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-grid-image-1.webp')} alt="" />
                                </div>
                                <div >
                                    <p ><strong> 2. Inner page Bento Grid</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-grid-image-2.webp')} alt="" />
                                </div>

                            </div>
                            <div className='pagecont'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div>
                                    <p><strong>  1. Standard Bento Grid</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-grid-image-3.webp')} alt="" />
                                </div>

                            </div>

                        </div>
                        <p class="title">Desktop </p>
                        <ul >
                            <li>
                                <b>1. Homepage Bento Grid</b> <br />

                                <ul className='bullets nospace'>
                                    <li>Used on homepage and landing sections to create a visually rich, high-engagement storytelling experience.</li>
                                    <li>Focuses on emotional storytelling and visual discovery</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <b>2. Inner Page Bento Grid</b> <br />

                                <ul className='bullets nospace'>
                                    <li>Used within inner detail pages and informational pages where the layout also needs to accommodate supporting elements such as related links panels, contextual navigation, or secondary content sections.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">RESPONSIVE BEHAVIOUR</div>
                        On mobile, Bento Grid layouts convert into a horizontal swipe carousel to improve readability, maintain image visibility, and optimise scrolling within smaller screen widths.
                    </section>

                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>

                                    <div className="horizBullets2">
                                        <div>
                                            <div>
                                                <ul className="bullets">
                                                    <li><b>1. Homepage Bento Grid
                                                    </b></li>
                                                    <li>A. Image or video - width 415px, corner radius 16px
                                                    </li>
                                                    <li>B. Content container- width 415px, #0065B2
                                                    </li>
                                                    <li>C. Content Details- Desktop - body default & Heading 4</li>
                                                </ul>
                                                <img className='  full-width' src={require('../../../Assets/Images/bento-grid-image-4.webp')} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ alignSelf: 'center', fontSize: '14px' }}>
                                            Four-Column Layout – A <br></br>responsive four-column <br></br> structure  used to organise content cards with varying <br></br> heights and proportions.
                                        </div>
                                    </div>

                                    <div className="horizBullets2">
                                        <div>
                                            <div>
                                                <ul className="bullets">
                                                    <li><b>Inner Page Bento Grid

                                                    </b></li>
                                                    <li>A. Image - width 415px, corner radius 16px</li>
                                                    <li>B. Content container- width 415px, #0065B2                                                    </li>
                                                    <li>C. Content Details- Desktop - body default & Heading 4</li>
                                                </ul>
                                                <img src={require('../../../Assets/Images/bento-grid-image-5.webp')} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ alignSelf: 'center', fontSize: '14px', flex: 'none' }}>
                                            Three-Column Layout - A <br></br> responsive three-column <br></br> structure used to organise <br></br> content cards with varying <br></br>heights and proportions.                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pagecont pt-40 '>
                                <div>
                                    <p className='title' >Mobile</p>

                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li><b>1. Standard Bento Grid</b></li>
                                                <li>A. Image or video- width 160px, corner radius 6px</li>
                                                <li>B. Content container- width 160px, #0065B2                                                    </li>
                                                <li>C. Content Details- Mobile body small</li>
                                                <li>D. Carousel indicators</li>
                                            </ul>
                                            <img  src={require('../../../Assets/Images/bento-grid-image-6.webp')} alt="" />
                                        </div>
                                        <div style={{ alignSelf: 'center', fontSize: '14px', flex: 'none' }}>
                                            Horizontal swipe four column <br></br> layout carousel - A responsive <br></br> four-column structure used to <br></br> organise content cards with <br></br> varying heights and proportions.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont dashed-border '>
                                <div className='container-800'>
                                    <p className='title' >Desktop</p>

                                    <img className='mrgbtm  full-width' src={require('../../../Assets/Images/bento-grid-image-7.webp')} alt="" />

                                </div>
                            </div>
                            <div className='pagecont pt-40 container-800 '>
                                <div>
                                    <p className='title' >Mobile</p>
                                    <img className='mrgbtm  full-width' src={require('../../../Assets/Images/bento-grid-image-8.webp')} alt="" />


                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        Content within Bento Grids should remain concise, emotionally engaging, and visually balanced.<br></br>
                        Use strong imagery and short supporting copy to maintain scalability while allowing the visuals to lead the experience.<br></br>
                        Featured cards may contain slightly longer content where additional context is required.
                    </section>


                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use high-quality, emotionally engaging imagery</li>
                                    <li>Maintain clear visual hierarchy across card sizes</li>
                                    <li>Use concise headlines and supporting text</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Prioritise readability over excessive layout complexity</li>
                                    <li>Ensure featured stories receive visual emphasis intentionally</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not overcrowd the layout with excessive text</li>
                                    <li>Avoid inconsistent image treatments across cards</li>
                                    <li>Do not use too many equally large cards within the same layout</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Avoid highly irregular spacing or alignment breaks</li>
                                    <li>Do not use Bento layouts for highly structured/tabular content</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default BentoGrid;