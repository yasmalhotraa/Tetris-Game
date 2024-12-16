import React, { useState } from "react";
import { createStage, checkCollision } from "../gameHelpers";

// styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";

// custom hooks
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";

// components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(1000); // Initial drop time
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
    setDropTime(1000); // Set the initial automatic drop time
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / (level + 1) + 200); // Increase speed on level up
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null); // Stop automatic dropping when the game is over
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200); // Resume automatic dropping after pressing down
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(100); // Temporarily speed up the drop for immediate fall
    drop(); // Make the piece fall immediately
    setDropTime(1000 / (level + 1) + 200); // Restore the drop speed based on the level
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1); // Move left
      } else if (keyCode === 39) {
        movePlayer(1); // Move right
      } else if (keyCode === 40) {
        dropPlayer(); // Drop piece immediately
      } else if (keyCode === 38) {
        playerRotate(stage, 1); // Rotate piece
      }
    }
  };

  useInterval(() => {
    drop(); // Keep the automatic drop interval active
  }, dropTime);

  // Mobile control handlers
  const handleMobileMoveUp = () => {
    playerRotate(stage, 1); // Rotate piece on mobile "up" button click
  };

  const handleMobileMoveLeft = () => {
    movePlayer(-1); // Move piece left on mobile "left" button click
  };

  const handleMobileMoveRight = () => {
    movePlayer(1); // Move piece right on mobile "right" button click
  };

  const handleMobileMoveDown = () => {
    dropPlayer(); // Make piece drop immediately when mobile "down" button is clicked
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <aside className="top-info">
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <>
              <div className="score-row">
                <Display text={`Score: ${score}`} />
                <Display text={`Rows: ${rows}`} />
                <Display text={`Level: ${level}`} />
              </div>
            </>
          )}{" "}
          <StartButton callback={startGame} />
        </aside>
        <Stage stage={stage} />

        <div className="mobile-controls">
          <div className="control-row">
            <button className="up" onClick={handleMobileMoveUp}>
              <IoIosArrowUp />
            </button>
          </div>
          <div className="control-row middle">
            <button className="left" onClick={handleMobileMoveLeft}>
              <IoIosArrowBack />
            </button>
            <button className="down" onClick={handleMobileMoveDown}>
              <IoIosArrowDown />
            </button>
            <button className="right" onClick={handleMobileMoveRight}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
