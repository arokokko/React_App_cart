import React, {useState} from 'react';
import CounterClass from '../class';
import Counter from './counters/add-func';

export default function() {
    let [someMin, setSomeMin] = useState(2);

    setTimeout(() => {
        setSomeMin(3);
    }, 2000);

    return (
        <div style={{fontSize: 20 +'px'}}>
            <h2>Counter as class</h2>
            <CounterClass min={5} max={15}/>
            <h2>Counter as class</h2>
            <Counter min={someMin} max={9} key={someMin + 9}/>
        </div>
    );
}

