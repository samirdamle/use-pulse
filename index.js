const usePulse = (start = 0, end = 9, interval = 1000, delay = 0) => {
    const pulse = () => {}
    const stop = () => {}
    let delayTimer = null
    let timer = null
    return {pulse, stop, delayTimer, timer}
}