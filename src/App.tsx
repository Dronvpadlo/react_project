import React, {FC, useState} from 'react';

import './App.css';
import PostForm from "./components/PostForm/PostForm";
import PostsComponent from "./components/PostsComponent/PostsComponent";



const App: FC = () => {
    const [change, setChange] = useState<boolean>(false)

  return (
    <div>
      <PostForm setChange={setChange}/>
      <PostsComponent change={change}/>
    </div>
  );
}

export default App;
