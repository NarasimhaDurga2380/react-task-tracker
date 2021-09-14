import React from 'react'
import Task from './Task'

const Tasks = ({ tasks , onDeleteTask,updateReminder}) => {
    return (
        <div className="Tasks-list">
            {
              tasks.map((item,index) => <Task item={item} key={item.id} index={index} onDeleteTask={onDeleteTask} updateReminder={updateReminder}/>)
            }
        </div>
    )
}

export default Tasks
