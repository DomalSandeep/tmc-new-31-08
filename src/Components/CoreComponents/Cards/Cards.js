import React from 'react';
import './Cards.scss';

const Cards = () => {
    return (
        <div className='CardsContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>6.</span> Cards</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        Cards contain content and actions about a single subject. A card can contain several different elements, but they all should be about a single subject. Typically, the card serves as an overview and an entry point for more detailed information.
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        Cards are surfaces that display content and actions on a single topic.
                        <br /><br />
                        They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Cards must have the following traits:
                        <br /><br />
                        <ul className='bullets '>
                            <li><b>Contained:</b> A card is identifiable as a single, contained unit.</li>
                            <li><b>Independent:</b> A card can stand alone, without relying on surrounding elements for context.</li>
                            <li><b>Individual:</b> A card cannot merge with another card, or divide into multiple cards.</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets '>
                                    <li>Homepage</li>
                                    <li>Section landing pages</li>
                                </ul>
                                <ul className='bullets '>
                                    <li>Inner pages</li>
                                </ul>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrapBg'>
                            <div className='pagecont'>
                                <p className='title'>
                                    Desktop
                                </p>
                                <div className="centerImg">
                                    <div >
                                        <p><strong>1. Selectable Cards</strong></p><br />
                                        <img src={require('../../../Assets/Images/cards-image-1.webp')} alt="" />
                                    </div>

                                    <div className="pt-28">
                                        <p><strong>2. Horizontal media card (2 sizes)</strong></p><br />
                                        <img className='full-width' src={require('../../../Assets/Images/cards-image-2.webp')} alt="" />
                                    </div>

                                    <div className="pt-28">
                                        <p><strong>3. Horizontal text card</strong></p><br />
                                        <img className='full-width' src={require('../../../Assets/Images/cards-image-3.webp')} alt="" />
                                    </div>
                                    <div className="pt-28">
                                        <p><strong>4. Vertical media card – overlay</strong></p><br />
                                        <img src={require('../../../Assets/Images/cards-image-4.webp')} alt="" />
                                    </div>

                                    <div className="pt-28">
                                        <p><strong>5. Vertical media card – solid colour</strong></p><br />
                                        <img src={require('../../../Assets/Images/cards-image-5.webp')} alt="" />
                                    </div>

                                    <div className="pt-28">
                                        <p><strong>6. Compact vertical media card – Solid colour</strong></p><br />
                                        <img src={require('../../../Assets/Images/cards-image-6.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='pagecont'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div>
                                    <p><strong>1. Media cards</strong></p><br />
                                    <img className='full-width' src={require('../../../Assets/Images/cards-image-7.webp')} alt="" />

                                    <p className="pt-28"><strong>2. Vertical media card</strong></p><br />
                                    <img className='full-width' src={require('../../../Assets/Images/cards-image-8.webp')} alt="" />
                                    <br />
                                    <p className="pt-28"><strong>3. Horizontal text card</strong></p><br />
                                    <img className='full-width' src={require('../../../Assets/Images/cards-image-9.webp')} alt="" />
                                    <br />
                                    <p className="pt-28"><strong>4. Vertical media card – overlay</strong></p><br />
                                    <img className='full-width' src={require('../../../Assets/Images/cards-image-10.webp')} alt="" />

                                    <p className="pt-28"><strong>5. Vertical media card – solid colour</strong></p><br />
                                    <img className='full-width' src={require('../../../Assets/Images/cards-image-11.webp')} alt="" />

                                    <p className="pt-28"><strong>6. Compact vertical media card Solid colour on mobile</strong></p><br />
                                    <img className='full-width' src={require('../../../Assets/Images/cards-image-12.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <p className="title">Desktop & Mobile</p>
                        <ul>
                            <li><b>1. Selectable Cards</b><br />Used for option-based selection flows where users need to choose a single path, category, or action before proceeding.</li>
                            <li className="pt-28"><b>2. Horizontal Media Cards </b>(Horizontal media card on mobile become vertical media card)<br />Used within inner pages to present supporting content with media and descriptive information in a structured horizontal layout.</li>
                            <li className="pt-28"><b>3. Horizontal Text Cards</b><br />Used for text-heavy informational content that requires visual separation and stronger emphasis within the layout.</li>
                            <li className="pt-28"><b>4. Vertical Media Card — Overlay</b><br />Used primarily within carousels to showcase high-impact visual content with text layered directly over the media.</li>
                            <li className="pt-28"><b>5. Vertical Card — Solid Colour</b><br />Used for content that contains more detailed information and requires stronger text readability outside carousel-based layouts.</li>
                            <li className="pt-28"><b>6. Vertical Card — Solid Colour Compact</b><br />Used for compact informational content such as doctor profiles, key personnel, or quick-reference items that require minimal space.</li>
                        </ul>
                    </section>

                    <section>
                        <div className="titlebdr">ANATOMY</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>

                                    <div>
                                        <p><strong>1. Selectable Cards</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li><strong>1.1 Default unselected</strong></li>
                                                    <li>A. Icon - 60px</li>
                                                    <li>B. Title Typography Style - Desktop heading 3</li>
                                                    <li>C. Sub text - Desktop body regular</li>
                                                    <li>D. Container - 400px by 300px, #E6F0FF, stroke #E8E8E8</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/cards-image-13.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li><strong>1.2 Default unselected</strong></li>
                                                    <li>A. Icon - 60px</li>
                                                    <li>B. Title Typography Style - Desktop heading 3</li>
                                                    <li>C. Sub text - Desktop body regular</li>
                                                    <li>D. Container - 400px by 300px, #E6F0FF, Stroke 3px #0065B2</li>
                                                </ul>
                                                <img className='mrgbtm' src={require('../../../Assets/Images/cards-image-14.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>2. Horizontal Media Card</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li><strong>1.1 Horizontal Media Card Regular</strong></li>
                                                    <li>A. Image frame - 444px by 406px</li>
                                                    <li>B. Title Typography Style - Desktop heading 3</li>
                                                    <li>C. Sub text - Desktop body regular</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Desktop primary button small (optional)</li>
                                                    <li>E. Container - width 1320px, max height 374px, #E6F0FF</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/cards-image-15.webp')} alt="" />

                                        <div className="horizBullets2 pt-40">
                                            <div>
                                                <ul className="bullets">
                                                    <li><strong>1.2 Horizontal Media Card Compact</strong></li>
                                                    <li>A. Image frame - 268px by 268px</li>
                                                    <li>B. Title Typography Style - Desktop heading 3</li>
                                                    <li>C. Sub text - Desktop body regular</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Desktop primary button small (optional)</li>
                                                    <li>E. Container - width 1320px, max height 236px, #E6F0FF</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/cards-image-16.webp')} alt="" />
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>3. Horizontal text Card</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li>A. Title Typography Style - Desktop Heading 4</li>
                                                    <li>B. Sub text Typography Style - Desktop Body default</li>
                                                    <li>C. Desktop primary button small (optional)</li>
                                                    <li>D. Container - width 1320px</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <img className='mrgbtm full-width' src={require('../../../Assets/Images/cards-image-17.webp')} alt="" />
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>4. Vertical media card – overlay</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li>A. Image - 545px</li>
                                                    <li>B. Title typography style - Desktop heading 2 & heading 3</li>
                                                    <li>C. Sub title typography style - Desktop CTA text</li>
                                                </ul>
                                                <img className='mrgbtm full-width' src={require('../../../Assets/Images/cards-image-18.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Body copy - Desktop body default, #ffffff, icon 24px</li>
                                                    <li>E. Desktop primary button small (optional)</li>
                                                    <li>F. Content container - Width 545px, #000000 50%, Background blur uniform 35%</li>
                                                    <li className="note-text">The content panels expand or shrink based on the amount of content within, while maintaining a maximum height of 400px.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>5. Vertical media card – solid colour</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li>A. Image - 545px, overlay - #000A21 0%, #000A21 100%</li>
                                                    <li>B. Title typography style - Desktop heading 1</li>
                                                    <li>C. Body copy typography style - Desktop body large, #ffffff</li>
                                                </ul>
                                                <img className='mrgbtm full-width' src={require('../../../Assets/Images/cards-image-19.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Desktop secondary button small (optional)</li>
                                                    <li>E. Accent pattern</li>
                                                    <li>F. Content container - Width 545px, max height 400px, #0065B2</li>
                                                    <li className="note-text">The blue content container expand or shrink based on the amount of content within, while maintaining a maximum height of 400px.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>6. Compact vertical media card – Solid colour</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li>A. Image - 400px</li>
                                                    <li>B. Title typography style - Desktop heading 3</li>
                                                    <li>C. Body copy typography style - Desktop body default, #ffffff</li>
                                                </ul>
                                                <img className='mrgbtm full-width' src={require('../../../Assets/Images/cards-image-20.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Desktop secondary button small (optional)</li>
                                                    <li>E. Content container - Width 400px, max height 240px, #0065B2</li>
                                                    <li className="note-text">The blue content container expand or shrink based on the amount of content within, while maintaining a maximum height of 240px.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>

                                    <div>
                                        <p><strong>1. Selectable Cards</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li><b>1.1 Default unselected</b></li>
                                                    <li>A. Icon - 20px</li>
                                                    <li>B. Title Typography Style - Mobile heading 3</li>
                                                    <li>C. Sub text - Mobile body default</li>
                                                    <li>D. Container - 320px by 150px, #E6F0FF, stroke #E8E8E8</li>
                                                    <li>E. Chevron - 24px, #0065B2</li>
                                                </ul>
                                                <img className=' pt-16' src={require('../../../Assets/Images/cards-image-21.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li><b>1.2 Default unselected</b></li>
                                                    <li>A. Icon - 60px</li>
                                                    <li>B. Title Typography Style - Mobile heading 3</li>
                                                    <li>C. Sub text - Mobile body default</li>
                                                    <li>D. Container - 320px by 150px, #E6F0FF, stroke 1.5px, #0065B2</li>
                                                    <li>E. Chevron - 24px, #0065B2</li>
                                                </ul>
                                                <img src={require('../../../Assets/Images/cards-image-22.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>2. Horizontal Media Card</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li><b>1.1 Horizontal Media Card Regular</b></li>
                                                    <li>A. Image frame - 320px</li>
                                                    <li>B. Title Typography Style - Mobile heading 3</li>
                                                    <li>C. Sub Title Typography Style - Mobile Common CTA Text</li>
                                                </ul>
                                                <img src={require('../../../Assets/Images/cards-image-23.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Body copy Typography Style - Mobile body small</li>
                                                    <li>E. Mobile primary button (optional)</li>
                                                    <li>F. Container - width 320px, max height 260, #E6F0FF</li>
                                                    <li className="note-text">The content panels expand or shrink based on the amount of content within, while maintaining a maximum height of 260px.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li><b>1.2 Horizontal Media Card Compact</b></li>
                                                    <li>A. Image frame - 320px</li>
                                                    <li>B. Title Typography Style - Mobile heading 3</li>
                                                    <li>C. Sub Text Typography Style - Mobile Common CTA Text</li>
                                                </ul>
                                                <img src={require('../../../Assets/Images/cards-image-24.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Mobile primary button (optional)</li>
                                                    <li>E. Container - width 320px, max height 180, #E6F0FF</li>
                                                    <li className="note-text">The content panels expand or shrink based on the amount of content within, while maintaining a maximum height of 180px.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>3. Horizontal text card</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li>A. Title Typography Style - Mobile Heading 4</li>
                                                    <li>B. Sub text Typography Style - Mobile Body default</li>
                                                    <li>C. Mobile primary button (optional)</li>
                                                    <li>D. Container - width 320px</li>
                                                </ul>
                                                <img src={require('../../../Assets/Images/cards-image-25.webp')} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>4. Vertical media card – overlay</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li>A. Image - 300px</li>
                                                    <li>B. Title typography style - Mobile heading 2 & heading 3</li>
                                                    <li>C. Body copy typography style - Mobile body small</li>
                                                </ul>
                                                <img src={require('../../../Assets/Images/cards-image-26.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Mobile secondary button, #ffffff</li>
                                                    <li>E. Info pills</li>
                                                    <li>F. Content container - Width 545px, #000000 50%, Background blur uniform 35%</li>
                                                    <li className="note-text">The content panels expand or shrink based on the amount of content within, while maintaining a maximum height of 240px.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>5. Vertical media card – solid colour</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li>A. Image - 300px, overlay - #000A21 0%, #000A21 100%</li>
                                                    <li>B. Title typography style - Mobile heading 1</li>
                                                    <li>C. Body copy typography style - Mobile body default, #ffffff</li>
                                                </ul>
                                                <img src={require('../../../Assets/Images/cards-image-27.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Mobile secondary button (optional)</li>
                                                    <li>E. Accent pattern</li>
                                                    <li>F. Content container - Width 300px, #0065B2</li>
                                                    <li className="note-text">The content panels expand or shrink based on the amount of content within, while maintaining a maximum height of 260px.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-40">
                                        <p><strong>6. Compact vertical media card – Solid colour</strong></p>
                                        <div className="horizBullets2">
                                            <div>
                                                <ul className="bullets">
                                                    <li>A. Image - 320px</li>
                                                    <li>B. Title typography style - Mobile heading 3</li>
                                                    <li>C. Sub copy typography style - Mobile body small, #ffffff</li>
                                                </ul>
                                                <img src={require('../../../Assets/Images/cards-image-28.webp')} alt="" />
                                            </div>
                                            <div>
                                                <ul className="bullets">
                                                    <li>D. Mobile secondary CTA (optional)</li>
                                                    <li>F. Content container - Width 320px, max height 240px, #0065B2</li>
                                                    <li className="note-text">The content panels expand or shrink based on the amount of content within, while maintaining a maximum height of 180px.</li>
                                                </ul>
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

                                    <p><strong>1. Selectable Cards</strong></p>
                                    <img src={require('../../../Assets/Images/cards-image-29.webp')} alt="" />

                                    <p><strong>2.1 Horizontal Media Card Regular</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/cards-image-30.webp')} alt="" />

                                    <p><strong>2.2 Horizontal Media Card Compact</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/cards-image-31.webp')} alt="" />

                                    <p><strong>3. Horizontal text Card</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/cards-image-32.webp')} alt="" />

                                    <p><strong>4. Vertical media card – overlay</strong></p>
                                    <img src={require('../../../Assets/Images/cards-image-33.webp')} alt="" />

                                    <p><strong>5. Vertical media card – solid colour</strong></p>
                                    <img src={require('../../../Assets/Images/cards-image-34.webp')} alt="" />

                                    <p><strong>6. Compact vertical media card – Solid colour</strong></p>
                                    <img src={require('../../../Assets/Images/cards-image-35.webp')} alt="" />
                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title mrgbtm'>Mobile</p>

                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li><b>1. Selectable Cards</b></li>
                                            </ul>
                                            <img style={{ width: '80%' }} src={require('../../../Assets/Images/cards-image-36.webp')} alt="" />
                                        </div>
                                        <div>
                                            <ul className="bullets">
                                                <li><b>2.1. Vertical Media Card Regular</b></li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/cards-image-37.webp')} alt="" />
                                        </div>
                                    </div>

                                    

                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li><b>2.2. Vertical Media Card Compact</b></li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/cards-image-38.webp')} alt="" />
                                        </div>
                                        <div>
                                            <ul className="bullets">
                                                <li><b>3. Horizontal text card</b></li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/cards-image-39.webp')} alt="" />
                                        </div>
                                    </div>

                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li><b>4. Vertical media card – overlay</b></li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/cards-image-40.webp')} alt="" />
                                        </div>
                                        <div>
                                            <ul className="bullets">
                                                <li><b>5. Vertical media card – solid colour</b></li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/cards-image-41.webp')} alt="" />
                                        </div>
                                    </div>

                                    <div className="horizBullets2">
                                        <div>
                                            <ul className="bullets">
                                                <li><b>6. Compact vertical media card – Solid colour</b></li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/cards-image-42.webp')} alt="" />
                                        </div>
                                        <div style={{ visibility: 'hidden' }}>
                                            <ul className="bullets">
                                                <li><b>6. Compact vertical media card – Solid colour</b></li>
                                            </ul>
                                            <img src={require('../../../Assets/Images/cards-image-42.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        <ul className='bullets'>
                            <li>Card content should remain concise, scannable, and action-oriented.</li>
                            <li>Maintain consistent content hierarchy across cards within the same section or layout.</li>
                            <br></br>
                            <li><b>Titles -</b> Should clearly communicate the purpose or subject of the card.</li>
                            <li><b>Supporting text -</b> Should provide only the most relevant information needed for quick understanding.</li>
                            <li><b>Imagery -</b> Should be contextually relevant, high quality, and emotionally appropriate for the content type.</li>
                            <li><b>CTAs -</b> should remain short and direct, using clear action-led labels.</li>
                        </ul>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Each card should contain only essential information and actions.</li>
                                    <li>Each card should contain information that helps users make a decision.</li>
                                    <li>Prioritise textual information.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>If you plan to show a collection of cards, consider using the same visual properties for all cards in the collection.</li>
                                    <li>Use consistent image styles and aspect ratios within a section.</li>
                                    <li>Use cards to highlight related, grouped, or discoverable content.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not overload cards with extraneous information or actions.</li>
                                    <li>Do not use low-quality, stretched, or unrelated imagery.</li>
                                    <li>Do not include too many actions or CTAs within a single card.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Do not mix inconsistent card styles within the same content group unless intentional hierarchy is required.</li>
                                    <li>Do not truncate critical information that affects user understanding.</li>
                                    <li>Do not rely only on imagery without sufficient textual context.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Cards; 