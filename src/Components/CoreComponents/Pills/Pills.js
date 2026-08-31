import React from 'react';
import './Pills.scss';

const Pills = () => {
    return (
        <div className='PillsContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>19.</span> Pills</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>Pills are compact, rounded elements used to represent selections, suggestions, or contextual information. They help users quickly scan, filter, or interact with grouped options.
                        <br></br>
                        <br></br>
                        Pills define the visual style, while their behaviour can vary based on context (e.g., selection, suggestion, or dropdown trigger).</p>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className="bullets nospace">
                            <li>Allow users to filter or switch between categories</li>
                            <li>Provide quick selectable options (e.g., search suggestions)</li>
                            <li>Display status or contextual information on cards</li>
                            <li>Trigger dropdown for additional options when needed</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>FAQ category filters (e.g., Patients, Doctors)</li>
                                    <li>Search suggestions or quick queries</li>
                                    <li>Quick actions panel</li>
                                </ul>
                                <ul className='bullets nospace'>
                                    <li>Informational tags on cards (e.g., "Eligible for IT Exemption")</li>
                                    <li>Expandable filters with multiple sub-options</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrapBg'>
                            <div className='pagecont'>
                                <p className='title'>Desktop</p>
                                <div className="centerImg">
                                    <div>
                                        <p><strong>1. Selection Pills</strong></p>
                                        <img className='full-width' src={require('../../../Assets/Images/pills-image-1.webp')} alt="" />
                                    </div>
                                    <div className="pt-28">
                                        <p><strong>2. Suggestion Pills</strong></p>
                                        <img className='full-width' src={require('../../../Assets/Images/pills-image-2.webp')} alt="" />
                                    </div>
                                    <div className="pt-28">
                                        <p><strong>3. Info Pills</strong></p>
                                        <img src={require('../../../Assets/Images/pills-image-3.webp')} alt="" />
                                    </div>
                                    <div className="pt-28">
                                        <p><strong>4. Expandable Filter Pills</strong></p>
                                        <img src={require('../../../Assets/Images/pills-image-4.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='pagecont'>
                                <p className='title'>Mobile</p>
                                <div>
                                    <p><strong>1. Selection Pills</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/pills-image-5.webp')} alt="" />
                                </div>
                                <div className="pt-28">
                                    <p><strong>2. Suggestion Pills</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/pills-image-6.webp')} alt="" />
                                </div>
                                <div className="pt-28">
                                    <p><strong>3. Info Pills</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/pills-image-3.webp')} alt="" />
                                </div>
                                <div className="pt-28">
                                    <p><strong>4. Expandable Filter Pills</strong></p>
                                    <img style={{ width: '40px' }} src={require('../../../Assets/Images/pills-image-8.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <p className="title pt-40">Desktop &amp; Mobile</p>
                        <div className="horizBullets">
                            <ul >
                                <li style={{ listStyle: 'none' }}><b>1. Selection Pills</b><br />Used as tabs or filters where one or more options can be selected.</li>
                                <br />
                                <li style={{ listStyle: 'none' }}><b>2. Suggestion Pills</b><br />Used to display quick, tappable suggestions (e.g., search prompts).</li>
                            </ul>
                            <ul >
                                <li style={{ listStyle: 'none' }}><b>3. Info Pills</b><br />Used as non-interactive labels to highlight contextual information.</li>
                                <br />
                                <li style={{ listStyle: 'none' }}><b>4. Expandable Filter Pills</b><br />Used to trigger a dropdown when a category contains multiple sub-options.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
    <div className="titlebdr">ANATOMY</div>
    <div className='imageWrapBg2'>
        <div className='pagecont dashed-border'>
            <div>
                <p className='title'>Desktop</p>
                <p><b>1. Selection Pills</b></p>
                <div className="horizBullets2">
                    <div>
                        1.1. Text pill - unselected default state
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Desktop body large, #0065B2</li>
                                <li>Container - Height 56px, Fill #ffffff, Stroke 2px #0065B2, Corner Radius 40px</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-9.webp')} alt="" />
                        </div>
                    </div>
                    <div>
                        1.2. Text pill - selected state
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Desktop body large, #ffffff</li>
                                <li>Container - Height 56px, Fill #0065B2, Corner Radius 40px</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-10.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="horizBullets2">
                    <div>
                        1.3. Text pill with icon - Unselected default state
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Desktop CTA Text, #000000</li>
                                <li>Container - Height 56px, Fill #ffffff, Stroke 2px #0065B2, Corner Radius 40px</li>
                                <li>Icon - 20px, #000000</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-11.webp')} alt="" />
                        </div>
                    </div>
                    <div>
                        1.4. Text pill with icon - selected state
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Desktop CTA Text, #ffffff</li>
                                <li>Container - Height 56px, Fill #0065B2, Corner Radius 40px</li>
                                <li>Icon - 20px, #000000</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-12.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <p style={{ fontSize: '14px', color: '#8F8F8F', fontWeight: '700', padding: '0', margin: '0', paddingTop: '20px',paddingBottom:'10px' }}>When to use which</p>

                <div className="horizBullets2">
    <div>
        <p style={{ fontSize: '14px' }}>Use with icon:</p>
        <ul className="bullets" style={{ fontSize: '14px', listStyle: 'disc' }}>
            <li style={{ listStyle: 'disc' }}>When categories are distinct user groups</li>
            <li style={{ listStyle: 'disc' }}>When scanning speed matters</li>
            <li style={{ listStyle: 'disc' }}>When space allows</li>
        </ul>
    </div>
    <div>
        <p style={{ fontSize: '14px' }}>Use without icon:</p>
        <ul className="bullets" style={{ fontSize: '14px', listStyle: 'disc' }}>
            <li style={{ listStyle: 'disc' }}>When labels are already clear</li>
            <li style={{ listStyle: 'disc' }}>When you have many options (avoid clutter)</li>
            <li style={{ listStyle: 'disc' }}>In tighter layouts</li>
        </ul>
    </div>
</div>

                <p className='pt-40'><strong>2. Suggestion Pills</strong></p>
                <div className="horizBullets2">
                    <div>
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Desktop body large, #0065B2</li>
                                <li>Container - Height 56px, Fill #ffffff, Stroke 2px #0065B2, Corner Radius 40px</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-13.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <p className='pt-40'><strong>3. Info Pills</strong></p>
                <div className="horizBullets2">
                    <div>
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Desktop body large, #000000</li>
                                <li>Container - Height 44px, Fill #ffffff, Stroke 1px #0065B2, Corner Radius 40px</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-14.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <p className='pt-40'><strong>4. Expandable Filter Pills</strong></p>
                <div className="horizBullets2">
                    <div>
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Desktop CTA Text, #000000</li>
                                <li>Container - Height 44px, Fill #ffffff, Stroke 2px #0065B2, Corner Radius 40px</li>
                                <li>Icon - 16px, #000000</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-15.webp')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='pagecont pt-40'>
            <div>
                <p className='title mrgbtm'>Mobile</p>

                <p ><strong>1. Selection Pills</strong></p>
                <div className="horizBullets2">
                    <div>
                        1.1. Text pill - unselected default state
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Mobile nav bar CTA, #0065B2</li>
                                <li>Container - Height 32px, Fill #ffffff, Stroke 1px #0065B2, Corner Radius 40px</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-16.webp')} alt="" />
                        </div>
                    </div>
                    <div>
                        1.2. Text pill - selected state
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Mobile nav bar CTA, #ffffff</li>
                                <li>Container - Height 32px, Fill #0065B2, Corner Radius 40px</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-17.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="horizBullets2">
                    <div>
                        <p>1.3. Text pill with icon</p>
                        <div className="indent-item">
                                                                                On mobile, selection pills transform into full-width list- <br></br>style items to improve readability, touch accessibility, <br></br>and ease of navigation.

                    </div>

                    </div>
                </div>

                <p className='pt-40'><strong>2. Suggestion Pills</strong></p>
                <div className="horizBullets2">
                    <div>
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Mobile body large, #0065B2</li>
                                <li>Container - Height 32px, Fill #ffffff, Stroke 1px #0065B2, Corner Radius 40px</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-18.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <p className='pt-40'><strong>3. Info Pills</strong></p>
                <div className="horizBullets2">
                    <div>
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Text Typography Style - Mobile body large, #000000</li>
                                <li>Container - Height 44px, Fill #ffffff, Stroke 1px #0065B2, Corner Radius 40px</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-14.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <p className='pt-40'><strong>4. Expandable Filter Pills</strong></p>
                <p>Filter controls adapt to icon triggers on smaller screens.</p>
                <div className="horizBullets2">
                    <div>
                        <div className="indent-item">
                            <ul className="bullets">
                                <li>Icon Button</li>
                            </ul>
                            <img className='mrgbtm' src={require('../../../Assets/Images/pills-image-20.webp')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

                    <section>
                        <div className="titlebdr">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>
                                    <img className='mrgbtm full-width' src={require('../../../Assets/Images/pills-image-21.webp')} alt="" />
                                </div>
                            </div>
                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>
                                    <img className='mrgbtm full-width' src={require('../../../Assets/Images/pills-image-22.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        <ul className='bullets nospace'>
                            <li>Use 2–3 words where possible</li>
                            <li>Keep language consistent across groups</li>
                            <li>For selection pills, labels should clearly represent categories</li>
                            <li>For suggestion pills, use question-based or action-oriented phrasing</li>
                            <li>For info pills, use concise descriptors (e.g., "Eligible", "New")</li>
                        </ul>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>
                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use pills for quick actions or lightweight selection</li>
                                    <li>Clearly indicate selected or active states</li>
                                    <li>Use a chevron icon for expandable pills</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Keep behaviour consistent with dropdown patterns</li>
                                    <li>Ensure pills are touch-friendly on mobile</li>
                                    <li>Group related pills logically</li>
                                </ul>
                            </div>
                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't use pills for primary actions (use buttons instead)</li>
                                    <li>Don't hide critical options inside dropdown pills</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Don't mix interactive and non-interactive pills without distinction</li>
                                    <li>Don't use long or complex text inside pills</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Pills;