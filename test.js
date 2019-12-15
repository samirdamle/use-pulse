import * as React from "react";
import {render} from "react-dom";
import {usePulse} from './index'

const App = () => {
    const pulse1 = usePulse(0, 100, 1, 500, 0)
    const pulse2 = usePulse(0, 1000, 1, 100, 0)

    return (<div>
        <h1>Demo of usePulse</h1>
        <div>
            <div style={{ display: 'inline-block', width: '400px', textAlign: 'center'}}>
                Pulse 1
                <h2>{pulse1.value}</h2>
                <div><button onClick={pulse1.reset}>Reset Pulse 1</button> <button onClick={pulse1.start}>Start Pulse 1</button> <button onClick={pulse1.stop}>Stop Pulse 1</button> </div>
            </div>
            <div style={{ display: 'inline-block', width: '400px', textAlign: 'center'}}>
                Pulse 2
                <h2>{pulse2.value}</h2>
                <div><button onClick={pulse2.reset}>Reset Pulse 2</button> <button onClick={pulse2.start}>Start Pulse 2</button> <button onClick={pulse2.stop}>Stop Pulse 2</button> </div>
            </div>
        </div>
    </div>)
};

render(<App/>, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
