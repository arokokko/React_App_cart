import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from './lazyInput/lazyInput';

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
    
    increase = () => {
        this.set(this.props.cnt + 1);
    }

    decrease = () => {
        this.set(this.props.cnt - 1);
    }

    set(newCnt) {
        let cnt = Math.max(Math.min(newCnt, this.props.max), this.props.min);
        
        this.props.onChange(cnt);
    }

    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }

    render() {
        return (
            <div >
                <button onClick={this.decrease}>-</button>
                <AppLazyInput
                    nativeProps={{type: 'text', className: 'input'}}
                    value={this.props.cnt}
                    onChange={this.onChange}
                />  
                
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}



