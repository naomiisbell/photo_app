import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Post from './components/Post'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* NavBar/header */}
      <Post />
      <Post />
      {/* Pictures */}
    </div>
  );
}

export default App;
