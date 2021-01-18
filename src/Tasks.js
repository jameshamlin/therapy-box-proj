import React, {useState} from 'react';

import Task             from './Task'

import netAPI from "./NetAPI";

const Tasks = ({tasks}) => {

    const renderTask = (task, index) => {
        return (<li key={task.id}><Task text={task.text} id={task.id} done={task.done} key={task.id}></Task></li>)
    }

    return (
        <ul>{tasks.map((task, index) => renderTask(task, index))}</ul>
    );
}

export default Tasks;
