import * as React from 'react'

export const usePulse = (min = 0, max = 9, increment = 1, interval = 1000, delay = 0) => {
    const timerRef = React.useRef()
    const valueRef = React.useRef()

    const [state, setState] = React.useState(null)
    const [value, setValue] = React.useState(min)

    React.useEffect(() => {
        if (state === null) {
            valueRef.current = min
            setValue(valueRef.current)
        }

        clearInterval(timerRef.current)

        if (state && interval != null) {
            const delayTimer = window.setTimeout(() => {
                clearTimeout(delayTimer)
                timerRef.current = window.setInterval(pulse, interval)
            }, delay)
        } else {
            clearInterval(timerRef.current)
        }

        return () => clearInterval(timerRef.current)
    }, [state])

    const pulse = () => {
        if (state && valueRef.current <= max - increment) {
            valueRef.current = (valueRef.current + increment)
            setValue(valueRef.current)
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

    const stop = () => {
        setState(false)
    }

    return {reset, start, stop, value}
}

export const useMyHook = () => {
    let [{
        counter
    }, setState] = React.useState({
        counter: 0
    })

    React.useEffect(() => {
        let interval = window.setInterval(() => {
            counter++
            setState({counter})
        }, 1000)
        return () => {
            window.clearInterval(interval)
        }
    }, [])

    return counter
}
