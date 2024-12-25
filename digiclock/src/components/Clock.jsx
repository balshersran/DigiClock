import { useState, useEffect } from "react";

export default function Clock() {
    const [time , setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(()=> {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    return (
        <>
        <h3>{hour}</h3>
        <h3>{minutes}</h3>
        <h3>{seconds}</h3>
        </>
    );
}