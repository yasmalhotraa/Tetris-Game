import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;

  width: 100%;
  max-width: 25vw;
  background: #111;

  /* For mobile screens */
  @media (max-width: 768px) {
    max-width: 70vw; /* Reduce max-width for better fit on mobile */
    height: auto;
    grid-template-rows: repeat(
      ${(props) => props.height},
      calc(70vw / ${(props) => props.width} - 2px)
        /* Reduce block size further */
    );
  }

  /* Optional: Make it even more responsive for very small screens */
  @media (max-width: 480px) {
    max-width: 90vw; /* Slightly larger for very small screens */
    grid-template-rows: repeat(
      ${(props) => props.height},
      calc(80vw / ${(props) => props.width} - 4px)
        /* Further reduced block size */
    );
  }
`;
