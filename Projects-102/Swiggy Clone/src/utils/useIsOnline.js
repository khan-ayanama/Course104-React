import { useState, useEffect } from "react"

const isOnline = () =>{
    const [isOnline,setIsOnline] = useState(window.navigator.onLine)

    useEffect(()=>{
        const handleOnlineStatus = () =>{
            setIsOnline(window.navigator.onLine)
        }

        window.addEventListener('online',handleOnlineStatus)
        window.addEventListener('offline',handleOnlineStatus)
    },[])

    return isOnline;
}

export default isOnline;