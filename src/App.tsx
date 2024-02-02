import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import TaskList from './components/TaskList';
import {Task} from './components/Model';


const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [Task, setTask] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      setTask([...Task, {id: Date.now(), task:toDo, isDone:false}]);
      setToDo("");
    }
  };

  return (
    <div className="App">
      <span className="header">Taskly</span>
      <Input toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>   
      <TaskList task={Task} setTask={setTask}/>
    </div>
  );
}



export default App;
