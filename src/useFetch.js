import { useState, useEffect } from "react"

const useFetch = (url) => { 
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)
   
    useEffect(() => {
        const abortCount = new AbortController() ;

        setTimeout(() => {
            fetch(url, {signal: abortCount.signal })
            .then((res) => {
                if(!res.ok) throw Error('Could not fetch the data from the resource')
                return res.json()
            })
            .then((data) => {
                setData(data)
                setPending(false)
                setError(null)
            })
            .catch((err) => {
                if(err.name === "AbortError"){
                    // console.log(err.message)
                }else{
                setPending(false)
                setError(err.message)
                }
            })
        },100);
        return () => abortCount.abort();
    },[url]);
    
    return {
        data, isPending, error
    }
}

export default useFetch;