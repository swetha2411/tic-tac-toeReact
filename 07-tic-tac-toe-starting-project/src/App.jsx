import { useState } from 'react';

import Players from './components/players.jsx';
import Gameboard from './components/gameboard.jsx';
import Gameover from './components/gameover.jsx';
import Log from './components/log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';


const initialboard=[
  [null,null,null],
  [null,null,null],
  [null,null,null],

];





function deriveplayer(gameturns){
  let currentplayer='X';
    if(gameturns.length>0 && gameturns[0].player==='X'){
      currentplayer='O';
    }
  return currentplayer;

}


function App() {
  // const [activeplayer,setActiveplayer]=useState('X');
  const [players,setPlayers]= useState({
    'X':'player 1',
    'O':'player 2',
  });
  const [gameturns,setGameturns]=useState([]);
  const activeplayer=deriveplayer(gameturns);

  let gameboard=[...initialboard.map(array=> [...array])];

  for(const turn of gameturns){
      const {square,player} = turn;
      const {row,col} = square;
      gameboard[row][col] = player;
  }

    let winner;
    for(const combination of WINNING_COMBINATIONS){
      const firstsquaresymbol=gameboard[combination[0].row][combination[0].column];
      const secondsquaresymbol=gameboard[combination[1].row][combination[1].column];
      const thirdsquaresymbol=gameboard[combination[2].row][combination[2].column];

      if(firstsquaresymbol && firstsquaresymbol===secondsquaresymbol && firstsquaresymbol===thirdsquaresymbol){
        winner=players[firstsquaresymbol];
      }
    
    

    }
    const draw = gameturns.length===9 && !winner;
  function handleselectsymbol(rowindex,colindex){
    // setActiveplayer((activeplayer)=> activeplayer==='X'?'O':'X');
    setGameturns((prevgameturns)=>{
    const currentplayer=deriveplayer(prevgameturns);
    const updatedturns=[
      {square:{row:rowindex,col:colindex},player:currentplayer},
      ...prevgameturns
    ];
    return updatedturns;
  });
  
  }

  function handlerestart(){
    setGameturns([]);
  }
  
  function handlenamechange(symbol,newName){
    setPlayers((prevplayers)=>{
      return{
        ...prevplayers,
        [symbol]:newName
      };
    });
  }


  return(
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players initialname="player1" symbol="X" isActive={activeplayer==='X'} onChange={handlenamechange}/>
          <Players initialname="player2" symbol="O" isActive={activeplayer==='O'} onChange={handlenamechange}/>
        </ol>
        {(winner||draw) && <Gameover winner={winner} onrestart={handlerestart}/>}
        <Gameboard onSelectsymbol={handleselectsymbol} board={gameboard}/>
      </div>
      <Log turns={gameturns} />
    </main>
  );

 
  }

export default App;

