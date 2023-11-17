import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: '#4a90e2',
    color: '#fff',
  };

  const contactInfoStyle = {
    background: '#eee',
    padding: '10px',
    textAlign: 'center',
    marginBottom: '20px',
  };

  return (
    <div>
      <div style={contactInfoStyle}>
        <p>Name: Shaik Sameer Mujahid</p>
        <p>Email: sameermujahid7777@gmail.com</p>
        <p>Contact: 8317506633</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button
          style={activeTab === 'table' ? activeButtonStyle : buttonStyle}
          onClick={() => onTabChange('table')}
          disabled={activeTab === 'table'}
        >
          Table
        </button>
        <button
          style={activeTab === 'chart' ? activeButtonStyle : buttonStyle}
          onClick={() => onTabChange('chart')}
          disabled={activeTab === 'chart'}
        >
          Chart
        </button>
      </div>
    </div>
  );
};

export default Tabs;
