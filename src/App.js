import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Post from './components/Post'
import Post2 from './components/Post2'
import Post3 from './components/Post3'
import SignUpPage from './components/SignUpPage'

function App() {
  return (
    <div className="App">
      <SignUpPage />
      <NavBar />
      {/* NavBar/header */}
      <Post />
      <Post2 />
      <Post3 />
      {/* Pictures */}
    </div>
  );
}

export default App;
