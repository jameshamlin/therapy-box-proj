import React from "react";




const Task = ({text,done,id,updateTaskText,setTaskDone,isMod}) => {

    console.log('text', text)
    console.log('id', id)
    console.log('done', done)

    const inputStyle = {
        backgroundColor: 'rgba(0,0,0,0.01)',
        color: isMod? 'black': 'white',
        border: 0,
        borderBottom: '1px solid white',
    }
    const width       = isMod? 'auto': '30rem'
    const marginRight = '1rem'

    return(
        <li style={{listStyle: 'none'}}>
            <input style={{...inputStyle,width,marginRight}} type='text' value={text} onChange={e => updateTaskText(id, e.target.value)}/>
            <input style={inputStyle} type='checkbox' checked={done} onChange={e => setTaskDone(id, e.target.checked)} />
        </li>
    )
}

export default Task;