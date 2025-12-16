// Create a React Task Planner 

// Create a simple React component that manages tasks.
//  Add a form to input a task name and a button to add it to a task list. The list should be displayed in a child component, with a message below it showing “Task added: [task name]!” when a task is added. The initial message should show “Add a task to get started!”.

// Requirements:
// App Structure:
// Use two components:

// Parent (App.js): Contains a form with an input for task names and an “Add Task” button.
// Child (TaskList.js): Displays the task list and a message.
// Parent handles input and button clicks, updating the child’s task list and message.
// Input Form (Parent):
//   Include an input box for task names and an “Add Task” button (btn btn-primary).
//   On button click, append the task to the child’s list, update the message to “Task added: [task name]!”, clear the input, and change the parent’s 
//  background to lightblue.
// Style with a Bootstrap card using classes like form-control, p-4, mb-4.
// Task List (Child):
// Display tasks in a 
//  with 
//  elements, styled with minimal App.css 
// Show an initial message “Add a task to get started!” in a 
// , updating to “Task added: [task name]!” on button click.

import React, { useState } from "react";
import TaskList from "./TaskList";


function App() {
  // State for input field
  const [task, setTask] = useState("");

  // State for task list
  const [tasks, setTasks] = useState([]);

  // State for message
  const [message, setMessage] = useState("Add a task to get started!");

  // State for background color
  const [bgColor, setBgColor] = useState("white");

  // Button click handler
  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setMessage(`Task added: ${task}!`);
    setTask("");
    setBgColor("lightblue");
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: bgColor }}
    >
      <div className="card p-4 col-md-4">
        <h3 className="text-center mb-3">Task Planner</h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="btn btn-primary mb-3" onClick={addTask}>
          Add Task
        </button>

        <TaskList tasks={tasks} message={message} />
      </div>
    </div>
  );
}

export default App;


