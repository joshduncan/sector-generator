import React from 'react';
import './App.css';
import Environment from './Components/Environment/Environment'
import Ruins from './Components/Ruins/Ruins';
import Rot from './Components/Rot/Rot';
import Threats from './Components/Threats/Threats';

function App() {
  return (
    <div style={{display: 'block'}}>
      <div className='container'>
        <button>
          Completely Random
        </button>
        <button>
          Guided Creation
        </button>
      </div>
      <div className='container'>
        <Environment/>
      </div>
      <div className='container'>
        <Ruins/>
      </div>
      <div className='container'>
        <Rot/>
      </div>
      <div className='container'>
        <Threats/>
      </div>
    </div>
  )
}

export default App;
