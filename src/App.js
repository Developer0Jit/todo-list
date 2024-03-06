import { useState } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const toggleStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    tasks.map((t)=>{
      
      t.id == taskId ? t.completed ? NotificationManager.info('Task is Pending', 'To Do Task'):
      NotificationManager.success('Task has been Completed', 'To Do Task')
      :console.log('');
        
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    NotificationManager.error('Task has been Deleted', 'To Do Task')
  };

  return (
    <div className="App">
    <NotificationContainer/>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleStatus={toggleStatus}  deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
