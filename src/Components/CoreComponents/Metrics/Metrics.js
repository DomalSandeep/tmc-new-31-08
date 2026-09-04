import React from 'react';
import './Metrics.css';

const Metrics = () => {
    return (
        <div className='InformationPanelContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>14. </span>Metrics and Trust Indicators</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        Banners sit within the hero section and serve as trust-building elements that reinforce the institution's credibility. They can showcase key statistics, awards, accreditations, or institutional affiliations.</section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Banners are placed directly below the hero section to build trust and credibility.
                            </li>
                            <li>Use them to highlight institutional achievements, key metrics, or affiliations that reinforce the organisation's reputation.
                            </li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>Displaying patient volume and surgery statistics</li>
                                    <li>Highlighting NCG membership or partnerships</li>
                                    <li>Showcasing awards and recognitions</li>
                                    <li>Listing accreditations like NABH or ABDM</li>

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
                                <div className='dashed-border'>
                                    <p><strong>1. Showcase numbers</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/metrics-variants-desktop-1.webp')} alt="" />
                                </div>
                                <div className='dashed-border pt-40'>
                                    <p ><strong>2. Showcase affiliations </strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/metrics-variants-desktop-2.webp')} alt="" />
                                </div>
                                <div className='pt-40'>
                                    <p ><strong>3. Showcase awards</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/metrics-variants-desktop-3.webp')} alt="" />
                                </div>
                                <div className='pt-40'>
                                    <p ><strong>4. Showcase NCG affiliation</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/metrics-variants-desktop-4.webp')} alt="" />
                                </div>
                            </div>
                            <div className='pagecont'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className='dashed-border'>
                                    <p><strong>1. Showcase numbers</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/metrics-variants-mobile-1.webp')} alt="" />
                                </div>
                                <div className='dashed-border pt-40'>
                                    <p ><strong>2. Showcase affiliations </strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/metrics-variants-mobile-2.webp')} alt="" />
                                </div>
                                <div className='pt-40'>
                                    <p ><strong>3. Showcase awards</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/metrics-variants-mobile-3.webp')} alt="" />
                                </div>
                                <div className='pt-40'>
                                    <p ><strong>4. Showcase NCG affiliation</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/metrics-variants-mobile-4.webp')} alt="" />
                                </div>
                            </div>

                        </div>



                        <p class="title">When to use</p>
                        <ul class="">
                            <li>
                                <b>1.Showcase numbers</b> <br />

                                Showcase numbers
                                Used to highlight key institutional metrics such as patient volume, registrations, and procedures performed annually.                            </li>
                            <br></br>
                            <li>
                                <b>  2. Showcase affiliations </b> <br />
                                Used to display accreditation and partnership logos that establish the institution's credibility and trust.                            </li>
                            <br></br>
                            <li>
                                <b>3.Showcase awards</b> <br />
                                Used to feature healthcare excellence awards and recognitions received by the institution.
                            </li>
                            <br></br>
                            <li>
                                <b>4.Showcase NCG affiliation</b> <br />
                                Used to highlight a specific institutional partnership or membership, featuring a logo with supporting description.                            </li>
                        </ul>
                    </section>

                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <br></br>
                        {/* <ul className='bullets'>
                            <li>Header – labels for each column.</li>
                            <li>Rows – horizontal groupings of data items.</li>
                        </ul> */}
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <p className='title'>
                                    Desktop
                                </p>
                                <div className='container-800'>
                                    <div>
                                        <p><b>1. Showcase statistics</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Statistic number – Typography Style: Stat Large</li>
                                                <li>B. Statistic label – Typography Style: Body Large</li>
                                                <li>C. Divider - #FFFFFF, 44%</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Background - Gradient #0F2D52 - #C6A85E</li>
                                                <li>E. Accent pattern</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/metrics-anatomy-desktop-1.webp')} alt="" />
                                    </div>

                                    <div className="pt-40">
                                        <p><b>2. Showcase affiliations</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Affiliation logo - 140 x 140 px frame</li>
                                                <li>B. Affiliation label – Typography Style: Body Large</li>
                                                <li>C. Divider - #FFFFFF, 44%</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Background - Gradient #0F2D52 - #C6A85E</li>
                                                <li>E. Accent pattern</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/metrics-anatomy-desktop-2.webp')} alt="" />
                                    </div>

                                    <div className="pt-40">
                                        <p><b>3. Showcase awards</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Affiliation logo - 140 x 140 px frame</li>
                                                <li>B. Affiliation label – Typography Style: Body Large</li>
                                                <li>C. Divider - #FFFFFF, 44%</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Background - Gradient #0F2D52 - #C6A85E</li>
                                                <li>E. Accent pattern</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/metrics-anatomy-desktop-3.webp')} alt="" />
                                    </div>

                                    <div className="pt-40">
                                        <p><b>4. Showcase NCG affiliation</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. NCG Logo - 345 x 163 px</li>
                                                <li>B. Divider - #FFFFFF, 44%</li>
                                                <li>C. Title – Typography Style: Heading 2</li>
                                                <li>D. Body text – Typography Style: Body Large</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>E. Accent pattern</li>
                                                <li>F. Background - Gradient #0F2D52 - #C6A85E</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/metrics-anatomy-desktop-4.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='pagecont pt-40'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className='container-900'>
                                    <div>
                                        <p><b>1. Showcase statistics</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Statistic number – Typography Style: Stat Large
                                                </li>
                                                <li>B. Statistic label – Typography Style: Body Default
                                                </li>
                                                <li>C. Divider - #FFFFFF, 44%</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Background - Gradient #0F2D52 - #C6A85E</li>
                                            </ul>
                                        </div>
                                        <img src={require('../../../Assets/Images/metrics-anatomy-mobile-1.webp')} alt="" />
                                    </div>
                                    <div className="pt-40">
                                        <p><b>2. Showcase affiliations</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Affiliation logo - 60 x 60 px frame</li>
                                                <li>B. Sub text Typography Style - Mobile Body Small</li>
                                                <li>C. Divider - #FFFFFF, 44%</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Background - Gradient #0F2D52 - #C6A85E</li>
                                            </ul>
                                        </div>
                                        <img src={require('../../../Assets/Images/metrics-anatomy-mobile-2.webp')} alt="" />
                                    </div>

                                    <div className="pt-40">
                                        <p><b>3. Showcase awards</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Affiliation logo - 60 x 60 px frame</li>
                                                <li>B. Sub text Typography Style - Mobile Body Small</li>
                                                <li>C. Divider - #FFFFFF, 44%</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Background - Gradient #0F2D52 - #C6A85E</li>
                                            </ul>
                                        </div>
                                        <img src={require('../../../Assets/Images/metrics-anatomy-mobile-3.webp')} alt="" />
                                    </div>

                                    <div className="pt-40">
                                        <p><b>4. Showcase affiliations</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. NCG Logo - 180 x 84 px</li>
                                                <li>B. Divider - #FFFFFF, 44%</li>
                                                <li>C. Title – Typography Style Heading 1</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Body text – Typography Style Body Default</li>
                                                <li>E. Background - Gradient #0F2D52 - #C6A85E</li>

                                            </ul>
                                        </div>
                                        <img src={require('../../../Assets/Images/metrics-anatomy-mobile-4.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div class="titlebdr upcase">Spacing in pixels</div>
                         <div className="imageWrapBg2">
                            <div class="pagecont">
                            <p class="title">Desktop</p>
                            <div class="dashed-border">
                                <p><strong> 1. When used with a single level Quick Action Panel</strong></p>
                                <br /><img  src={require('../../../Assets/Images/metrics-space-desktop-1.webp')} alt="" />
                            </div>
                            <div class="dashed-border pt-40">
                                <p><strong> 2. When used with a two level Quick Action panel</strong></p>
                                <img  src={require('../../../Assets/Images/metrics-space-desktop-2.webp')} alt="" />
                            </div>
                            <div class="pt-40">
                                <p><strong> 3. When used with a 3 level quick action panel</strong></p>
                                <img  src={require('../../../Assets/Images/metrics-space-desktop-3.webp')} alt="" />
                            </div>
                        </div>
                         
                        <div class="pagecont  pt-40">
                            <p class="title">Mobile</p>
                            <div class="dashed-border">
                                <p><strong> 1. When used with Quick Access Panel that has 4 CTAs:</strong></p>
                                <br /><img  src={require('../../../Assets/Images/metrics-space-mobile-1.webp')} alt="" />
                            </div>
                            <div class="dashed-border pt-40">
                                <p><strong> 2. When used with Quick Access Panel that has 5 CTAs:</strong></p>
                                <img  src={require('../../../Assets/Images/metrics-space-mobile-3.webp')} alt="" />
                            </div>
                            <div class="pt-40">
                                <p><strong> 3.When used with Quick Access Panel that has 6 CTAs:</strong></p>
                                <img  src={require('../../../Assets/Images/metrics-space-mobile-2.webp')} alt="" />
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
                                    <li>Use the designated typography styles for each element (Stat Large for numbers, Body Large for labels on desktop, Body Default on mobile).</li>
                                    <li>Maintain the gradient background and accent pattern consistently across all banner variants.</li>
                                    <li>Scale logo and frame sizes appropriately between breakpoints (e.g., 140×140px desktop → 60×60px mobile for affiliation/award logos).</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Keep dividers at #FFFFFF, 44% opacity across all variants.</li>
                                    <li>Adjust banner height based on the Quick Access Panel level above it (1-level, 2-level, or 3-level).</li>
                                    <li>Choose the banner variant that best serves the institution's specific trust-building goal — statistics for volume, affiliations for credibility, awards for recognition.</li>
                                    <li>Ensure all displayed metrics, awards, and affiliations are current and verifiable.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't mix or swap typography styles across banner variants (e.g., don't use Heading 2 where Stat Large is specified).</li>
                                    <li>Don't use outdated statistics, expired accreditations, or unverified award claims.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                </ul>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    );
};

export default Metrics;