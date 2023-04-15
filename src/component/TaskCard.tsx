import {Task} from "../data/init-data"
import React from "react";

interface Props {
    task: Task

    onClick: (task: Task) => void
}

const TaskCard = ({task, onClick}: Props) => {
    const doneClickHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        task.done = e.target.checked;

        console.table(task);
        onClick(task);
    };

    return <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{new Date(task.creationDate).toISOString()}</p>
        <p>{(task.updateDate) && new Date(task.updateDate).toISOString()}</p>
        <br />
        <label>Splněno</label>
        <input type="checkbox" checked={task.done} name="done" onChange={doneClickHandle} />
    </div>
};

export default TaskCard;