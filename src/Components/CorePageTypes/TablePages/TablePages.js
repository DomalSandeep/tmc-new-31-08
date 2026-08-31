import React from 'react';
import './TablePages.scss';

const TablePages = () => {
    return (
        <div className='TablePagesContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>4.</span> Table Pages</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Tables Page is used to display structured, data-heavy information in a clear and scannable format. It supports comparison, selection, scheduling, resource listing, and action-based workflows while maintaining readability across desktop and mobile devices.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Display structured datasets and grouped information</li>
                            <li>Support comparison between multiple entries</li>
                            <li>Enable selection and action-based workflows</li>
                            <li>Present schedules, fees, resources, and registrations clearly</li>
                            <li>Improve scan ability for repetitive or tabular content</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>Inner Pages</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrap'>
                            <img className='full-width' src={require('../../../Assets/Images/table-page.webp')} alt="" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TablePages;