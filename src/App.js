import './App.css';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

// Populate Items
const items = [
  {
    id: 1,
    value: 'Option 1',
  },
  {
    id: 2,
    value: 'Option 2',
  },
  {
    id: 3,
    value: 'Option 3',
  },
  {
    id: 4,
    value: 'Option 4',
  },
  {
    id: 5,
    value: 'Option 5',
  },
  {
    id: 6,
    value: 'Option 6',
  },
];

function App() {
  const [selection, setSelection] = useState([]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-title">Hive Take-Home Challenge</div>
        <div className="App-title">Minkyu (Paul) Choi's Dropdown Component</div>
        <Dropdown selection={selection} setSelection={setSelection} items={items} />
      </div>
    </div>
  );
}

export default App;
