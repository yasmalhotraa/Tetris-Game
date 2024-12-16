import styled from "styled-components";
import bgImage from "../../Img/bg.png";

export const StyledLandingPage = styled.div`
  //Main Div
  .landing-page {
    display: flex;
    flex-direction: column;
    background: url(${bgImage}) #000;
    height: 100vh;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Ensure falling blocks stay within bounds */
    position: relative; /* Required for absolute positioning of blocks */
  }

  //Heading
  .game-title {
    color: #c3c3c3;
    font-size: 50px;
    margin: 0;
    z-index: 10;
    margin-bottom: 30px;
  }

  //Button
  .start-button {
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    min-height: 30px;
    border-radius: 20px;
    border: none;
    z-index: 10;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
  }

  //Istructions
  .instructions {
    color: #adadad;
    font-size: 18px;
    margin: 20px 0;
    text-align: center;
  }

  .instructions p {
    margin: 0;
    font-weight: bold;
  }

  .instructions ul {
    list-style-type: none;
    padding: 0;
  }

  .instructions li {
    font-size: 16px;
    margin-bottom: 8px;

    display: flex;
    align-items: center; /* Ensure the items align to the left */
    justify-content: flex-start;
  }
  .arrow {
    font-size: 30px;
    align-items: center;
  }

  //Falling Animation
  .falling-tetriminos {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Prevent interaction with blocks */
  }

  .tetrimino {
    position: absolute;
    width: 30px;
    height: 30px;
    animation: fall 5s linear infinite;
    opacity: 0.4; /* Adjust opacity for visibility */
    border: 2px solid #000; /* Add a black border around each Tetromino */
    border-radius: 5px; /* Optional: rounded corners */
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5); /* Inside shadow */
  }

  /* Define different Tetrimino shapes and colors with borders */
  .tetrimino.shape-0 {
    background-color: #f00; /* Red */
    border-color: #8b0000; /* Dark red border */
    box-shadow: inset 0 0 5px rgba(139, 0, 0, 0.7); /* Red inside shadow */
  }

  .tetrimino.shape-1 {
    background-color: #0f0; /* Green */
    border-color: #006400; /* Dark green border */
    box-shadow: inset 0 0 5px rgba(0, 100, 0, 0.7); /* Green inside shadow */
  }

  .tetrimino.shape-2 {
    background-color: #00f; /* Blue */
    border-color: #00008b; /* Dark blue border */
    box-shadow: inset 0 0 5px rgba(0, 0, 139, 0.7); /* Blue inside shadow */
  }

  .tetrimino.shape-3 {
    background-color: #ff0; /* Yellow */
    border-color: #ffd700; /* Gold border */
    box-shadow: inset 0 0 5px rgba(255, 215, 0, 0.7); /* Yellow inside shadow */
  }

  .tetrimino.shape-4 {
    background-color: #f0f; /* Purple */
    border-color: #800080; /* Purple border */
    box-shadow: inset 0 0 5px rgba(128, 0, 128, 0.7); /* Purple inside shadow */
  }

  .tetrimino.shape-5 {
    background-color: #0ff; /* Cyan */
    border-color: #00b5b5; /* Dark cyan border */
    box-shadow: inset 0 0 5px rgba(0, 191, 191, 0.7); /* Cyan inside shadow */
  }

  .tetrimino.shape-6 {
    background-color: #fff; /* White */
    border-color: #dcdcdc; /* Light grey border */
    box-shadow: inset 0 0 5px rgba(211, 211, 211, 0.7); /* Light gray inside shadow */
  }

  /* Falling animation */
  @keyframes fall {
    from {
      transform: translateY(-100px); /* Start above the screen */
    }
    to {
      transform: translateY(110vh); /* Fall past the bottom */
    }
  }

  @media (max-width: 769px) {
    .game-title {
      font-size: 32px;
      margin-bottom: 20px;
    }
  }
`;
