import React, { useEffect, useState } from 'react'
import { PICTURES } from './pictures'
import moment from 'moment'

const Gallery = () => {
    const [index, setIndex] = useState(0)
    const [timer, setTimer] = useState(3)
    const [intervals, setIntervals] = useState(3000)
    const [transitionValue, setTransitionValue] = useState(1)

    const handleIntervalChange = (e) => {
        setTimer(e.target.value)
    }
    const handleSetInterval = () => {
        setIntervals(timer * 1000)
    }
    useEffect(() => {
        setInterval(()=> {
            setIndex((current) => current === PICTURES.length - 1 ? 0 : current + 1)
        },intervals)
    }, [])

    useEffect(() => {setIndex(0)},[intervals])
  return (
    <div>
        <div className='gallery'>
            <img width={200} height={180} src={PICTURES[index].image} alt={`${PICTURES[index].image}`} />
        </div>
        <div className='gallery_speed'>
            <div><p>{`Set Interval`}</p></div>
            <input onChange={(e) => handleIntervalChange(e)} value={timer} />
            <button onClick={() => handleSetInterval()}>{`Apply`}</button>
        </div>
    </div>
  )
}

export default Gallery