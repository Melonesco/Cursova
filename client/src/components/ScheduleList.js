import React from 'react';

const ScheduleList = ({subjects}) => {
    return (
        <div>
            {subjects.map(res => <div key={res.id}>{res.text}</div>)}
        </div>
    );
};

export default ScheduleList;
