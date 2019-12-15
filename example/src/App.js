import React from 'react'
import {usePulse} from 'use-pulse'

const App = () => {
    const myPulse1 = usePulse(5, 11, 2, 500, 500)
    const myPulse2 = usePulse(123, 456789, 234, 0, 345)
    return (
        <div>
            <div>Pulse 1 Value: {myPulse1.value}</div>
            <div>
                <button onClick={myPulse1.reset}>Reset</button>
                <button onClick={myPulse1.start}>Start</button>
                <button onClick={myPulse1.stop}>Stop</button>
            </div>
            <br/><br/>
            <div>Pulse 2 Value: {myPulse2.value}</div>
            <div>
                <button onClick={myPulse2.reset}>Reset</button>
                <button onClick={myPulse2.start}>Start</button>
                <button onClick={myPulse2.stop}>Stop</button>
            </div>
        </div>
    )
}
export default App
