import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({item,index, onDeleteTask,updateReminder}) => {
    return (
    <div onDoubleClick={() => updateReminder(item)} style={{borderLeft:item?.reminder ? '2px solid green':''}}>
        <h3>{item.taskName} <FaTimes style={{ color:'red' , cursor:'pointer'}} onClick={() => onDeleteTask(index)}/></h3>
        <p>{item.date}</p>
    </div>
    )
}

export default Task
