import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test extends Component {
    render() {
        return (
            <div>
                <p>Hello Mate!</p>
            </div>
        )
    }
}

export default connect()(Test);