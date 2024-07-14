import React, {FC} from 'react';


const UserComponent:FC<any> = ({user}) => {
    return (
        <div>
            {user.name}
            <button>Posts</button>
        </div>
    );
};

export default UserComponent;