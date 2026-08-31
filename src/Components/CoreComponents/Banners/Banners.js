import React from 'react';
import './Banners.scss';

const Banners = () => {
    return (
        <div className='BannersContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>2.</span> Banners</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        A banner displays a prominent message and related optional actions. Banners are interruptive, but their level of interruption should match the information they contain and the context in which they appear.
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>A banner displays an important, succinct message, and provides actions for users to address.</li>
                            <li>They’re persistent and non-modal, allowing the user to either ignore them or interact with them at any time. </li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className="bullets nospace">
                                    <li>About clinical trials on homepage</li>
                                    <li>Director's message on home page</li>
                                </ul>
                                <ul className="bullets nospace">
                                    <li>About careers on homepage</li>
                                    <li>About preventative oncology on section landing page</li>
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
                                        <p><strong>1. Media Banner</strong></p><br />
                                        <img className='full-width' src={require('../../../Assets/Images/banner-image-1.webp')} alt="" />
                                    </div>

                                    <div className="pt-28">
                                        <p><strong>2. Text Banner</strong></p><br />
                                        <img className='full-width' src={require('../../../Assets/Images/banner-image-2.webp')} alt="" />
                                    </div>

                                    <div className="pt-28">
                                        <p><strong>3. Text Heavy Banner</strong></p><br />
                                        <img className='full-width' src={require('../../../Assets/Images/banner-image-3.webp')} alt="" />
                                    </div>

                            </div>
                            <div className='pagecont'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div>
                                    <p><strong>1. Media Banner</strong></p><br />
                                    <img className='full-width' src={require('../../../Assets/Images/banner-image-4.webp')} alt="" />

                                    <p className="pt-28"><strong>2. Text Banner</strong></p><br />
                                    <img className='full-width' src={require('../../../Assets/Images/banner-image-5.webp')} alt="" />

                                    <p className="pt-28"><strong>3. Text Heavy Banner</strong></p><br />
                                    <img className='full-width' src={require('../../../Assets/Images/banner-image-6.webp')} alt="" />
                                </div>

                            </div>

                        </div>
                        <p class="title">Desktop & Mobile</p>
                        <ul class="">
                            <li>
                                <b>1.Accordion with Questions</b> <br />

                                Used to organise FAQs or common queries into collapsible sections for quick scanning.
                            </li>
                            <br></br>
                            <li>
                                <b>2.Accordion with Table</b> <br />
                                Used to display structured data like documents, downloadable, records, etc within expandable sections.
                            </li>
                            <br></br>
                            <li>
                                <b>3.Accordion with Detailed Content</b> <br />
                                Used to group detailed text information or long-form content into manageable, expandable sections.
                            </li>
                        </ul>
                    </section>
                    
                    
                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <div className='container-800'>
                                    <div>
                                        <p className='title'>
                                            Desktop
                                        </p>
                                        <p> <strong>1. Media Banner</strong> </p>
                                        <div className="horizBullets2">
                                            <ul className="bullets nospace">
                                                <li>A. Title Typography Style – Desktop Heading 1</li>
                                                <li>B. Sub text Typography Style – Desktop Body large</li>
                                                <li>C. Image</li>
                                            </ul>
                                            <ul className="bullets nospace">
                                                <li>D. Secondary button small</li>
                                                <li>E. Accent pattern</li>
                                                <li>F. Background – #0065B2</li>
                                            </ul>
                                        </div>
                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/banner-image-7.webp')} alt="" />

                                    </div>
                                    <div className='pt-40 '>

                                        <p > <strong>2. Text Banner</strong> </p>
                                        <div className="horizBullets2">
                                            <ul className="bullets nospace">
                                                <li>A. Title Typography Style – Desktop Heading 1</li>
                                                <li>B. Sub text Typography Style – Desktop Body large</li>
                                                <li>C. Secondary button small</li>
                                            </ul>
                                            <ul className="bullets nospace">
                                                <li>D. Accent pattern</li>
                                                <li>E. Background – Gradient #0F2D52 – #C6A85E</li>
                                            </ul>
                                        </div>
                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/banner-image-8.webp')} alt="" />

                                    </div>
                                    <div className='pt-40'>

                                        <p > <strong>3. Text Heavy Banner</strong> </p>
                                        <div className="horizBullets2">
                                            <ul className="bullets nospace">
                                                <li>A. Title Typography Style – Desktop Heading 1</li>
                                                <li>B. Sub text Typography Style – Desktop Body Large</li>
                                                <li>C. Secondary button small</li>
                                            </ul>
                                            <ul className="bullets nospace">
                                                <li>D. Accent pattern</li>
                                                <li>E. Background – Gradient #0F2D52 – #C6A85E</li>
                                                <li>F. Title Label Typography Style – Desktop CTA Text</li>
                                            </ul>
                                        </div>
                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/banner-image-9.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='pagecont pt-40 container-800'  >
                                <div>
                                    <p className='title mrgbtm'>
                                        Mobile
                                    </p>
                                    <p > <strong>1. Media Banner</strong> </p>
                                    <div className="horizBullets2">
                                        <ul className="bullets nospace">
                                            <li>A. Title Typography Style – Mobile Heading 1</li>
                                            <li>B. Sub text Typography Style – Mobile Body large</li>
                                            <li>C. Image</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>D. Secondary button Mobile</li>
                                            <li>E. Accent pattern</li>
                                            <li>F. Background – #0065B2</li>
                                        </ul>
                                    </div>
                                    <img className='mrgbtm' src={require('../../../Assets/Images/banner-image-10.webp')} alt="" />

                                </div>
                                <div className='pt-40 '>

                                    <p > <strong>2. Text Banner</strong> </p>
                                    <div className="horizBullets2">
                                        <ul className="bullets nospace">
                                            <li>A. Title Typography Style – Mobile Heading 1</li>
                                            <li>B. Sub text Typography Style – Mobile Body large</li>
                                            <li>C. Secondary button small</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>D. Accent pattern</li>
                                            <li>E. Background – Gradient #0F2D52 – #C6A85E</li>
                                        </ul>
                                    </div>
                                    <img className='mrgbtm' src={require('../../../Assets/Images/banner-image-11.webp')} alt="" />

                                </div>
                                <div className='pt-40'>

                                    <p > <strong>3. Text Heavy Banner</strong> </p>
                                    <div className="horizBullets2">
                                        <ul className="bullets nospace">
                                            <li>A. Title Typography Style – Mobile Heading 1</li>
                                            <li>B. Sub text Typography Style – Mobile Body Large</li>
                                            <li>C. Secondary button small</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>D. Accent pattern</li>
                                            <li>E. Background – Gradient #0F2D52 – #C6A85E</li>
                                            <li>F. Title Label Typography Style – Mobile CTA Text</li>
                                        </ul>
                                    </div>
                                    <img className='mrgbtm' src={require('../../../Assets/Images/banner-image-12.webp')} alt="" />
                                </div>
                            </div>

                        </div>

                    </section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <div className="container-800">
                                    <div>
                                        <p className='title'>
                                            Desktop
                                        </p>
                                        <p > <strong>1. Media Banner</strong> </p>

                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/banner-image-13.webp')} alt="" />

                                    </div>
                                    <div className='pt-40 '>

                                        <p > <strong>2. Text Banner</strong> </p>

                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/banner-image-14.webp')} alt="" />

                                    </div>
                                    <div className='pt-40'>

                                        <p > <strong>3. Text Heavy Banner</strong> </p>

                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/banner-image-15.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='pagecont pt-40 container-800'  >
                                <div>
                                    <p className='title mrgbtm'>
                                        Mobile
                                    </p>
                                    <p > <strong>1. Media Banner</strong> </p>

                                    <img className='mrgbtm' src={require('../../../Assets/Images/banner-image-16.webp')} alt="" />

                                </div>
                                <div className='pt-40 '>

                                    <p > <strong>2. Text Banner</strong> </p>

                                    <img className='mrgbtm' src={require('../../../Assets/Images/banner-image-17.webp')} alt="" />

                                </div>
                                <div className='pt-40'>

                                    <p > <strong>3. Text Heavy Banner</strong> </p>

                                    <img className='mrgbtm' src={require('../../../Assets/Images/banner-image-18.webp')} alt="" />
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
                                    <li>Banners may be placed in locations such that they separate one section from another on the Home Page.</li>
                                    <li>The order in which banners are displayed on the home page will depend on business and user goals.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Banner images should evoke emotion, convey context, reinforce content, or otherwise communicate.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Banners must never be consecutively displayed.</li>
                                    <li>Do not place a banner directly below the hero banner on a page.</li>
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

export default Banners;