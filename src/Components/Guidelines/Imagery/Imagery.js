import React, { useState } from 'react';
import './Imagery.scss';
import TabSwitcher from '../../../Utils/TabSwitcher/TabSwitcher';

const Imagery = () => {
    const [activeTab, setActiveTab] = useState('doctors');

    const tabs = [
        { id: 'doctors', label: 'Doctors & Patient Care' },
        { id: 'treatments', label: 'Cancer Treatments' },
        { id: 'education', label: 'Education & Research' },
        { id: 'awareness', label: 'Awareness' }
    ];

    // ✅ Each tab = array of rows. Each row = array of images.
    const imagesByTab = {
        doctors: [
            [
                require('../../../Assets/Images/image-library-doctor-patient-care-1.webp'),
                require('../../../Assets/Images/image-library-doctor-patient-care-2.webp')
            ],
            [
                require('../../../Assets/Images/image-library-doctor-patient-care-3.webp'),
                require('../../../Assets/Images/image-library-doctor-patient-care-4.webp')
            ],
            [
                require('../../../Assets/Images/image-library-doctor-patient-care-5.webp'),
                require('../../../Assets/Images/image-library-doctor-patient-care-6.webp'),
                require('../../../Assets/Images/image-library-doctor-patient-care-7.webp')
            ],
            [
                require('../../../Assets/Images/image-library-doctor-patient-care-8.webp')
            ],
            [
                require('../../../Assets/Images/image-library-doctor-patient-care-13.webp'),
                require('../../../Assets/Images/image-library-doctor-patient-care-9.webp')
            ],
            [
                require('../../../Assets/Images/image-library-doctor-patient-care-10.webp'),
                require('../../../Assets/Images/image-library-doctor-patient-care-11.webp')



            ],
            [
                require('../../../Assets/Images/image-library-doctor-patient-care-12.webp'),
                require('../../../Assets/Images/image-library-doctor-patient-care-14.webp'),
                require('../../../Assets/Images/image-library-doctor-patient-care-15.webp')
            ], [
                require('../../../Assets/Images/image-library-doctor-patient-care-16.webp')

            ]
        ],
        treatments: [
            [
                require('../../../Assets/Images/image-library-cancer-treatments-1.webp'),
                require('../../../Assets/Images/image-library-cancer-treatments-2.webp')
            ],
            [                require('../../../Assets/Images/image-library-cancer-treatments-4.webp'),
                require('../../../Assets/Images/image-library-cancer-treatments-6.webp')
            ],
            [                require('../../../Assets/Images/image-library-cancer-treatments-8.webp'),
                require('../../../Assets/Images/image-library-cancer-treatments-9.webp')
            ],
            [
                require('../../../Assets/Images/image-library-cancer-treatments-5.webp')
            ],
            [
                require('../../../Assets/Images/image-library-cancer-treatments-10.webp'),
                require('../../../Assets/Images/image-library-cancer-treatments-11.webp')
            ],
            [
                require('../../../Assets/Images/image-library-cancer-treatments-7.webp')
            ]
        ],
        education: [
            [
                require('../../../Assets/Images/image-library-education-research-1.webp'),
                require('../../../Assets/Images/image-library-education-research-2.webp')
            ],
            [
                require('../../../Assets/Images/image-library-education-research-3.webp')
            ],
            [
                require('../../../Assets/Images/image-library-education-research-4.webp'),
                require('../../../Assets/Images/image-library-education-research-5.webp')
            ],
            [
                require('../../../Assets/Images/image-library-education-research-6.webp'),
                require('../../../Assets/Images/image-library-education-research-7.webp')
            ],
            [
                require('../../../Assets/Images/image-library-education-research-8.webp'),
                require('../../../Assets/Images/image-library-education-research-9.webp')
            ],
            [
                require('../../../Assets/Images/image-library-education-research-10.webp'),
                require('../../../Assets/Images/image-library-education-research-11.webp')
            ],
            [
                require('../../../Assets/Images/image-library-education-research-12.webp'),
                require('../../../Assets/Images/image-library-education-research-13.webp')
            ]
        ],
        awareness: [
            [
                require('../../../Assets/Images/image-library-awareness-1.webp'),
                require('../../../Assets/Images/image-library-awareness-2.webp')
            ],
            [
                require('../../../Assets/Images/image-library-awareness-3.webp')
            ],
            [
                require('../../../Assets/Images/image-library-awareness-4.webp'),
                require('../../../Assets/Images/image-library-awareness-5.webp')

            ],
            [
                require('../../../Assets/Images/image-library-awareness-6.webp'),
                require('../../../Assets/Images/image-library-awareness-7.webp')
            ]
        ]
    };

    return (
        <div className='ImageryContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>4.</span> Image Library</h1>
                </div>
            </div>

            <div className='page-content padtp0'>
                <div className="container">

                    {/* INTRO */}
                    <section className='padtp2'>
                        <p>Images play a key role in communicating care, trust, and reassurance. In a healthcare setting, imagery should support the user emotionally while helping them better understand the context. Photography and visuals should feel human, calm, and relevant adding meaning without overwhelming the user.</p>
                    </section>

                    {/* PRINCIPLES */}
                    <section>
                        <div className="titlebdr mrgbtm">PRINCIPLES</div>
                        <div className="twocolumntext" style={{ paddingBottom: '20px', borderBottom: '1px solid', marginBottom: '10px' }}>
                            <div>
                                <ul className="bullets">
                                    <li><b>Hopeful & Positive</b><br />We avoid sad or distressing visuals. Images should feel uplifting, calm, and reassuring.</li>
                                    <br />
                                    <li><b>Human & Relatable</b><br />Use real, everyday moments that patients and caregivers can relate to.</li>
                                    <br />
                                    <li><b>Indian Context</b><br />Prioritise Indian faces, environments, and cultural context to ensure familiarity and inclusivity.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li><b>Respectful & Dignified</b><br />Depict patients and caregivers with respect. Avoid portraying vulnerability in a way that feels uncomfortable or intrusive.</li>
                                    <br />
                                    <li><b>Clean & Calm</b><br />Maintain a light, uncluttered visual style that supports clarity and ease.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <p>Before using imagery, consider:</p>
                    <ul className='bullets'>
                        <li>What emotion should this image convey? (e.g., trust, hope, reassurance)</li>
                        <li>Does this image support the user's journey or understanding?</li>
                    </ul>
                    <br />
                    <p>Please follow these guidelines when selecting and using imagery.</p>

                    {/* IMAGE LIBRARY */}
                    <section>
                        <div className="titlebdr mrgbtm">IMAGE LIBRARY</div>

                        <div className="no-extra-space">
                            <TabSwitcher
                                tabs={tabs}
                                defaultTab="doctors"
                                onTabChange={setActiveTab}
                            />
                        </div>

                        {/* Dynamic Grid */}
                        <div className='example-images-grid'>
                            <div className='example-images'>
                                {imagesByTab[activeTab].map((row, rowIndex) => (
                                    <div key={rowIndex}>
                                        {row.map((img, imgIndex) => (
                                            <img key={imgIndex} src={img} alt="" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
{/* This code is for on click image open */}
                        {/* <div className='example-images-grid'>
                            <div className='example-images'>
                                {imagesByTab[activeTab].map((row, rowIndex) => (
                                    <div key={rowIndex}>
                                        {row.map((img, imgIndex) => (
                                            <a
                                                key={imgIndex}
                                                href={img}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img src={img} alt="" />
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </section>

                    {/* GUIDELINES */}
                    <div className="do-donts">
                        <div className="titlebdr">GUIDELINES</div>

                        <div className="titlebg">Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Use imagery that feels hopeful, calm, and reassuring</li>
                                    <li>Show real, human interactions (doctor–patient, caregiver support)</li>
                                    <li>Use Indian faces and local contexts to ensure relatability</li>
                                    <li>Choose natural, candid moments over staged visuals</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Ensure images are relevant to the content they support</li>
                                    <li>Maintain clean, well-lit environments</li>
                                    <li>Use imagery that adds meaning, not just decoration</li>
                                </ul>
                            </div>
                        </div>

                        <div className="titlebg red">Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Don't use sad, distressing, or fear-inducing images</li>
                                    <li>Don't show graphic medical procedures or discomfort</li>
                                    <li>Don't use overly staged or artificial stock photos</li>
                                    <li>Don't use non-representative or foreign contexts</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Don't use low-quality, pixelated, or poorly lit images</li>
                                    <li>Don't include visuals that feel invasive or disrespectful</li>
                                    <li>Don't use imagery that does not add value to the content</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Imagery;