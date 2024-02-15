import styled from "styled-components";
const  StartGame=({toggle})=>{
  return ( <Container>
    <div>
    <img src="Dices.png" />

    </div>
       <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle} >Play Now</Button>
       </div>

  </Container>);
}

export default StartGame;

const Container=styled.div`
  max-width: 1180px;
  height: 100vh;

  display: flex;
  margin: 0 auto;
  align-items: center;
  .content{
    display: flex;
    flex-direction: column;
    align-items: end;
    h1{
      font-size: 96px;
      white-space: nowrap;
      text-transform: uppercase;

    }
  }
`;
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

