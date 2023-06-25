import React, { useState } from 'react'
import './App.css';
import Jokes from './Jokes.jsx';
import Stories from './Stories';
import Tasks from './Tasks';

function App() {
  const [userQuery, setUserQuery] = useState('')
  const [userResult, setUserResult] = useState('')
  const [ error, setError ] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setUserQuery(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.key.toLowerCase() === 'enter'){
      handleSubmit()
    }
  }
  const handleSubmit = () => {
    setUserResult(userQuery)
    setUserQuery('')
    window.open(`https://google.com/search?q=${userQuery}`,'_blank')
  }
  return (
    <div className="App">
      <h1>{`Latest Search -> ${userResult}`}</h1>
      <div className='form'>
        <input className='form__input' onKeyPress = {handleKeyPress} onChange={handleChange} value={userQuery} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <Jokes setError = {setError} error={error} />
        <Stories setError = {setError} error={error} />
      </div>
      <div>
        <Tasks />
      </div>
    </div>
  );
}

export default App;
