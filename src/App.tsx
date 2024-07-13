import React, { FC, useState, useEffect } from 'react';
import './App.css';
import PostForm from "./components/PostForm/PostForm";
import PostsComponent from "./components/PostsComponent/PostsComponent";
import { IPosts } from './models/IPosts';
import { postService } from './services/postService';
import styles from './App.module.css'

const App: FC = () => {
    const [allPosts, setAllPosts] = useState<IPosts[]>([]);
    const [change] = useState<boolean>(false);
    const [lastId, setLastId] = useState<number>(0);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await postService.getAll();
            setAllPosts(data);
            setLastId(data[data.length - 1].id);  // встановити останній id
        };

        fetchPosts();
    }, [change]);

    const addPost = (newPost: IPosts) => {
        newPost.id = lastId + 1;  // встановити новий id
        setLastId(newPost.id);
        setAllPosts(prevPosts => [...prevPosts, newPost]);
    };

    return (
        <div>
            <div>
            <PostForm addPost={addPost} />
            </div>
            <div className={styles.marginTop}>
            <PostsComponent allPosts={allPosts} />
            </div>
        </div>
    );
}

export default App;
