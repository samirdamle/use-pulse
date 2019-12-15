import React, {useEffect, useRef, useState} from 'react'

const usePulse = (min = 0, max = 9, increment = 1, interval = 1000, delay = 0) => {
    const timerRef = useRef()
    const valueRef = useRef()

    const [state, setState] = useState(null)
    const [value, setValue] = useState(min)

    useEffect(() => {
        if(state === null){
            valueRef.current = min
            setValue(prevValue => valueRef.current)
        }

        clearInterval(timerRef.current)

        if(state && interval != null){
            const delayTimer = setTimeout(() => {
                clearTimeout(delayTimer)
                setValue(prevValue => valueRef.current)
                timerRef.current = setInterval(pulse, interval)
            }, delay)
        } else {
            clearInterval(timerRef.current)
        }

        return () => clearInterval(timerRef.current)
    }, [state])

    const pulse = () => {
        if (state && valueRef.current < max) {
            valueRef.current = (valueRef.current + increment)
            setValue(prevValue => valueRef.current)
        } else {
            clearInterval(timerRef.current)
        }
    }

    const reset = () => {
        setState(null)
    }

    const start = () => {
        setState(true)
    }

    /*
    const pause = () => {
        setState(2)
    }

    const resume = () => {
        setState(3)
    }
    */

    const stop = () => {
        setState(false)
    }

    return {reset, start, stop, value}
}

export {usePulse}