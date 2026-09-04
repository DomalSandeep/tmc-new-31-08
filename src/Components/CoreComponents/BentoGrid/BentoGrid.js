import React, { useState } from 'react';
import './BentoGrid.scss';

const BentoGrid = () => {
    // Tab state
    const [activeTab, setActiveTab] = useState(0);

    // Tab data
    const tabData = [
        {
            id: 0,
            label: '3 Cards',
            showSpacing: true,

            // Desktop Data
            desktopTitle: '',
            desktopBullets: [
                'A. Image or video - width 560px, corner radius 24px',
                'B. Content container - width 559px, height 105px',
                'C. Content Details - Desktop - Body default',
                'D. Play Button - 82 x 82px, added for videos.'
            ],

            // Desktop Data1
            desktopTitle1: '',
            desktopBullets1: [],
            desktopImage1: (''),
            desktopDescription1: '',

            desktopImage: require('../../../Assets/Images/bento-anatomy-desktop.webp'),
            desktopDescription: '',

            // Mobile Data
            mobileTitle: '',
            mobileBullets: [
                'A. Image or video- width 160px, corner radius 6px',
                'B. Content container - width 162px, padding 8 px',
                'C. Content Details - Mobile Body Small',
                'D. Play Button - 50 x 50px, added for videos.',
                'E. Carousel Indicators'
            ],
            mobileImage: require('../../../Assets/Images/bento-anatomy-mobile.webp'),
            mobileDescription: '',

            // SPACING IN PIXELS
            desktopSpacingImage: require('../../../Assets/Images/bento-spacing-desktop.webp'),
            mobileSpacingImage: require('../../../Assets/Images/bento-spacing-mobile.webp'),

            // CONTENT
            content: `The 3-card carousel displays up to three image or video cards in a single horizontal row. 
                Each card features a content container with a short label and an optional play button for video content. 
                Keep labels concise and imagery high-quality. For more than 3 items, switch to a bento grid layout.`,
            // GUIDELINES
            dos: [
                'Use contextually relevant, high-quality imagery.',
                'Add play button overlays only on video cards.',
                'Keep card labels to one line.',
                'Switch to bento grid for 4+ cards.'
            ],
            donts: [
                "Don't exceed 3 cards in a carousel.",
                "Don't leave cards without titles.",
                "Don't mix image treatments within a section."
            ]
        },
        {
            id: 1,
            label: '4 Cards',
            showSpacing: true,

            // Desktop Data
            desktopTitle: '',
            desktopBullets: [
                'A. Image or video - width 415px, corner radius 16px',
                'B. Content container- width 415px,  padding 20px',
                'C. Content Details - Desktop - Body default',
                'D. Play Button - 120 x 120px, added for videos.'
            ],
            desktopImage: require('../../../Assets/Images/bento-4c-anatomy-desktop.webp'),
            desktopDescription: '',

            // Desktop Data1
            desktopTitle1: '',
            desktopBullets1: [],
            desktopImage1: (''),
            desktopDescription1: '',


            // Mobile Data
            mobileTitle: '',
            mobileBullets: [
                'A. Image or video- width 160px, corner radius 6px',
                'B. Content container- width 160px, padding 8 px',
                'C. Content Details- Mobile body small',
                'D. Play Button - 50 x 50px, added for videos.'
            ],
            mobileImage: require('../../../Assets/Images/bento-4c-anatomy-mobile.webp'),
            mobileDescription: '',

            // SPACING IN PIXELS
            desktopSpacingImage: require('../../../Assets/Images/bento-4c-spacing-desktop.webp'),
            mobileSpacingImage: require('../../../Assets/Images/bento-4c-spacing-mobile.webp'),

            // CONTENT
            content: `The 4-card bento grid arranges image or video cards in a visually balanced layout with varied sizes.
                Each card features a content container with a concise label and an optional play button for video content.
                Use strong imagery and short copy — featured cards may contain slightly longer labels where context requires it.`,
            // GUIDELINES
            dos: [
                'Use high-quality, emotionally engaging imagery',
                'Maintain clear visual hierarchy across card sizes',
                'Use concise headlines and supporting text',
                'Prioritise readability over excessive layout complexity',
                'Ensure featured stories receive visual emphasis intentionally'
            ],
            donts: [
                'Do not overcrowd the layout with excessive text',
                'Avoid inconsistent image treatments across cards',
                'Do not use too many equally large cards within the same layout',
                'Avoid highly irregular spacing or alignment breaks',
                'Do not use Bento layouts for highly structured/tabular content'
            ]
        },
        {
            id: 2,
            label: '5 Cards',
            showSpacing: true,

            // Desktop Data
            desktopTitle: '',
            desktopBullets: [
                'A. Image or video - width 415px, corner radius 16px',
                'B. Content container- width 415px,  padding 20px',
                'C. Content Details - Desktop - Body default',
                'D. Play Button - 120 x 120px, added for videos.'
            ],
            desktopImage: require('../../../Assets/Images/bento-5c-anatomy-desktop.webp'),
            desktopDescription: 'Three-Column Layout - A responsive three-column structure used to organise content cards with varying heights and proportions.',


            // Desktop Data1
            desktopTitle1: '',
            desktopBullets1: [],
            desktopImage1: (''),
            desktopDescription1: '',

            // Mobile Data
            mobileTitle: '',
            mobileBullets: [
                'A. Image or video- width 160px, corner radius 6px',
                'B. Content container- width 160px, padding 8px',
                'C. Content Details- Mobile Body Small',
                'D. Play Button - 50 x 50px, added for videos.',
                'E. Carousel Indicators'
            ],
            mobileImage: require('../../../Assets/Images/bento-5c-anatomy-mobile.webp'),
            mobileDescription: '',

            // SPACING IN PIXELS
            desktopSpacingImage: require('../../../Assets/Images/bento-5c-spacing-desktop.webp'),
            mobileSpacingImage: require('../../../Assets/Images/bento-5c-spacing-mobile.webp'),

            // CONTENT
            content: `Content within Bento Grids should remain concise, emotionally engaging, and visually balanced.
                Use strong imagery and short supporting copy to maintain scalability while allowing the visuals to lead the experience..
                Featured cards may contain slightly longer content where additional context is required.`,
            // GUIDELINES
            dos: [
                'Use high-quality, emotionally engaging imagery',
                'Maintain clear visual hierarchy across card sizes',
                'Use concise headlines and supporting text',
                'Prioritise readability over excessive layout complexity',
                'Ensure featured stories receive visual emphasis intentionally'
            ],
            donts: [
                'Do not overcrowd the layout with excessive text',
                'Avoid inconsistent image treatments across cards',
                'Do not use too many equally large cards within the same layout',
                'Avoid highly irregular spacing or alignment breaks',
                'Do not use Bento layouts for highly structured/tabular content'
            ]
        },
        {
            id: 3,
            label: '6 Cards',
            showSpacing: true,

            // Desktop Data
            desktopTitle: '',
            desktopBullets: [
                'A. Image or video - width 415px, corner radius 16px',
                'B. Content container- width 415px,  padding 20px',
                'C. Content Details- Desktop - body default & Heading 4',
                'D. Play Button - 120 x 120px, added for videos.'
            ],
            desktopImage: require('../../../Assets/Images/bento-6c-anatomy-desktop.webp'),
            desktopDescription: 'Three-Column Layout - A responsive three-column structure used to organise content cards with varying heights and proportions.',

            // Desktop Data1
            desktopTitle1: '',
            desktopBullets1: [],
            desktopImage1: (''),
            desktopDescription1: '',

            // Mobile Data
            mobileTitle: '',
            mobileBullets: [
                'A. Image or video- width 160px, corner radius 6px',
                'B. Content container- width 160px, padding 8px',
                'C. Content Details- Mobile Body Small',
                'D. Carousel indicators',
                'E. Play Button - 50 x 50px, added for videos.'
            ],
            mobileImage: require('../../../Assets/Images/bento-6c-anatomy-mobile.webp'),
            mobileDescription: 'Horizontal swipe four column layout carousel - A responsive four-column structure used to organise content cards with varying heights and proportions.',

            // SPACING IN PIXELS
            desktopSpacingImage: require('../../../Assets/Images/bento-6c-spacing-desktop.webp'),
            mobileSpacingImage: require('../../../Assets/Images/bento-5c-spacing-mobile.webp'),

            // CONTENT
            content: `Content within Bento Grids should remain concise, emotionally engaging, and visually balanced.
                Use strong imagery and short supporting copy to maintain scalability while allowing the visuals to lead the experience..
                Featured cards may contain slightly longer content where additional context is required.`,
            // GUIDELINES
            dos: [
                'Use high-quality, emotionally engaging imagery',
                'Maintain clear visual hierarchy across card sizes',
                'Use concise headlines and supporting text',
                'Prioritise readability over excessive layout complexity',
                'Ensure featured stories receive visual emphasis intentionally'
            ],
            donts: [
                'Do not overcrowd the layout with excessive text',
                'Avoid inconsistent image treatments across cards',
                'Do not use too many equally large cards within the same layout',
                'Avoid highly irregular spacing or alignment breaks',
                'Do not use Bento layouts for highly structured/tabular content'
            ]
        },
        {
            id: 4,
            label: '7 Cards',
            showSpacing: true,

            // Desktop Data
            desktopTitle: '',
            desktopBullets: [
                'A. Image or video - width 415px, corner radius 16px',
                'B. Content container- width 415px,  padding 20px',
                'C. Content Details- Desktop - body default & Heading 4',
                'D. Play Button - 120 x 120px, added for videos.'
            ],
            desktopImage: require('../../../Assets/Images/bento-7c-anatomy-desktop.webp'),
            desktopDescription: 'Four-Column Layout - A responsive four-column structure used to organise content cards with varying heights and proportions.',

            // Desktop Data1
            desktopTitle1: '',
            desktopBullets1: [],
            desktopImage1: (''),
            desktopDescription1: '',

            // Mobile Data
            mobileTitle: '',
            mobileBullets: [
                'A. Image or video- width 160px, corner radius 6px',
                'B. Content container- width 160px, padding 8px',
                'C. Content Details- Mobile Body Small',
                'D. Carousel indicators',
                'E. Play Button - 50 x 50px, added for videos.'
            ],
            mobileImage: require('../../../Assets/Images/bento-7c-anatomy-mobile.webp'),
            mobileDescription: 'Horizontal swipe four column layout carousel - A responsive four-column structure used to organise content cards with varying heights and proportions.',

            // SPACING IN PIXELS
            desktopSpacingImage: require('../../../Assets/Images/bento-7c-spacing-desktop.webp'),
            mobileSpacingImage: require('../../../Assets/Images/bento-7c-spacing-mobile.webp'),

            // CONTENT
            content: `Content within Bento Grids should remain concise, emotionally engaging, and visually balanced.
                Use strong imagery and short supporting copy to maintain scalability while allowing the visuals to lead the experience..
                Featured cards may contain slightly longer content where additional context is required.`,
            // GUIDELINES
            dos: [
                'Use high-quality, emotionally engaging imagery',
                'Maintain clear visual hierarchy across card sizes',
                'Use concise headlines and supporting text',
                'Prioritise readability over excessive layout complexity',
                'Ensure featured stories receive visual emphasis intentionally'
            ],
            donts: [
                'Do not overcrowd the layout with excessive text',
                'Avoid inconsistent image treatments across cards',
                'Do not use too many equally large cards within the same layout',
                'Avoid highly irregular spacing or alignment breaks',
                'Do not use Bento layouts for highly structured/tabular content'
            ]
        },
        {
            id: 5,
            label: '8 Cards',
            showSpacing: true,

            // Desktop Data
            desktopTitle: '',
            desktopBullets: [
                'A. Image or video - width 415px, corner radius 16px',
                'B. Content container- width 415px,  padding 20px',
                'C. Content Details- Desktop - body default & Heading 4',
                'D. Play Button - 120 x 120px, added for videos.'
            ],
            desktopImage: require('../../../Assets/Images/bento-grid-image-4.webp'),
            desktopDescription: 'Four-Column Layout - A responsive four-column structure used to organise content cards with varying heights and proportions.',

            // Desktop Data1
            desktopTitle1: '',
            desktopBullets1: [],
            desktopImage1: (''),
            desktopDescription1: '',

            // Mobile Data
            mobileTitle: '',
            mobileBullets: [
                'A. Image or video- width 160px, corner radius 6px',
                'B. Content container- width 160px, padding 8px',
                'C. Content Details- Mobile Body Small',
                'D. Carousel indicators',
                'E. Play Button - 50 x 50px, added for videos.'
            ],
            mobileImage: require('../../../Assets/Images/bento-grid-image-6.webp'),
            mobileDescription: 'Horizontal swipe four column layout carousel - A responsive four-column structure used to organise content cards with varying heights and proportions.',

            // SPACING IN PIXELS
            desktopSpacingImage: require('../../../Assets/Images/bento-grid-image-7.webp'),
            mobileSpacingImage: require('../../../Assets/Images/bento-grid-image-8.webp'),

            // CONTENT
            content: `Content within Bento Grids should remain concise, emotionally engaging, and visually balanced.
                Use strong imagery and short supporting copy to maintain scalability while allowing the visuals to lead the experience..
                Featured cards may contain slightly longer content where additional context is required.`,
            // GUIDELINES
            dos: [
                'Use high-quality, emotionally engaging imagery',
                'Maintain clear visual hierarchy across card sizes',
                'Use concise headlines and supporting text',
                'Prioritise readability over excessive layout complexity',
                'Ensure featured stories receive visual emphasis intentionally'
            ],
            donts: [
                'Do not overcrowd the layout with excessive text',
                'Avoid inconsistent image treatments across cards',
                'Do not use too many equally large cards within the same layout',
                'Avoid highly irregular spacing or alignment breaks',
                'Do not use Bento layouts for highly structured/tabular content'
            ]
        },
        {
            id: 6,
            label: '10 Cards',
            showSpacing: false,

            // Desktop Data
            desktopTitle: 'Collapsed section: 10 Cards (5-card Bento Grid)',
            desktopBullets: [],
            desktopImage: require('../../../Assets/Images/bento-10c-anatomy-desktop-1.webp'),
            desktopDescription: '',

            // Desktop Data1
            desktopTitle1: 'Expanded section: 10 Cards',
            desktopBullets1: [],
            desktopImage1: require('../../../Assets/Images/bento-10c-anatomy-desktop-2.webp'),
            desktopDescription1: "If there are more than 8 videos and the 5-card bento layout is in use, a 'View More' option expands the section to display up to 10 videos.",

            // Mobile Data
            mobileTitle: '',
            mobileBullets: [],
            mobileImage: require('../../../Assets/Images/bento-10c-anatomy-mobile.webp'),
            mobileDescription: "Horizontal swipe four column layout carousel - A responsive four-column structure used to organise content cards with varying heights and proportions.",

            // SPACING IN PIXELS
            desktopSpacingImage: (''),
            mobileSpacingImage: (''),

            // CONTENT
            content: `Content within Bento Grids should remain concise, emotionally engaging, and visually balanced.
                Use strong imagery and short supporting copy to maintain scalability while allowing the visuals to lead the experience.
                Featured cards may contain slightly longer content where additional context is required.`,
            // GUIDELINES
            dos: [
                'Use high-quality, emotionally engaging imagery',
                'Maintain clear visual hierarchy across card sizes',
                'Use concise headlines and supporting text',
                'Prioritise readability over excessive layout complexity',
                'Ensure featured stories receive visual emphasis intentionally'
            ],
            donts: [
                'Do not overcrowd the layout with excessive text',
                'Avoid inconsistent image treatments across cards',
                'Do not use too many equally large cards within the same layout',
                'Avoid highly irregular spacing or alignment breaks',
                'Do not use Bento layouts for highly structured/tabular content'
            ]
        },
        {
            id: 7,
            label: '12 Cards',
            showSpacing: false,

            // Desktop Data
            desktopTitle: 'Collapsed section: 12 Cards (6-card Bento Grid)',
            desktopBullets: [],
            desktopImage: require('../../../Assets/Images/bento-12c-anatomy-desktop-1.webp'),
            desktopDescription: '',

            // Desktop Data1
            desktopTitle1: 'Expanded section: 12 Cards',
            desktopBullets1: [],
            desktopImage1: require('../../../Assets/Images/bento-12c-anatomy-desktop-2.webp'),
            desktopDescription1: "If there are more than 8 videos and the 6-card bento layout is in use, a 'View More' option expands the section to display up to 12 videos.",

            // Mobile Data
            mobileTitle: '',
            mobileBullets: [],
            mobileImage: require('../../../Assets/Images/bento-12c-anatomy-mobile.webp'),
            mobileDescription: "Horizontal swipe four column layout carousel - A responsive four-column structure used to organise content cards with varying heights and proportions.",

            // SPACING IN PIXELS
            desktopSpacingImage: (''),
            mobileSpacingImage: (''),

            // CONTENT
            content: `Content within Bento Grids should remain concise, emotionally engaging, and visually balanced.
                Use strong imagery and short supporting copy to maintain scalability while allowing the visuals to lead the experience.
                Featured cards may contain slightly longer content where additional context is required.`,
            // GUIDELINES
            dos: [
                'Use high-quality, emotionally engaging imagery',
                'Maintain clear visual hierarchy across card sizes',
                'Use concise headlines and supporting text',
                'Prioritise readability over excessive layout complexity',
                'Ensure featured stories receive visual emphasis intentionally'
            ],
            donts: [
                'Do not overcrowd the layout with excessive text',
                'Avoid inconsistent image treatments across cards',
                'Do not use too many equally large cards within the same layout',
                'Avoid highly irregular spacing or alignment breaks',
                'Do not use Bento layouts for highly structured/tabular content'
            ]
        },
        {
            id: 8,
            label: '14 Cards',
            showSpacing: false,

            // Desktop Data
            desktopTitle: 'Collapsed section: 14 Cards (7-card Bento Grid)',
            desktopBullets: [],
            desktopImage: require('../../../Assets/Images/bento-14c-anatomy-desktop-1.webp'),
            desktopDescription: '',

            // Desktop Data1
            desktopTitle1: 'Expanded section: 14 Cards',
            desktopBullets1: [],
            desktopImage1: require('../../../Assets/Images/bento-14c-anatomy-desktop-2.webp'),
            desktopDescription1: "If there are more than 8 videos and the 7-card bento layout is in use, a 'View More' option expands the section to display up to 14 videos.",

            // Mobile Data
            mobileTitle: '',
            mobileBullets: [],
            mobileImage: require('../../../Assets/Images/bento-14c-anatomy-mobile.webp'),
            mobileDescription: "Horizontal swipe four column layout carousel - A responsive four-column structure used to organise content cards with varying heights and proportions.",

            // SPACING IN PIXELS
            desktopSpacingImage: (''),
            mobileSpacingImage: (''),

            // CONTENT
            content: `Content within Bento Grids should remain concise, emotionally engaging, and visually balanced.
                Use strong imagery and short supporting copy to maintain scalability while allowing the visuals to lead the experience.
                Featured cards may contain slightly longer content where additional context is required.`,
            // GUIDELINES
            dos: [
                'Use high-quality, emotionally engaging imagery',
                'Maintain clear visual hierarchy across card sizes',
                'Use concise headlines and supporting text',
                'Prioritise readability over excessive layout complexity',
                'Ensure featured stories receive visual emphasis intentionally'
            ],
            donts: [
                'Do not overcrowd the layout with excessive text',
                'Avoid inconsistent image treatments across cards',
                'Do not use too many equally large cards within the same layout',
                'Avoid highly irregular spacing or alignment breaks',
                'Do not use Bento layouts for highly structured/tabular content'
            ]
        },
        {
            id: 9,
            label: '16 Cards',
            showSpacing: false,
            // Desktop Data
            desktopTitle: 'Collapsed section: 16 Cards (8-card Bento Grid)',
            desktopBullets: [],
            desktopImage: require('../../../Assets/Images/bento-16c-anatomy-desktop-1.webp'),
            desktopDescription: '',

            // Desktop Data1
            desktopTitle1: 'Expanded section: 16 Cards',
            desktopBullets1: [],
            desktopImage1: require('../../../Assets/Images/bento-16c-anatomy-desktop-2.webp'),
            desktopDescription1: "If there are more than 8 videos and the 8-card bento layout is in use, a 'View More' option expands the section to display up to 16 videos.",

            // Mobile Data
            mobileTitle: '',
            mobileBullets: [],
            mobileImage: require('../../../Assets/Images/bento-16c-anatomy-mobile.webp'),
            mobileDescription: "Horizontal swipe four column layout carousel - A responsive four-column structure used to organise content cards with varying heights and proportions.",

            // SPACING IN PIXELS
            desktopSpacingImage: (''),
            mobileSpacingImage: (''),

            // CONTENT
            content: `Content within Bento Grids should remain concise, emotionally engaging, and visually balanced.
                Use strong imagery and short supporting copy to maintain scalability while allowing the visuals to lead the experience.
                Featured cards may contain slightly longer content where additional context is required.`,
            // GUIDELINES
            dos: [
                'Use high-quality, emotionally engaging imagery',
                'Maintain clear visual hierarchy across card sizes',
                'Use concise headlines and supporting text',
                'Prioritise readability over excessive layout complexity',
                'Ensure featured stories receive visual emphasis intentionally'
            ],
            donts: [
                'Do not overcrowd the layout with excessive text',
                'Avoid inconsistent image treatments across cards',
                'Do not use too many equally large cards within the same layout',
                'Avoid highly irregular spacing or alignment breaks',
                'Do not use Bento layouts for highly structured/tabular content'
            ]
        }
    ];

    return (
        <div className='BentoGridContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>4. </span>Image & Bento Grid</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        Image & Bento Grids are used to present multiple related content items in a visually engaging, editorial-style layout with varied card sizes and compositions.
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Showcase featured stories or testimonials</li>
                            <li>Present visually rich editorial content</li>
                            <li>Highlight human-centric narratives and campaigns</li>
                            <li>Create dynamic layouts using mixed card sizes</li>
                            <li>Break monotony in media-heavy sections</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className='horizBullets'>
                                <ul className='bullets nospace'>
                                    <li>Home pages</li>
                                    <li>Donations section landing page</li>

                                </ul>
                                <ul className='bullets nospace'>
                                    <li>Grids for Patient Support</li>
                                    <li>Financial assistance</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrapBg padbtm'>
                            <div className='pagecont'>
                                <p className='title'>Desktop</p>

                                <div>
                                    <p><strong>1. 3 Card Display</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-desktop-1.webp')} alt="" />
                                </div>

                                <div className="card-item">
                                    <p><strong>2. 4 Card Bento</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-desktop-2.webp')} alt="" />
                                </div>

                                <div className="card-item">
                                    <p><strong>3. 5 Card Bento</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-desktop-3.webp')} alt="" />
                                </div>

                                <div className="card-item">
                                    <p><strong>4. 6 Card Bento</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-desktop-4.webp')} alt="" />
                                </div>

                                <div className="card-item">
                                    <p><strong>5. 7 Card Bento</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-desktop-5.webp')} alt="" />
                                </div>

                                <div className="card-item">
                                    <p><strong>6. 8 Card Bento Grid</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-desktop-6.webp')} alt="" />
                                </div>
                            </div>

                            <div className='pagecont'>
                                <p className='title'>Mobile</p>

                                <div>
                                    <p><strong>1. 3 Card Display</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-mobile-1.webp')} alt="" />
                                </div>

                                <div className="card-item">
                                    <p><strong>2. 4 Card Display</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-mobile-2.webp')} alt="" />
                                </div>

                                <div className="card-item">
                                    <p><strong>3. 5 Card Bento</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-mobile-3.webp')} alt="" />
                                </div>

                                <div className="card-item">
                                    <p><strong>4. 6, 7 or 8 Card Bento</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/bento-variant-mobile-4.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="tabs-container bento-tabs">
                            <div className="tabs-header">
                                {tabData.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>



                    {/* ANATOMY Section with Tabs */}
                    <section>
                        <div className="titlebdr">ANATOMY OF {tabData[activeTab].label.toUpperCase()} BENTO GRID</div>
                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>Desktop</p>
                                    <div className="bento-layout">
                                        <div className="bento-container">
                                            <ul className="bullets">
                                                <li><b>{tabData[activeTab].desktopTitle}</b></li>  {/* Changed - dynamic */}
                                                {tabData[activeTab].desktopBullets.map((bullet, index) => (
                                                    <li key={index}>{bullet}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bento-img-content">
                                            <img
                                                className='full-width'
                                                src={tabData[activeTab].desktopImage}
                                                alt=""
                                            />
                                            <div className="bento-title">
                                                {tabData[activeTab].desktopDescription}  {/* Changed - dynamic */}
                                            </div>
                                        </div>

                                    </div>

                                    {(tabData[activeTab].desktopImage1 || tabData[activeTab].desktopBullets1.length > 0) && (
                                        <div className="bento-layout">
                                            <div className="bento-container">
                                                <ul className="bullets">
                                                    <li><b>{tabData[activeTab].desktopTitle1}</b></li>
                                                    {tabData[activeTab].desktopBullets1.map((bullet, index) => (
                                                        <li key={index}>{bullet}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bento-img-content">
                                                <img className='full-width' src={tabData[activeTab].desktopImage1} alt="" />
                                                <div className="bento-title">
                                                    {tabData[activeTab].desktopDescription1}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Section - Same structure as desktop */}
                            <div className='pagecont pt-40'>
                                <div>
                                    <p className='title'>Mobile</p>
                                    <div className="bento-layout">
                                        <div className="bento-container">
                                            <ul className="bullets">
                                                <li><b>{tabData[activeTab].mobileTitle}</b></li>  {/* Changed - dynamic */}
                                                {tabData[activeTab].mobileBullets.map((bullet, index) => (
                                                    <li key={index}>{bullet}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        {tabData[activeTab].mobileImage && (
                                            <div className="bento-img-content">
                                                <img
                                                    className=""
                                                    src={tabData[activeTab].mobileImage}
                                                    alt=""
                                                />
                                                {tabData[activeTab].mobileDescription && (
                                                    <div className="bento-title">
                                                        {tabData[activeTab].mobileDescription}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* SPACING IN PIXELS - Only show if showSpacing is true */}
                    {tabData[activeTab].showSpacing && (
                        <section>
                            <div className="titlebdr">SPACING IN PIXELS</div>
                            <div className='imageWrapBg2'>
                                <div className='pagecont dashed-border'>
                                    <div className='container-800'>
                                        <p className='title'>Desktop</p>
                                        {tabData[activeTab].desktopSpacingImage && (
                                            <img
                                                className="mrgbtm full-width"
                                                src={tabData[activeTab].desktopSpacingImage}
                                                alt="Desktop Spacing"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className='pagecont pt-40 container-800'>
                                    <div>
                                        <p className='title'>Mobile</p>
                                        {tabData[activeTab].mobileSpacingImage && (
                                            <img
                                                className="mrgbtm"
                                                src={tabData[activeTab].mobileSpacingImage}
                                                alt="Mobile Spacing"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    <section>
                        <div className="titlebdr mrgbtm">CONTENT</div>
                        <div style={{ whiteSpace: 'pre-line' }}>
                            {tabData[activeTab].content}
                        </div>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    {tabData[activeTab].dos.slice(0, 3).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    {tabData[activeTab].dos.slice(3).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    {tabData[activeTab].donts.slice(0, 3).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    {tabData[activeTab].donts.slice(3).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BentoGrid;