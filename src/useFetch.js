import { useEffect, useState } from 'react'

export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue)
    useEffect(() => {
        fetch(url).then(resp => {
            return resp.json()
        }).then(data => {
            setResult({data : data})
        }).catch(err => {
            setResult({errorMessage : err.message})
        })
    }, [url])
    return result
}
