import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import WorkTasksApiWorker from "../../../apis/WorkTasksApiWorker";
import {Alert} from "antd";
import WorkTaskItem from "./WorkTaskItem";

const WorkTaskLoader = () => {
    let {workTaskId} = useParams();

    let [workTask, setWorkTask] = useState([]);
    let [hasApiError, setHasApiError] = useState(false);
    let workTasksApiWorker = new WorkTasksApiWorker();

    useEffect(() => {

        workTasksApiWorker.getById(workTaskId).then(
            response => {
                setWorkTask(response.data);
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        )
    }, []);


    return (
        <div>
            <h3>Подробнее о задаче</h3>
            {
                hasApiError == true
                    ? <Alert message="Ошибка в запросе" type="error"/>
                    : <WorkTaskItem workTask={workTask}/>
            }
        </div>
    );
};

export default WorkTaskLoader;