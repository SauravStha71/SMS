import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-pink-600'>Welcome to Vite + React</h1>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            Count: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
