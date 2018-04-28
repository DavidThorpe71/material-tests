import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/actions';
import { bindActionCreators } from 'redux';

class Test extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                <p>Hello Mate!</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Test);