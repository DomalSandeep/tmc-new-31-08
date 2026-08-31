import React from 'react';
import './GridOfCards.scss';

const GridOfCards = () => {
    return (
        <div className='GridOfCardsContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>5.</span> Grid of Cards</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Grid of Cards Page is designed to present browsable collections of related content in a structured and visually scannable format. It supports quick discovery, comparison, and exploration of multiple content items through consistent card layouts arranged in responsive grids.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Present repeatable content in structured visual grids</li>
                            <li>Improve content discovery and browsing</li>
                            <li>Support quick scanning and comparison between items</li>
                            <li>Organise large collections into manageable layouts</li>
                            <li>Surface visual and metadata-driven information efficiently</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>To show faculties, doctor profiles and other inner pages.</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrap mrgtp20'>
                            <img className='full-width' src={require('../../../Assets/Images/grid-of-card.webp')} alt="" />
                        </div>
                    </section>
                    
                    <div className="do-donts">
                        <div className="titlebdr">GUIDELINES</div>
                        
                        <div className="titlebg">Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Use consistent card structures across the grid</li>
                                    <li>Maintain uniform image ratios and spacing</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                                                        <li>Group related content logically</li>

                                    <li>Keep card content concise and easy to scan</li>
                                    <li>Ensure grids adapt cleanly across breakpoints</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="titlebg red">Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Don't mix multiple unrelated card styles in the same grid</li>
                                    <li>Don't overcrowd cards with excessive text</li>
                                    <li>Don't use inconsistent image sizes or crops</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Don't overload grids with too many actions per card</li>
                                    <li>Don't break alignment or spacing consistency across rows</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridOfCards;