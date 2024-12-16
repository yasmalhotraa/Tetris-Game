import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem; /* Adjust font size on mobile */
    width: auto;
    min-width: 100px;
    margin: 5px; /* Add margin for spacing */
    padding: 10px;
  }
`;
