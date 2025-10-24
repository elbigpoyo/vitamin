import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

const NotHome = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    if (count > 5) {
      setText("You passed 5!")
    } else {
      setText("")
    }
  }, [count]
  )

  function increaseCount() {
    setCount(count + 1)
  }

  return (
    <div>
      <Navbar />
      <h2>Not Home Page</h2>
      <h3>Counter: { count }</h3>
      <h3>{ text }</h3>
      <button onClick={ increaseCount }>Increase</button>
      <button onClick={ () => setCount(count - 1) }>Decrease</button>
    </div>
  )
}

export default NotHome
