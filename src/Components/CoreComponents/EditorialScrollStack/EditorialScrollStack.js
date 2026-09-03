import React from 'react';

const EditorialScrollStack = () => {
    return (
        <div className='EditorialScrollStackContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>10. </span>Editorial Scroll Stack</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Editorial Scroll Stack is a dynamic, vertically scrolling component designed to showcase a series of related content pieces in a visually engaging and immersive way. As users scroll through the stack, each card progressively scales and overlaps to create a layered storytelling experience that draws attention to the active content while maintaining context with the surrounding cards.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Used exclusively for homepage storytelling and high-visibility editorial sections.</li>
                            <li>Best suited for institutional impact stories, careers, clinical trials, research initiatives, campaigns, and featured articles.</li>
                            <li>Recommended for emotionally engaging or visually rich content experiences.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>Homepage</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div className='titlebdr mrgbtm'>SCROLL BEHAVIOUR & PROGRESSIVE SCALING</div>
                        <p>                        Cards progressively stack and scale during scroll, creating a layered storytelling experience that increases focus and visual emphasis on the active narrative while maintaining continuity between sections.</p>
                    </section>

                    <section>
                        <div className='titlebdr mrgbtm'>Content</div>
                        <p>Each card should contain a strong visual, concise headline, short supporting description, and a clear directional action. Content should remain focused, scannable, and emotionally engaging.</p>
                    </section>

                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <div className=''>
                                    <div>
                                        <p className='title'>
                                            Desktop
                                        </p>
                                        <div className='container-900'>
                                            <div className="horizBullets2">
                                                <ul className="bullets ">
                                                    <li>A. Image</li>
                                                    <li>B. Content container- 704px by 244px</li>
                                                </ul>
                                                <ul className="bullets ">
                                                    <li>C. Title typography style - Desktop heading 3, #ffffff</li>
                                                    <li>D. Body copy typography style  - Desktop body default, #ffffff</li>
                                                    <li>E. Text link with icon - #ffffff</li>
                                                </ul>

                                            </div>
                                            <img className='mrgbtm full-width' src={require('../../../Assets/Images/editorial-scroll-stack-image-1.webp')} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='pagecont pt-40 '  >
                                <div>
                                    <p className='title mrgbtm'>
                                        Mobile
                                    </p>
                                    <div >
                                        <strong>Vertical media card – overlay </strong>
                                        <br></br>
                                        <br></br>
                                        <p style={{fontSize:'14px'}}>On mobile, the Editorial Scroll Stack transforms into a swipeable card carousel with vertically stacked content blocks to improve readability, touch interaction, and content focus on smaller screens. Refer to the Cards section in the design system for detailed anatomy and spacing guidelines.</p>
                                        <br></br>
                                        <img  src={require('../../../Assets/Images/editorial-scroll-stack-image-2.webp')} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        
                        <div className='imageWrapBg2  '>
                            <p className='title mrgbtm'>
                                        Mobile
                                    </p>
                            <img className='mrgbtm full-width' src={require('../../../Assets/Images/editorial-scroll-stack-image-3.webp')} alt="" />
                        
                        <div className='pagecont pt-40 '  >
                                <div>
                                    <p className='title mrgbtm'>
                                        Mobile
                                    </p>
                                    <div >
                                        <strong>Vertical media card – overlay </strong>
                                        <br></br>
                                        <br></br>
                                        <p style={{fontSize:'14px'}}>On mobile, the Editorial Scroll Stack transforms into a swipeable card carousel with vertically stacked content blocks to improve readability, touch interaction, and content focus on smaller screens. Refer to the Cards section in the design system for detailed anatomy and spacing guidelines.</p>
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
                                    <li>Use high-quality, emotionally engaging imagery.</li>
                                    <li>Keep headlines concise and impactful.</li>
                                    <li>Maintain consistent card proportions and spacing.</li>
                                    <li>Use the pattern sparingly for high-priority storytelling content.</li>
                                    <li>Ensure text overlays maintain sufficient contrast and readability.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>

                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't overcrowd cards with excessive text or multiple actions.</li>
                                    <li>Don't use more than one Editorial Scroll Stack per page.</li>
                                    <li>Don't mix inconsistent image treatments or card sizes within the same stack.</li>

                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default EditorialScrollStack;