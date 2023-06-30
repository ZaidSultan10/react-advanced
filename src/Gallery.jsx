import React, { useEffect, useState } from 'react'
import { PICTURES } from './pictures'

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
            setIndex(index + 1)
            if(index === PICTURES.length - 1){
                setIndex(0)
            }
        },intervals)
    }, [index])
  return (
    <div>
        <div className='gallery'>
            {/* {PICTURES && PICTURES.length > 0 && PICTURES.map(picture => {
                return (
                    <img width={200} height={180} src={picture.image} alt={`${picture.image}`} />
                )
            })} */}
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