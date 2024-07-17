import React, {FC, ReactNode} from 'react';
import {IUser} from "../../../types/IUser";




type UserComponentWithChildren<T> = T & {children?: ReactNode} & {postClicker: () => void}
const UserComponent:FC<UserComponentWithChildren<IUser>> = ({id, name, username, email, postClicker}) => {
    return (
        <div>
            {id}. {name} <br/>
            Username:{username} <br/>
            Email:{email}<br/>

            <button onClick={postClicker}>Posts</button>
            <hr/>
        </div>
    );
};

export default UserComponent;