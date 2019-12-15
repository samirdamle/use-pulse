import * as React from "react";
import {render} from "react-dom";
import {usePulse} from './index'

const App = () => {
    console.log('App called')
    const pulse = usePulse()

    React.useEffect(() => {
    }, [])

    return (<div>
        <h1>Demo of usePulse</h1>
        <div>Pulse: {pulse.value}</div>
        <div><button onClick={pulse.start}>Start Pulse</button> <button onClick={pulse.pause}>Pause Pulse</button> <button onClick={pulse.stop}>Stop Pulse</button> </div>
    </div>)
};

render(<App/>, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
