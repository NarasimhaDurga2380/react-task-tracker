import React, { useState } from 'react';

const AddTask = ({onSubmitForm}) => {
   const [taskName, setTaskName] = useState('');
   const [date, setDate] = useState('');
   const [reminder, setReminder] = useState('');

   const onSubmit = (e) => {
    e.preventDefault()

    if (!taskName) {
        alert('Please add a task')
        return
    }
  
    onSubmitForm({ taskName,date,reminder });
    setTaskName('');
    setDate('');
    setReminder(false);
   }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-field">
                <label>Task Name</label>
                <input type="text" placeholder="Task name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            </div> 
            <div className="form-field">
                <label>Day</label>
                <input type="date" placeholder="Day" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-field checkbox">
                <label>Set reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.checked)}/>
            </div>
            <div className="form-field">
               <input type='submit' value='Save Task' className='btn btn-block' />
            </div>
        </form>
    )
}

export default AddTask
