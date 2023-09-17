import React, { useState } from "react";
import { styled } from "styled-components";

const Choice: React.FC<{
  choice: string;
  correctChoice: string;
}> = ({ choice, correctChoice }) => {
  const [color, setColor] = useState<"" | "green" | "red">("");

  const handleChoiceClick = () => {
    if (color === "") {
      if (choice === correctChoice) {
        setColor("green");
      } else {
        setColor("red");
      }
    }
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

  &.green {
    color: green;
  }

  &.red {
    color: red;
  }
`;

export default Choice;
