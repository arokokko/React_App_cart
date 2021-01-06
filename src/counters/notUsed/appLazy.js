import React, {Component} from 'react';
import CounterClass from '../lazyInput';

export default class extends Component {
    
    state = {
        input1: 'start',
        input2: 'start other'
    }

    render() {
        
            return (
                <div>
                    <h2>Lazy input</h2>
                    <div>{this.state.input1}</div>
                    <CounterClass 
                        nativeProps={{type: 'text', className: 'some_class'}}
                        value={this.state.input1}
                        onChange={(e) => this.setState({input1: e.target.value})}          
                    />
                    <h2>Lazy input no lazy</h2>
                    <div>{this.state.input2}</div>
                    <CounterClass 
                        nativeProps={{
                            type: 'text', 
                            className: 'some_class',
                            onChange: (e) => this.setState({input2: e.target.value})
                        }}
                        value={this.state.input2}
                                  
                    />
                    <hr />
                    <button onClick={(e) => this.setState({input2: 'test'})}>Unexpected change</button>
                </div>
                
                
            );
        

        
    } 
}

