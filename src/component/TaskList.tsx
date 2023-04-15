import {Task} from "../data/init-data";
import TaskCard from "./TaskCard";

interface Props {
    tasks: Array<Task>
}

const TaskList = ({tasks} : Props) => {
    const taskDoneHandle = (task: Task) => {
    }

    return <div>
        <h1>Aktuální tasky</h1>
        {tasks.filter(t => !t.done).map(t =>
            <TaskCard key={t.id} task={t} onClick={taskDoneHandle} />
        )}
        <h1>Splněné tasky</h1>
        {tasks.filter(t => t.done).map(t =>
            <TaskCard key={t.id} task={t} onClick={taskDoneHandle} />
        )}
    </div>
};

export default TaskList;