import React from 'react'
import { useFetch } from './useFetch'

const Jokes = ({setError, error}) => {
  const jokes = useFetch(`https://official-joke-api.appspot.com/jokes/random`,null)
  let jokeData = null
  if(jokes && jokes.errorMessage){
    setError(jokes.errorMessage)
  }else{
    jokeData = jokes && jokes.data
    setError('')
  }
  return (
    <div>
        <h3>Joke</h3>
        {error && <h4 style={{color:'red'}}>{error}</h4>}
        <p>{jokeData?.setup}</p>
        <small>{jokeData?.punchline}</small>
    </div>
  )
}

export default Jokes