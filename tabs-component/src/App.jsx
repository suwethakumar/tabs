// src/App.jsx
import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

const App = () => {
  const tabs = [
    { label: 'Home', content: <div>Welcome to the Home tab!</div> },
    { label: 'Profile', content: <div>View your profile details here.</div> },
    { label: 'Settings', content: <div>Adjust your settings in this tab.</div> },
  ];

  return (
    <div className="App">
      <h1>Advanced Tabs Component</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
