import React, {Component} from 'react';
import Counter from './counter.js';

export default class extends Component {
    state = {
        count: 10,
        show:true
    };

    addCount = () => {
        let count = 100;
        this.setState({count});
    };

    render() {
        return (
            <div>
                <p>Lifecycle</p>
                <button onClick={() => this.setState({show:!this.state.show})}>Show/Hide</button>
                { this.state.show ?
                    <Counter count={this.state.count} addCount={this.addCount}/>
                    :null
                }
            </div>
        );
    }
}
