import React from 'react';
import './Navigation.scss';

const Navigation = () => {
    return (
        <div className='NavigationContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>5.</span> Navigation</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <div className='padtp2'>
                        <p>Navigation menus are lists of content categories or features, which are typically presented as a set of links or icons grouped together with clear visual styling distinct from the rest of the website or page design. These mainly consist of navigation bars and hamburger menus typically but often not limited to them.</p>
                    </div>

                    <div className='py-40'>
                        <div className="titlebdr mrgbtm">GOAL</div>
                        <p>The primary goal of navigation is to help visitors find information through functionality and encourage them to take desirable actions.</p>
                        <p><strong>Self-evident</strong></p>
                        <p>When working on navigation, remember that no matter which page the visitor comes from, they must be able to find what they need on that page and other pages of the website. Good navigation should feel like an invisible hand that helps users find their way around a website.</p>
                    </div>

                    <div>
                        <div className="titlebdr mrgbtm">HIERARCHICAL MODEL</div>
                        <div className="twocolumntext mrgtp">
                            <div>
                                <p>A hierarchical model shows the information hierarchy from the main elements to their sub-categories. It is the default model for large websites. In this co-existing hierarchies model, child pages are accessible from multiple parent pages/higher-level pages.</p>
                            </div>
                            <div>
                                <img className='full-width' src={require('../../../Assets/Images/navigation-image-1.webp')} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='titlebdr'>GUIDELINES</div>
                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use clear, descriptive labels</li>
                                    <li>Group related items logically</li>
                                    <li>Prioritise key actions (e.g., Book Appointment)</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Keep navigation consistent across pages</li>
                                    <li>Support with breadcrumbs for orientation</li>
                                </ul>
                            </div>
                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't use vague labels</li>
                                    <li>Don't overload menus with too many links</li>
                                    <li>Don't hide important actions</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Don't create unnecessary layers or steps</li>
                                    <li>Don't break consistency in behaviour or structure</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;