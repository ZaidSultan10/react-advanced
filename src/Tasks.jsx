import React, { useState } from 'react'

const Tasks = () => {
    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])

    const handleChange = (e) => {
        setTaskText(e.target.value)
    }

    const handleTaskSubmit = () => {
        handleSetState(setTasks, tasks, taskText)
        setTaskText('')
    }

    const handleCompleteTask = (task) => {
        handleSetState(setCompletedTasks, completedTasks, task)
    }

    const handleSetState = (func, state, value) => {
        return func([...state, value])
    }
  return (
    <div>
        <input value={taskText} onChange={(e) => handleChange(e)} />
        <button disabled = {!taskText} onClick = {handleTaskSubmit}>{`Add Task`}</button>
        <div><h4>{`Todo List`}</h4></div>
        <div>
            {tasks && tasks.length > 0 && tasks.filter(tsk => !completedTasks.includes(tsk)).map((task, i) => (
                <div key={i}>
                    <p>{task}</p>
                    <button onClick={() => handleCompleteTask(task)}>complete</button>
                </div>
            ))}
        </div>
        <hr />
        <div><h4>{`Completed List`}</h4></div>
        <div>
            {completedTasks && completedTasks.length > 0 && completedTasks.map((compTask , j) => (
                <div key={j}>
                    <p style={{color:'green'}}>{`${compTask} - completed`}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tasks