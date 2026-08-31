import React from 'react';

const Accordian = () => {
    return (
        <div className='AccordianContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>1.</span> Accordian</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>                        An accordion is a vertically stacked list of headers that reveal or hide associated sections of content. The accordion component delivers large amounts of content in a small space through progressive disclosure. The header title give the user a high level overview of the content allowing the user to decide which sections to read.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>To organize related information</li>
                            <li>To shorten pages and reduce scrolling when content is not crucial to read in full</li>
                            <li>When space is at a premium and long content cannot be displayed all at once, like on a mobile interface.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className="bullets nospace">
                                    <li>Frequently Asked Questions</li>
                                    <li>Ethics Committee</li>
                                </ul>
                                <ul className="bullets nospace">
                                    <li>Accommodation & Stay</li>
                                    <li>Right to Information</li>
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
                                    <p><strong>  1. Accordion with Questions</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/accordion-image-1.webp')} alt="" />
                                </div>
                                <div className='dashed-border pt-40'>
                                    <p ><strong>  2. Accordion with Table</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/accordion-image-2.webp')} alt="" />
                                </div>
                                <div className='pt-40'>
                                    <p ><strong>   3. Accordion with Detailed Content</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/accordion-image-3.webp')} alt="" />
                                </div>
                            </div>
                            <div className='pagecont'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className='dashed-border'>
                                    <p><strong>  1. Accordion with Questions</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/accordion-image-4.webp')} alt="" />
                                </div>
                                <div className='dashed-border pt-40'>
                                    <p ><strong>  2. Accordion with Table</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/accordion-image-5.webp')} alt="" />
                                </div>
                                <div className='pt-40'>
                                    <p ><strong>   3. Accordion with Detailed Content</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/accordion-image-6.webp')} alt="" />
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
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border '>
                                <div className='container-800'>
                                    <p className='title'>Desktop</p>

                                    <p ><strong>  1. Accordion with Questions</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Text Typography Style - Desktop Body large </li>
                                                <li>B. Chevron - 42px, #0065B2 </li>
                                                <li>C. Line separator - 1px, #8F8F8F</li>
                                                <li>D. Link with icon</li>
                                            </ul>
                                            <br></br>
                                            <img className='full-width' src={require('../../../Assets/Images/accordion-image-7.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>  2. Accordion with Table</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography Style - Desktop Heading 2  </li>
                                                <li>B. Chevron - 42px, #0065B2  </li>
                                                <li>C. Table</li>
                                                <li>D. Line separator - 3px, #0065B2</li>
                                            </ul>
                                            <br></br>
                                            <img className='full-width' src={require('../../../Assets/Images/accordion-image-8.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>   3. Accordion with Detailed Content</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography Style - Desktop Heading 2  </li>
                                                <li>B. Chevron - 42px, #0065B2 </li>
                                                <li>C. Horizontal text card</li>
                                                <li>D. Line separator - 3px, #0065B2</li>
                                            </ul>
                                            <br></br>
                                            <img className='full-width' src={require('../../../Assets/Images/accordion-image-9.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>

                                    <p ><strong>  1. Accordion with Questions</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Text Typography Style - Mobile Body Default </li>
                                                <li>B. Chevron - 24px, #0065B2 </li>
                                                <li>C. Line separator - 1px, #8F8F8F</li>
                                                <li>D. Link with icon</li>
                                            </ul>
                                            <br></br>
                                            <img src={require('../../../Assets/Images/accordion-image-10.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>  2. Accordion with Table</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography Style - Mobile Heading 2  </li>
                                                <li>B. Chevron - 22px, #0065B2  </li>
                                                <li>C. Table</li>
                                                <li>D. Line separator - 1.5px, #0065B2</li>
                                            </ul>
                                            <br></br>
                                            <img src={require('../../../Assets/Images/accordion-image-11.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>   3. Accordion with Detailed Content</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography Style - Mobile Heading 2  </li>
                                                <li>B. Chevron - 24px, #0065B2 </li>
                                                <li>C. Horizontal card with text</li>
                                                <li>D. Line separator - 1.5px, #0065B2</li>
                                            </ul>
                                            <br></br>
                                            <img src={require('../../../Assets/Images/accordion-image-12.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="titlebdr">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border '>
                                <div className='container-800'>
                                    <p className='title'>Desktop</p>
                                    <p className='pt-40'><strong>  1. Accordion with Questions</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/accordion-image-13.webp')} alt="" />
                                    <p className='pt-40'><strong>  2. Accordion with Table</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/accordion-image-14.webp')} alt="" />
                                    <p className='pt-40'><strong>   3. Accordion with Detailed Content</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/accordion-image-15.webp')} alt="" />
                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>
                                    <p className='pt-40'><strong>  1. Accordion with Questions</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            
                                            <img src={require('../../../Assets/Images/accordion-image-16.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>  2. Accordion with Table</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            
                                            <img src={require('../../../Assets/Images/accordion-image-17.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>   3. Accordion with Detailed Content</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            
                                            <img src={require('../../../Assets/Images/accordion-image-18.webp')} alt="" />
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
                                    <li>Align the title to the left end of the header and icon (chevron) to the right end of the header.</li>
                                    <li>For accordions with table & detailed content, default should be collapsed state with only the first content panel open.</li>

                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Users can trigger a state change by clicking on the chevron or clicking anywhere in the header area.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't place icons (chevrons) on the left and create misalignment with the other text on the page.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Don't nest accordions within accordions.</li>
                                    <li>Don't use accordions when all content needs to be visible at once.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Accordian;