import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter Task Name"
      />
      <button onClick={handleTask}>Add Task</button>
    </div>
  );
};

export default AddTaskForm;

