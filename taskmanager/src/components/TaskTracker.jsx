import React from 'react'
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import { useState ,useEffect} from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const TaskTracker = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(storedTasks);
    }, []);


    const addTask =(newTask)=>{
        const newTaskObject={name :newTask,
                         date:new Date().toLocaleDateString(),
                         completed:false 
    };

    const updatedTasks=[...tasks,newTaskObject];
    setTasks(updatedTasks);
    localStorage.setItem('tasks',JSON.stringify(updatedTasks));
    }
    //  Delete function

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      };

      const toggleCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      };

      const handleDragEnd = (result) => {
        if (!result.destination) return;
    
        const updatedTasks = Array.from(tasks);
        const [removed] = updatedTasks.splice(result.source.index, 1);
        updatedTasks.splice(result.destination.index, 0, removed);
    
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      };
  return (
    <div>


<h1>Task Manager</h1>
      
      <AddTaskForm addTask={addTask} />
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              
              <TaskList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export { toggleCompletion, deleteTask };
export default TaskTracker
