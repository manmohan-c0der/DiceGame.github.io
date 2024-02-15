import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({setErrorShow, errorShow, selectedNumber, setSelectedNumber }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler=(value)=>{
    setSelectedNumber(value);
    setErrorShow("");
  }

  return (
    <NumberSelectorContainer>
        <p className="error">{errorShow}</p>
      <div className="Flex">
        {arr.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() =>numberSelectorHandler(value) }
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select a Number</p>
    </NumberSelectorContainer>
  );
};
export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .Flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    padding: 24px;
  }
  .error{
    color:red;
    text-transform: uppercase;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border: ${(props) =>
    props.isSelected ? " 1px solid red" : " 1px solid black"};
`;
