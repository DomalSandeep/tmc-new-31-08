import React from 'react';
import './TextWithMediaPage.scss';

const TextWithMediaPage = () => {
    return (
        <div className='TextWithMediaPageContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>3.1</span> Information Pages - Text with Media Page</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Text with Media Page is designed for detailed informational content supported by visual media, structured content blocks, and contextual navigation. It combines rich editorial content with supporting imagery, infographics, cards, and related links to improve readability, engagement, and content discovery.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Present detailed informational or educational content</li>
                            <li>Support long-form reading with visual reinforcement</li>
                            <li>Improve comprehension through media and structured layouts</li>
                            <li>Provide contextual navigation through related links</li>
                            <li>Balance informational depth with scanability</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>Inner pages like – Learn about breast cancer, life after cancer, etc</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrap'>
                            <img className='full-width' src={require('../../../Assets/Images/information-pages-text-with-media.webp')} alt="" />
                        </div>
                    </section>
                    
                    <div className="do-donts">
                        <div className="titlebdr">GUIDELINES</div>
                        
                        <div className="titlebg">Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Structure content into digestible sections</li>
                                    <li>Keep related links contextually relevant</li>
                                    <li>Prioritise readability and spacing</li>
                                                                        <li>Use visual hierarchy consistently across sections</li>

                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Limit media layouts to a maximum of <b>two images side-by-side within a single row</b></li>
                                    <li>Maintain a consistent media row size of <b>1320 × 476 px </b>for aligned editorial layouts and visual rhythm</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="titlebg red">Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Don't overload pages with excessive media</li>
                                    <li>Don't use unrelated or decorative imagery</li>
                                    <li>Don't create long uninterrupted text blocks</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Don't overcrowd the related links panel</li>
                                    <li>Don't mix inconsistent content structures within the same page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                 
                </div>
            </div>
        </div>
    );
};

export default TextWithMediaPage;