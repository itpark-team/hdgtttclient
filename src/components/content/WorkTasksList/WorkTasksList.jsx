import React from 'react';
import {Space, Table} from "antd";
import {NavLink} from "react-router-dom";

const WorkTasksList = ({workTasks}) => {

    const dataSource = workTasks;
    const columns = [
        {
            title: 'Задача',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Комментарии',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Срок выполнения',
            dataIndex: 'deadline',
            key: 'deadline',
        },
        {
            title: 'Статус',
            dataIndex: 'statusName',
            key: 'statusName',
        },
        {
            title: 'Действия',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <NavLink to={"/work-tasks/get-by-id/" + record.id}>Подробнее</NavLink>
                </Space>
            ),
        }
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns}/>
        </div>
    );
};

export default WorkTasksList;