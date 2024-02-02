import React from 'react';
import { Task } from './Model';
import { FiEdit } from "react-icons/fi";
import { MdCheckBox } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";




type Props = {
    singleTask: Task;
    tasks: Task[];
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask = ({singleTask, tasks, setTask}: Props) => {
    return (
        <form className="task">
            <div className="task-buttons">
                <span className="icon"><FiEdit /></span>
                <span className="icon"><FiCheck /></span>
                <span className="icon"><FiTrash2 /></span>
            </div>
            <div className="task-content">{singleTask.task}</div>
        </form>
    )
}

export default SingleTask