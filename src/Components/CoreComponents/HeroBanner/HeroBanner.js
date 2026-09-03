import React, { useState } from 'react';
import './HeroBanner.scss';
import TabSwitcher from '../../../Utils/TabSwitcher/TabSwitcher';

const HeroBanner = () => {
    const [activeTab, setActiveTab] = useState('option-a');

    const tabs = [
        {
            id: 'option-a',
            label: 'Option A',
            showInteraction: true,

        },
        {
            id: 'option-b',
            label: 'Option B',
            showInteraction: true,
        },
        {
            id: 'option-c',
            label: 'Option C',
            showInteraction: true,
        }
    ];

    const heroVariants = {
        'option-a': {
            anatomy: {
                desktop: {
                    title: '1. Media Banner',
                    items: [
                        'A. Hero copy typography style - Desktop display large, #ffffff',
                        'B. Sub text - Desktop body large, #ffffff',
                        'C. Buttons (optional) Desktop Primary Button & Hero Secondary Button',
                        'D. Image or video - 1920px by 956px',
                        'E. Hero Overlay - #000000 (23%) opacity 100% - #666666 (75%) opacity 0%, 70% opacity',
                        'F. Highlight tag - height 44px, typography style - Desktop heading 3',
                        'G. Navigation indicators'
                    ],
                    image: require('../../../Assets/Images/hero-banner-image-1.webp'),


                },

                mobile: {
                    title: '1. Media Banner',
                    items: [
                        'A. Hero copy typography style - Mobile display large, #ffffff',
                        'B. Sub text - Mobile body default, #ffffff',
                        'C. Buttons (optional) Mobile Primary Button & Hero Secondary Button (On mobile in the hero section CTAs get stacked)',
                        'D. Image or video - 360px by 640px',
                        'E. Hero Overlay - #000000 (47%) opacity 100% - #666666 (75%) opacity 0%, 70% opacity',
                        'F. Highlight tag - height 44px, typography style - Mobile heading 3'
                    ],
                    image: require('../../../Assets/Images/hero-banner-image-2.webp')
                }
            },

            spacing: {
                desktop: require('../../../Assets/Images/hero-banner-spacing-desktop-option-a.webp'),
                mobile: require('../../../Assets/Images/hero-banner-spacing-mobile-option-a.webp')
            },

            interaction: 'Hero banners can be part of a carousel where clickable navigation indicators (dots) allow users to switch between banners. Banners also auto-rotate when multiple items are present.',

            content: 'Use a clear, concise headline to communicate the primary message, supporting text should provide context without overwhelming the user.',

            guidelines: {
                dos: [
                    'Ensure content remains legible over media backgrounds',
                    'Limit the number of slides to maximum 5',
                    'Use strong, relevant visuals that align with the message',
                    'Keep messaging focused on one key idea per banner'
                ],

                donts: [
                    'Do not overload banners with excessive text or multiple CTAs',
                    'Avoid using low-quality or generic visuals',
                    'Do not rely solely on auto-rotation without manual controls',
                    'Avoid placing critical information only in later slides'
                ]
            }
        },

        'option-b': {
            anatomy: {
                desktop: {
                    title: '',
                    items: [
                        'A. Hero copy typography style - Desktop display large, #ffffff ',
                        'B. Sub text - Desktop body large, #ffffff ',
                        'C. Buttons (optional) Desktop Primary Button & Hero Secondary Button ',
                        'D. Image frame 1: 450px by 644px ',
                        'E. Image frame 2: 450 px by 428px'
                    ],
                    image: require('../../../Assets/Images/hero-banner-spacingg-desktop-option-b1.webp'),
                    image_2: require('../../../Assets/Images/hero-banner-anatomy-desktop-option-b2.webp'),

                },

                mobile: {
                    title: '',
                    items: [
                        'A. Hero copy typography style - Mobile display large, #ffffff',
                        ' B. Sub text - Mobile body default, #ffffff',
                        ' C. Buttons (optional) Mobile Primary Button & Hero Secondary Button (On mobile in the hero section CTAs get stacked) ',
                        'D. Image frame 1: 156px by 225px',
                        'E. Image frame 2: 156 px by 150px'
                    ],
                    image: require('../../../Assets/Images/hero-banner-spacingg-mobile-option-b1.webp'),
                    image_2: require('../../../Assets/Images/hero-banner-anatomy-desktop-option-b2.webp')
                }
            },

            spacing: {
                desktop: require('../../../Assets/Images/hero-banner-spacing-desktop-option-b.webp'),
                mobile: require('../../../Assets/Images/hero-banner-spacing-mobile-option-b.webp'),
            },

            interaction: ['Two vertical image column scroll upward continuously in an infinite loop',
                ' Column speed: 30px/s, or as slow as required so that each image is in it’s full view for a minimum of 1 second.',
                ' Linear motion, no acceleration or deceleration.',
                'Loop resets seamlessly, no visible jump or flash between cycles. ',
                'Animation pauses when the section is outside the viewport',
                'Minimum of 2 images per column to ensure no visible gaps during the loop'],

            content: 'Use a clear, concise headline to communicate the primary message, supporting text should provide context without overwhelming the user.',

            guidelines: {
                dos: [
                    'Ensure content remains legible over media backgrounds',
                    'Use strong, relevant visuals that align with the message and imagery guidelines. ',
                    'Repeat the first 2 images at the end of the columns so the loop of the carousel is seamless.',
                    'Use high-quality images that represent the institution.'
                ],

                donts: [
                    'Do not overload banners with excessive text or multiple CTAs',
                    'Avoid using low-quality or generic visuals',
                    'Avoid placing critical information only in later slides',
                    'Avoid abrupt loop resets — the scroll must cycle seamlessly'
                ]
            }
        },

        'option-c': {
            anatomy: {
                desktop: {
                    title: '',
                    items: [
                        'A. Hero copy typography style - Desktop display large, #ffffff',
                        'B. Sub text - Desktop body large, #ffffff',
                        'C. Buttons (optional) Desktop Primary Button & Hero Secondary Button',
                        'D. Hero Overlay - #000000 (23%) opacity 100% - #666666 (75%) opacity 0%, 70% opacity',
                        'E. Image or video - 1696px by 535px'
                    ],
                    image: require('../../../Assets/Images/hero-banner-option-c-anatomy-desktop.webp')
                },

                mobile: {
                    title: '',
                    items: [
                        'A. Hero copy typography style - Mobile display large, #ffffff',
                        'B. Sub text - Mobile body default, #ffffff',
                        'C. Buttons (optional) Mobile Primary Button & Hero Secondary Button (On mobile in the hero section CTAs get stacked)',
                        'D. Image or video - 360px by 640px',
                        'E. Hero Overlay - linear gradient, #000000 (0% alpha) to #000000 (70% alpha), right to left'

                    ],
                    image: require('../../../Assets/Images/hero-banner-option-c-anatomy-mobile.webp')
                }
            },

            spacing: {
                desktop: require('../../../Assets/Images/hero-banner-option-c-spacing-desktop.webp'),
                mobile: require('../../../Assets/Images/hero-banner-option-c-spacing-mobile.webp'),
            },

            interaction: '',

            content: 'Use a clear, concise headline to communicate the primary message, supporting text should provide context without overwhelming the user.',

            guidelines: {
                dos: [
                    'Ensure content remains legible over media backgrounds',
                    'Use a strong, relevant visual that aligns with the message',
                    'Keep messaging focused on one key idea '
                ],

                donts: [
                    'Do not overload this banner with excessive text or multiple CTAs',
                    'Avoid using low-quality or generic visuals'
                ]
            }
        }
    };

    const currentVariant = heroVariants[activeTab];

    return (
        <div className='HeroBannerContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1>
                        <span>13.</span> Hero Banner
                    </h1>
                </div>
            </div>

            <div className='page-content padtp0'>
                <div className="container">

                    {/* STATIC CONTENT */}

                    <section>
                        <p>
                            The hero banner area is the area of the page between the
                            navigation and the start of your content. It serves as the
                            starting point for your page and its contents should orient
                            the user to the content on the rest of the page.
                        </p>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">
                            USAGE
                        </div>

                        <ul className='bullets'>
                            <li>
                                Used to communicate primary messaging, such as
                                institutional positioning, campaigns, or key services.
                            </li>

                            <li>
                                Ideal for showcasing latest announcements,
                                initiatives, or important updates.
                            </li>
                        </ul>

                    </section>

                    <section>
                        <div className="titlebdr">
                            VARIANTS
                        </div>

                        <div className='imageWrapBg padbtm'>
                            <div className='pagecont'>
                                <p className='title'>
                                    Desktop
                                </p>

                                <div className='dashed-border'>
                                    <p>
                                        <strong>Option A: Full width Hero with carousel</strong>
                                    </p>

                                    <br />

                                    <img
                                        className='full-width'
                                        src={require('../../../Assets/Images/hero-banner-variants-desktop-option-a.webp')}
                                        alt=""
                                    />
                                </div>

                                <div className='dashed-border pt-40'>
                                    <p>
                                        <strong>Option B: Hero with dynamic image/video display</strong>
                                    </p>

                                    <img
                                        className='full-width'
                                        src={require('../../../Assets/Images/hero-banner-variants-desktop-option-b.webp')}
                                        alt=""
                                    />
                                </div>

                                <div className='pt-40'>
                                    <p>
                                        <strong>Option C: Concise Hero Banner</strong>
                                    </p>

                                    <img
                                        className='full-width'
                                        src={require('../../../Assets/Images/hero-banner-variants-desktop-option-c.webp')}
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className='pagecont'>
                                <p className='title'>
                                    Mobile
                                </p>

                                <div className='dashed-border'>
                                    <p>
                                        <strong>Option A: Full width Hero with carousel</strong>
                                    </p>

                                    <br />

                                    <img
                                        className='full-width'
                                        src={require('../../../Assets/Images/hero-banner-variants-mobile-option-a.webp')}
                                        alt=""
                                    />
                                </div>

                                <div className='dashed-border pt-40'>
                                    <p>
                                        <strong>Option B: Hero with dynamic image/video display</strong>
                                    </p>

                                    <img
                                        className='full-width'
                                        src={require('../../../Assets/Images/hero-banner-variants-mobile-option-b.webp')}
                                        alt=""
                                    />
                                </div>

                                <div className='pt-40'>
                                    <p>
                                        <strong>Option C: Concise Hero Banner</strong>
                                    </p>

                                    <img
                                        className='full-width'
                                        src={require('../../../Assets/Images/hero-banner-variants-mobile-option-c.webp')}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <p class="title">Desktop & Mobile</p>
                        <ul class="">
                            <li>
                                <b>Option A: Full width Hero with carousel</b> <br />

                                Used when a strong, relevant visual is available to support the message and enhance engagement.                            </li>
                            <br></br>
                            <li>
                                <b>Option B: Hero with multi-image display</b> <br />
                                Can be used to display multiple images at once.                            </li>
                            <br></br>
                            <li>
                                <b>Option C: Concise Hero Banner</b> <br />
                                Keeps the hero section relatively more condensed.                             </li>
                        </ul>
                    </section>

                    {/* TAB SWITCHER */}

                    <TabSwitcher
                        tabs={tabs}
                        defaultTab="option-a"
                        onTabChange={setActiveTab}
                    />

                    {/* DYNAMIC CONTENT STARTS */}

                    <section>
                        <div className="titlebdr">
                            ANATOMY OF {activeTab === 'option-a' ? 'OPTION A' : activeTab === 'option-b' ? 'OPTION B' : 'OPTION C'}
                        </div>

                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div>
                                    <p className='title'>
                                        Desktop
                                    </p>

                                    <p>
                                        <strong>
                                            {currentVariant.anatomy.desktop.title}
                                        </strong>
                                    </p>

                                    <div className="flex-b container">
                                        <div className="horizBullets2 ">
                                            <ul className="bullets">
                                                {currentVariant.anatomy.desktop.items.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>

                                            <img
                                                className='full-width'
                                                src={currentVariant.anatomy.desktop.image}
                                                alt=""
                                            />
                                        </div>

                                        <div className='flex-b-sec-img'>
                                            <img
                                                src={currentVariant.anatomy.mobile.image_2}
                                                alt=""

                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='pagecont pt-40'>
                                <div className='conatiner-800'>
                                    <p className='title'>
                                        Mobile
                                    </p>

                                    <p>
                                        <strong>
                                            {currentVariant.anatomy.mobile.title}
                                        </strong>
                                    </p>

                                    <div className='flex-b'>

                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                {currentVariant.anatomy.mobile.items.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                            <img
                                                src={currentVariant.anatomy.mobile.image}
                                                alt=""
                                            />
                                        </div>

                                        <div className='flex-b-sec-img'>

                                            <img
                                                src={currentVariant.anatomy.mobile.image_2}
                                                alt=""
                                            />

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">
                            SPACING IN PIXELS
                        </div>

                        <div className='imageWrapBg2'>
                            <div className='pagecont dashed-border'>
                                <div className='container'>
                                    <p className='title'>
                                        Desktop
                                    </p>
                                    <div className="horizBullets2">
                                        <img
                                            className='full-width'
                                            src={currentVariant.spacing.desktop}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={`pagecont pt-40 ${activeTab === 'option-b' ? 'container' : 'container-800'}`}>
                                <div>
                                    <p className='title'>
                                        Mobile
                                    </p>
                                    <div className="horizBullets2">
                                        <img
                                            className={activeTab === 'option-b' ? 'full-width' : ''}
                                            src={currentVariant.spacing.mobile}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* INTERACTION Section - Hide for Option C */}
                    {tabs.find(tab => tab.id === activeTab)?.showInteraction && currentVariant.interaction && (
                        <section>
                            <div className="titlebdr mrgbtm">
                                INTERACTION {activeTab === 'option-a' ? 'OPTION A' : activeTab === 'option-b' ? 'OPTION B' : 'OPTION C'}
                            </div>

                            {Array.isArray(currentVariant.interaction) ? (
                                <ul className='bullets'>
                                    {currentVariant.interaction.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            ) : ( 
                                <p>{currentVariant.interaction}</p>
                            )}
                        </section>
                    )}

                    <section>
                        <div className="titlebdr mrgbtm">
                            CONTENT
                        </div>

                        <p>
                            {currentVariant.content}
                        </p>
                    </section>

                    <section>
                        <div className='titlebdr'>
                            GUIDELINES FOR {activeTab === 'option-a' ? 'OPTION A' : activeTab === 'option-b' ? 'OPTION B' : 'OPTION C'}

                        </div>

                        <div className='titlebg'>
                            Do's
                        </div>

                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    {currentVariant.guidelines.dos
                                        .slice(0, 2)
                                        .map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            <div>
                                <ul className='bullets'>
                                    {currentVariant.guidelines.dos
                                        .slice(2)
                                        .map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>
                            Don'ts
                        </div>

                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    {currentVariant.guidelines.donts
                                        .slice(0, 2)
                                        .map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            <div>
                                <ul className='bullets'>
                                    {currentVariant.guidelines.donts
                                        .slice(2)
                                        .map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
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

export default HeroBanner;