import React, { Component } from 'react';
import axios from 'axios';
import { IUser } from "../../models/IUser";
import PostComponent from "../post-component/PostComponent";
import styles from './UserComponent.module.css'

type PropType = {
    user: IUser,
}

type StateType = {
    posts: any[],
    postsLoaded: boolean
}

class UserComponent extends Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
        this.state = {
            posts: [],
            postsLoaded: false
        };
    }

    fetchUserPosts = () => {
        axios.get(`https://dummyjson.com/users/${this.props.user.id}/posts`)
            .then(response => {
                this.setState({ posts: response.data.posts, postsLoaded: true });
            })
            .catch(error => {
                console.error('Error fetching user posts:', error);
                this.setState({ postsLoaded: true }); // навіть якщо сталася помилка, відмічаємо, що спроба завантаження була
            });
    }

    render() {
        return (
            <div>
                <div>Name: {this.props.user.lastName} {this.props.user.firstName}</div>
                <div>Age: {this.props.user.age}</div>
                <div>Gender: {this.props.user.gender}</div>
                <div>Email: {this.props.user.email}</div>
                <div>Phone: {this.props.user.phone}</div>
                <img src={this.props.user.image} alt="userImg"/>
                <div>Blood Group: {this.props.user.bloodGroup}</div>
                <button onClick={this.fetchUserPosts}>Posts</button>
                <PostComponent posts={this.state.posts} postsLoaded={this.state.postsLoaded} />
            </div>
        );
    }
}

export default UserComponent;
