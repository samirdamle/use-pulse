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

import { useMyHook } from 'use-pulse'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [samirdamle](https://github.com/samirdamle)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
