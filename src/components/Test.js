import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, getUsers } from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { createSelector } from 'reselect';

class Test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortedUsers: []
        }

        this.sortUsername = this.sortUsername.bind(this);
        this.sortId = this.sortId.bind(this);
        this.sortSurname = this.sortSurname.bind(this);
        this.handleSortUsername = this.handleSortUsername.bind(this);
        this.handleSortId = this.handleSortId.bind(this);
        this.handleSortSurname = this.handleSortSurname.bind(this);
    }

    componentDidMount() {
        this.props.getPosts();
        this.props.getUsers();
        this.setState({
            sortedUsers: this.props.users
        })
    }

    handleSortUsername() {
        this.sortUsername(this.props.users);
    }

    handleSortId() {
        this.sortId(this.props.users);
    }

    handleSortSurname() {
        this.sortSurname(this.props.users);
    }


    sortUsername(users) {
        console.log(users)
        const sortedUsers = users.sort((a, b) => {
            return a.username > b.username
        })
        this.setState({
            sortedUsers
        })
    }

    sortId(users) {
        const sortedUsers = users.sort((a, b) => {
            return a.id > b.id
        })
        console.log('Id', sortedUsers)
        this.setState({
            sortedUsers
        })
    }

    sortSurname(users) {
        const sortedUsers = users.sort((a, b) => {
            return a.name.split(' ')[a.name.split(' ').length - 1] > b.name.split(' ')[b.name.split(' ').length - 1]
        })
        this.setState({
            sortedUsers
        })
    }


    outputUserPosts({ posts, users }) {
        return this.state.sortedUsers.map((user) => {
            const userPosts = posts.filter((post) => post.userId === user.id);

            return (
                <Card className="card">
                    <CardHeader
                        title={user.name}
                        subtitle={user.username}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText>
                        {`${userPosts.length} comments left`}
                    </CardText>
                    {userPosts.map((post) => {
                        return (
                            <CardText expandable={true}>
                                {post.title}
                            </CardText>
                        )
                    })}
                </Card>
            )
        })
    }

    render() {
        const { posts, users } = this.props;
        return (
            <div className="content-wrap">
                <h1>Hello Mate!</h1>
                <div className="sort-wrapper">
                    <RaisedButton
                        className="sort-button"
                        label="By username"
                        primary={true}
                        backgroundColor="#"
                        onClick={this.handleSortUsername}
                    />
                    <RaisedButton
                        className="sort-button"
                        label="By ID"
                        secondary={true}
                        onClick={this.handleSortId}
                    />
                    <RaisedButton
                        className="sort-button"
                        label="By surname"
                        backgroundColor="#448aff"
                        labelColor="white"
                        onClick={this.handleSortSurname}
                    />
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