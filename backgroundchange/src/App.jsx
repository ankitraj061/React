import { useState } from 'react'

import './App.css'

function red() {
  document.body.style.backgroundColor = 'red'
}

function blue() {
  document.body.style.backgroundColor = 'blue'
}

function green() {
  document.body.style.backgroundColor = 'green'
} 

function yellow() {
  document.body.style.backgroundColor = 'yellow'
} 

function black() {
  document.body.style.backgroundColor = 'black'
}

function white() {
  document.body.style.backgroundColor = 'white'
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='btn-container' >
    <button onClick={red}>Red</button>
     <button onClick={blue}>Blue</button>
     <button onClick={green}>Green</button>
     <button onClick={yellow}>Yellow</button>
     <button onClick={black}>Black</button>
     <button onClick={white}>White</button>

    </div>

    
    </>
  )
}

export default App
