import React from 'react';
import './Links.scss';
import chevronIcon from '../../../Assets/Images/links-image-chevron-down.svg';
import arrowIcon from '../../../Assets/Images/links-image-arrow.svg';

const Links = () => {
    return (
        <div className='LinksContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>18.</span> Links</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section >
                        <p>                        Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. Use links for less prominent, and sometimes independent, actions.
                        </p>
                        <p>                        Links can be used in isolation or paired with a primary button when there are multiple calls to action. Text buttons can also be used for sub-tasks on a page where a primary button for the main and final action is present.
                        </p>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets '>
                            <li>They provide a lightweight option for navigation</li>
                            <li>Navigate to an entirely different site</li>
                            <li>Link to emails or phone numbers</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets '>
                                    <li>Below FAQ's & other components</li>
                                    <li>Related links widget</li>
                                    <li>Tables</li>
                                </ul>
                                <ul className='bullets '>
                                    <li>Contact us page</li>
                                    <li>Navigational links in Header and Footer</li>
                                    <li>Search results page</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrapBg padbtm'>
                            <div className='pagecont'>
                                <p className='title'>Desktop</p>
                                <div style={{ color: '#0065B2', fontSize: '16px', fontWeight: 400, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <p>Text link</p>
                                    <p className="link-with-icon">Text link with icon <img src={arrowIcon} alt="Arrow down icon" /></p>
                                    <p style={{ fontSize: '28px', fontWeight: '600' }}>Search Results Link</p>
                                </div>
                                <img className='full-width pt-40' src={require('../../../Assets/Images/links-image-1.webp')} alt="" />
                            </div>
                            <div className='pagecont'>
                                <p className='title'>Mobile</p>
                                <div style={{ color: '#0065B2', fontSize: '14px', fontWeight: 400, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <p>Text link</p>
                                    <p className="link-with-icon">Text link with icon <img src={chevronIcon} alt="Chevron down icon" /></p>
                                    <p style={{ fontSize: '16px' }}>Search Results Link</p>
                                </div>
                                <img className='full-width pt-40' src={require('../../../Assets/Images/links-image-2.webp')} alt="" />
                            </div>
                        </div>

                        <p className="title" style={{ marginTop: '28px', marginBottom: '28px' }}>Desktop &amp; Mobile</p>
                        <ul >
                            <li><b>Text Link</b><br />Used for inline navigation within content where a lightweight, non-prominent action is needed.</li>
                            <br></br>
                            <li><b>Text Link with Icon</b><br />Used when the link leads to an external page or needs a visual cue to indicate direction or action.</li>
                            <br></br>
                            <li><b>Search results link</b><br />Used to highlight primary clickable items within search results for quick scanning and navigation.</li>
                            <br></br>
                            <li><b>Icon Navigation Link</b><br />Used for grouped navigational lists where icons help users quickly identify categories, services, or destinations.</li>
                        </ul>
                    </section>

                    <section>
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>

                                    <div className="horizBullets2">
                                        <div>
                                            <p><b>1. Standalone link</b></p>
                                            <ul className="bullets">
                                                <li>A. Text Typography Style - Desktop Body Default, #0065B2</li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/links-image-7.webp')} alt="" />
                                        </div>
                                        <div>
                                            <p><b>2. Text link with icon</b></p>
                                            <ul className="bullets">
                                                <li>A. Text Typography Style - Desktop Body Default, #0065B2</li>
                                                <li>B. Icon - 16px, #0065B2</li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/links-image-8.webp')} alt="" />
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>3. Search result link</strong></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Text Typography Style - Desktop Heading 3, #0065B2</li>
                                            </ul>
                                        </div>
                                        <img src={require('../../../Assets/Images/links-image-5.webp')} alt="" />
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>4. Icon Navigation Link</strong></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Icon - 40px</li>
                                                <li>B. Link text typography style - Desktop body large</li>
                                                <li>C. Chevron - 18px</li>
                                                <li>D. Desktop grey divider</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/links-image-6.webp')} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title'>Mobile</p>

                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li><strong>1. Standalone link</strong></li>
                                                <li>A. Text Typography Style - Mobile Body Default, #0065B2</li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/links-image-7.webp')} alt="" />
                                        </div>
                                        <div>
                                            <ul className="bullets">
                                                <li><strong>2. Text link with icon</strong></li>
                                                <li>A. Text Typography Style - Mobile Body Default, #0065B2</li>
                                                <li>B. Icon - 16px, #0065B2</li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/links-image-8.webp')} alt="" />
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>3. Search result link</strong></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Text Typography Style - Mobile Heading 3, #0065B2</li>
                                            </ul>
                                        </div>
                                        <img src={require('../../../Assets/Images/links-image-5.webp')} alt="" />
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>4. Icon Navigation Link</strong></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Icon - 24px</li>
                                                <li>B. Link text typography style - Mobile body large</li>
                                                <li>C. Chevron - 16px</li>
                                                <li>D. Mobile grey divider</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/links-image-10.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>
                                    <img className='full-width' src={require('../../../Assets/Images/links-image-11.webp')} alt="" />

                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title'>Mobile</p>
                                    <img className='full-width' src={require('../../../Assets/Images/links-image-12.webp')} alt="" />

                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        <p>We recommend links be three words or fewer. Because links take users to a new location, it is important that their labels accurately reflect the content users will find at the link destination.</p>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>
                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Links need to be clear enough to be understood by the user.</li>
                                    <li>Use meaningful labels for links.</li>
                                    <li>Use #0065B2 as the default link color. Switch to #FFFFFF on dark backgrounds (page header) to maintain sufficient contrast and readability.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>The standalone link component can be optionally paired with an icon.</li>
                                    <li>Icons should always be the same color as the link text.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use too many links as they will clutter a page and make it difficult for users to identify their next steps.</li>
                                    <li>Links should not be so long that the text wraps unless used inline.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use terms like "click here" or the web address itself.</li>
                                    <li>Inline links should not be used on their own and should not be paired with icons.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Links;