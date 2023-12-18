import React from'react';
import './App.css';
function Startsida(){
    
    return(
        <div>
            <h1>HabitsNTasks</h1>
            <div className='habitsntaskbtn'>
                <h2 onClick={<Startsida />}> Habits </h2>
                <h2 onClick={<Startsida />}> Tasks </h2>
            </div>
            <div className="friendsbtn"> 
                <h3> Friends </h3> 
            </div>
        </div>
    )
}

export default Startsida;