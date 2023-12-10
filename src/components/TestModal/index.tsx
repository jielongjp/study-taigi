import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { RowData } from "../VocabCardList";
import MultipleChoiceItem from "../MultipleChoiceItem";
import { shuffle, generateRandomChoices } from "../VocabCardList";

interface TestModalProps {
  vocabList: RowData[];
  initialIndex: number;
  onClose: () => void;
}

const TestModal = ({ vocabList, initialIndex, onClose }: TestModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const TestModalContentRef = useRef<HTMLDivElement>(null);

  const goToNextCard = () => {
    const nextIndex = (currentIndex + 1) % vocabList.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevCard = () => {
    const prevIndex = (currentIndex - 1 + vocabList.length) % vocabList.length;
    setCurrentIndex(prevIndex);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const TestModalContent = TestModalContentRef.current;

    if (TestModalContent && TestModalContent.contains(target)) {
      console.log("test");
    } else if (TestModalContent && !TestModalContent.contains(target)) {
      console.log("outside");
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  let showEnglish = false;

  return (
    <StTestModalWrapper>
      <StTestModalContent ref={TestModalContentRef}>
        <StTestModalClose onClick={onClose}>x</StTestModalClose>
        <MultipleChoiceItem
          key={currentIndex}
          rowData={vocabList[currentIndex]}
          showEnglish={showEnglish}
          randomChoices={generateRandomChoices(
            vocabList[currentIndex],
            vocabList,
            showEnglish ? "columnB" : "columnA"
          )}
        />
        <StTestModalNavButton style={{ left: 0 }} onClick={goToPrevCard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </StTestModalNavButton>
        <StTestModalNavButton style={{ right: 0 }} onClick={goToNextCard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </StTestModalNavButton>
      </StTestModalContent>
    </StTestModalWrapper>
  );
};

const StTestModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  list-style: none;
`;

const StTestModalContent = styled.div`
  background: #fff;
  max-width: 600px;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  @media (max-width: 650px) {
    width: 90%;
  }
`;

const StTestModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  background: none;
  &:hover {
    color: #85a3c3;
  }
`;

const StTestModalNavButton = styled.button`
  position: absolute;
  background: none;
  top: 50%;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: #85a3c3;
  }
`;

export default TestModal;
