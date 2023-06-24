import React, { useEffect, useState } from 'react'

const Jokes = ({setError}) => {
    const [getData, setGetData] = useState(null)
    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            setGetData(json)
            return json
        })
        .catch(err=> {
            setError(err.message)
        })
    }, [])
  return (
    <div>
        <h3>Joke</h3>
        <p>{getData?.setup}</p>
        <small>{getData?.punchline}</small>
    </div>
  )
}

export default Jokes