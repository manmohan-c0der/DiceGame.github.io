import styled from "styled-components";
const Rules=()=>{
  return <RulesContainer>
    <h2>How To Play Dice Game</h2>
    <div className="text">
       <ol type='i'>
       <li>Select any Number</li>
      <li>Click on dice image for Role the dice</li>
      <li>After click on dice if selected number is equal to dice number you will get same point as dice </li>
      <li>if you get wrong guess then 1 point will be dedcuted from the total score</li>
       </ol>
    </div>
  </RulesContainer>
}
export default Rules;
const RulesContainer=styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fce8e8;
padding: 24px;
margin-top: 40px;
border-radius: 10px;
h2{
  font-size: 24px;
  font-weight: 900;


}
.text{
  margin-top: 24px;
  font-weight: 500;
  margin-left: 20px;
}
  
`