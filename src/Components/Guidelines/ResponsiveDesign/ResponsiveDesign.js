import React from 'react';
import './ResponsiveDesign.scss';

const ResponsiveDesign = () => {
    return (
        <div className='ResponsiveDesignContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>6.</span> Responsive Design</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section>
                        <div >
                        <p>The site had been designed with a mobile first approach. Responsive design can help you solve a lot of problems for your website. It will make your site mobile-friendly, improve the way it looks on devices with both large and small screens, and increase the amount of time that visitors spend on your site.</p>
                    </div>
                    </section>

                    <section>
                        <div>
                        <div className="titlebdr mrgbtm">EXAMPLES</div>
                        <div className='example-images-grid'>
                            <div className='example-images'>
                                <div className='image-pair'>
                                    <p className='image-label'>Desktop Homepage</p>
                                    <img className='desktop-home' src={require('../../../Assets/Images/responsve-design-image-1.webp')} alt="" />
                                </div>
                                <div className='image-pair'>
                                    <p className='image-label'>Mobile Homepage</p>
                                    <img className='mobile-home' src={require('../../../Assets/Images/responsve-design-image-2.webp')} alt="" />
                                </div>
                                <div className='image-pair'>
                                    <p className='image-label'>Desktop Inner Page</p>
                                    <img className='desktop-inner' src={require('../../../Assets/Images/responsve-design-image-3.webp')} alt="" />
                                </div>
                                <div className='image-pair'>
                                    <p className='image-label'>Mobile Inner Page</p>
                                    <img className='mobile-inner' src={require('../../../Assets/Images/responsve-design-image-4.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>

                    <section>
                        <div className="do-donts">
                        <div className="titlebdr">GUIDELINES</div>

                        <div className="titlebg">Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Focus on screens, not on devices.</li>
                                    <li>Use content-based breakpoint rather than device-based ones.</li>
                                    <li>Optimise images for different devices and connection speeds.</li>
                                    <li>Restyle links and buttons to be touch friendly.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Change navigational patterns for mobile UI/UX.</li>
                                    <li>Dynamically resize fonts to work better at different screen resolutions.</li>
                                    <li>Load content as required, not hiding it from the screen.</li>
                                    <li>Provide retina versions of graphics.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="titlebg red">Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Don't penalise users for the device they happen to be browsing with.</li>
                                    <li>Don't clutter the design and add unnecessary items.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Don't make call to actions too small</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveDesign;