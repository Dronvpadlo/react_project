import React, { Component } from 'react';
import { IUser } from "../../models/IUser";
import { userService } from "../../services/api.service";
import UserComponent from "../user-component/UserComponent";

type StateType = {
    users: IUser[]
};

class UsersComponent extends Component<{}, StateType> {
    state: StateType = {
        users: []
    };

    componentDidMount() {
        userService.getAllUsers().then(value =>{
            this.setState({users: [...value.users]})

        })
    }


    render() {
        return (
            <div>
                {
                    this.state.users.map(user => (<UserComponent key={user.id} user={user}/>))
                }
            </div>
        );
    }
}

export default UsersComponent;
