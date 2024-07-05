import React, { Component } from 'react';
import { IUser } from "../../models/IUser";
import { userService } from "../../services/api.service";

type StateType = {
    users: IUser[]
};

class UsersComponent extends Component<{}, StateType> {
    state: StateType = {
        users: []
    };

    componentDidMount() {
        userService.getAll().then(value => this.setState({users: value}));
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => <div>{user.firstName}</div> )
                }
            </div>
        );
    }
}

export default UsersComponent;
