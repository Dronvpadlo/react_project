import React, {Component} from 'react';
import {IUser} from "../../models/IUser";


type PropType={
    user: IUser,

}
class UserComponent extends Component<PropType> {
    render() {
        return (
            <div>
                <div>Name: {this.props.user.lastName} {this.props.user.firstName}</div>
                <div>Age: {this.props.user.age}</div>
                <div>Gender: {this.props.user.gender}</div>
                <div>Email: {this.props.user.email}</div>
                <div>Phone: {this.props.user.phone}</div>
                <img src={this.props.user.image} alt="userImg"/>
                <div>Blood Group: {this.props.user.bloodGroup}</div>
                <button>Posts</button>
            </div>
        );
    }
}

export default UserComponent;