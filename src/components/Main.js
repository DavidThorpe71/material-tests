import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import Test from './Test';

class Main extends React.Component {
    render() {
        return (
            <div className="App" style={{ height: '100%' }}>
                <div id="app-main" style={{ height: '100%', paddingTop: '50px' }} key="app-main">
                    <Test />
                </div>
            </div>
        )
    }
}

export default connect()(Main);