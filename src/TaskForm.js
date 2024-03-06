import React, { useState } from "react";
import "./form.css";
import TaskList from "./TaskList";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function TaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskTitle.trim()){
      addTask((taskTitle));
      setTaskTitle("");
      NotificationManager.success('Task has been Added', 'To Do Task');
    }else{
      NotificationManager.error('Please Enter Valid Data', 'Unable to Add Task ');
      setTaskTitle("");
    }
  };
  return (
    <div>
      <NotificationContainer/>
       <div className="scroll-container">
        <h1>Todo List</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task title"
          className="title-form"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit" className="form-btn">
          Add Task
        </button>
      </form>
     

    </div>
  );
}

export default TaskForm;
