import React, {FC} from 'react';
import './App.css';
import ToggleComponent from "./components/toggle-component/toggleComponent";
import PreviousComponent from "./components/usePrevious-component/previousComponent";

const App: FC = () => {
  return (
    <div className="App">
        <ToggleComponent/>
        <hr/>
        <PreviousComponent/>
    </div>
  );
}

export default App;
