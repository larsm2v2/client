import React, { Fragment } from "react";
import './TitleMenu.css';


// Import Components //
import Title from '../Title/Title';
import Menu from '../Menu/Menu';

//Components//

const TitleMenu = ({ 
    createGrid, 
    size,
    setSize,
    game,
    setGame,
    gamerunning,
    setGamerunning,
    playGame,
    setPlayGame,
    createGame,
    setCreateGame,
    autoGame,
    setAutoGame,
    currentMode,
    setCurrentMode,
    success,
    setSuccess,
    currentGroup,
    setCurrentGroup,
    currentLevel,
    setCurrentLevel,
    currentIndex,
    setCurrentIndex}) => {
    
  return (
    <Fragment>
      <div className="MenuFormat">
        <Title/>
        <Menu
                createGrid={createGrid} 
                size={size}
                setSize={setSize}
                game={game}
                setGame={setGame}
                gamerunning={gamerunning}
                setGamerunning={setGamerunning}
                playGame={playGame}
                setPlayGame={setPlayGame}
                createGame={createGame}
                setCreateGame={setCreateGame}
                autoGame={autoGame}
                setAutoGame={setAutoGame}
                currentMode={currentMode}
                setCurrentMode={setCurrentMode}
                success={success}
                setSuccess={setSuccess}
                currentGroup={currentGroup}
                setcurrentGroup={setCurrentGroup}
                currentLevel={currentLevel}
                setCurrentLevel={setCurrentLevel}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}/>
      </div>
    </Fragment>
  );
}

export default TitleMenu
