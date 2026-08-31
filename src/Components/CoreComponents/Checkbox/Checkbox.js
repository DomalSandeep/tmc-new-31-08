import React from 'react';
import './Checkbox.scss';

const Checkbox = () => {
    return (
        <div className='CheckboxContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>8.</span> Checkbox</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>                        Checkboxes are used for multiple choices, not for mutually exclusive choices. Each checkbox works independently from other checkboxes in the list, therefore checking an additional box does not affect any other selections.</p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>When there are multiple items to select in a list. Users can select zero, one, or any number of items.</li>
                            
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>Can be used in forms on a table.</li>
                                <li>Terms and Conditions: Turning the checkbox input on or off can indicate whether you agree to the terms.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
    <div className="titlebdr">ANATOMY</div>
    <div className='imageWrapBg2'>
        <div className='pagecont dashed-border'>
            <div>
                <p className='title'>Desktop</p>

                <div>
                    <p><strong>1. Inline Radio Buttons</strong></p>
                    <div className="horizBullets2">
                        <div>
                            <ul className="bullets nospace">
                                <li>A. Radio button - 24px, #0065B2</li>
                                <li>B. Radio button label - Desktop CTA Text, #000000</li>
                            </ul>
                            <img src={require('../../../Assets/Images/checkbox-image-1.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="pt-40">
                    <p><strong>2. Table Radio Buttons</strong></p>
                    <div className="horizBullets2">
                        <div className='container-800'>
                            <ul className="bullets nospace">
                                <li>A. Radio button - 24px, #0065B2</li>
                                <li>B. Table</li>
                            </ul>
                            <img className='full-width' src={require('../../../Assets/Images/checkbox-image-2.webp')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='pagecont pt-40'>
            <div>
                <p className='title mrgbtm'>Mobile</p>

                <div>
                    <p><strong>1. Stacked radio button</strong></p>
                    <div className="horizBullets2">
                        <div>
                            <ul className="bullets nospace">
                                <li>A. Radio button - 20px, stroke #0065B2</li>
                                <li>B. Radio button label - Body default, #000000</li>
                            </ul>
                            <img src={require('../../../Assets/Images/checkbox-image-3.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="pt-40">
                    <p><strong>2. Table Radio Buttons</strong></p>
                    <div className="horizBullets2">
                        <div>
                            <ul className="bullets nospace">
                                <li>A. Radio button - 20px, stroke #0065B2</li>
                                <li>B. Table</li>
                            </ul>
                            <img src={require('../../../Assets/Images/checkbox-image-4.webp')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

                    <section>
                        <div className="titlebdr mrgbtm">SPACING in pixels</div>
                        <img className='full-width' src={require('../../../Assets/Images/checkbox-image-5.webp')} alt="" />

                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">BEHAVIOUR</div>
                        <img className='full-width' src={require('../../../Assets/Images/checkbox-image-6.webp')} alt="" />
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        Use clear, descriptive labels that indicate the option being selected, typically phrased as a statement rather than an action.

                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>
                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Consider a checkbox when the user needs to choose between two states. The on and off states of a checkbox are generally clear to most users and a checkbox requires less space than a set of radio buttons.</li>
                                    <li>Checkboxes and related controls should be disabled if they’re not applicable in the current state.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Users can trigger an item by clicking the checkbox input directly or by clicking the checkbox label. Having both regions interactive creates a more accessible click target.</li>
                                    <li>Use checkboxes when they represent one input in a larger flow which usually requires a final confirmation step.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use checkboxes for mutually exclusive choices</li>
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

export default Checkbox;