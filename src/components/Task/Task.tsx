import React from 'react';

interface Taskprops {

    num: number;
    title: string;
    message: string;
}

const Task = (props: Taskprops) => {

return (
    <div className="col-md-4 d-flex align-items-stretch">
        <div className="services-2">
<span className="number">{props.num}</span>
<h2>Handling <br />{props.title}</h2>
            <div className="text">
<p>{props.message}</p>
                <span className="icon flaticon-loan"></span>
            </div>
        </div>
    </div>
);

};

export default Task;