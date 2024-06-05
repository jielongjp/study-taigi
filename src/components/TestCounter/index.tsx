import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import styled from "styled-components";

const TestCounter: React.FC = () => {
  const testCount = useSelector((state: RootState) => state.counter.testCount);
  const correctCount = useSelector(
    (state: RootState) => state.counter.correctCount
  );
  const incorrectCount = useSelector(
    (state: RootState) => state.counter.incorrectCount
  );

  return (
    <StContainer>
      <p>attempts: {testCount}</p>
      <p>correct: {correctCount}</p>
      <p>incorrect: {incorrectCount}</p>
    </StContainer>
  );
};

const StContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 20%;
  margin: 0 auto;
`;

export default TestCounter;
