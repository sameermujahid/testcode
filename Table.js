import React from 'react';

const Table = ({ data }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd', background: '#f2f2f2' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Year</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Medals</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{item.Id}</td>
              <td style={{ padding: '10px' }}>{item.Year}</td>
              <td style={{ padding: '10px' }}>{item.Medals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
