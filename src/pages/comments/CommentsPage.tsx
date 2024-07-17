import React from 'react';
import CommentsComponent from "../../components/Comments/CommentsComponent/CommentsComponent";
import styles from './CommentsPage.module.css'
const CommentsPage = () => {
    return (
        <div className={styles.bgc}>
            <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;