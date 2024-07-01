import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import styles from './user.module.css'
interface IProps{
    user: IUser
        getPosts: (id: number) => void
}
const UserComponent: FC<IProps> = ({user, getPosts}) => {
    return (
        <div className={styles.section}>
            <div>Name: {user.firstName}{user.lastName}</div>
            <div>Maiden Name{user.maidenName}</div>
            <div>Age: {user.age}</div>
            <div>Gender: {user.gender}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <div>Username: {user.username}</div>
            <div>Password: {user.password}</div>
            <div>Birthday: {user.birthDate}</div>
            <img src={user.image} alt="User Image"/>
            <div>Blood Group: {user.bloodGroup}</div>
            <div>Height: {user.height}</div>
            <div>Weight: {user.weight}</div>
            <div>Eyes Color: {user.eyeColor}</div>
            <div>Hair: {user.hair.color} {user.hair.type}</div>
            <div>IP: {user.ip}</div>

            <button onClick={()=>{
                    getPosts(user.id)

            }}>Posts</button>
        </div>
    );
};

export default UserComponent;

//<div className={styles.address}>
//                 <div>Adress: {user.address.address}</div>
//                 <div>{user.address.city}</div>
//                 <div>{user.address.state}</div>
//                 <div>{user.address.stateCode}</div>
//                 <div>{user.address.postalCode}</div>
//                 <div>{user.address.coordinates.lat}</div>
//                 <div>{user.address.coordinates.lng}</div>
//                 <div>{user.address.country}</div>
//             </div>
//             <div>{user.macAddress}</div>
//             <div>{user.university}</div>
//             <div>
//                 <div>{user.bank.cardExpire}</div>
//                 <div>{user.bank.cardNumber}</div>
//                 <div>{user.bank.cardType}</div>
//                 <div>{user.bank.currency}</div>
//                 <div>{user.bank.iban}</div>
//             </div>
//             <div>
//                 <div>{user.company.department}</div>
//                 <div>{user.company.name}</div>
//                 <div>{user.company.title}</div>
//                 <div>{user.company.address.address}</div>
//                 <div>{user.company.address.city}</div>
//                 <div>{user.company.address.state}</div>
//                 <div>{user.company.address.stateCode}</div>
//                 <div>{user.company.address.postalCode}</div>
//                 <div>{user.company.address.coordinates.lat}</div>
//                 <div>{user.company.address.coordinates.lng}</div>
//                 <div>{user.company.address.country}</div>
//             </div>
//             <div>{user.ein}</div>
//             <div>{user.ssn}</div>
//             <div><div>{user.userAgent}</div>
//                 <div>{user.crypto.coin}</div>
//                 <div>{user.crypto.wallet}</div>
//                 <div>{user.crypto.network}</div>
//             </div>
//             <div>{user.role}</div>