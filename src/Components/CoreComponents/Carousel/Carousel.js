import React from 'react';
import './Carousel.scss';

const Carousel = () => {
    return (
        <div className='CarouselContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>5.</span> Carousel</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        Carousels allow multiple pieces of content to occupy a single, coveted space.
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets '>
                            <li>When you have a large set of items to show, but want to let the user concentrate his or her attention only on a select few items at a time</li>
                            <li>When you want to tease the user by letting him or her know that there are more items available than what is currently shown.</li>
                            <li>When you do not have enough space to show all items at once.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets '>
                                    <li>On desktop- Resources & conference section on home page </li>
                                    <li>On mobile- Suggestion pills, bento grid, homepage cards etc</li>
                                </ul>

                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">RESPONSIVE BEHAVIOUR</div>
                        <p>On mobile, components with multiple horizontally arranged items may convert into swipe able carousels when the content exceeds the available screen width. This behaviour is commonly applied to - Cards with media on homepage, Pills and filter groups, Suggestion <br></br> prompts, Featured content sections, Bento grid
                        <br></br>
The carousel layout helps maintain usability, readability, and touch accessibility on smaller screens.</p>

                    </section>

                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <div className='container-800'>
                                    <div>
                                        <p className='title'>
                                            Desktop
                                        </p>
                                        <div className="horizBullets2">
                                            <ul className="bullets ">
                                                <li>A. Card - Desktop vertical overlay card </li>
                                                <li>B. Carousel indicator</li>
                                                <li>C. Card cut off - at 1920px</li>
                                            </ul>
                                        </div>
                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/carousel-image-1.webp')} alt="" />

                                    </div>

                                </div>
                            </div>
                            <div className='pagecont pt-40 container-800'  >
                                <div>
                                    <p className='title mrgbtm'>
                                        Mobile
                                    </p>
                                    <div className="horizBullets2">
                                        <ul className="bullets ">
                                            <li>A. Card - Desktop vertical overlay card </li>
                                            <li>B. Carousel indicator</li>
                                            <li>C. Card cut off - at 360px</li>

                                        </ul>

                                    </div>
                                    <img className='mrgbtm ' src={require('../../../Assets/Images/carousel-image-2.webp')} alt="" />

                                </div>

                            </div>

                        </div>

                    </section>


                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <div className='container-800'>
                                    <div>
                                        <p className='title'>
                                            Desktop
                                        </p>

                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/carousel-image-3.webp')} alt="" />

                                    </div>

                                </div>
                            </div>
                            <div className='pagecont pt-40 container-800'  >
                                <div>
                                    <p className='title mrgbtm'>
                                        Mobile
                                    </p>

                                    <img className='mrgbtm full-width' src={require('../../../Assets/Images/carousel-image-4.webp')} alt="" />

                                </div>

                            </div>

                        </div>

                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                       <p> Content inside Information Panels should be concise, informative, and directly relevant to the user’s current task. Avoid long paragraphs where bullet points or grouped information can improve readability.<br></br>
                        Use clear headings that immediately communicate the purpose of the information.</p>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>
                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use carousels when horizontal scrolling improves content accessibility on smaller screens </li>
                                    <li>Maintain clear active/inactive states and spacing between items</li>
                                    <li> Ensure carousel items remain partially visible where possible to indicate additional content</li>
                                </ul>
                            </div>

                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use carousels for critical sequential information </li>
                                    <li>Avoid excessively long carousel groups </li>
                                    <li> Do not hide important actions or information outside the visible viewport without indication</li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Carousel;