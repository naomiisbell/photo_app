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
import SignUpPage from './components/SignUpPage'
import { FiHome } from 'react-icons/fi'
import Avatar from "@material-ui/core/Avatar"
import { FaRegBookmark } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

export default function App() {
  return (
    <Router>
      <div className="navBar">
            <h1 className="headerName">Nomigram</h1>
                <nav>
                    <button>
                      <li>
                        <Link to="/post"><FiHome size="2rem" /></Link>
                      </li>
                    </button>


                    <button>
                      <li>
                        <Link to="/profile"><Avatar/></Link>
                      </li>
                    </button>


                    <button>
                      <li>
                        <Link to="/saved"><FaRegBookmark size="2rem"/></Link>
                      </li>
                    </button>


                    <button>
                      <li>
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
          {/* <Route path="/profile">
            <Profile />
          </Route> */}
          {/* <Route path="/saved">
            <Bookmarked />
          </Route> */}
          <Route path="/sign-in">
            <SignUpPage />
          </Route>
        </Switch>
    </Router>
  );
}
