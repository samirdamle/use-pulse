import React, {useEffect, useState} from 'react'

const usePulse = (min = 0, max = 9, increment = 1, interval = 500, delay = 0) => {
    let delayTimer = null
    let pulseTimer = null
    let currentValue = min
    const [pulse, setPulse] = useState(min)

    const startPulse = () => {
        delayTimer = setTimeout(() => {
            pulseTimer = setInterval(() => {
                clearTimeout(delayTimer)
                // console.log('currentValue = ', currentValue)
                if(currentValue < max) {
                    setPulse((prevState) => {
                        currentValue = (prevState + increment)
                        return currentValue
                    })
                } else {
                    // console.log('stopPulse called')
                    stopPulse()
                }
            }, interval)
        }, delay)
    }

    const stopPulse = () => {
        clearTimeout(delayTimer)
        clearInterval(pulseTimer)
    }

    return {startPulse, stopPulse, pulse, delayTimer, pulseTimer}
}

export { usePulse }