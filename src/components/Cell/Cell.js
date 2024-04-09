import React from 'react';
import './Cell.css'


const Cell = ({
    rowIndex,
    colIndex,
    toggleLights,
    isOn,
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
    setCurrentIndex
}) => {

    const handleClick = () => toggleLights(rowIndex,colIndex);

    return <button
        className={isOn ? "on" : "off"}
        onClick = {handleClick}/>
 

}
    export default Cell;