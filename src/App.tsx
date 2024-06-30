import React, {FC} from 'react';
import './App.css';

const App: FC = () => {

  fetch('https://jsonplaceholder.typicode.com/users/')
      .then(value => value.json())
      .then(res => {
    console.log(res);
  });
  return (
    <>

    </>
  );
}

export default App;
