import React from 'react';
// import PropTypes from 'prop-types'

export default function Task(props){
    const { todo, onDelete} = props
    return(
        <>
            <div className="card my-1">
  <div className="card-body">
    <h5 className="card-title">{todo.task}</h5>
    <p className="card-text">{todo.desc}.</p>
    <a href="intex.html" className="btn btn-danger pull-right" onClick={(e)=>onDelete(e,todo)}>Delete</a>
  </div>
</div>
        </>
    )
}
// Task.defaultProps={
//     task:"No Value for Task",
//     descr:"No Value for Desc"
// }

// Task.propTypes={
//     task:PropTypes.string,
//     descr:PropTypes.string,
//     sno:PropTypes.number.isRequired
// }