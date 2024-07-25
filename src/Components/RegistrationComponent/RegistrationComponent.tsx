import React from 'react';

const RegistrationComponent = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder={'username'}/><br/>
                <input type="text" placeholder={'password'}/><br/>
                <button>Sing In</button>
            </form>
        </div>
    );
};

export default RegistrationComponent;