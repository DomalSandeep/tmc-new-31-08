import React from 'react';
import './ToneOfVoice.scss';

const ToneOfVoice = () => {
    return (
        <div className='ToneOfVoiceContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>3.</span> Tone of Voice</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>Our tone of voice reflects who we are—trusted, compassionate, and clear. We communicate in a way that is easy to understand, respectful, and supportive for all users.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">WITH EVERY SINGLE WORD WE USE, WE AIM TO:</div>
                        <div className='twocolumntext'>
                            <div>
                                <ul className='bullets'>
                                    <li><b>Be clear.</b><br />Use simple, easy-to-understand language so patients and caregivers can follow instructions without confusion.</li>
                                    <br></br>
                                    <li><b>Be empathetic.</b><br />Recognize that users may be anxious or overwhelmed. Communicate in a calm, respectful, and reassuring manner.</li>
                                    <br></br>
                                    <li><b>Be trustworthy.</b><br />Provide accurate, reliable information with confidence, without exaggeration or unnecessary complexity.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li><b>Be helpful.</b><br />Focus on what the user needs to do next. Guide them clearly through processes and decisions.</li>
                                    <br></br>
                                    <li><b>Be respectful.</b><br />Use inclusive and considerate language for people from all backgrounds.</li>
                                    <br></br>
                                    <li><b>Be professional.</b><br />Maintain a tone that reflects credibility, care, and responsibility.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">TO ACHIEVE THIS, OUR CONTENT MUST BE:</div>
                        <div className='twocolumntext'>
                            <div>
                                <ul className='bullets'>
                                    <li><b>Clear</b><br />Avoid medical jargon where possible. Use simple words and short sentences.</li>
                                    <br></br>
                                    <li><b>Concise</b><br />Keep content brief and to the point without losing meaning.</li>
                                    <br></br>
                                    <li><b>Reassuring</b><br />Use calm and supportive language, especially in sensitive situations.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li><b>Actionable</b><br />Help users understand what to do next with clear instructions.</li>
                                    <br></br>
                                    <li><b>Appropriate</b><br />Adapt tone based on context—informational, instructional, or sensitive.</li>
                                    <br></br>
                                    <li><b>Consistent</b><br />Maintain the same tone and terminology across all pages.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className='titlebdr'>GUIDELINES</div>
                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use simple, everyday language</li>
                                    <li>Be calm and reassuring</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Be respectful and inclusive</li>
                                    <li>Give clear instructions</li>
                                </ul>
                            </div>
                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't use complex medical jargon without explanation</li>
                                    <li>Don't sound overly technical or robotic</li>
                                    <li>Don't use overly promotional or exaggerated language</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Don't overwhelm users with too much information at once</li>
                                    <li>Don't sound abrupt or insensitive</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ToneOfVoice;