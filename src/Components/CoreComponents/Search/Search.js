import React from 'react';
import './Search.scss';

const Search = () => {
    return (
        <div className='SearchContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>24.</span> Search Bar</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section >
                        <p>                        Search enables users to specify a word or a phrase to find relevant pieces of content without the use of navigation. Search offers users a way to explore a website or application using keywords.
                        </p>
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Search can be used as the primary means of discovering content, or as a filter to aid the user in finding content.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>Top Navigation Menu</li>
                                    <li>Other components</li>
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

                                    <p><strong>1.1. Standard search bar</strong></p>
                                    <div className="horizBullets2">
                                        <div className='container-800'>
                                            <div className="flex-row">
                                                <ul className="bullets">
                                                    <li>Container - 56px, fill #F9F9F9, stroke #E8E8E8</li>
                                                    <li>Title typography style - Desktop body large, #8F8F8F</li>
                                                    <li>Icon - 24px, #000000</li>
                                                </ul>
                                                <p>White Fill: Used across content pages, listings, and discovery sections.</p>
                                            </div>
                                            <img className='full-width pt-16' src={require('../../../Assets/Images/search-image-1.webp')} alt="" />
                                        </div>
                                    </div>

                                    <p className='pt-40'><strong>1.2. Navigation search bar</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <div className="flex-row">
                                                <ul className="bullets">
                                                    <li>Container - 56px, fill #E6F0FF, stroke #E8E8E8</li>
                                                    <li>Title typography style - Desktop body large, #8F8F8F</li>
                                                    <li>Icon - 24px, #0065B2</li>
                                                </ul>
                                                <p>Blue Fill: Reserved for the global navigation search experience.</p>
                                            </div>
                                            <img className='full-width pt-16' src={require('../../../Assets/Images/search-image-2.webp')} alt="" />
                                        </div>
                                    </div>

                                    <p className='pt-40'><strong>1.3. Search pop-up</strong></p>
                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li>Navigation search bar</li>
                                                <li>Container - 244px by 1920px, #ffffff</li>
                                                <li>Suggestion pills</li>
                                            </ul>
                                            <img className='full-width pt-16' src={require('../../../Assets/Images/search-image-3.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title'>Mobile</p>

                                    <p className='pt-40'><strong>1.1. Standard search bar</strong></p>
                                    <div className="horizBullets2">
                                        <div className='container-800'>
                                            <div className="flex-row">
                                                <ul className="bullets">
                                                    <li>Container - 48px, fill #F9F9F9, stroke #E8E8E8</li>
                                                    <li>Title typography style - Mobile body default, #8F8F8F</li>
                                                    <li>Icon - 20px, #000000</li>
                                                </ul>
                                                <p>White Fill: Used across content pages, listings, and discovery sections.</p>
                                            </div>
                                            <img className=' pt-16' src={require('../../../Assets/Images/search-image-4.webp')} alt="" />
                                        </div>
                                    </div>

                                    <p className='pt-40'><strong>1.2. Navigation search bar</strong></p>
                                    <div className="horizBullets2">
                                        <div className='container-800'>
                                            <div className="flex-row">
                                                <ul className="bullets">
                                                    <li>Container - 48px, fill #E6F0FF, stroke #E8E8E8</li>
                                                    <li>Title typography style - Mobile body default, #8F8F8F</li>
                                                    <li>Icon - 20px, #0065B2</li>
                                                </ul>
                                                <p>Blue Fill: Reserved for the global navigation search experience.</p>
                                            </div>
                                            <img className=' pt-16' src={require('../../../Assets/Images/search-image-5.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>
                                    <img className='full-width pt-16' src={require('../../../Assets/Images/search-image-6.webp')} alt="" />

                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title'>Mobile</p>
                                    <img className='full-width pt-16' src={require('../../../Assets/Images/search-image-7.webp')} alt="" />

                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        <p>                        The search bar supports keyword-based discovery and quick access to relevant information, services, or pages. It can be paired with voice input, suggestion pills, or category filters to improve navigation and guide users toward commonly searched actions. Search placeholders should remain short, contextual, and action-oriented.
                        </p>

                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Clearly show which results are being displayed with labels or headers.</li>
                                    <li>Highlight the search term in the results, where appropriate.</li>
                                    <li>Provide relevant filters on the Search results page.</li>
                                    <li>Include the search result count in brackets</li>

                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Have a clear "no results" message and offer suggestions if possible.</li>
                                    <li>Have smart algorithms that can search for similar terms or can search even with misspelled words.</li>
                                    <li>Include enough of a description in the results for users to make a judgement as to whether that particular result is relevant.</li>

                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't use overly long or instructional placeholder text.</li>
                                    <li>Don't overload the search area with too many suggestion pills or filters.</li>

                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Don't use the blue-filled search style outside the global navigation experience.</li>
                                    <li>Don't hide essential search actions behind multiple interactions or menus.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Search;