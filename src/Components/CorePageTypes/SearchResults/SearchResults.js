import React from 'react';
import './SearchResults.scss';

const SearchResults = () => {
    return (
        <div className='SearchResultsContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>10.</span> Search Results</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Search Results Page helps users quickly discover relevant content, services, pages, resources, and actions across the platform. It is designed to support exploratory browsing and direct task completion through structured results, filtering, categorisation, and clear information hierarchy.</p>
                    </section>

                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrap'>
                            <img className='full-width' src={require('../../../Assets/Images/search-page.webp')} alt="" />
                        </div>
                    </section>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default SearchResults;