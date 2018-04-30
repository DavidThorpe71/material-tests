import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, getUsers } from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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
    }

    handleSortUsername() {
        this.sortUsername(this.props.usersWithPosts);
    }

    handleSortId() {
        this.sortId(this.props.usersWithPosts);
    }

    handleSortSurname() {
        this.sortSurname(this.props.usersWithPosts);
    }

    sortUsername(users) {
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

    outputUserPosts() {
        return this.state.sortedUsers.map((user) => {
            return (
                <Card className="card">
                    <CardHeader
                        title={user.name}
                        subtitle={user.username}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText>
                        {`${user.postsByUser.length} comments`}
                    </CardText>
                    {user.postsByUser.map((post, i) => {
                        return (
                            <CardText key={i} expandable={true}>
                                {`${i + 1}. ${post.title}`}
                            </CardText>
                        )
                    })}
                </Card>
            )
        })
    }

    render() {
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
                        labelColor="#fff"
                        onClick={this.handleSortSurname}
                    />
                </div>
                <div className="cards-wrap">
                    {this.outputUserPosts()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const usersWithPosts = state.getData.users.map(user => {
        const postsByUser = state.getData.posts.filter(post => {
            return post.userId === user.id
        })
        return {
            ...user,
            postsByUser
        }
    })
    return {
        usersWithPosts
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPosts,
    getUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Test);