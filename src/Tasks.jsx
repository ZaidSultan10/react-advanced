import React, { useEffect, useState } from 'react'


const Tasks = () => {
    const LOCAL_STORAGE_KEY = "LOCAL_STORAGE_KEY"
    const storeInLocalStorage = (taskStorage) => localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(taskStorage))
    const readAllItems = () => {
        let readItems = JSON.parse(localStorage.getItem('LOCAL_STORAGE_KEY'))
        return readItems && Object.keys(readItems).length > 0 ? readItems : {tasks:[], completedTasks:[]}
    }
    const getStorage = readAllItems()
    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState(getStorage.tasks)
    const [completedTasks, setCompletedTasks] = useState(getStorage.completedTasks)

    useEffect(() => {
        storeInLocalStorage({tasks, completedTasks})
    }, [])

    const handleChange = (e) => {
        setTaskText(e.target.value)
    }

    const handleTaskSubmit = () => {
        handleSetState(setTasks, tasks, taskText)
        setTaskText('')
    }

    const handleCompleteTask = (task) => {
        handleSetState(setCompletedTasks, completedTasks, task)
        setTasks(tasks.filter(tsk => tsk !== task))
    }

    const handleSetState = (func, state, value) => {
        return func([...state, value])
    }

    const deleteTask = (task) => {
        setCompletedTasks(completedTasks.filter(compTask => compTask !== task))
    }
  return (
    <div>
        <input value={taskText} onChange={(e) => handleChange(e)} />
        <button disabled = {!taskText} onClick = {handleTaskSubmit}>{`Add Task`}</button>
        <div><h4>{`Todo List`}</h4></div>
        <div>
            {tasks && tasks.length > 0 && tasks.map((task, i) => (
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
                    <button onClick={() => deleteTask(compTask)}>{`Clear Task`}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tasks