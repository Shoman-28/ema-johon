
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      
      <header className="App-header">

      <Nayok></Nayok>

      </header>
    </div>
  );
}

function Nayok(){

  return( 
  <div>
      <h1>shoman</h1>
  </div>
  )
  
}


export default App;
