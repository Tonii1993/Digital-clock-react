import React, { useState, useEffect } from "react";
import '../components/digital_clock.css';


const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect( () => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    },[]);

    return (
        <div> {clockState} </div>
    );
}
 
export default DigitalClock;