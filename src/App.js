import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header';
import Props from "./components/Props";
import UseState from "./components/UseState";
import Class from "./components/Class"
import Class2 from "./components/Class2"
import List from "./components/List"
import List2 from "./components/List2"
import UserList from "./components/UserList"
import UserDetail from './components/UserDetail';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';

function App() {
  const [userId, setUserId] = useState(1);
  const updateUserId = (id) =>{
    setUserId(id)
  } 
  const [postId, setPostId] = useState(1);
  console.log("javed", postId)
  // const updatePostId = (id) =>{
  //   setPostId(id)
  // }
  //isko direct bhi call kara sakte hai
  return (
    
    <div className="App">
      <header className="App-header">
        
        <Header1 />
        <Props name="Owaisi Qadri" />
        <UseState firstName="Parvez" lastName="Siddiqi" /> 
        <Class />
        <Class2 />
        <List />
        <List2 />
        <UserList changeId={updateUserId} />
        <UserDetail userId={userId} />
        <PostList changeId={setPostId} />
        <PostDetails postId={postId} />
        
      </header>
      
    </div>
  );
}

export default App;
