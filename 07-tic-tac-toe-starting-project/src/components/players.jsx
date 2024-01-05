import { useState } from "react";

export default function Players({initialname,symbol,isActive,onChange}){
    const [playerName,setPlayerName]=useState(initialname)
    const [isEditing,setIsEditing]= useState(false);

    function handleEditClick(){
        setIsEditing((editing)=>!editing);//function is called by the react 
        if(isEditing){
            onChange(symbol,playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }


    let editplayer = <span className="player-name">{playerName}</span>;
    if(isEditing){
        editplayer=<input type="text" required value={playerName} onChange={handleChange}/>

    }

    return(

        <li className={isActive?'active':undefined}>
            <span className="player">
            {editplayer}
            <span className="player-symbol">{symbol}</span>
            </span>
            
            <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
          </li>
    );
}