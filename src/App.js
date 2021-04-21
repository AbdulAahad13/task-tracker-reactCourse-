import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

const [showAddTask, setShowAddTask] = useState (false)


  const [tasks, setTasks] = useState([

    {
      id: 1,
      text: 'do homework',
      day: 'Feb 5th at 2.30pm',
      reminder: true,



    },
    {
      id: 2,
      text: 'Meet Sarah',
      day: 'Feb 7th at 6.00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shop for Tanyas bday',
      day: 'Feb 12th at 4.00pm',
      reminder: false,
    }

  ]
  )
  //add task
  const addTask = (task)=>{
    const id = Math.floor(Math.random()*1000)+1
    const newTask={id,...task}
    setTasks([...task, newTask])
  }
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className="container">
      <Header   onAdd={()=> setShowAddTask(!showAddTask )} showAdd= {showAddTask } />
     { showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
    </div>
  );
}

export default App

