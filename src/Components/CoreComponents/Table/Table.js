import React from 'react';
import './Table.scss';

const Table = () => {
    return (
        <div className='TableContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>26.</span>  Tables</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        A table is a structured format used to organize information into rows and columns, making it easier to compare, scan, and understand data.                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets'>
                            <li>Display structured and data-heavy information</li>
                            <li>Compare multiple rows and columns of related content</li>
                            <li>Support selection-based workflows within forms and registrations</li>
                            <li>Provide quick access to linked resources or actions</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <div className="horizBullets">
                                <ul className='bullets nospace'>
                                    <li>Within forms</li>
                                    <li>Information pages</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrapBg padbtm'>
                            <div className='pagecont'>
                                <p className='title'>
                                    Desktop
                                </p>
                                <div >
                                    <p><strong>  1. Informational Table</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/table-image-1.webp')} alt="" />
                                </div>
                                <br></br>

                                <div >
                                    <p ><strong>   2. Selectable table</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/table-image-2.webp')} alt="" />
                                </div>

                            </div>
                            <div className='pagecont'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div >
                                    <p><strong>   1. Informational Table</strong></p>
                                    <br></br>
                                    <img className='full-width' src={require('../../../Assets/Images/table-image-3.webp')} alt="" />
                                </div>
                                <br></br>

                                <div >
                                    <p ><strong>   2. Selectable table</strong></p>
                                    <img className='full-width' src={require('../../../Assets/Images/table-image-4.webp')} alt="" />
                                </div>

                            </div>

                        </div>
                        <p class="title pt-28">Desktop & Mobile</p>
                        <ul class="">
                            <li>
                                <b>1. Informational Table</b> <br />
                                Used for displaying structured information for viewing, comparison, navigation, or associated actions.                            </li>
                            <br></br>
                            <li>
                                <b>2. Selectable Table</b> <br />
                                Used when users need to select one or multiple rows within a table-based workflow.                            </li>

                        </ul>
                    </section>


                    <section>
                        <div className="titlebdr ">ANATOMY</div>
                        <br></br>
                        <ul className='bullets'>
                            <li>Header – labels for each column.</li>
                            <li>Rows – horizontal groupings of data items.</li>
                        </ul>
                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <p className='title'>
                                    Desktop
                                </p>
                                <div className='container-800'>
                                    <div>
                                        <p><b>1. Information Table</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Table header (optional)- #E8E8E8</li>
                                                <li>B. Header text Typography Style - Desktop Heading 4</li>
                                                <li>C. Text Typography Style - Desktop Body default</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Alternate Row Fill - #E6F0FF</li>
                                                <li>E. Column stroke - #8F8F8F</li>
                                                <li>F. Link</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/table-image-5.webp')} alt="" />
                                    </div>
                                    <div className="pt-40">
                                        <p><b>2. Selection table</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Table header (optional)- #E8E8E8</li>
                                                <li>B. Header text Typography Style - Desktop Heading 4</li>
                                                <li>C. Text Typography Style - Desktop Body default</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Alternate Row Fill - #E6F0FF</li>
                                                <li>E. Column stroke - #8F8F8F</li>
                                                <li>F. Radio Button/ Checkbox - 24px</li>
                                            </ul>
                                        </div>
                                        <img className='full-width' src={require('../../../Assets/Images/table-image-6.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='pagecont pt-40'>
                                <p className='title'>
                                    Mobile
                                </p>
                                <div className='container-900'>
                                    <div>
                                        <p><b>1. Information Table</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Table header (optional)- #E8E8E8</li>
                                                <li>B. Header text Typography Style - Mobile Heading 4</li>
                                                <li>C. Text Typography Style - Mobile Body default</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Alternate Row Fill - #E6F0FF</li>
                                                <li>E. Column stroke - #8F8F8F</li>
                                                <li>F. Sticky Primary Column - X 4, Y 6, Blur 28, #6A6A6A 33%</li>
                                            </ul>
                                        </div>
                                        <img src={require('../../../Assets/Images/table-image-7.webp')} alt="" />
                                    </div>
                                    <div className="pt-40">
                                        <p><b>2. Selection table</b></p>
                                        <div className="horizBullets2">
                                            <ul className="bullets">
                                                <li>A. Table header (optional)- #E8E8E8</li>
                                                <li>B. Header text Typography Style - Mobile body small</li>
                                                <li>C. Text Typography Style - Mobile Body default</li>
                                            </ul>
                                            <ul className="bullets">
                                                <li>D. Alternate Row Fill - #E6F0FF</li>
                                                <li>E. Column stroke - #8F8F8F</li>
                                                <li>F. Radio Button/ Checkbox - 20px</li>
                                                <li>G. Sticky Primary Column - X 4, Y 6, Blur 28, #6A6A6A 33%</li>
                                            </ul>
                                        </div>
                                        <img src={require('../../../Assets/Images/table-image-8.webp')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="titlebdr mrgbtm">RESPONSIVE BEHAVOUR (MOBILE)</div>
                        When tables contain actions or more than three columns on mobile, the primary content column becomes sticky to maintain context while users scroll horizontally through additional information.
                        <br></br>
                        <br></br>
                        The sticky column should contain the main identifying information on which the remaining row data is based.
                        <br></br>
                        <br></br>
                        For selectable tables, the radio button or checkbox column must always remain sticky, so users can clearly select rows without losing context.
                    </section>

                    <section>
                        <div className="titlebdr ">SPACING IN PIXELS</div>
                        <br></br>

                        <div className='imageWrapBg2  '>
                            <div className='pagecont  dashed-border '  >
                                <p className='title'>
                                    Desktop
                                </p>
                                <div className='container-800'>
                                    <p><b>  1. Information Table</b></p>
                                    <br></br>
                                    <img className='full-width ' src={require('../../../Assets/Images/table-image-9.webp')} alt="" />
                                    <br></br>
                                    <p><b>    2. Selection table</b></p>
                                    <br></br>

                                    <img className='full-width ' src={require('../../../Assets/Images/table-image-10.webp')} alt="" />
                                </div>
                            </div>
                            <div className='pagecont pt-40 '  >
                                <p className='title'>
                                    Mobile
                                </p>
                                <img src={require('../../../Assets/Images/table-image-11.webp')} alt="" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='titlebdr'>GUIDELINES</div>

                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use tables for structured, comparable information.</li>
                                    <li>Keep content aligned and consistently formatted.</li>
                                    <li>Use alternating row fills & dividers to improve scan ability.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='bullets'>
                                    <li>Ensure interactive rows and actions remain clearly identifiable.</li>
                                    <li>Prioritise essential information in mobile layouts.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Do not use tables for long-form textual content.</li>
                                    <li>Do not overload tables with too many columns.</li>
                                    <li>Do not truncate critical information without context.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Table;