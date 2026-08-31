import React, { useState } from 'react';
import './TabSwitcher.scss';

const TabSwitcher = ({ tabs, defaultTab, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);

        if (onTabChange) {
            onTabChange(tabId);
        }
    };

    return (
        <section>
        <div className="tab-switcher-container">
            <div className="tab-switcher-header">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}

                        {tab.colorBox && (
                            <div className="color-box">
                                <div
                                    className="color1"
                                    style={{ background: tab.colors[0] }}
                                ></div>

                                <div
                                    className="color2"
                                    style={{ background: tab.colors[1] }}
                                ></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
        </section>
    );
};

export default TabSwitcher;