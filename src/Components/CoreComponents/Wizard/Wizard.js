import React from 'react';

const Wizard = () => {
    return (
        <div className='WizardContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>28.</span>  Wizard</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section >
                        <p>Wizard is a step-based component that breaks down a long process into smaller, more manageable steps. It guides users through a sequence of tasks or information, providing a clear path to completion while reducing cognitive load and improving user experience.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        Use wizard when users want to accomplish a goal that has many steps or users must complete steps in a specific sequence.                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>In forms with numerous steps</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div className='container-900'>
                                    <p className='title'>Desktop</p>

                                <div className="horizBullets2 ">
                                    <ul className="bullets">
                                        <p>                                        <b>1. Wizard</b></p>
                                        1.1. Current focused state
                                        <li>A. Text Label - Desktop CTA Text, #193E90</li>
                                        <li>B. Container - #193E90, 50px</li>
                                        <li>C. Number label - Desktop heading 4, #ffffff</li>
                                        <li>D. Grey divider</li>
                                    </ul>
                                </div>
                                <br />
                                <img className='full-width' src={require('../../../Assets/Images/wizard-image-1.webp')} alt="" />
                                <br></br>
                                <div className="horizBullets2 ">
                                    <ul className="bullets">
                                        1.2. Unactive state
                                        <li>A. Text Label - Desktop CTA Text, #000000</li>
                                        <li>B. Container - #8F8F8F, 50px</li>
                                        <li>C. Number label - Desktop heading 4, #ffffff</li>
                                    </ul>
                                </div>
                                <br />
                                <img className='full-width' src={require('../../../Assets/Images/wizard-image-2.webp')} alt="" />

                                <br></br>
                                <div className="horizBullets2 ">
                                    <ul className="bullets">
                                        1.3. Focused - done
                                        <li>A. Text Label - Desktop CTA Text, #000000</li>
                                        <li>B. Container - #8F8F8F, 50px</li>
                                        <li>C. Number label - Desktop heading 4, #ffffff</li>
                                        <li>D. Divider - 3px, #193E90</li>
                                    </ul>
                                </div>
                                <br />
                                <img className='full-width' src={require('../../../Assets/Images/wizard-image-3.webp')} alt="" />

                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <p className='title'>Mobile</p>


                                <div className="horizBullets2 ">
                                    <ul className="bullets">
                                        <p><b>1.Wizard</b></p>
                                        1.1. Current focused state
                                        <li>A. Text Label - Mobile CTA Text, #193E90</li>
                                        <li>B. Container - #193E90, 44px</li>
                                        <li>C. Number label - Mobile heading 3, #ffffff</li>
                                        <li>D. Grey divider</li>
                                    </ul>
                                </div>
                                <br />
                                <img src={require('../../../Assets/Images/wizard-image-4.webp')} alt="" />
                                <br></br>
                                <div className="horizBullets2 ">
                                    <ul className="bullets">
                                        1.2. Unactive state
                                        <li>A. Text Label - Mobile CTA Text, #000000</li>
                                        <li>B. Container - #8F8F8F, 44px</li>
                                        <li>C. Number label - Mobile heading 3, #ffffff</li>
                                    </ul>
                                </div>
                                <br />
                                <img src={require('../../../Assets/Images/wizard-image-5.webp')} alt="" />

                                <br></br>
                                <div className="horizBullets2 ">
                                    <ul className="bullets">
                                        1.3. Focused - done
                                        <li>A. Text Label - Mobile CTA Text, #000000</li>
                                        <li>B. Container - #8F8F8F, 44px</li>
                                        <li>C. Number label - Mobile heading 3, #ffffff</li>
                                        <li>D. Divider - 1.5px, #193E90</li>
                                    </ul>
                                </div>
                                <br />
                                <img src={require('../../../Assets/Images/wizard-image-6.webp')} alt="" />

                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <p className='title'>Desktop</p>
                                <img className='full-width' src={require('../../../Assets/Images/wizard-image-7.webp')} alt="" />

                            </div>

                            <div className='pagecont pt-40'>
                                <p className='title'>Mobile</p>
                                <img className='full-width' src={require('../../../Assets/Images/wizard-image-8.webp')} alt="" />



                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div style={{ flex: '1' }}>
                                <ul className='bullets'>
                                    <li>Use wizard only when a long form can be divided into 2 or more steps.</li>
                                    <li>Indicate clearly where the user is in the process.</li>
                                    <li>Steps should be in logical order.</li>

                                </ul>
                            </div>

                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext"  >
                            <div>
                                <ul className='bullets'>
                                    <li>Don't put more than 5 steps.</li>
                                    <li>Don't ask unnecessary questions.</li>
                                    <li>Don't make each step too long.</li>

                                </ul>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Wizard;