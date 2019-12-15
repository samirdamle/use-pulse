import React from 'react'
import {usePulse} from 'use-pulse'

const App = () => {
    const myPulse = usePulse(5, 11, 2, 500, 500)
    return (
        <div>
            <div>Pulse Value: {myPulse.value}</div>
            <div>
                <button onClick={myPulse.reset}>Reset</button>
                <button onClick={myPulse.start}>Start</button>
                <button onClick={myPulse.stop}>Stop</button>
            </div>
        </div>
    )
}
export default App
