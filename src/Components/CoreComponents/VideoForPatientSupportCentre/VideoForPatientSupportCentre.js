import React, { useState } from 'react';
import './VideoForPatientSupportCentre.scss';

const VideoForPatientSupportCentre = () => {
    const [activeTab, setActiveTab] = useState('grid-scale');

    return (
        <div className='VideoForPatientSupportCentreContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>28.</span> Patient Support Centre</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section>
                        <p>Patient support centre experience is designed to make informational content more accessible, human, and easier to understand through short-form video-first interactions. Instead of relying only on text-heavy content, users can search, browse, and learn through visually guided videos that simplify medical, procedural, and support-related information.</p>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets'>
                            <li>Simplify information through video</li>
                            <li>Improve accessibility across languages and literacy levels</li>
                            <li>Create more human and empathetic informational journeys</li>
                            <li>Support quick learning through visual explanations</li>
                            <li>Increase engagement for frequently asked questions and support topics</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>Homepage</li>
                                    <li>Patient support centre page</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* TABS */}
                    <section>
                        <div className="variant-conatiner">


                            <div className="variant-tabs">
                                <button
                                    className={`tab-btn ${activeTab === 'grid-scale' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('grid-scale')}
                                >
                                    Grid & Scale
                                </button>
                                <button
                                    className={`tab-btn ${activeTab === 'video-state' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('video-state')}
                                >
                                    Video State
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* TAB 1: Grid & Scale */}
                    {activeTab === 'grid-scale' && (
                        <>
                            <section>
                                <div className="titlebdr">VARIANTS</div>
                                <div className='imageWrapBg padbtm'>
                                    <div className='pagecont'>
                                        <p className='title'>Desktop</p>
                                        <div className=''>
                                            <p><strong>1. With Search + Prompt functionalities</strong></p>
                                            <br />
                                            <img className='full-width' src={require('../../../Assets/Images/patient-support-grid-variants-desktop-1.webp')} alt="" />
                                        </div>
                                        <div className='pt-28'>
                                            <p><strong>2. Without Search + Prompt functionalities</strong></p>
                                            <br />
                                            <img className='full-width' src={require('../../../Assets/Images/patient-support-grid-variants-desktop-2.webp')} alt="" />
                                        </div>
                                    </div>
                                    <div className='pagecont'>
                                        <p className='title'>Mobile</p>
                                        <div className=''>
                                            <p><strong>1. With Search + Prompt functionalities</strong></p>
                                            <br />
                                            <img className='full-width' src={require('../../../Assets/Images/patient-support-grid-variants-mobile-1.webp')} alt="" />
                                        </div>
                                        <div className='pt-28'>
                                            <p><strong>2. Without Search + Prompt functionalities</strong></p>
                                            <br />
                                            <img className='full-width' src={require('../../../Assets/Images/patient-support-grid-variants-mobile-2.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="titlebdr mrgbtm">SEARCH & DISCOVERY BEHAVIOUR</div>
                                <ul className='bullets'>
                                    <li>Users can search for topics, questions, or support journeys directly</li>
                                    <li>Suggested query pills surface common questions and high-priority journeys</li>
                                    <li>Video cards support quick scanning and discovery through thumbnails and titles</li>
                                </ul>
                            </section>

                            <section>
                                <div className="titlebdr">ANATOMY</div>
                                <div className='imageWrapBg2'>
                                    <div className='pagecont dashed-border'>
                                        <p className='title'>Desktop</p>
                                        <div className='container-800'>
                                            <b>With Search and Filter Functionality</b>
                                            <br/><br/>
                                            <div className="horizBullets2 no-margin" style={{ gap: '80px', justifyContent: 'flex-start' }}>
                                                <ul className="bullets nospace">
                                                    <li>A. Desktop search bar</li>
                                                    <li>B. Desktop icon button</li>
                                                </ul>
                                                <ul className="bullets nospace">
                                                    <li>C. Desktop expandable filter pill</li>
                                                    <li>D. Desktop suggestion pill</li>
                                                    <li>E. Desktop bento grid</li>
                                                </ul>
                                            </div>
                                            <br />
                                            <img className='full-width' src={require('../../../Assets/Images/video-for-image-1.webp')} alt="" />
                                        </div>
                                        <br />
                                        <div className="horizBullets2 no-margin">
                                            <ul className="bullets nospace">
                                                <li><b>Without Search and Filter Functionality</b></li>
                                                <li>A. 3 Card Display (refer Image & Bento Grid Guidelines)</li>
                                            </ul>
                                        </div>
                                        <br />
                                        <div className='container-800'>
                                            <img className='full-width' src={require('../../../Assets/Images/patient-support-grid-anatomy-desktop-2.webp')} alt="" />
                                        </div>
                                        <br />
                                    </div>
                                    <div className='pagecont pt-40'>
                                        <p className='title'>Mobile</p>
                                        <div style={{ fontSize: '14px' }}>On mobile, the experience transitions into a swipeable carousel layout to improve browsing, touch interaction, and content discovery within smaller viewports. Video cards are presented in stacked vertical formats with horizontal scrolling support, allowing users to quickly explore and navigate through video-based content.
                                            <br />
                                            Suggested search prompts adapt into horizontally scrollable pills, while search and language actions remain easily accessible within the viewport.</div>
                                        <br />
                                        <img style={{ width: '25%' }} src={require('../../../Assets/Images/video-for-image-3.webp')} alt="" />
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="titlebdr">SPACING IN PIXELS</div>
                                <div className='imageWrapBg2'>
                                    <div className='container-800'>
                                        <p className='title'>Desktop</p>
                                        <p><strong>With Search + Prompt functionalities</strong></p>
                                        <img className='full-width' src={require('../../../Assets/Images/patient-support-grid-spacing-desktop-1.webp')} alt="" />
                                        <br />
                                        <p><strong>Without Search + Prompt functionalities</strong></p>
                                        <img className='full-width' src={require('../../../Assets/Images/patient-support-grid-spacing-desktop-2.webp')} alt="" />
                                        <br />
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className='titlebdr'>GUIDELINES</div>
                                <div className='titlebg'>Do's</div>
                                <div className="twocolumntext">
                                    <div>
                                        <ul className='bullets'>
                                            <li>Use the search bar and pills for sections with 6+ videos</li>
                                            <li>Keep the bento grid consistent with card guidelines</li>
                                            <li>Use the scalable layout to match content volume</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className='bullets'>
                                            <li>Ensure the video overlay centres within the viewport</li>
                                            <li>Maintain consistent card sizing across grid variations</li>
                                            <li>Refer to bento grid guidelines for layouts above 3 cards</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='titlebg red'>Don'ts</div>
                                <div className="twocolumntext">
                                    <div>
                                        <ul className='bullets'>
                                            <li>Don't show search and pills when the section has few videos</li>
                                            <li>Don't mix card styles within the same grid layout</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className='bullets'>
                                            <li>Don't stack multiple video grids without a separating section</li>
                                            <li>Don't deviate from the designated grid configurations</li>
                                            <li>Don't place the video preview off-centre or without the overlay</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}

                    {/* TAB 2: Video State */}
                    {activeTab === 'video-state' && (
                        <>
                            <section>
                                <div className="titlebdr">ANATOMY</div>
                                <div className='imageWrapBg2'>
                                    <div className='pagecont dashed-border'>
                                        <p className='title'>Desktop</p>
                                        <div className="horizBullets2 no-margin">
                                            <ul className="bullets nospace">
                                                <li><b>Selected Video State</b></li>
                                                <li>A. Overlay - #000000 66%</li>
                                                <li>B. Video Container - 1343 by 840px, centre aligned to the first fold of the screen</li>
                                                <div style={{ fontSize: '14px' }}>When a video card is selected, it expands into a focused playback overlay that brings the active video into prominence while dimming the background content. This creates an immersive viewing experience while maintaining continuity with the larger video browsing journey.</div>
                                            </ul>
                                        </div>
                                        <br />
                                        <div className='container-800'>
                                            <img className='full-width' src={require('../../../Assets/Images/video-for-image-2.webp')} alt="" />
                                        </div>
                                        <br />
                                    </div>
                                    <div className='pagecont pt-40'>
                                        <p className='title'>Mobile</p>
                                        <div style={{ fontSize: '14px' }}>On mobile, the experience transitions into a swipeable carousel layout to improve browsing, touch interaction, and content discovery within smaller viewports. Video cards are presented in stacked vertical formats with horizontal scrolling support, allowing users to quickly explore and navigate through video-based content.
                                            <br />
                                            Suggested search prompts adapt into horizontally scrollable pills, while search and language actions remain easily accessible within the viewport.</div>
                                        <br />
                                        <img style={{ width: '25%' }} src={require('../../../Assets/Images/patient-support-video-anatomy-mobile.webp')} alt="" />
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="titlebdr mrgbtm">CONTENT</div>
                                Video Language & Tone
                                <ul className='bullets'>
                                    <li>Use simple, clear, and conversational language</li>
                                    <li>Keep sentences short and easy to understand</li>
                                    <li>Avoid complex medical terminology wherever possible</li>
                                    <li>Prioritise clarity over technical depth</li>
                                    <li>Ensure multilingual content maintains the same simplicity and accessibility</li>
                                </ul>
                                <br />
                                Representation
                                <ul className='bullets'>
                                    <li>All presenters and people featured in videos should feel culturally relevant and relatable to Indian audiences</li>
                                    <li>Use diverse Indian representation across age groups and genders</li>
                                    <li>Maintain empathetic and reassuring communication styles</li>
                                </ul>
                                <br />
                                Video Structure
                                <ul className='bullets'>
                                    <li>Focus on one topic or question per video</li>
                                    <li>Keep content concise and task-oriented</li>
                                    <li>Use clear visual cues and guided explanations</li>
                                    <li>Prioritise practical information users can act on immediately</li>
                                </ul>
                            </section>

                            <section>
                                <div className="titlebdr">SPACING IN PIXELS</div>
                                <div className='imageWrapBg2'>
                                    <div className='pagecont dashed-border'>
                                        <p className='title'>Desktop</p>
                                        <div className='container-800'>
                                            <img className='full-width' src={require('../../../Assets/Images/patient-support-video-spacing-desktop.webp')} alt="" />
                                        </div>
                                        <br />
                                    </div>
                                    <div className='pagecont'>
                                        <p className='title'>Mobile</p>
                                        <img style={{ width: '25%' }} src={require('../../../Assets/Images/patient-support-video-spacing-mobile.webp')} alt="" />
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className='titlebdr'>GUIDELINES</div>
                                <div className='titlebg'>Do's</div>
                                <div className="twocolumntext">
                                    <div>
                                        <ul className='bullets'>
                                            <li>Centre the video player within the overlay viewport</li>
                                            <li>Maintain the dark overlay at 66% opacity consistently</li>
                                            <li>Include a descriptive title bar below the video frame</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className='bullets'>
                                            <li>Ensure the player scales proportionally across breakpoints</li>
                                            <li>Keep the close or dismiss action clearly visible and accessible</li>
                                            <li>Preserve the grid layout behind the overlay without rearranging</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='titlebg red'>Don'ts</div>
                                <div className="twocolumntext">
                                    <div>
                                        <ul className='bullets'>
                                            <li>Don't allow the video player to exceed the viewport bounds</li>
                                            <li>Don't remove the background overlay during video playback</li>
                                            <li>Don't use inconsistent player dimensions across the same section</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className='bullets'>
                                            <li>Don't let the title bar obscure video content at any breakpoint</li>
                                            <li>Don't auto-play videos without a clear user-initiated action</li>
                                            <li>Don't change the grid state or card positions behind the overlay</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoForPatientSupportCentre;