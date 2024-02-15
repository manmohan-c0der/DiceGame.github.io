import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";


function App() {
  const [isButtonToggle,setIsButtonToggle]=useState(false);
  const toggleGamePlay=()=>{
    setIsButtonToggle((prev)=>!prev);
  };
 
  return (
    <>
     {isButtonToggle? <GamePlay toggle={toggleGamePlay}/>:<StartGame toggle={toggleGamePlay} />}
    </>
  )
}

export default App
