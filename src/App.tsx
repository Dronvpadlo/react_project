import React, {FC} from 'react';
import './App.css';

const App: FC = () => {

    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(console.log);
  return (
    <>

    </>
  );
}

export default App;
