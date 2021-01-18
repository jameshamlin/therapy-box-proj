import React from "react";
import Task             from './Task'

const TaskMod = ({tasks}) => {

    const style = {
        listStyle: 'none',
        borderBottom: '1px solid black',
        textAlign: 'left',
        marginBottom: '1rem',
        textDecoration: 'none'
    }

    const renderTask = (task, index) => {
        if (index > 3) return;
        return (<li style={style} key={task.id}><Task text={task.text} id={task.id} done={task.done} key={task.id}></Task></li>)
    }

    return (
        <ul style={{paddingLeft: '0'}}>{tasks.map((task, index) => renderTask(task, index))}</ul>
    );
}

export default TaskMod;