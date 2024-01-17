import React from 'react';

import {  toggleCompletion, deleteTask } from './TaskTracker';


const TaskList = ({ tasks,  toggleCompletion, deleteTask }) => (
  <ul>
    {tasks.map((task, index) => (
      <li key={index} className={task.completed ? 'completed' : ''}>
        <span>{task.name}</span>
        <span>{task.date}</span>
        <button onClick={() => toggleCompletion(index)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;


  
