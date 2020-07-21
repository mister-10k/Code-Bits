import React from 'react';
import './App.css';
import Typed from 'react-typed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typed
            strings={[
              'Rate this typing effect',
              'out of 10 in the comments.',
            ]}
            typeSpeed={70}
            loop
        />
      </header>
    </div>
  );
}

export default App;
