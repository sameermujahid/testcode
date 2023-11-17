import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="Medals" stroke="#4a90e2" strokeWidth={2} dot={{ fill: '#4a90e2' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
