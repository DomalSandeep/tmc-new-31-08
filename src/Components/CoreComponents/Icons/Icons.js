import React from 'react';
import './Icons.scss';

const Icons = () => {
    return (
        <div className='IconsContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>14.</span> Icons</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        Icons are the graphical representation of a functionality, concept, a specific entity, and the application itself.
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Icons are visual symbols used to represent ideas, objects, or actions. </li>
                            <li>They communicate messages at a glance, afford interactivity, and draw attention to important information.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className="bullets nospace">
                                    <li>Icons to graphically represent time, language, calendar etc.</li>
                                    <li>Social media icons in the footer.</li>
                                </ul>
                                <ul className="bullets nospace">
                                    <li>In navigation, buttons, and interactive elements for quick recognition</li>
                                    <li>To indicate actions, status, or categories</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm"> VARIANTS</div>

                        <div className='imageWrapBg2 padtp'>
                            <div className='pagecont'>
                                <p className='title'>
                                    Desktop and Mobile
                                </p>
                                <div className="boldtext">1.Outline Icon</div>
                                <ul className="bullets nospace">
                                    <li>Use outline icons as the default icon style across the interface to maintain visual consistency.</li>
                                    <li>Pair icons with text labels in most cases to ensure clarity and accessibility.</li>
                                    <li>Use them in navigation, buttons, cards, lists, and links to support quick recognition and scanning.</li>
                                </ul>
                                <img className="full-width" src={require('../../../Assets/Images/icons-image-2.webp')} alt="" />

                                <div className="boldtext pt-40">1. Social media icon set</div>
                                <ul className="bullets nospace">
                                    <li>This icon set is being used as links to social media pages on the footer.</li>
                                    <li>Icons do not have labels since people are familiar with their distinctive appearance. </li>
                                </ul>
                                <img src={require('../../../Assets/Images/icons-image-1.webp')} alt="" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm"> ICONS FOR CANCER TYPES</div>

                        <img src={require('../../../Assets/Images/icons-image-3.webp')} alt="" />
<div className="infoBox">
                                                    Link to the icon library -  <a href="https://www.flaticon.com/collections/NjcxMzg1ODg=" target="_blank" rel="noopener noreferrer">flaticon.com</a>
                           
                        </div>
                  
                        
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Keep icons simple and lightweight so they don't overpower the content.</li>
                                    <li>Maintain consistent stroke weight, size, and spacing across all instances.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Ensure icons are simple, clear, and recognisable.</li>

                                    <li>Use icons to support actions or categories, not as the primary source of information.</li>
                                    <li>When using icons next to text, ensure that they are middle aligned to it.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Using icons without clear meaning or context.</li>
                                    <li>Relying on icons alone to convey critical information.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Mixing different icon styles (e.g., filled vs outline inconsistently).</li>
                                    <li>Overusing icons where text alone is sufficient.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Icons;