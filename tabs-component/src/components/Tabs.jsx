// src/components/Tabs.jsx
import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (event, index) => {
    if (event.key === 'ArrowRight') {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    } else if (event.key === 'ArrowLeft') {
      setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
    }
  };

  return (
    <div className="tabs-container">
      <div className="tab-headers" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-header ${index === activeTab ? 'active' : ''}`}
            role="tab"
            aria-selected={index === activeTab}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content" role="tabpanel">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
