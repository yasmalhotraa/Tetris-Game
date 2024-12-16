import styled from "styled-components";
import bgImage from "../../Img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: row; /* Default layout: horizontal layout */
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  /* Adjust the aside that holds score, rows, level, and start button */
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;

    .top-info {
      width: 100%;
      display: flex;
      flex-direction: column; /* Stack vertically by default */
      align-items: flex-start;

      .score-row {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 20px;
        font-size: 0.9rem;
        width: 100%;
      }
    }
  }

  /* Mobile-specific changes */
  @media (max-width: 768px) {
    flex-direction: column; /* Switch to vertical layout for mobile screens */
    padding: 20px;

    aside {
      width: 100%;
      max-width: 100vw;
      padding: 0; /* Adjust padding in mobile */
    }

    .top-info {
      flex-direction: column;
      align-items: flex-start;
    }

    .score-row {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      font-size: 1rem; /* Larger text for readability */
      width: 100%; /* Full width */
    }

    button {
      margin-top: 10px;
      font-size: 0.9rem; /* Slightly smaller font size */
      padding: 10px;
      width: 100%;
    }

    /* Mobile controls - position the buttons like a keyboard */
    .mobile-controls {
      display: flex;
      justify-content: center;
      gap: 2px;

      margin-bottom: 5px; /* Add margin to bottom so the buttons don't touch the edge */
      flex-wrap: wrap;
      width: 100%; /* Ensure the buttons span across the screen */
    }

    /* Layout for the buttons to mimic the layout of a keyboard */
    .control-row {
      display: flex;
      justify-content: center;
      gap: 15px;
      width: 100%; /* Full width for the row */
    }

    /* Arrow key layout */
    .control-row .up {
      width: 50px; /* Slightly larger size */
      height: 50px;
      font-size: 30px; /* Larger font size */
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-bottom: 5px; /* Space between up and down buttons */
    }

    .control-row .up:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    .control-row .middle {
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 5px;
      margin-top: 10px;
    }

    /* Styling for left and right buttons */
    .control-row .left,
    .control-row .right {
      width: 50px;
      height: 50px;
      font-size: 30px; /* Larger font size */
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      cursor: pointer;
      margin-top: 5px;
      transition: background-color 0.3s ease;
    }

    .control-row .left:hover,
    .control-row .right:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    /* Down button */
    .control-row .down {
      width: 50px;
      height: 50px;
      font-size: 35px; /* Larger font size */
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 5px; /* Space between down and other buttons */
    }

    .control-row .down:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  @media (min-width: 769px) {
    .mobile-controls {
      margin-top: 200px;
      width: 100%;
    }
    .control-row {
      display: flex;
      justify-content: center;
      gap: 15px;
      width: 100%;
    }

    /* Arrow key layout */
    .control-row .up {
      width: 50px;
      height: 50px;
      font-size: 30px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: 1px solid gray;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .control-row .up:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    .middle {
      display: flex;

      width: 100%;
      gap: 5px;
    }

    /* Styling for left and right buttons */
    .control-row .left,
    .control-row .right {
      width: 50px;
      height: 50px;
      font-size: 30px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .control-row .left:hover,
    .control-row .right:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    .control-row .down {
      width: 50px;
      height: 50px;
      font-size: 35px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 40px;
    }

    .control-row .down:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;
