import React, {useState} from 'react';

import Task             from './Task'
import plus             from './img/Plus_button.png'

import netAPI from "./NetAPI";
const Tasks = ({tasks,updateTaskText,setTaskDone,addTask}) => {

    const renderTask = (task, index) => {
        return (<Task key={task.id} text={task.text} id={task.id} done={task.done} key={task.id} isMod={false}
            updateTaskText={updateTaskText} setTaskDone={setTaskDone} ></Task>
       )
    }

    return (
        <div className="App">
            <header>
                <h1 className='' >Tasks</h1>
            </header>
            <ul>{tasks.map((task, index) => renderTask(task, index))}</ul>

            <button onClick={addTask} style={{width: '1rem', backgroundColor: 'rgba(0,0,0,0)', border: '0' }} >
                <img style={{width: '1rem' }} src={plus} />
            </button>
        </div>
    );
}

export default Tasks;
