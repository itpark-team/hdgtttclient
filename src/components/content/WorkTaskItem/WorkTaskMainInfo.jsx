import React from 'react';

const WorkTaskMainInfo = ({mainInfo}) => {
    return (
        <div>
            <p>Задача: {mainInfo.name}</p>
            <p>Комментарии: {mainInfo.description}</p>
            <p>Срок выполнения: {mainInfo.deadline}</p>
            <p>Статус: {mainInfo.statusName}</p>
        </div>
    );
};

export default WorkTaskMainInfo;