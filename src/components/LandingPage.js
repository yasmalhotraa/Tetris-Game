import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLandingPage } from "./styles/StyledLandingPage";
import {
  IoIosArrowDropdown,
  IoIosArrowDropup,
  IoIosArrowDropleft,
  IoIosArrowDropright,
} from "react-icons/io";

const LandingPage = () => {
  const navigate = useNavigate();
  const [tetriminos, setTetriminos] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomize the shape and left position
      const shape = Math.floor(Math.random() * 7); // Random Tetrimino type (0 to 6)
      const left = Math.random() * 100; // Random horizontal position (0% to 100%)

      // Ensure that the number of Tetriminos on screen never exceeds 7
      setTetriminos((prev) => {
        if (prev.length < 7) {
          return [...prev, { id: Date.now(), shape, left }];
        }
        return prev;
      });
    }, 800); // Generate a new Tetrimino every 800ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <StyledLandingPage>
      <div className="landing-page">
        <p className="game-title">Tetris Game</p>
        {/* Instructions for the game */}
        <div className="instructions">
          <p>Use the arrow keys:</p>
          <ul>
            <li>
              <IoIosArrowDropup className="arrow" />: Rotate Tetromino
            </li>
            <li>
              <IoIosArrowDropdown className="arrow" />: Move Down
            </li>
            <li>
              <IoIosArrowDropright className="arrow" />: Move Right
            </li>
            <li>
              <IoIosArrowDropleft className="arrow" />: Move Left
            </li>
          </ul>
        </div>
        <button className="start-button" onClick={() => navigate("/tetris")}>
          Click Here
        </button>
        <div className="falling-tetriminos">
          {tetriminos.map((block) => (
            <div
              key={block.id}
              className={`tetrimino shape-${block.shape}`}
              style={{
                left: `${block.left}%`,
              }}
            />
          ))}
        </div>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
