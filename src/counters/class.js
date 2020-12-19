import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    static defaultProps = {
        onChange: function(cnt) {}
    }

    
    state = {
        
        inputValue: this.props.cnt
    }
    
    increase = () => {
        this.set(this.props.cnt + 1);
    }

    decrease = () => {
        this.set(this.props.cnt - 1);
    }

    set(newCnt) {
        let cnt = Math.max(Math.min(newCnt, this.props.max), this.props.min);
        this.setState({
            inputValue: cnt
        });
        this.props.onChange(cnt);
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
            <div >
                <button onClick={this.decrease}>-</button>
                <input value={this.state.inputValue} 
                       onChange={(e) => this.setValue(e.target.value)}
                       onBlur={this.applyValue}
                       onKeyUp={this.checkEnterKey}
                />  
                
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}



