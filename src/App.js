import React, {useState} from 'react';
import './App.css';

function App() {
  const [zahl,zahlSetzen] = useState(0);
  const clickPlus = e => zahlSetzen(zahl+1)
  const clickMinus = e => zahlSetzen(zahl-1) 
  
  return (
<div style={{animation:`roto ${10-zahl}s infinite`}}>
  <button onClick= {clickPlus}>+</button>
  <button onClick= {clickMinus}>-</button>
  {zahl}
</div>
    )};

export default App;
