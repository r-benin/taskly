import React from 'react';
import SingleTask from './SingleTask';
import { Task } from './Model';

interface Props {
    task: Task[];
    setTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({task, setTask}: Props) => {
    return (
        <div className="task-list">
            {task.map((toDo) => (
                <SingleTask
                singleTask={toDo}
                key={toDo.id}
                tasks={task}
                setTask={setTask}
                />
            ))}
        </div>
    )
};

export default TaskList;