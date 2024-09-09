import logo from './logo.svg';
import React, { useState } from 'react';

function App() {
  const containerstyle={
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
  const[inputValue,setInputValue]=useState('');
  const handleOnChange=(event)=>{
    setInputValue(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
    <div style={containerstyle}>
Let Display Something: {inputValue}
    </div>
    <div style={containerstyle}>
 <input type='text' onChange={handleOnChange} value={inputValue}></input>
    </div>
      </header>
    </div>
  );
}

export default App;
