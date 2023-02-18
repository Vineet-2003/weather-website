import React from 'react';
import './app.css'
import {Header, Slidebar} from './components/index.js';

const App = () => {
  return (
    <div className='header'>
      <Header />
      <Slidebar />
    </div>
  )
}

export default App;