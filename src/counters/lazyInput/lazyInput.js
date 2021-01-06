import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './lazyInput.css';

export default class extends Component {
    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object
    }

    static defaultProps = {
        onChange: function(e) {},
        nativeProps: {}
    }

    nativeInput = React.createRef();

    componentDidUpdate(prevProps) {
        let inp = this.nativeInput.current;
        if(prevProps.value !== this.props.value || this.props.value !== inp.value) {
            inp.value = this.props.value;
        }
    }

    checkChange = (e) => {
        if(this.props.value.toString() !== e.target.value) {
            this.props.onChange(e);
        }
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13) {
            this.checkChange(e);
        }
    }

    render() {
        return (
            <React.Fragment>
                <input {...this.props.nativeProps}
                        defaultValue={this.props.value}
                        onKeyUp={this.checkEnterKey}
                        onBlur={this.checkChange}
                        ref={this.nativeInput}
                />  
                
            </React.Fragment>
        )
    }
}
