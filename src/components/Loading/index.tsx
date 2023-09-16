import { styled, keyframes } from "styled-components";

const Loading: React.FC = () => {
  return (
    <StLoadingContainer>
      <StLoadingMessage>Loading...</StLoadingMessage>
      <StLoadingSpinner />
    </StLoadingContainer>
  );
};

const StLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const StLoadingMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StLoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #333;
  border-radius: 50%;
  animation: ${loadingAnimation} 1s linear infinite;
`;

export default Loading;
