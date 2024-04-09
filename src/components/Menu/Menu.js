import React, { /* useEffect, useState, useCallback, useMemo  */} from "react";
import './Menu.css';
import puzzles from "../Puzzle/Puzzle.js";


export default function Menu({ 
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
        setCurrentIndex}
) {
    //all consts are included for consistency --> the preferred way to handle this is better state management
    currentMode = ["off"]; // Default value if undefined;
    const powerbutton = () => {

        setCurrentMode("auto");
    }
    const startbutton = () => {
        if (setCurrentMode === "play") {
            setGamerunning(true);
            setSuccess(false);
            const initialGame = puzzles[currentGroup][currentLevel];
            setGame(initialGame);
        }
        
            
    }
    const soundbutton = () => {
        console.log('cue Sonic music');
    }
    
    const helpbutton = () => {
        console.log('Help me!');
    }
    
    const cyclemodesbutton = () =>  {
        if (currentMode) {
            const currentIdx = currentMode.indexOf(currentMode[0]);
            const nextIdx = (currentIdx + 1) % currentMode.length;
            setCurrentMode(currentMode[nextIdx]);
        
            // Update game state based on the new mode
            if (currentMode[nextIdx] === "play") {
              setAutoGame(false);
              setPlayGame(true);
              setGamerunning(true); // Start the game
              setCreateGame(false);
            } else if (currentMode[nextIdx] === "create") {
              setAutoGame(false);
              setPlayGame(false);
              setGamerunning(false); // Stop the game
              setCreateGame(true);
            } else {
              // Handle other modes ("off" or "auto")
            }
          } else {
            console.error("currentMode is undefined");
          }
        };
    

    return (
        <table>
            <tbody>
                <tr className="tablerow">
                    <td className="tabledata">
                    <button
                            className="buttonmenu"
                            onClick={powerbutton}
                        >
                            ON/OFF
                        </button>
                    </td>
                </tr>
                <tr className="tablerow">
                    <td className="tabledata">
                        <button
                            className="buttonmenu"
                            onClick={startbutton}
                        >
                            START
                        </button>
                    </td>
                </tr>
                <tr className="tablerow">
                    <td className="tabledata">
                        <button
                            className="buttonmenu"
                            onClick={soundbutton}
                        >
                            SOUND
                        </button>
                    </td>
                </tr>
                <tr className="tablerow">
                    <td className="tabledata">
                        <button
                            className="buttonmenu"
                            onClick={helpbutton}
                        >
                            HELP
                        </button>
                    </td>
                </tr>
                <tr className="tablerow">
                    <td className="tabledata">
                        <button
                            className="buttonmenu"
                            onClick={cyclemodesbutton}
                        >
                            MODE
                        </button>
                    </td> 
                </tr>
                <tr className="tablerow">
                    <td className="tabledata">
                        <div
                            className=""
                        >
                            MODE:{currentMode?.[0].toUpperCase()}
                        </div>
                    </td>
                    <td className="tabledata">
                        <div 
                            className=""
                        >
                            SIZE:
                        <input className="sizemenu" type="number" value={size} onChange={(e) => setSize(parseInt(e.target.value))}/>

                    </div>
                    </td> 
                </tr>
            </tbody>
        </table>
    );

}