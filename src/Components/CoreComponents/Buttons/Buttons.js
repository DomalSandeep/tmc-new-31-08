import React from 'react';
import './Buttons.scss';

const Buttons = () => {
    return (
        <div className='ButtonsContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>3.</span> Button</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <div className="">
                        <section className='padtp2'>
                            <p>Buttons are clickable elements that are used to trigger actions. Button labels express what action will occur when the user interacts with it.</p>
                        </section>

                        <section>
                            <div className="titlebdr mrgbtm">USAGE</div>
                            <ul className='bullets nospace'>
                                <li>To initiate an action.</li>
                                <li>To communicate calls to action to the user and allow users to interact with pages in a variety of ways.</li>
                            </ul>
                            <div className="infoBox">
                                <div className="boldtxt">Some instances of usage</div>
                                <div className="horizBullets">
                                    <ul className='bullets nospace'>
                                        <li>Login</li>
                                        <li>View specific content</li>
                                        <li>Register</li>
                                    </ul>
                                    <ul className='bullets nospace'>
                                        <li>Downloads</li>
                                        <li>Forms</li>
                                        <li>Cards</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section>
                        <div className="titlebdr mrgbtm">VARIANTS</div>

                        <div className='imageWrapBg twocols '>
                            <div className='pagecont'>
                                <p className='title '>Desktop</p>
                                <img className='full-width' src={require('../../../Assets/Images/button-image-1.webp')} alt="" />

                            </div>

                            <div className='pagecont'>
                                <p className='title'>Mobile</p>
                                <img className='full-width' src={require('../../../Assets/Images/button-image-2.webp')} alt="" />

                            </div>
                        </div>

                        <div className="variants-two-columns pt-28">
                            <div className="desktop-col">
                                <p className="title">Desktop</p>
                                <ol className="orderList">
                                    <li><b>Primary Button</b>
                                        <br />
                                        Used for the main action across pages, including forms and hero sections.
                                    </li>
                                    <li className="pt-28"><b>Hero Secondary Button</b>
                                        <br />
                                        Used only within hero sections as a supporting action alongside the primary CTA.
                                    </li>
                                    <li className="pt-28"><b>Secondary Button</b>
                                        <br />
                                        Used within forms for secondary or less prominent actions.
                                    </li>
                                    <li className="pt-28"><b>Primary Button – Small</b>
                                        <br />
                                        Used for primary actions in compact spaces like cards, navigation bar and banners.
                                    </li>
                                    <li className="pt-28"><b>Secondary Button – Small</b>
                                        <br />
                                        Used for secondary actions in cards, banners, and other space-constrained areas.
                                    </li>
                                    <li className="pt-28"><b>Icon Button</b>
                                        <br />
                                        Used for compact, frequently used actions where space is limited and the icon clearly communicates the action.
                                    </li>
                                </ol>
                            </div>

                            <div className="mobile-col">
                                <p className="title">Mobile</p>
                                <ol className="orderList">
                                    <li><b>Primary Button</b>
                                        <br />
                                        Used for the main action across pages, including forms, hero sections, cards and banners.
                                    </li>
                                    <li className="pt-28"><b>Hero Secondary Button</b>
                                        <br />
                                        Used only within hero sections as a supporting action alongside the primary CTA.
                                    </li>
                                    <li className="pt-28"><b>Secondary Button</b>
                                        <br />
                                        Used for secondary actions in cards, banners, forms or less prominent actions.
                                    </li>
                                    <li className="pt-28"><b>Primary Nav Button</b>
                                        <br />
                                        Used only in the navigation bar to highlight a key action for quick access on mobile.
                                    </li>
                                    <li className="pt-28"><b>Icon Button</b>
                                        <br />
                                        Used for compact, frequently used actions where space is limited and the icon clearly communicates the action.
                                    </li>
                                    <li className="pt-28"><b>Mobile sticky CTA (Forms)</b>
                                        <br />
                                        Used for all forms on mobile.
                                    </li>
                                </ol>
                            </div>
                        </div>

                    </section>

                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>

                                    <p><strong>1. Primary Button</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets nospace">
                                                <p>1.1. Primary Button - Default</p>
                                                <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                <li>B. Container - #0065B2, Corner Radius 40px</li>
                                            </ul>
                                            <img className='mrgbtm' src={require('../../../Assets/Images/button-image-3.webp')} alt="" />
                                        </div>
                                        <div>
                                            <ul className="bullets nospace">
                                                <p>1.2. Primary Button - Disabled</p>
                                                <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                <li>B. Container - #C7C7C7, Corner Radius 40px</li>
                                            </ul>
                                            <img className='mrgbtm' src={require('../../../Assets/Images/button-image-4.webp')} alt="" />
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <p><strong>2. Hero Secondary Button</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p>2.1. Secondary Button - Default</p>
                                                    <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                    <li>B. Container - fill - #FFFFFF 40%, stroke - F6F6F6 100%</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-5.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p>2.2. Secondary Button with Icon</p>
                                                    <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                    <li>B. Container - fill - #FFFFFF 40%, stroke - F6F6F6 100%, Corner Radius 40px</li>
                                                    <li>C. Icon - 16px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-6.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <p><strong>3. Secondary Button</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p>3.1. Secondary Button - Default</p>
                                                    <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                    <li>B. Container - Stroke 2px, #0065B2, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-7.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p>3.2. Secondary Button - Disabled</p>
                                                    <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                    <li>B. Container - Stroke 2px, #C7C7C7, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-8.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <p><strong>4. Primary Button Small</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p>4.1. Primary Button Small - Default</p>
                                                    <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                    <li>B. Container - #0065B2, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-9.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p>4.2. Primary Button Small - Disabled</p>
                                                    <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                    <li>B. Container - #C7C7C7, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-10.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 5. Secondary Button Small */}
                                    <div className='pt-40'>
                                        <p><strong>5. Secondary Button Small</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p>5.1. Secondary Button Small - Default</p>
                                                    <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                    <li>B. Container - Stroke 2px, #0065B2, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-11.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p>5.2. Secondary Button Small - Disabled</p>
                                                    <li>A. Button Label Typography Style - Desktop CTA Text</li>
                                                    <li>B. Container - Stroke 2px, #C7C7C7, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-12.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 6. Icon Buttons */}
                                    <div className='pt-40'>
                                        <p><strong>6. Icon Buttons</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <li>A. Icon - 20px</li>
                                                    <li>B. Container - 56px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-13.webp')} alt="" />
                                            </div>
                                            <div >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>

                                    <p><strong>1. Primary Button</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets nospace">
                                                <p><strong>1.1. Primary Button - Default</strong></p>
                                                <li>A. Button Label Typography Style - Mobile Common CTA text</li>
                                                <li>B. Container - #0065B2, Corner Radius 40px</li>
                                            </ul>
                                            <img className='mrgbtm' src={require('../../../Assets/Images/button-image-3.webp')} alt="" />
                                        </div>
                                        <div>
                                            <ul className="bullets nospace">
                                                <p><strong>1.2. Primary Button - Disabled</strong></p>
                                                <li>A. Button Label Typography Style - Mobile Common CTA text</li>
                                                <li>B. Container - #C7C7C7, Corner Radius 40px</li>
                                            </ul>
                                            <img className='mrgbtm' src={require('../../../Assets/Images/button-image-4.webp')} alt="" />
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <p><strong>2. Secondary Hero Button</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p><strong>2.1. Secondary Button - Default</strong></p>
                                                    <li>A. Button Label Typography Style - Mobile Common CTA text</li>
                                                    <li>B. Container - fill - #FFFFFF 40%, stroke - F6F6F6 100%, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-5.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p><strong>2.2. Secondary Button with Icon</strong></p>
                                                    <li>A. Button Label Typography Style - Mobile Common CTA text</li>
                                                    <li>B. Container - fill - #FFFFFF 40%, stroke - F6F6F6 100%, Corner Radius 40px</li>
                                                    <li>C. Icon - 16px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-6.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <p><strong>3. Secondary Button</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p><strong>3.1. Secondary Button - Default</strong></p>
                                                    <li>A. Button Label Typography Style - Mobile Common CTA text</li>
                                                    <li>B. Container - Stroke 2px, #0065B2, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-16.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets nospace">
                                                    <p><strong>3.2. Secondary Button - Disabled</strong></p>
                                                    <li>A. Button Label Typography Style - Mobile Common CTA text</li>
                                                    <li>B. Container - Stroke 2px, #C7C7C7, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-17.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <p><strong>4. Primary Nav Button</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <li>A. Button Label Typography Style - Mobile Common CTA text</li>
                                                    <li>B. Container - #0065B2, Corner Radius 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-15.webp')} alt="" />
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <p><strong>5. Icon Buttons</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <li>A. Icon - 16px</li>
                                                    <li>B. Container - 40px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-13.webp')} alt="" />
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <p><strong>6. Mobile sticky CTA (Forms)</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets nospace">
                                                    <li>A. Mobile secondary button</li>
                                                    <li>B. Mobile primary button</li>
                                                    <li>C. Container - 360px by 88px</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/button-image-14.webp')} alt="" />
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>



                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>

                                    <div className="horizBullets2">
                                        <div className='container-800'>
                                            <img className='mrgbtm full-width ' src={require('../../../Assets/Images/button-image-18.webp')} alt="" />
                                        </div>
                                        <div style={{flex:'none'}}>
                                            <p className='button-spacing-label' >Things to note:
                                                <br />
                                                (excluding icon button)
                                                <br />
                                                Min width- 160px
                                                <br />
                                                Max width - 337px</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='pagecont pt-40 '>
                                <div>
                                    <p className='title' >Mobile</p>

                                    <div className="horizBullets2">
                                        <div className='container-800'>

                                            <img className='mrgbtm full-width' src={require('../../../Assets/Images/button-image-19.webp')} alt="" />
                                        </div>
                                        <div style={{flex:'none'}}>
                                            <p className='button-spacing-label'  >Things to note:
                                                <br />
                                                (excluding icon button)
                                                <br />
                                                Min width- 60px
                                                <br />
                                                Max width - 320px</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>

                    </section>

                    <div className="">
                        <section>
                            <div className="titlebdr mrgbtm">CONTENT</div>

                            <div>
                                <b>Text Labels</b>
                                <p>A button's label is the most important element, as it clearly communicates the action that will occur when the user interacts with it. Labels should be simple, direct, and easy to understand. <br></br> Button labels should use clear action-oriented language that helps users know exactly what to expect.</p>

                            </div>
                            <div className='pt-24'>
                                <p class="title mrg-0">Guidelines</p>
                                <p>
                                    <ul className='bullets'>
                                        <li>Use verb-led labels that indicate the action (e.g., "Register Now", "View Details", "Proceed", "Submit").</li>
                                        <li>Keep labels short and concise, especially in compact spaces.</li>
                                        <li>Use familiar and predictable terms for common actions (e.g., "Submit", "Cancel", "Proceed").</li>
                                        <li>Be specific where needed (e.g., "View Details" instead of just "View" when clarity is required).</li>
                                        <li>Maintain consistency in wording across the interface.</li>
                                    </ul>
                                </p>
                            </div>

                            <div className='pt-24'>
                                <p class="title mrg-0">Best Practice</p>
                                <p> Use [verb] + [context] where helpful, but keep it flexible based on space and clarity.</p>
                            </div>
                        </section>

                        <section>
                            <div className='titlebdr'>GUIDELINES</div>

                            <div className='titlebg'>Do's</div>
                            <div className="twocolumntext">
                                <div>
                                    <ul className='bullets'>
                                        <li>Maintain the minimum width and height.</li>
                                        <li>Always centre align the content to the container.</li>
                                        <li>On mobile all the form CTA's must be sticky.</li>

                                    </ul>
                                </div>

                            </div>

                            <div className='titlebg red'>Don'ts</div>
                            <div className="twocolumntext">
                                <div>
                                    <ul className='bullets'>
                                        <li>Do not use only a noun as a button label.</li>
                                        <li>Do not make buttons in a group different width.</li>
                                    </ul>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buttons;