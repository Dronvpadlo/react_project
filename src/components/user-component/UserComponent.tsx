import React, {Component} from 'react';
import {IUser} from "../../models/IUser";


type PropType={
    user: IUser,

}
class UserComponent extends Component<PropType> {
    render() {
        return (
            <div>
                <div>{this.props.user.lastName} {this.props.user.firstName}</div>
                <div>{this.props.user.age}</div>
                <div>{this.props.user.gender}</div>
                <div>{this.props.user.email}</div>
                <div>{this.props.user.phone}</div>
                <img src={this.props.user.image} alt="userImg"/>
                <div>{this.props.user.bloodGroup}</div>
                <button>Posts</button>
            </div>
        );
    }
}

export default UserComponent;