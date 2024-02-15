import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay=({toggle})=>{
  const [errorShow,setErrorShow]=useState();
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [showRules,setShowRules]=useState(false);
  const genRandomNum=(min,max)=>{
    //  console.log(Math.floor(Math.random()*(max-min)+min));
     
    return Math.floor(Math.random()*(max-min)+min);
   }

   const roleDice=()=>{
    if(!selectedNumber){
      setErrorShow("You have not selected any number");
      return;

    }
    const randomNum=genRandomNum(1,7);
    setCurrentDice((prev)=>randomNum);
    if(selectedNumber===randomNum){
      setScore((prev)=>prev+randomNum)
    }
    else{
      setScore((prev)=>prev-1);
    }
    setSelectedNumber(false);
   }

   const resetScore=()=>{
    setScore(0);
   }

  return ( <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
     <NumberSelector setErrorShow={setErrorShow} errorShow={errorShow} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/></div>
     <RoleDice currentDice={currentDice} roleDice={roleDice}/>
     <div className="btns">
      <OutlinedButton onClick={resetScore}>Reset</OutlinedButton>
      <Button onClick={()=>setShowRules((prev)=>!prev)} >{showRules ? "Hide":"Show"}</Button>
     </div>
     {showRules && <Rules/>}

    <Button onClick={toggle} >Back To Previous Page </Button>
  </MainContainer> )
}
export default GamePlay;

const MainContainer=styled.div`
   padding: 70px;
    .top_section{
      display: flex;
      justify-content: space-between;
      align-items: end;
    } 
    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:10px;
    }
`
const Button=styled.button`
      background-color:#000000;
      color:white;
      padding: 10px 18px;
      border-radius: 5px;
      min-width: 220px;
      border:none;
      font-size: 16px;
      border:1px solid transparent;
      transition: 0.5s background ease-in;
      cursor: pointer;
      &:hover {
        background-color:white;
        border:1px solid black;
        color:black;
        font-size: 16px;
        font-weight:700;
        transition: 0.3s background ease-in;
      }

`;

const OutlinedButton=styled.button`
      background-color:white;
      color:black;
      padding: 10px 18px;
      border-radius: 5px;
      min-width: 220px;
      border:none;
      font-size: 16px;
      font-weight: 700;
      border:1px solid  black;
      transition: 0.5s background ease-in;
      cursor: pointer;
      &:hover {
        background-color:black;
        border:1px solid transparent ;
        color:white;
        font-size: 16px;
        font-weight:700;
        transition: 0.3s background ease-in;
      }

`;