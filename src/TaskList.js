import React from "react";
import "./form.css";

const TaskList = ({ tasks, toggleStatus, deleteTask }) => {
  return (
    <>
      <ul>
        {tasks?.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <div>
              {" "}
              <button
                className="toggle-btn"
                onClick={() => toggleStatus(task.id)}
              >
                {task.completed ? "Pending" : "Complete"}
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
