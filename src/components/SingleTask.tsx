import React, { useState, useRef, useEffect} from 'react';
import { Task } from './Model';
import { FiEdit } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";




type Props = {
    singleTask: Task;
    tasks: Task[];
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask = ({singleTask, tasks, setTask}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(singleTask.task);
    
    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();
        setTask(
            tasks.map((task) =>
            task.id === id ? { ...task, task: editTask }: task)
        )
        setEdit(false); 
    };

    const handleDone = (id: number) => {
        setTask(tasks.map((task) =>
            task.id === id ? { ...task, isDone: !task.isDone } : task
        ))
    };

    const handleDelete = (id: number) => {
        setTask(tasks.filter((task)=> task.id !== id))
    };

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=> {
        inputRef.current?.focus();
    }, [edit])

    return (
        singleTask.isDone ? (
            <form className="done-task">
                <div className="task-buttons">
                    <span className="icon"><FiEdit /></span>
                    <span className="icon" onClick={() => handleDone(singleTask.id)}><FiCheck /></span>
                    <span className="icon" onClick={() => handleDelete(singleTask.id)}><FiTrash2 /></span>
                </div>
                {
                    singleTask.isDone ? (
                        <div className="task-content"><s>{singleTask.task}</s></div>
                    ) : (
                        <div className="task-content">{singleTask.task}</div>
                    )
                }
        </form>
        ) : (
            <form className="task" onSubmit={(e) => handleEdit(e, singleTask.id)}>
                <div className="task-buttons">
                    <span className="icon" onClick={() => setEdit(!edit)}><FiEdit /></span>
                    <span className="icon" onClick={() => handleDone(singleTask.id)}><FiCheck /></span>
                    <span className="icon" onClick={() => handleDelete(singleTask.id)}><FiTrash2 /></span>
                </div>
                { 
                    edit ? (
                            <div className="edit-content">
                                <input className="input-edit-content" value={editTask} ref={inputRef} onChange={(e) => setEditTask(e.target.value)}></input>
                                <small className="edit-tooltip">Press "enter" to confirm edit</small>
                            </div>
                            
                        ) : (
                            <div className="task-content">{singleTask.task}</div>
                        )
                }
            </form>
        )
            
        
    )
}
export default SingleTask