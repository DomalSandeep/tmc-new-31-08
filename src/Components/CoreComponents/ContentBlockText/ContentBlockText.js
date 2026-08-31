import React from 'react';

const ContentBlockText = () => {
    return (
        <div className='ContentBlockTextContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>7. </span> Content Block - Text</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        Content Text blocks are used to present structured written content with clear hierarchy,
                        <br></br>supporting readability and content scanning across pages.                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Used to introduce or explain sections of content.</li>
                            <li>Helps organise information into clear, readable chunks.</li>
                            <li>Supports both simple and slightly detailed content structures.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>All informational pages</li>
                            </ul>
                        </div>
                    </section>


                    <section>
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border '>
                                <div >
                                    <p className='title'>Desktop</p>

                                    <p className='pt-40'><strong>   1. Default - Heading + Paragraph </strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography style- Desktop Heading 2 </li>
                                                <li>B. Sub Text Typography Style- Desktop body default</li>

                                            </ul>
                                            <br></br>
                                            <img className='full-width' src={require('../../../Assets/Images/content-block-image-1.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>   2. With Subheading - Heading + Subheading + Paragraph</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography style- Desktop Heading 2</li>
                                                <li>B. Subheading - Desktop Heading 4</li>
                                                <li>C. Sub Text Typography Style- Desktop body default</li>
                                            </ul>
                                            <br></br>
                                            <img src={require('../../../Assets/Images/content-block-image-2.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>   3. Subheading & Paragraph</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Subheading - Desktop Heading 4</li>
                                                <li>B. Sub Text Typography Style- Desktop body default</li>

                                            </ul>
                                            <br></br>
                                            <img src={require('../../../Assets/Images/content-block-image-3.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>

                                    <p className='pt-40'><strong>   1. Default - Heading + Paragraph </strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography style- Mobile Heading 2 </li>
                                                <li>B. Sub Text Typography Style- Mobile body small</li>

                                            </ul>
                                            <br></br>
                                            <img src={require('../../../Assets/Images/content-block-image-4.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>   2. With Subheading - Heading + Subheading + Paragraph</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Title Typography style- Mobile Heading 2</li>
                                                <li>B. Subheading - Mobile Heading 4</li>
                                                <li>C. Sub Text Typography Style- Mobile body default</li>
                                            </ul>
                                            <br></br>
                                            <img src={require('../../../Assets/Images/content-block-image-5.webp')} alt="" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <p className='pt-40'><strong>   3. Subheading & Paragraph</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>A. Subheading - Mobile Heading 4</li>
                                                <li>B. Sub Text Typography Style- Mobile body small</li>

                                            </ul>
                                            <br></br>
                                            <img src={require('../../../Assets/Images/content-block-image-6.webp')} alt="" />
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
                                <div >
                                    <p className='title'>Desktop</p>
                                    <img className='full-width' src={require('../../../Assets/Images/content-block-image-7.webp')} alt="" />


                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>
                                    <img className='full-width' src={require('../../../Assets/Images/content-block-image-8.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        Use a clear, descriptive heading to define the section and subheadings (when used) should provide additional context or grouping.
                        <br></br> Paragraphs should be concise, easy to scan, and broken into readable lengths.
                        <br></br>Use bullet points where necessary to improve readability
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Keep headings short and meaningful.</li>
                                    <li>Maintain a clear hierarchy (Heading → Subheading → Body).</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Break long content into smaller sections or lists.</li>
                                    <li>Ensure consistent spacing between elements.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not overload with long, dense paragraphs.</li>
                                    <li>Avoid unnecessary subheadings if content is simple.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Do not mix multiple content styles within the same block.</li>
                                    <li>Avoid vague or generic headings.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContentBlockText;