import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import UsersComponent from "./components/users-component/UsersComponent";

const App: FC = () => {
  return (
    <div>
      <UsersComponent/>
    </div>
  );
}

export default App;
