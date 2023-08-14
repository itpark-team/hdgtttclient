import React from 'react';
import {useState, useEffect} from "react";
import WorkTasksApiWorker from "../../../apis/WorkTasksApiWorker";
import {Alert} from "antd";
import WorkTasksList from "./WorkTasksList";

const WorkTasksLoader = () => {

    let [workTasks, setWorkTasks] = useState([]);
    let [hasApiError, setHasApiError] = useState(false);
    let workTasksApiWorker = new WorkTasksApiWorker();

    useEffect(() => {
        workTasksApiWorker.getAllByUserId().then(
            response => {
                setWorkTasks(response.data)
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        )
    }, []);

    return (
        <div>
            <h3>Список задач</h3>
            {
                hasApiError == true
                    ? <Alert message="Ошибка в запросе" type="error"/>
                    : <WorkTasksList workTasks={workTasks}/>
            }
        </div>
    );
};

export default WorkTasksLoader;