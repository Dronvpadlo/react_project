import React from 'react';

const CarsPostPage = () => {
    return (
        <div>
            <input type="text" placeholder={'Brand'}/>
            <input type="text" placeholder={'Price'}/>
            <input type="text" placeholder={'Year'}/>
            <button>Post Car</button>
        </div>
    );
};

export default CarsPostPage;