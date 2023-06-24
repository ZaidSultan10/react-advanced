import React, { useEffect, useState } from 'react'

const Stories = ({setError}) => {
    const [stories, setStories] = useState('')
    useEffect(() => {
        fetch(`https://news-proxy-230704.appspot.com/topstories`).then((res) => {
            return res.json()
        }).then((data) => {
            setStories(data)
            return data
        }).catch(err => {
            setError(err.message)
        })
    }, [])
    console.log('stories --- ',stories)
  return (
    <div>
        <h3>Stories</h3>
        {
            stories && stories.length > 0 && stories.map((story) => (
                <div key={story.id}>
                    <a href={story.url} target='_blank'>{story.title}</a>
                    <p>{story.by} - {new Date(story.time * 1000).toLocaleString()}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Stories