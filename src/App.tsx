import React, {FC} from 'react';
import './App.css';
import ToggleComponent from "./components/toggle-component/toggleComponent";

const App: FC = () => {
  return (
    <div className="App">
        <ToggleComponent/>
    </div>
  );
}

export default App;
