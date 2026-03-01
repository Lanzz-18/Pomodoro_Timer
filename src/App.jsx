import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // if work tab is pressed -> set timer to 25, if break is pressed set to 5. have work as default tab
  const [isRunning, setIsRunning] = useState(false)
  const [isWork, setIsWork] = useState(true)  
  const [seconds, setSeconds] = useState(25 * 60) // Stores seconds count (25mins)

  const handleTab = (work) => {
    setIsWork(work)
    setIsRunning(false)
    setSeconds(work ? 25 * 60 : 5 * 60)
  }

  useEffect(() => {
    if(!isRunning){
      return;
    }
    if(seconds < 0){
      return;
    }
    const timer = setInterval(() => {
      setSeconds(prev => prev -1)
    }, 1000)
    return () => clearInterval(timer)
  }, [isRunning])

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const secondsToDisplay = secs % 60
    return `${String(minutes).padStart(2, "0")}:${String(secondsToDisplay).padStart(2, "0")}`
  }

  return (
    <>
      <div className="tab-group">
        <p id="work" className={isWork ? "selected-tab" : ""} onClick={() => handleTab(true)}>Work</p>
        <p id="break" className={!isWork ? "selected-tab" : ""} onClick={() => handleTab(false)}>Break</p>
      </div>
      <div id="time-display">{formatTime(seconds)}</div>
      <div className="button-group">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={() => {setIsRunning(false); setSeconds(isWork ? 25 * 60 : 5 * 60)}}>Reset</button>
      </div>
    </>
  )
}

export default App
