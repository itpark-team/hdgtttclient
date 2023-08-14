import React from 'react';

const WorkTaskComments = ({comments}) => {
    return (
        <div>
            <h4>Комментарии</h4>
            {
                comments && comments.map(comment => {
                    return (
                        <p>{comment.content}</p>
                    )
                })
            }
        </div>
    );
};

export default WorkTaskComments;