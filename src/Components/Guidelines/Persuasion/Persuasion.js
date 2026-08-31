import React from 'react';
import './Persuasion.scss';

const Persuasion = () => {
    return (
        <div className='PersuasionContent'>
            <div className='page-content'>
                <div className="container">
                    <h1><span>10.</span> Persuasion</h1>
                    <section>
                       Persuasive design is an area of design practice that focuses on influencing human behavior through a product’s or service’s characteristics. 
                       <br /><br />
                       The Recipe for Persuasive Design – Some principles of Social Influence:
                       <br /><br />
                       <div className="textcontent">
                            <div>
                                <ul className='bullets'>
                                    <li>
                                        <b>Be Likeable!</b> 
                                        <br/>You are more likely to agree to requests made by the people you like. From your closest friends to complete strangers who you are attracted to. Major brands often use celebrities, athletes and models to make products and services more favorable. If you have a friendly presence that is attractive and user-friendly (i.e., users can navigate easily and intuitively around your simple, pleasing design), you’ll have a far better chance of engaging them and removing uncertainty.
                                    </li>
                                    <li>
                                        <b>Social Proof</b> 
                                        <br/>People don’t always know why they behave the way they do. We look to others to guide our behaviour and decide what the “right” thing to do is. We look for validation for our actions and decisions from experts, celebrities, previous users, large groups or peers. Show the number of people who like the course or have taken this course eg. 3rd party reviews, number of people who have taken the course
                                    </li>
                                    <li>
                                        <b>Obedience to Authority</b> 
                                        <br/>People tend to obey experts and authoritative figures of high-status as they are regarded as highly trustworthy. Authority is usually conveyed through titles (Dr., Prof., CEO), visual appearance and success of a brand. eg. Research findings, Celebrity endorsements, trust icons
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>
                                        <b>Scarcity</b> 
                                        <br/>People attach more value to things that are limited in number or are available for a limited time. Limited inclusion, creating a sense of exclusivity by making the service “invite-only” or previewing limited information without a signup, is also a major aspect of the scarcity principle. It triggers a psychological phenomenon known as FOMO, or “Fear of Missing Out”.
                                    </li>
                                    <li>
                                        <b>Reciprocity</b> 
                                        <br/>Offering something of value upfront to your users will make them feel indebted to you and more to take a desired action. A common example of this is offering free ebooks, blog posts, podcasts or other free content in return for the user’s email address.
                                    </li>
                                </ul>
                            </div>
                       </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Persuasion;