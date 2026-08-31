import React from 'react';

const InterstitialPage = () => {
    return (
        <div className='InterstitialContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>9.</span> Interstitial Page</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The interstitial Page acts as a transitional decision-making layer within a user journey. It helps users choose between multiple pathways, actions, or workflows before proceeding further into a task or process.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Guide users into the correct workflow or journey</li>
                            <li>Present multiple entry paths before a process begins</li>
                            <li>Simplify complex decision-making</li>
                            <li>Reduce friction in task-based journeys</li>
                            <li>Improve clarity before high-intent actions</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>Booking appointment</li>
                                <li>Donation</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrapBg padbtm'>
                            <img className='full-width ' src={require('../../../Assets/Images/interstitial-page.webp')} alt="" />
                        
                        </div>
                    </section>
                    <section>
    <div className='titlebdr'>GUIDELINES</div>
    
    <div className='titlebg'>Do's</div>
    <div className="twocolumntext">
        <div>
            <ul className='bullets'>
                <li>Present only essential pathways</li>
                <li>Keep interactions simple and focused</li>
                <li>Use concise supporting descriptions</li>
            </ul>
        </div>
        <div>
            <ul className='bullets'>
                <li>Clearly distinguish between available options</li>
                <li>Maintain strong visual hierarchy around the primary decision</li>
            </ul>
        </div>
    </div>
    
    <div className='titlebg red'>Don'ts</div>
    <div className="twocolumntext">
        <div>
            <ul className='bullets'>
                <li>Don't overload the page with too many options</li>
                <li>Don't introduce unrelated content or distractions</li>
                                <li>Don't use long descriptive paragraphs</li>

            </ul>
        </div>
        <div>
            <ul className='bullets'>
                <li>Don’t make users guess which pathway applies to them</li>
                <li>Don’t bury the primary action beneath secondary information</li>
            </ul>
        </div>
    </div>
</section>
                    
                </div>
            </div>
        </div>
    );
};

export default InterstitialPage;
