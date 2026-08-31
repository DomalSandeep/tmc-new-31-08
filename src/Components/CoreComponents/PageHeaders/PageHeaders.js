import React from 'react';
import './PageHeaders.scss';

const PageHeaders = () => {
    return (
        <div className='PageHeadersContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>18. </span> Page Headers</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>Page headers are used to provide context and orientation within the site. They help users understand where they are, how they got there, and what the page is about.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Indicate the current page or section</li>
                            <li>Provide hierarchical context through breadcrumbs</li>
                            <li>Help users navigate back to previous levels</li>
                            <li>Establish a clear entry point into page content</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>All inner pages & section landing pages</li>
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
                                <div className="horizBullets2">
                                    <ul >
                                        <li>A. Breadcrumbs link style - Text link with icon, #ffffff </li>
                                        <li>B. Title typography style- Heading 1, #ffffff</li>
                                    </ul>
                                    <ul >
                                        <li>C. Accent pattern</li>
                                        <li>D. Background - Gradient #0F2D52 - #C6A85E</li>
                                    </ul>
                                </div>
                                <br></br>
                                <img className=' full-width' src={require('../../../Assets/Images/page-headers-image-1.webp')} alt="" />
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className="horizBullets2">
                                    <ul >
                                        <li>A. Breadcrumbs style - Mobile Body small with icon, #ffffff</li>
                                        <li>B. Title typography style- Mobile Heading 2, #ffffff </li>
                                    </ul>
                                    <ul >
                                        <li>C. Background - Gradient #0F2D52 - #C6A85E</li>
                                    </ul>
                                </div>
                                <br></br>
                                <img src={require('../../../Assets/Images/page-headers-image-2.webp')} alt="" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <p className='title'>
                                    Desktop
                                </p>
                                <img className=' full-width' src={require('../../../Assets/Images/page-headers-image-4.webp')} alt="" />
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>

                                <img src={require('../../../Assets/Images/page-headers-image-3.webp')} alt="" />
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        <p>                        Page titles should clearly reflect the action or selection that led the user to the page. The title should match:</p>
                        <ul className='bullets'>
                            <li>The menu item selected from the global navigation.</li>
                            <li>The button or link label used to navigate to the page.</li>
                        </ul>
                        <br></br>
                        <p>                        This ensures consistency and helps users confirm they have reached the correct destination. <br></br> Avoid rephrasing or using alternate terms—keep page titles aligned with entry points across the interface.
                        </p>
                    </section>
                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Make breadcrumb links clickable for navigation (except the current page)</li>
                                    <li>Maintain consistent styling across all pages</li>
                                    <li>The page header is placed directly below the global header at the top of all inner pages.</li>

                                </ul>
                            </div>

                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use vague or inconsistent page titles</li>
                                    <li>Do not overload the header with additional elements</li>
                                    <li>Do not break alignment with the main content layout</li>

                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PageHeaders;