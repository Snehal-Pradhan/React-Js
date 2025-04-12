import React, { useEffect, useState } from 'react';

function FetchDataEffect() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();
      setData(jsonData);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '16px', fontFamily: '"Segoe UI", sans-serif' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '16px', fontFamily: '"Segoe UI", sans-serif' }}>
      {data.map(({ id, title, body }) => (
        <div
          key={id}
          style={{
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: '#f2f2f2',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginBottom: '16px'
          }}
        >
          <h2 style={{ margin: '0 0 8px', color: '#333' }}>{title}</h2>
          <p style={{ margin: 0, color: '#666' }}>{body}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchDataEffect;
