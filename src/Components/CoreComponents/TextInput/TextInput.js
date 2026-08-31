import React from 'react';
import './TextInput.scss';

const TextInput = () => {
    return (
        <div className='TextInputContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>15.</span> Input Fields</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        A text input is a rectangular area in which the user enters or edits one line of text. A text field can contain plain or styled text.
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets '>
                            <li>                        When the expected user input is a single line of text, as opposed to a paragraph.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets '>
                                    <li>Login journey</li>
                                    <li>Forms (donation, registration, etc) </li>
                                </ul>
                                <ul className='bullets '>
                                    <li>Contact us journey (submit an enquiry, etc)</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>

                                    <p><strong>1. Input Field</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets ">
                                                1.1. Empty
                                                <li>         A. Label Typography Style - Desktop body default, #000000</li>
                                                <li>         B. Input Typography Style - Desktop body default, #8F8F8F </li>
                                                <li>         C. Container - 400px X 56px, fill- #ffffff, stroke- #8F8F8F, Corner radius 12px</li>
                                                <li>         D. Icon (optional) - 24px</li>
                                                <li>         E. Tooltip (optional) - 16px</li>

                                            </ul>
                                            <img  src={require('../../../Assets/Images/input-field-image-1.webp')} alt="" />
                                        </div>
                                        <div style={{ fontSize: '12px', textAlign: 'end', maxWidth: '300px' }}>
                                            <strong>                                                    Things to note for desktop:
                                            </strong>                                                    <br></br>
                                            <br></br>

                                            Standard input fields use a width of 400px and a  height of 56px to maintain consistency across forms.
                                            <br></br>
                                            <br></br>

                                            For inputs that require longer or more detailed  responses (such as complaints or enquiries), the  field can expand up to a maximum width
                                            of 860px to accommodate additional content.


                                            <br></br>
                                        </div>

                                    </div>

                                    <div className='pt-40'>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets ">
                                                   1.2. Focused
                                                    <li>A. Label Typography Style - Desktop body default, #000000</li>
                                                    <li>B. Input Typography Style - Desktop body default, #8F8F8F</li>
                                                    <li>C. Container - 400px X 56px, fill - #ffffff, stroke - #000000, Corner radius 12px</li>
                                                    <li>D. Icon (optional) - 24px</li>
                                                    <li>E. Tooltip (optional) - 16px</li>
                                                </ul>
                                                <img  src={require('../../../Assets/Images/input-field-image-2.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets ">
                                                    1.3. Filled
                                                    <li>A. Label Typography Style - Desktop body default, #000000</li>
                                                    <li>B. Input Typography Style - Desktop body default, #000000</li>
                                                    <li>C. Container - 400px X 56px, fill - #ffffff, stroke - #8F8F8F, Corner radius 12px</li>
                                                    <li>D. Icon (optional) - 24px</li>
                                                    <li>E. Tooltip (optional) - 16px</li>
                                                </ul>
                                                <img  src={require('../../../Assets/Images/input-field-image-3.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets ">
                                                    1.4. Disabled
                                                    <li>A. Label Typography Style - Desktop body default, #C7C7C7</li>
                                                    <li>B. Input Typography Style - Desktop body default, #C7C7C7</li>
                                                    <li>C. Container - 400px X 56px, fill - #ffffff, stroke - #C7C7C7, Corner radius 12px</li>
                                                    <li>D. Icon (optional) - 24px, #C7C7C7</li>
                                                    <li>E. Tooltip (optional) - 16px, #C7C7C7</li>
                                                </ul>
                                                <img  src={require('../../../Assets/Images/input-field-image-4.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm '>Mobile</p>

                                    <p><strong>1. Input Field</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets ">
                                                1.1. Empty
                                                <li>         A. Label Typography Style - Mobile body default, #000000</li>
                                                <li>         B. Input Typography Style - Mobile body default, #8F8F8F </li>
                                                <li>         C. Container - 320px X 44px, fill- #ffffff, stroke- #8F8F8F, Corner radius 12px</li>
                                                <li>         D. Icon (optional) - 24px</li>
                                                <li>         E. Tooltip (optional) - 16px</li>

                                            </ul>
                                            <img  src={require('../../../Assets/Images/input-field-image-1.webp')} alt="" />
                                        </div>


                                    </div>

                                    <div className='pt-40'>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets ">
                                                   1.2. Focused
                                                    <li>A. Label Typography Style - Mobile body default, #000000</li>
                                                    <li>B. Input Typography Style - Mobile body default, #8F8F8F</li>
                                                    <li>C. Container - 320px X 44px, fill - #ffffff, stroke - #000000, Corner radius 12px</li>
                                                    <li>D. Icon (optional) - 24px</li>
                                                    <li>E. Tooltip (optional) - 16px</li>
                                                </ul>
                                                <img  src={require('../../../Assets/Images/input-field-image-2.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets ">
                                                    1.3. Filled
                                                    <li>A. Label Typography Style - Mobile body default, #000000</li>
                                                    <li>B. Input Typography Style - Mobile body default, #000000</li>
                                                    <li>C. Container - 320px X 44px, fill - #ffffff, stroke - #8F8F8F, Corner radius 12px</li>
                                                    <li>D. Icon (optional) - 24px</li>
                                                    <li>E. Tooltip (optional) - 16px</li>
                                                </ul>
                                                <img  src={require('../../../Assets/Images/input-field-image-3.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-40'>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets ">
                                                    1.4. Disabled
                                                    <li>A. Label Typography Style - Mobile body default, #C7C7C7</li>
                                                    <li>B. Input Typography Style - Mobile body default, #C7C7C7</li>
                                                    <li>C. Container - 320px X 44px, fill - #ffffff, stroke - #C7C7C7, Corner radius 12px</li>
                                                    <li>D. Icon (optional) - 24px, #C7C7C7</li>
                                                    <li>E. Tooltip (optional) - 16px, #C7C7C7</li>
                                                </ul>
                                                <img  src={require('../../../Assets/Images/input-field-image-3-5.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr ">SPAING IN PIXELS</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>
                                    <br />
                                    <img className='mrgbtm full-width' src={require('../../../Assets/Images/input-field-image-5.webp')} alt="" />
                                </div>
                            </div>
                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title'>Desktop</p>
                                    <br />
                                    <img className='mrgbtm full-width' src={require('../../../Assets/Images/input-field-image-6.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        <p>                        <b>Labels:</b> Effective form labeling helps users understand what information to enter into a text input.</p>
                        <p>                        <b>Placeholder text:</b> Provides hints or examples of what to enter.  Use sentence-style capitalisation, and in most cases, write the text as a direct statement without punctuation. Placeholder text disappears after the user begins entering data into the input, and should not contain crucial information.</p>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use clear and descriptive labels above input fields</li>
                                    <li>Keep input fields consistent in size and alignment</li>
                                    <li>Use appropriate field types (text, number, email, etc.)</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Provide placeholder text only as a hint, not as a label</li>
                                    <li>Show validation and error messages clearly</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't rely on placeholder text as the only label</li>
                                    <li>Don't use inconsistent field sizes without reason</li>
                                    <li>Don't hide validation errors or show them too late</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Don't use vague labels like "Enter here"</li>
                                    <li>Don't overcrowd forms with too many fields at once</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TextInput;