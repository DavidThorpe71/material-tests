import React from 'react';
import { connect } from 'react-redux';
import Test from './Test';

class Main extends React.Component {
    render() {
        return (
            <div className="app">
                <Test />
            </div>
        )
    }
}

export default connect()(Main);