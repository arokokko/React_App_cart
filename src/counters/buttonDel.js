import React, {Component} from 'react';

export default class extends Component {
    static defaultProps = {
        onDelete: function() {}
    }

    
    render() {
        return (
            <button onClick={this.props.onDelete}>Delete</button>
        );
    }
}

