import React from 'react';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <div
        className="w-full min-h-screen "
        style={{
          backgroundImage: 'url(./bg.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
}

export default App;
