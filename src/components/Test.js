import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, getUsers } from '../redux/actions/actions';
import { bindActionCreators } from 'redux';

class Test extends Component {


    componentDidMount() {
        this.props.getPosts();
        this.props.getUsers();
    }


    sortUsername(users) {

    }

    sortId(users) {

    }

    sortSurname(users) {

    }


    outputUserPosts({ posts, users }) {
        const sortedUsers = users.sort((a, b) => {
            return a.username > b.username
        })
        return sortedUsers.map((user) => {
            const userPosts = posts.filter((post) => post.userId === user.id);
            return (
                <div className="user-wrapper">
                    <h3>{user.username}</h3>
                    {userPosts.map((post) => {
                        return (
                            <p>{post.title}</p>
                        )
                    })}
                </div>
            )
        })
    }

    render() {
        const { posts, users } = this.props;

        return (
            <div>
                <h1>Hello Mate!</h1>
                <div className="sort-wrapper">
                    <button onClick={this.sortUsername(users)}>By username</button>
                    <button onClick={this.sortId(users)}>By ID</button>
                    <button onClick={this.sortSurname(users)}>By Surname</button>
                </div>
                {this.outputUserPosts({ posts, users })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.getData.posts,
        users: state.getData.users
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPosts,
    getUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Test);