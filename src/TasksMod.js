import React from "react";
import Task             from './Task'

const TaskMod = ({tasks, updateTaskText,setTaskDone}) => {

    console.log('uspdatetasktext', updateTaskText);
    console.log('TaskModtasks', tasks);

    const style = {
        listStyle: 'none',
        borderBottom: '1px solid black',
        textAlign: 'left',
        marginBottom: '1rem',
        textDecoration: 'none',
    }

    const renderTask = (task, index) => {
        if (index > 2) return; // OK for small list
        return (<li style={style} key={task.id}><Task text={task.text} id={task.id} done={task.done} key={task.id}
                                                      updateTaskText={updateTaskText} setTaskDone={setTaskDone} isMod={true}></Task></li>)
    }

    return (
        <ul style={{paddingLeft: '0'}} onClick={(e) => {e.preventDefault();}} >{tasks.map((task, index) => renderTask(task, index))}</ul>
    );
}

export default TaskMod;