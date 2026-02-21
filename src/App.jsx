import { useState } from 'react'
import './App.css'

function App() {

  const workTab = document.getElementById("work")
  const breakTab = document.getElementById("break")

  return (
    <>
      <div className="tab-group">
        <p id="work">Work</p>
        <p id="break">Break</p>
      </div>
      <div id="time-display"></div>
      <div className="button-group">
        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </>
  )
}

export default App
