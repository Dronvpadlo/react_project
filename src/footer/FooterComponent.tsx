import React, {memo} from 'react';
import styles from './Footer.module.css'
const FooterComponent = memo(() => {
    return (
        <div className={styles.footer}>
            Vpadlo Prod, doronyuk714@gmail.com, 2024
        </div>
    );
});

export default FooterComponent;