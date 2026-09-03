import React from 'react';
import './RadioButtons.scss';

const RadioButtons = () => {
    return (
        <div className='RadioButtonsContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>23.</span> Radio Buttons</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section >
                        <p>                        Radio buttons are used for mutually exclusive choices, not for multiple choices. Only one radio button can be selected at a time. When a user chooses a new item, the previous choice is automatically deselected.
                        </p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets'>
                            <li>In UX design, radio buttons are used when users need to select one option from a limited set. They make choices clear and prevent multiple selections, ensuring accurate input.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets '>
                                    <li>Can be used in forms on a table & within form fields.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>

                                    <p ><strong>  1. Inline Radio Buttons</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <div className="indent-item">
                                                <ul className="bullets">
                                                    <li>Radio button - 24px, #0065B2 </li>
                                                    <li>Radio button label - Desktop CTA Text, #000000</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/radio-buttons-image-1.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <p className='pt-40'><strong>2. Table Radio Buttons</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <div className="indent-item">
                                                <ul className="bullets">
                                                    <li>Radio button - 24px, #0065B2</li>
                                                    <li>Table</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/radio-buttons-image-2.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>

                                    <p ><strong>    1. Stacked radio button</strong></p>
                                    <ul>
                                        <li className="indent-item">                                    On mobile, inline radio buttons stack vertically to improve readability  and make  <br></br>selection easier on smaller screens.</li>
                                        <br></br>
                                    </ul>
                                    <div className="horizBullets2">
                                        <div>
                                            <div className="indent-item">
                                                <ul className="bullets">
                                                    <li>Radio button- 24px, #0065B2</li>
                                                    <li>Radio button label - Nav bar CTA, #000000</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/radio-buttons-image-3.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <p className='pt-40'><strong>2. Table Radio Buttons</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <div className="indent-item">
                                                <ul className="bullets">
                                                    <li>Radio button - 24px, #0065B2</li>
                                                    <li>Table</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/radio-buttons-image-4.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">SPACING IN PIXELS</div>
                        <img className='full-width' src={require('../../../Assets/Images/radio-buttons-image-5.webp')} alt="" />
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">BEHAVIOUR</div>
                        <img className='full-width' src={require('../../../Assets/Images/radio-buttons-image-6.webp')} alt="" />
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        Labels appear to the right of radio button inputs and always use clear and concise labels for radio buttons.
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>
                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use radio buttons to present options to the user and not to initiate an action.</li>
                                    <li>Consider a checkbox when the user needs to choose between two states. The on and off states of a checkbox are generally clear to most users and a checkbox requires less space than a set of radio buttons.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Users can trigger an item by clicking the radio button input directly or by clicking the radio button label. Having both regions interactive creates a more accessible click target.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use radio buttons when multiple items can be selected.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use radio buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RadioButtons;