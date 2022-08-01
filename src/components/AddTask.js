import React from 'react';
import { useState } from 'react';

export default function AddTask(props) {
  const { onAddTask } = props;
  const submit = (e) => {
    e.preventDefault();
    onAddTask(task, desc);
  };
  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <>
      <div className="row my-5">
        <div className="col-12">
          <form onSubmit={submit}>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Task</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  id="task"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="form-control"
                  id="description"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
