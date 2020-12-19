import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
    /* static getDeviredStateFromProps(props, state) {     // антипаттерн не использовать!!!
        console.log(props);
        state.cnt = Math.max(Math.min(state.cnt, props.max), props.min);
        state.inputValue = state.cnt;
        return state;
    }  */

    static defaultProps = {
        min: 1
    }

    static propTypes = {
        min: PropTypes.number,
        max: PropTypes.number
    }

    state = {
        cnt: this.props.min,
        inputValue: this.props.min
    }

    decrease = () => {
        this.set(this.state.cnt - 1);
    }

    increase = () => {
        this.set(this.state.cnt + 1);
    }

    set(newCnt) {
        let cnt = Math.max(Math.min(newCnt, this.props.max), this.props.min);
        this.setState({
            cnt,
            inputValue: cnt
        });
    }

    setValue(newCnt) {
        this.setState({
            inputValue: newCnt
        })
    }

    applyValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13) {
            this.applyValue();
        }
    }

    render() {
        return (
            <div>
                {this.props.min} 
                <br />
                <button onClick={this.decrease}>-</button>
                <input value={this.state.inputValue}
                    onChange={(e) => this.setValue(e.target.value)}
                    onBlur={this.applyValue}
                    onKeyUp={this.checkEnterKey}                    
                />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}