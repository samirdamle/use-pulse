import * as React from "react";
import {render} from "react-dom";
import {usePulse} from './index'

const App = () => {
    const {pulse, startPulse, stopPulse} = usePulse()
    return (<div>
        <h1>Demo of usePulse</h1>
        <div>Pulse: {pulse}</div>
        <div><button onClick={startPulse}>Begin Pulse</button></div>
    </div>)
};

render(<App/>, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
