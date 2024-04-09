import React, { Fragment, useState } from "react";
import './App.css';
import './index.css'

// Import Components //
import Game from './components/Game/Game';
import TitleMenu from './components/TitleMenu/TitleMenu';

//Components//
const App = () => {
  //Create array size x size with lights turned off
  const createGrid = (size) =>
      new Array(size).fill().map((r) =>
        new Array(size)
          .fill()
          .map((c) => false)
      );

  // Use a single state object for game state management
  const initialState = {
    size: 5,
    game: createGrid(5),
    gamerunning: false,
    playGame: true,
    createGame: false,
    autoGame: false,
    success: false,
    currentGroup: "0-0",
    currentLevel: "0-0",
    currentIndex: false,
    currentMode: ["off","on","play","create","auto"][1]
  };
  const [gameState, setGameState] = useState(initialState);

  // Function to update game state
  const updateGameState = (newState) => {
    setGameState({ ...gameState, ...newState });
  };

  // Function to reset game state
  const resetGame = () => {
    updateGameState(initialState);
  };
  ///////////////////////////////////////////////////////////////////////////////////////
   return (
    <Fragment>
      <div className="AppFormat">
        <Game
        createGrid={createGrid}
        {...gameState}
        setGameState={setGameState}
        />
        <TitleMenu
           createGrid={createGrid}
           {...gameState}
           setGameState={setGameState}
        />
      </div>
    </Fragment>
  );
}

export default App;
