import React from 'react';
import './VideoForPatientSupportCentre.scss';

const VideoForPatientSupportCentre = () => {
    return (
        <div className='VideoForPatientSupportCentreContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>27.</span>  Video for Patient Support Centre</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section ><p>                        Patient support centre experience is designed to make informational content more accessible, human, and easier to understand through short-form video-first interactions. Instead of relying only on text-heavy content, users can search, browse, and learn through visually guided videos that simplify medical, procedural, and support-related information.
</p>
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
                        <br></br>

                        Representation
                        <ul className='bullets' >
                            <li>All presenters and people featured in videos should feel culturally relevant and relatable to Indian audiences</li>
                            <li>Use diverse Indian representation across age groups and genders</li>
                            <li>Maintain empathetic and reassuring communication styles</li>
                        </ul>
                        <br></br>
                        Video Structure
                        <ul className='bullets' >
                            <li>Focus on one topic or question per video</li>
                            <li>Keep content concise and task-oriented</li>
                            <li>Use clear visual cues and guided explanations</li>
                            <li>Prioritise practical information users can act on immediately</li>
                        </ul>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">SEARCH & DISCOVERY BEHAVIOUR
                        </div>
                        <ul className='bullets'>
                            <li> Users can search for topics, questions, or support journeys directly</li>
                            <li> Suggested query pills surface common questions and high-priority journeys</li>
                            <li> Video cards support quick scanning and discovery through thumbnails and titles</li>
                        </ul>
                    </section>

                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <p className='title'>
                                    Desktop
                                </p>
                                <div className='container-800'>

                                    <div className="horizBullets2 no-margin" style={{ gap: '80px',justifyContent:'flex-start' }}>
                                        <ul className="bullets nospace">
                                            <li><b>Default State</b></li>
                                            <li>A. Desktop search bar</li>
                                            <li>B. Desktop icon button</li>
                                        </ul>
                                        <ul className="bullets nospace">
                                            <li>C. Desktop expandable filter pill</li>
                                            <li>D. Desktop suggestion pill</li>
                                            <li>E. Desktop bento grid</li>
                                        </ul>
                                    </div>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/video-for-image-1.webp')} alt="" />
                                </div>
                                <br></br>


                                <div className="horizBullets2 no-margin" >
                                    <ul className="bullets nospace">
                                        <li><b>Selected Video State</b></li>
                                        <li>A. Overlay - #000000 66%</li>
                                        <li>B. Video Container - 1343 by 840px, centre aligned to the first fold of the screen</li>
                                        <div style={{ fontSize: '14px' }}>When a video card is selected, it expands into a focused playback overlay that brings the active video into prominence while dimming the background content. This creates an immersive viewing experience while maintaining continuity with the larger video browsing journey.</div>
                                    </ul>

                                </div>
                                <br></br>
                                <div className='container-800'>
                                    <img className='full-width' src={require('../../../Assets/Images/video-for-image-2.webp')} alt="" />


                                </div>
                                <br></br>
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <div style={{ fontSize: '14px' }}>On mobile, the experience transitions into a swipeable carousel layout to improve browsing, touch interaction, and content discovery within smaller viewports. Video cards are presented in stacked vertical formats with horizontal scrolling support, allowing users to quickly explore and navigate through video-based content.
                                    <br></br>
                                    Suggested search prompts adapt into horizontally scrollable pills, while search and language actions remain easily accessible within the viewport.</div>
                                <br></br>
                                <br></br>
                                <img style={{ width: '25%' }} src={require('../../../Assets/Images/video-for-image-3.webp')} alt="" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <div className='imageWrapBg2  '>
                            <p className='title'>
                                Desktop
                            </p>
                            <img className='full-width' src={require('../../../Assets/Images/video-for-image-4.webp')} alt="" />
                            <br></br>
                        </div>
                    </section>


                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use relatable and empathetic presenters</li>
                                    <li>Keep explanations direct and useful</li>
                                    <li>Use simple everyday vocabulary</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Ensure thumbnails clearly represent the topic</li>
                                    <li>Maintain consistent video durations and formatting</li>
                                    <li>Focus on accessibility across languages and age groups</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't use overly technical or academic language</li>
                                    <li>Don't overload videos with multiple topics</li>
                                    <li>Don't use culturally disconnected or generic stock representations</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Don't rely heavily on on-screen text for explanations</li>
                                    <li>Don't create long-form videos for simple informational tasks</li>
                                    <li>Don't use complex sentence structures or jargon-heavy scripts</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>
            </div >
        </div >
    );
};

export default VideoForPatientSupportCentre;