 




export default function Gameboard({onSelectsymbol,board}) {

    

   


    return(
        <ol id="game-board">
            {board.map((row,rowindex)=> (
            <li key={rowindex}>
                <ol>
                   {row.map((playerSymbol,colindex)=> (
                   <li key={colindex}>
                    <button onClick={()=> onSelectsymbol(rowindex,colindex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                   </li>
                   
            ))}
 
                    
                </ol>
            </li>))}
      
        </ol>
    );

}
