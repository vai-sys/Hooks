
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import TaskTracker from './components/TaskTracker';
import  { toggleCompletion, deleteTask } from './components/TaskTracker';


function App() {
  const tasks = [];
  return (
     
    <div className="Container">
     <AddTaskForm/>
     <TaskList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />

     <TaskTracker/>
       
    </div>
  );
}

export default App;
