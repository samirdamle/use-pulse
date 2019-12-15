import React, {useEffect, useRef, useState} from 'react'

const usePulse = (min = 0, max = 10, increment = 1, interval = 1000, delay = 0) => {
    const timerRef = useRef()
    const valueRef = useRef()

    const [pulsing, setPulsing] = useState(null)
    const [value, setValue] = useState(min)

    useEffect(() => {
        if(pulsing === null){
            valueRef.current = min
        }

        if(pulsing && interval != null){
            const delayTimer = setTimeout(() => {
                clearTimeout(delayTimer)
                // valueRef.current = min
                setValue(prevValue => valueRef.current)

                timerRef.current = setInterval(pulse, interval)
            }, delay)
        } else {
            clearInterval(timerRef.current)
        }

        return () => clearInterval(timerRef.current)
    }, [pulsing])

    const pulse = () => {
        if (pulsing && valueRef.current < max) {
            valueRef.current = (valueRef.current + increment)
            setValue(prevValue => valueRef.current)
        } else {
            clearInterval(timerRef.current)
        }
    }

    const start = () => {
        setPulsing(true)
    }

    const pause = () => {
        setPulsing(false)
    }

    const stop = () => {
        setPulsing(null)
    }

    return {start, pause, stop, value}
}

export {usePulse}