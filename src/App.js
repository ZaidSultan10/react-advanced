import React, { useState } from 'react'
import './App.css';

function App() {
  const [userQuery, setUserQuery] = useState('')
  const [userResult, setUserResult] = useState('')

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
    </div>
  );
}

export default App;
