export default function Gameover({winner,onrestart}){
    return(
    <div id="game-over">
        <h2>Game Over!</h2>
        {winner &&<p>{winner} won</p>}
        {!winner && <p>Draw!</p>}
        <p><button onClick={onrestart}>Restart!</button></p>


    </div> 
    );
}