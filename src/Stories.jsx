import React from 'react'
import { useFetch } from './useFetch'

const Stories = ({setError, error}) => {
    const stories = useFetch(`https://news-proxy-230704.appspot.com/topstories`,null)
    let storiesData = null
    if(stories && stories.errorMessage){
      setError(stories.errorMessage)
    }else{
      storiesData = stories && stories.data
      if(error){
        setError('')
      }
    }
  return (
    <div>
        <h3>Stories</h3>
        {error && <h4 style={{color:'red'}}>{`File Stories.jsx - Error is -> ${error}`}</h4>}
        {
            storiesData && storiesData.length > 0 && storiesData.map((story) => (
                <div key={story.id}>
                    <a href={story.url} target='_blank' rel="noreferrer">{story.title}</a>
                    <p>{story.by} - {new Date(story.time * 1000).toLocaleString()}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Stories