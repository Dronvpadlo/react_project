import React, {FC, ReactNode} from 'react';
import styles from './Character.module.css'
interface IProps {
name: string
image: string
}
type PropsWithChildren<T> = T & {children?: ReactNode};
const Character: FC<PropsWithChildren<IProps>> = ({name, image, children}) => {
    return (
        <div
        className={styles.div}>
            <h1>{name}</h1>
            <img
                className={styles.img}
                src={image} alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export default Character;