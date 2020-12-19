import React, {useState} from 'react';
import PropTypes from 'prop-types';


export default function Counter({min, max}) {
    let [cnt, setCnt] = useState(min);
    const value = {};


    console.log('cnt: ' + cnt);
    function increase() {
        set(cnt + 1);
    };

    function decrease() {
        set(cnt - 1);
    };

    function set(newCnt) {
        let count = Math.max(Math.min(newCnt, max), min);
        setCnt(count);
        value.input = count;
        console.log('inputValue: ' + value.input);
    }

    console.log('inputValue: ' + value.input);


    return (
        <div >
            <button onClick={decrease}>-</button>
            <input value={(value.input === undefined ? cnt : value.input) } 
                    onChange={(e) => set(e.target.value)}
            />
            
            <button onClick={increase}>+</button>
        </div>
    )
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired
}

Counter.defaultProps = {
    min: 1
}