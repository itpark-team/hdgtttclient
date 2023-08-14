import React from 'react';

const WorkTaskWorkPeriods = ({workPeriods}) => {
    console.log(workPeriods);
    return (
        <div>
            <h4>Часы над задачей</h4>
            {
                workPeriods && workPeriods.map(workPeriod => {
                    return (
                        <p>с {workPeriod.startDatetime} по {workPeriod.finishDatetime} </p>
                    )
                })
            }
        </div>
    );
};

export default WorkTaskWorkPeriods;