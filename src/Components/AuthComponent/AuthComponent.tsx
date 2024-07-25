import React from 'react';

const AuthComponent = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder={'username'}/><br/>
                <input type="text" placeholder={'password'}/><br/>
                <button>Log In</button>
            </form>
        </div>
    );
};

export default AuthComponent;