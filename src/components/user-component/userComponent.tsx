import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProps{
    user: IUser
}
const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>

        </div>
    );
};

export default UserComponent;