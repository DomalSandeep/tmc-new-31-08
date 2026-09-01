import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='FooterContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>11.</span> Footer</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>                        A website’s footer is an area located at the bottom of every page on a website, below the main body content. Users intentionally scroll to the footer to find information they expect to appear there, such as contact information, details about the company, social media posts or links, or even to discover new or related content on the site. Some users even use the footer for navigation: when they have already scrolled to the end of a page, because the footer is in close proximity, they use that instead of scrolling to the top for the global navigation.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        Users scan or read the page and either don’t find what they want or need more information. They scroll to the bottom of a page and use the footer as:
                        <br /><br />
                        <ul className='bullets'>
                            <li><b>A second chance to be convinced:</b> The footer is a good opportunity to remind or teach potential customers about the company’s other offerings.</li>
                            <br></br>
                            <li><b>A last resort for hard-to-find content:</b> Sometimes users turn to the footer for additional options that might not be present in the global navigation.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>All pages</li>
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
                                    <p><strong>  1.With Map Widget</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/footer-variants-desktop-1.webp')} alt="" />
                                </div>
                                <div className=' pt-40'>
                                    <p ><strong>  2. Without Map Widget</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/footer-variants-desktop-2.webp')} alt="" />
                                </div>

                            </div>
                            <div className='pagecont'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className='dashed-border'>
                                    <p><strong>  1. With Map Widget</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/footer-variants-mobile-1.webp')} alt="" />
                                </div>
                                <div className='pt-40'>
                                    <p ><strong>  2. Without Map Widget</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/footer-variants-mobile-2.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">BEHAVIOUR</div>
                        The links on the footer lead to the selected page/ section on the website.<br></br>
                        The map widget, if used, can direct the user to find directions to the hospital/institution.
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">RESPONSIVE BEHAVIOUR</div>
                        On mobile
                        <ul className='bullets nospace'>
                            <li>Footer groups stack vertically</li>
                            <li>Navigation sections collapse into accordions</li>
                            <li>Social links and institutional information reposition for readability</li>
                            <li>Legal links wrap into multi-line layouts when needed</li>
                        </ul>
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
                                        <p><strong>  1.With Location Widget</strong></p><br></br>
                                        <div className="horizBullets2">
                                            <ul className="bullets nospace">
                                                <li>A. Branding</li>
                                                <li>B. Contact information</li>
                                                <li>C. Container- #0D4169, 224px by 1920px </li>
                                            </ul>
                                            <ul className="bullets nospace">
                                                <li>D. Group header text typography style- Desktop body large</li>
                                                <li>E. Body text typography style- Desktop body default</li>
                                                <li>F. Body container - width 1920px</li>
                                            </ul>
                                            <ul className="bullets nospace">
                                                <li>G. Grey line separator</li>
                                                <li>H. Accent pattern</li>
                                                <li>I. Location Widget</li>
                                                <li>J. Address</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/footer-anatomy-desktop-1.webp')} alt="" />
                                    </div>
                                    <div>
                                        <p className='title'>

                                        </p>
                                        <p><strong>  2. Without Location Widget</strong></p><br></br>
                                        <div className="horizBullets2">
                                            <ul className="bullets nospace">
                                                <li>A. Branding</li>
                                                <li>B. Contact information</li>
                                                <li>C. Container- 224px by 1920px </li>
                                            </ul>
                                            <ul className="bullets nospace">
                                                <li>D. Group header text typography style- Desktop body large</li>
                                                <li>E. Body text typography style- Desktop body default</li>
                                                <li>F. Body container - width 1920px</li>
                                            </ul>
                                            <ul className="bullets nospace">
                                                <li>G. Grey line separator</li>
                                                <li>H. Accent pattern</li>

                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/footer-anatomy-desktop-2.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='pagecont pt-40 '  >
                                <div>
                                    <p className='title mrgbtm'>
                                        Mobile
                                    </p>
                                    <div className="horizBullets2">
                                        <ul className="bullets nospace">
                                            <li>A. Branding</li>
                                            <li>B. Contact information</li>
                                            <li>C. Container- 360px by 392px </li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>D. Header text typography style- Mobile input preview text</li>
                                            <li>E. Body container - width 360px</li>
                                            <li>F. Accent pattern</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>G. Chevron - 24px </li>
                                            <li>H. Map Widget</li>
                                        </ul>
                                    </div>
                                    <img src={require('../../../Assets/Images/footer-anatomy-mobile-1.webp')} alt="" />
                                </div>
                                <div>
                                    <p className='title mrgbtm'>

                                    </p>
                                    <div className="horizBullets2">
                                        <ul className="bullets nospace">
                                            <li>A. Branding</li>
                                            <li>B. Contact information</li>
                                            <li>C. Container- #0D4169, 360px by 144px  </li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>D. Header text typography style- Mobile input preview text</li>
                                            <li>E. Body container - width 360px, #0065B2</li>
                                            <li>F. Accent pattern</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>G. Chevron - 24px </li>
                                        </ul>
                                    </div>
                                    <img src={require('../../../Assets/Images/footer-anatomy-mobile-2.webp')} alt="" />
                                </div>
                            </div>

                        </div>

                    </section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <div className=''>
                                    <div>
                                        <p className='title'>
                                            Desktop
                                        </p>
                                        <p><strong>  1. With Map Widget</strong></p><br></br>
                                        <img className='full-width' src={require('../../../Assets/Images/footer-spacing-desktop-1.webp')} alt="" />
                                    </div>
                                    <div>
                                        <p className='title'>
                                            
                                        </p>
                                        <p><strong>  2. Without Map Widget</strong></p><br></br>
                                        <img className='full-width' src={require('../../../Assets/Images/footer-spacing-desktop-2.webp')} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className='pagecont pt-40 '  >
                                <div>
                                    <p className='title '>
                                        Mobile
                                    </p>
                                        <p><strong>  1. With map Widget</strong></p><br></br>
                                    <img src={require('../../../Assets/Images/footer-spacing-mobile-1.webp')} alt="" />
                                </div>
                                <div>
                                    <p className='title '>
                                        
                                    </p>
                                        <p><strong>  2. Without map Widget</strong></p><br></br>
                                    <img src={require('../../../Assets/Images/footer-spacing-mobile-2.webp')} alt="" />
                                </div>
                            </div>

                        </div>

                    </section>


                    <section>
                        <div className='titlebdr'>GUIDELINES</div>
                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <ul className='bullets'>
                                <li>Group related links under clear headings</li>
                                <li>Keep footer navigation structured and scannable</li>
                                <li>Surface support and institutional information prominently</li>
                                <li>Maintain consistent spacing between navigation groups</li>
                                <li>Ensure legal and policy links remain accessible</li>
                                <li>Include the map widget when the hospital has a physical location to surface</li>
                            </ul>

                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <ul className="bullets">
                                <li>Don't overcrowd footer columns with excessive links</li>
                                <li>Don't duplicate all primary navigation unnecessarily</li>
                                <li>Don't use ambiguous or internal terminology</li>
                                <li>Don't hide important support pathways deep within footer groups</li>
                                <li>Don't overload mobile footer layouts with permanently expanded sections</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Footer;