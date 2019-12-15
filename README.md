# use-pulse

> A React hook to spit out a sequential value at a time interval for a given number of times.

[![NPM](https://img.shields.io/npm/v/use-pulse.svg)](https://www.npmjs.com/package/use-pulse) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-pulse
```

## Usage

```jsx
import React, { Component } from 'react'
import { usePulse } from 'use-pulse'

const Example = () => {
        const myPulse = usePulse(0, 100, 1, 500, 1000)  // (min, max, increment, delay, interval)
        // This will create a pulse that will count from min = 0 to max = 100 (inclusive of both ends)
        // with increment = 1 after an initial delay = 500 milliseconds and at an interval = 1000 miliseconds.

        // To start the pulse
        // myPulse.start()

        // To pause or stop the pulse
        // myPulse.stop()

        // To reset the pulse value back to min and stop there
        // myPulse.reset()

        // To restart the pulse from the current value
        // myPulse.start()

        // To get the current value of the pulse
        // myPulse.value

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
```

## License

MIT © [samirdamle](https://github.com/samirdamle)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
