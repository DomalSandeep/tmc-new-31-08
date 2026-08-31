import React, { useState } from 'react';
import './PreloginHomepage.scss';
import TabSwitcher from '../../../Utils/TabSwitcher/TabSwitcher';

const PreloginHomepage = () => {
    const [activeTab, setActiveTab] = useState('small');

    const tabs = [
        {
            id: 'small',
            label: 'Small'
        },
        {
            id: 'medium',
            label: 'Medium'
        },
        {
            id: 'large',
            label: 'Large'
        }
    ];

    const homepageVariants = {
        small: {
            description: "The Pre-login Homepage acts as the primary public-facing entry point to the platform. It introduces users to the institution, highlights key services and journeys, and provides immediate access to high-priority. You can choose between three homepage lengths based on how much content you'd like to showcase: Small, Medium or Large.",
            usage: [
                'Designed for small-scale institutions such as clinics, specialty centres, and community hospitals',
                'Provide a focused, concise landing experience without overwhelming visitors',
                'Highlight core services, key staff, and essential patient information',
                'Enable quick access to appointments, contact details, and directions',
                'Establish trust with a professional, streamlined presence'
            ],
            image: require('../../../Assets/Images/pre-login-homepage.webp')
        },

        medium: {
            description: 'The Pre-login Homepage acts as the primary public-facing entry point to the platform. It introduces users to the institution, highlights key services and journeys, and provides immediate access to high-priority. You can choose between three homepage lengths based on how much content you\'d like to showcase: Concise, Standard, or Comprehensive.',
            usage: [
                'Designed for medium-scale institutions such as multi-specialty hospitals, regional medical centres, and teaching hospitals',
                'Showcase a broader range of departments, specialties, and patient services',
                'Highlight research initiatives, academic programmes, and institutional achievements',
                'Provide structured navigation across multiple service lines and patient journeys',
                'Balance depth of content with ease of discovery for diverse user needs'
            ],
            image: require('../../../Assets/Images/pre-login-homepage-medium.webp')
        },

        large: {
            description: "The Pre-login Homepage acts as the primary public-facing entry point to the platform. It introduces users to the institution, highlights key services and journeys, and provides immediate access to high-priority. You can choose between three homepage lengths based on how much content you'd like to showcase: Concise, Standard, or Comprehensive.",
            usage: [
                'Designed for large-scale institutions such as national referral centres, cancer networks, and multi-campus hospital systems',
                'Accommodate extensive service catalogues, research portfolios, and patient support programmes',
                'Surface complex organisational structures including centres of excellence, affiliated units, and international services',
                'Support diverse audiences — patients, caregivers, researchers, donors, and referring physicians',
                'Deliver a comprehensive digital presence that reflects institutional scale, legacy, and impact'
            ],
            image: require('../../../Assets/Images/pre-login-homepage-large.webp')
        }
    };

    const currentVariant = homepageVariants[activeTab];

    return (
        <div className='PreloginHomepageContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1>
                        <span>1.</span> Pre-login Homepage
                    </h1>
                </div>
            </div>

            <div className='page-content padtp0'>
                <div className="container">

                    <section className='padtp2'>
                        {currentVariant.description}
                    </section>

                        <TabSwitcher
                            tabs={tabs}
                            defaultTab="small"
                            onTabChange={setActiveTab}
                        />

                    <section>
                        <div className="titlebdr mrgbtm">
                            USAGE
                        </div>

                        <ul className='bullets nospace'>
                            {currentVariant.usage.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>


                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">
                            VARIANTS
                        </div>

                        <div className='imageWrap'>
                            <img
                                className='full-width'
                                src={currentVariant.image}
                                alt={`${activeTab} pre-login homepage`}
                            />
                        </div>
                    </section>

                    <section>
                        <div className="do-donts">
                            <div className="titlebdr">
                                GUIDELINES
                            </div>

                            <div className="titlebg">
                                Do's
                            </div>

                            <div className="twocolumntext">
                                <div>
                                    <ul className="bullets">
                                        <li>
                                            Prioritise high-frequency user journeys above the fold
                                        </li>

                                        <li>
                                            Maintain strong visual hierarchy between content sections
                                        </li>

                                        <li>
                                            Use clear and accessible CTAs
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="bullets">
                                        <li>
                                            Reinforce institutional trust through branding and impact indicators
                                        </li>

                                        <li>
                                            Keep homepage sections modular and scannable
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="titlebg red">
                                Don'ts
                            </div>

                            <div className="twocolumntext">
                                <div>
                                    <ul className="bullets">
                                        <li>
                                            Don't overcrowd the homepage with excessive promotional content
                                        </li>

                                        <li>
                                            Don't overload the first fold with too many competing CTAs
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="bullets">
                                        <li>
                                            Don't use inconsistent navigation patterns across sections
                                        </li>

                                        <li>
                                            Don't rely solely on visuals without clear supporting content
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PreloginHomepage;