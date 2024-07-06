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
    postsLoaded: boolean,
    loading: boolean
}

class UserComponent extends Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
        this.state = {
            posts: [],
            postsLoaded: false,
            loading: false
        };
    }

    componentDidUpdate(prevProps: PropType) {
        // Якщо користувач змінився, скидаємо стан постів
        if (prevProps.user.id !== this.props.user.id) {
            this.setState({ posts: [], postsLoaded: false });
        }
    }

    fetchUserPosts = () => {
        this.setState({ loading: true }); // встановлюємо стан завантаження
        axios.get(`https://dummyjson.com/users/${this.props.user.id}/posts`)
            .then(response => {
                this.setState({ posts: response.data.posts, postsLoaded: true, loading: false });
            })
            .catch(error => {
                console.error('Error fetching user posts:', error);
                this.setState({ posts: [], postsLoaded: true, loading: false }); // очищаємо пости, якщо сталася помилка
            });
    }

    render() {
        return (
            <div className={styles.bgc}>
                <div>Name: {this.props.user.lastName} {this.props.user.firstName}</div>
                <div>Age: {this.props.user.age}</div>
                <div>Gender: {this.props.user.gender}</div>
                <div>Email: {this.props.user.email}</div>
                <div>Phone: {this.props.user.phone}</div>
                <img src={this.props.user.image} alt="userImg"/>
                <div>Blood Group: {this.props.user.bloodGroup}</div>
                <button onClick={this.fetchUserPosts}>Posts</button>
                {this.state.loading ? <p>Loading...</p> : <PostComponent posts={this.state.posts} postsLoaded={this.state.postsLoaded} />}
            </div>
        );
    }
}

export default UserComponent;
