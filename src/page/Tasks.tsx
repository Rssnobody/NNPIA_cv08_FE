import TaskList from "../component/TaskList";
import {Task} from "../data/init-data";
import {useEffect, useState} from "react";
import axios from "axios/index";

/*
* CORS je bezpečnostní mechanismus, který umožňuje webovým prohlížečům komunikovat
*  s webovými aplikacemi na různých doménách. Pomáhá zabránit útokům jako je CSRF a
*  XSS tím, že umožňuje serverům povolit pouze důvěryhodným zdrojům přístup k určitým zdrojům,
*  jako jsou API nebo soubory na serveru.
*/

const Tasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        let response = null;

        try {
            // response = await fetch(`${backendUrl}/task`);
            response = await axios.get(`${backendUrl}/task`);
        } catch (e : any) {
            setError(e.message);
            setTasks([]);
        }

        setLoading(false);
        if (response && response.status === 200) {
            // const tasks = await response.json();
            const tasks = await response.data as Array<Task>;
            setTasks(tasks);
        }
    };

    return <div>
        {error && <div className="alert alert-danger">{error}</div>}
        {loading && <div className="alert alert-danger">loading</div>}
        <TaskList tasks={tasks} />
    </div>
};

export default Tasks;