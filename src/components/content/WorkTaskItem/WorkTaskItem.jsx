import React from 'react';
import WorkTaskMainInfo from "./WorkTaskMainInfo";
import WorkTaskWorkPeriods from "./WorkTaskWorkPeriods";
import WorkTaskComments from "./WorkTaskComments";

const WorkTaskItem = ({workTask}) => {

    const mainInfo = {
        id: workTask.id,
        name: workTask.name,
        description: workTask.description,
        deadline: workTask.deadline,
        statusName: workTask.statusName
    };

    return (
        <div>
            <WorkTaskMainInfo mainInfo={mainInfo}/>
            <WorkTaskWorkPeriods workPeriods={workTask.workPeriods}/>
            <WorkTaskComments comments={workTask.comments}/>
        </div>
    );
};

export default WorkTaskItem;