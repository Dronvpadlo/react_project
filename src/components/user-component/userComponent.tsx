import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProps{
    user: IUser
}
const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.maidenName}</div>
            <div>{user.age}</div>
            <div>{user.gender}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.username}</div>
            <div>{user.password}</div>
            <div>{user.birthDate}</div>
            <img src={user.image} alt="User Image"/>
            <div>{user.bloodGroup}</div>
            <div>{user.height}</div>
            <div>{user.weight}</div>
            <div>{user.eyeColor}</div>
            <div>{user.hair.color}</div>
            <div>{user.hair.type}</div>
            <div>{user.ip}</div>
            <div>{user.address.address}</div>
            <div>{user.address.city}</div>
            <div>{user.address.state}</div>
            <div>{user.address.stateCode}</div>
            <div>{user.address.postalCode}</div>
            <div>{user.address.coordinates.lat}</div>
            <div>{user.address.coordinates.lng}</div>
            <div>{user.address.country}</div>
            <div>{user.macAddress}</div>
            <div>{user.university}</div>
            <div>{user.bank.cardExpire}</div>
            <div>{user.bank.cardNumber}</div>
            <div>{user.bank.cardType}</div>
            <div>{user.bank.currency}</div>
            <div>{user.bank.iban}</div>
            <div>{user.company.department}</div>
            <div>{user.company.name}</div>
            <div>{user.company.title}</div>
            <div>{user.company.address.address}</div>
            <div>{user.company.address.city}</div>
            <div>{user.company.address.state}</div>
            <div>{user.company.address.stateCode}</div>
            <div>{user.company.address.postalCode}</div>
            <div>{user.company.address.coordinates.lat}</div>
            <div>{user.company.address.coordinates.lng}</div>
            <div>{user.company.address.country}</div>
            <div>{user.ein}</div>
            <div>{user.ssn}</div>
            <div>{user.userAgent}</div>
            <div>{user.crypto.coin}</div>
            <div>{user.crypto.wallet}</div>
            <div>{user.crypto.network}</div>
            <div>{user.role}</div>
        </div>
    );
};

export default UserComponent;