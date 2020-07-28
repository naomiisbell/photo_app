import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Post from './components/Post'
import Post2 from './components/Post2'
import Post3 from './components/Post3'
import Profile from './components/Profile'
import SignUpPage from './components/SignUpPage'
import Bookmarks from './components/Bookmarks'
import { FiHome } from 'react-icons/fi'
import Avatar from "@material-ui/core/Avatar"
import { FaRegBookmark } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

export default function App() {
  return (
    // used react router to link my navbar to certain components
    <Router>
      <div className="navBar">
            <h1 className="headerName">Nomigram</h1>
                <nav>
                    <button>
                      <li>
                        {/* this links to the home page where all the users posts are located */}
                        <Link to="/post"><FiHome size="2rem" /></Link>
                      </li>
                    </button>


                    <button>
                      <li>
                        {/* this links to the profile page that we are on which is @blm_movement */}
                        <Link to="/profile"><Avatar src="https://i.redd.it/m5ackmclri351.jpg"/></Link>
                      </li>
                    </button>


                    <button>
                      <li>
                        {/* this links to my saved photos it does not have functionality */}
                        <Link to="/saved"><FaRegBookmark size="2rem"/></Link>
                      </li>
                    </button>


                    <button>
                      <li>
                        {/* this links to my sign in component */}
                        <Link to="/sign-in"><FiLogOut size="2rem"/></Link>
                      </li>
                    </button>
                </nav>
            </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/post">
            <Post />
            <Post2 />
            <Post3 />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/saved">
            <Bookmarks />
          </Route>
          <Route path="/sign-in">
            <SignUpPage />
          </Route>
        </Switch>
    </Router>
  );
}
