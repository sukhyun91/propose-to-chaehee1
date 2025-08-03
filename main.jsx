import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30vh', fontFamily: 'sans-serif' }}>
      <h1>To. 채희에게 💌</h1>
      <p>우리의 미래를 상상해볼래?</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);