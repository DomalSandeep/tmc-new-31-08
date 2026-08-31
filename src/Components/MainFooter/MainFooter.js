import React from 'react';
import './MainFooter.scss';
import zeuxLogo from '../../Assets/Images/zeux-logo.svg';
import mail from '../../Assets/Images/mail.svg';
import web from '../../Assets/Images/web.svg';

const MainFooter = () => {
    return (
        <footer className='MainFooter'>
            <div className='footer-content'>
                <div className='footer-brand'>
                    <div className='logo-container'>
                        <img src={zeuxLogo} alt="Zeux Innovation" className="brand-logo" />
                    </div>
                    <div className='brand-info'>
                        <p className="designer-credit">Designed by ZEUX Innovation</p>
                        <div className='contact-wrapper'>
                            <div className='contact-links'>
                                <div className='contact-item'>
                                    <img src={mail} alt="Email" className="contact-icon" />
                                    <a href="mailto:ux@zeuxinnovation.com">ux@zeuxinnovation.com</a>
                                </div>
                                <div className='contact-item'>
                                    <img src={web} alt="Website" className="contact-icon" />
                                    <a href="https://www.zeuxinnovation.com" target="_blank" rel="noopener noreferrer" className="contact-link">zeuxinnovation.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;