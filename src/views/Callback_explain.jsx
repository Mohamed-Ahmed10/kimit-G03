import React, { useCallback, useState } from 'react'
import SiteNav from "../layout/SiteNav"
import CallBtn from '../components/CallBtn';
export default function CallbackExplain() {
    let [counter, setCounter] = useState(0);

    let handleCounter = () => {
        setCounter(counter => counter + 1)
    }

    let handleCounterCallback = useCallback(handleCounter, [])
    return (
        <div className="text-center">
            <SiteNav />
            <div className="mainContent">
                <h2>Call back</h2>
                <h3>{counter}</h3>
                {/* <button onClick={handleCounter}>Add</button> */}
                <CallBtn clickEvent={handleCounterCallback}>Add</CallBtn>
            </div>
        </div>
    )
}
