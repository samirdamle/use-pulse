# use-pulse

A React hook that spits out a sequential value at a given time interval for a given number of times.

### Example
```
import { usePulse } from 'use-pulse'

const myPulse = usePulse(0, 100, 1, 500, 1000)
// This will create a pulse that will count from min = 0 to max = 100 (inclusive of both ends) 
// with increment = 1 after an initial delay = 500 milliseconds and at an interval = 1000 miliseconds.

// To start the pulse
myPulse.start()

// To pause or stop the pulse
myPulse.stop()

// To reset the pulse value back to min and stop there
myPulse.reset()

// To restart the pulse from the current value
myPulse.start()

// To get the current value of the pulse
myPulse.value

```
