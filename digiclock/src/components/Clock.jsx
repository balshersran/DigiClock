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
        <div className="flex flex-row justify-center">
        <span className="p-4 text-4xl">{hour}</span>
        <span className="p-4">:</span>
        <span className="p-4 text-4xl">{minutes}</span>
        <span className="p-4">{seconds}</span>
        </div>
        </>
    );
}