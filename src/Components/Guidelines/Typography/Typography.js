import React from 'react';
import './Typography.scss';

const Typography = () => {
    return (
        <div className='TypographyContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>2.</span> Typography</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>Typography defines the visual structure of text within a product. It plays a key role in creating hierarchy, improving readability, and guiding users through content with clarity and consistency.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm ">TYPOGRAPHY MODEL</div>
                        <p>To ensure that the user has an integrated brand experience, we advise using this typography model.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr ">TYPEFACES</div>
                        <div className='py-28'>
                            <h3 className='style1'>Playfair Display</h3>
                            <br></br>
                            <p>A high-contrast serif typeface that brings sophistication and visual hierarchy, designed to be UI-friendly <br></br>and readable across digital interfaces for headings and highlights.</p>
                        </div>
                        <h3 className='style2'>DM Sans</h3>
                        <br></br>
                            <p>A high-contrast serif typeface that brings sophistication and visual hierarchy, designed to be UI-friendly <br></br>and readable across digital interfaces for headings and highlights.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <div className='desktop-table'>
                            <div className='headingStyle'>
                                <div className='head-body'>
                                    <h3>Headings Desktop</h3>
                                </div>
                                <div className='fontStyle'>
                                    <ul>
                                        <li>Name</li>
                                        <li>Font</li>
                                        <li>Weight & size</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f80' style={{ fontFamily: "'Playfair Display', serif" }}>Display large</li>
                                        <li>Playfair Display</li>
                                        <li>Bold - 80</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f80'>Stat large</li>
                                        <li>DM Sans</li>
                                        <li>Bold - 80</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f44' style={{ fontFamily: "'Playfair Display', serif" }}>Heading 1</li>
                                        <li>Playfair Display</li>
                                        <li>Bold - 44</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f28' style={{ fontFamily: "'Playfair Display', serif" }}>Heading 2</li>
                                        <li>Playfair Display</li>
                                        <li>Bold - 28</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f28'>Heading 3</li>
                                        <li>DM Sans</li>
                                        <li>Semi bold - 28</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f16'>Heading 4</li>
                                        <li>DM Sans</li>
                                        <li>Bold - 16</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='bodyStyle'>
                                <div className='head-body'>
                                    <h3>Body Desktop</h3>
                                </div>
                                <div className='fontStyle'>
                                    <ul>
                                        <li>Name</li>
                                        <li>Font</li>
                                        <li>Weight & size</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f24'>Body large</li>
                                        <li>DM Sans</li>
                                        <li>Regular - 24</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f16' style={{ fontWeight: '500' }}>Body default</li>
                                        <li>DM Sans</li>
                                        <li>Regular - 16</li>
                                    </ul>
                                    <ul>
                                        <li>CTA Text</li>
                                        <li>DM Sans</li>
                                        <li>Medium - 16</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className='mobile-table'>
                            <div className='headingStyle'>
                                <div className='head-body'>
                                    <h3>Headings Mobile</h3>
                                </div>
                                <div className='fontStyle'>
                                    <ul>
                                        <li>Name</li>
                                        <li>Font</li>
                                        <li>Weight & size</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f32' style={{ fontFamily: "'Playfair Display', serif" }}>Display large</li>
                                        <li>Playfair Display</li>
                                        <li>Bold - 32</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f20'>Stat large</li>
                                        <li>DM Sans</li>
                                        <li>Bold - 20</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f20' style={{ fontFamily: "'Playfair Display', serif" }}>Heading 1</li>
                                        <li>Playfair Display</li>
                                        <li>Bold - 20</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f16' style={{ fontFamily: "'Playfair Display', serif" }}>Heading 2</li>
                                        <li>Playfair Display</li>
                                        <li>Bold - 16</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f16'>Heading 3</li>
                                        <li>DM Sans</li>
                                        <li>Semi bold - 16</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f14'>Heading 4</li>
                                        <li>DM Sans</li>
                                        <li>Bold - 14</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='bodyStyle'>
                                <div className='head-body'>
                                    <h3>Body Mobile</h3>
                                </div>
                                <div className='fontStyle'>
                                    <ul>
                                        <li>Name</li>
                                        <li>Font</li>
                                        <li>Weight & size</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f20'>Body large</li>
                                        <li>DM Sans</li>
                                        <li>Regular - 20</li>
                                    </ul>
                                    <ul>
                                        <li className='hd f14' style={{ fontWeight: '500' }}>Body default</li>
                                        <li>DM Sans</li>
                                        <li>Regular - 14</li>
                                    </ul>
                                    <ul>
                                        <li>CTA Text</li>
                                        <li>DM Sans</li>
                                        <li>Medium - 14</li>
                                    </ul>
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
                                    <li>Use Playfair Display for headings only</li>
                                    <li>Use DM Sans for body and UI text</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Follow the defined type scale</li>
                                    <li>Maintain clear hierarchy</li>
                                </ul>
                            </div>
                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't mix fonts outside the system</li>
                                    <li>Don't create new font sizes</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Don't overuse bold text</li>
                                    <li>Don't stretch or distort fonts</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Typography;