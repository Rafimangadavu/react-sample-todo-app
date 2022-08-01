import React from 'react';
import Task from './Task';

export default function TaskList(props) {
  const { tasks, onDelete } = props;
  return (
    <>
      <div className="row">
        <div className="col-12">
          {tasks.map((t) => {
            return <Task key={t.sno} todo={t} onDelete={onDelete}/>;
          })}
        </div>
      </div>
    </>
  );
}
