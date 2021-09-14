import { useState, useEffect } from 'react'
import './App.css';
import AddTask from './components/AddTask';
import { Header } from './components/Header';
import Tasks from './components/Tasks';
function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);

   useEffect(() => {
    const getTasks = async () => {
      const res = await fetchTasks();
      const tasksList = await res.json();
      setTasks(tasksList);
    }
    getTasks()
   }, [])

  const fetchTasks = () => {
    return fetch(`http://localhost:3000/tasks`);
  }

  const onAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm)
  }

  const onSubmitTaskForm = async ({ taskName,date,reminder }) => {
    const res = await fetch(`http://localhost:3000/tasks`,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ taskName,date,reminder, id:Math.random()}),
    })
    await res.json();
    setTasks([...tasks,{ taskName,date,reminder, id:Math.random()}]);
  }

  const onDeleteTask = async(index) => {
    const res = await fetch(`http://localhost:3000/tasks/${tasks[index]?.id}`,{
      method: 'DELETE',
    })
    await res.json();
    setTasks(tasks.filter((item,inx) => inx !== index));
  }

  const updateReminder = async(task) => {
    task = {...task,reminder:!task?.reminder};
    const res = await fetch(`http://localhost:3000/tasks/${task?.id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    await res.json();
    setTasks(tasks.map(item => item?.id === task?.id ? task:item));
  }

  return (
    <div className="App-container">
        <Header onAddOrClose={onAddTaskForm} showAdd={showAddTaskForm}/>
        {showAddTaskForm && <AddTask onSubmitForm={onSubmitTaskForm} />}
        <Tasks tasks={tasks}  onDeleteTask={onDeleteTask} updateReminder={updateReminder}/>
    </div>
  );
}
export default App;
