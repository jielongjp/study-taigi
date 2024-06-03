import React, { useState, useCallback } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import {
  incrementTestCount,
  incrementCorrectCount,
  incrementIncorrectCount,
} from "@/store/counterSlice";

const Choice: React.FC<{
  choice: string;
  correctChoice: string;
}> = ({ choice, correctChoice }) => {
  const [color, setColor] = useState<"" | "green" | "red">("");
  const dispatch = useDispatch();

  const handleChoiceClick = () => {
    if (color === "") {
      if (choice === correctChoice) {
        setColor("green");
        dispatch(incrementCorrectCount());
      } else {
        setColor("red");
        dispatch(incrementIncorrectCount());
      }
    }
    dispatch(incrementTestCount());
  };

  return (
    <StChoice onClick={handleChoiceClick} className={color}>
      {choice}
    </StChoice>
  );
};

const StChoice = styled.li`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #85a3c3;
  }

  &.green {
    background-color: #299129;
  }

  &.red {
    color: #c70505e0;
  }
`;

export default Choice;
