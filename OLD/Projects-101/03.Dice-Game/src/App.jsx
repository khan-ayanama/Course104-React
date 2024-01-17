import React, { useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import StartGame from "./components/Start Game/StartGame";

const App = () => {
  const [isGameStarted,setGameStarted] = useState(false)
  function startGame(){
    setGameStarted(prev=>!prev)
  }
  return <React.StrictMode>
    <div className="container">
      {isGameStarted?<StartGame/>:<LandingPage toggle={startGame}/>}
    </div>
  </React.StrictMode>
}

export default App;