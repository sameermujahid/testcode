import React, { useState } from 'react';
import Table from './components/Table';
import Chart from './components/Chart';
import Tabs from './components/Tabs';
import dummyData from './dummyData.json';

const App = () => {
  const [activeTab, setActiveTab] = useState('table');

  return (
    <div>
      <div>
        {/* Your personal details box here */}
      </div>

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'table' && <Table data={dummyData} />}
      {activeTab === 'chart' && <Chart data={dummyData} />}
    </div>
  );
};

export default App;
