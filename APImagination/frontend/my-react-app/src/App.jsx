import { useState } from 'react'
import './App.css'

function App() {
  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick = { handleClick }>Test</button>
    </>
  )
};

export default App
