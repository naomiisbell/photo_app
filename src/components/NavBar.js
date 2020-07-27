import React from 'react'
import { Link } from "react-router";
import SignUpPage from './SignUpPage';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
            <div className="header">
            <h1 className="headerName">Nomigram</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Bookmarks</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </div>
            </div>
        )
    }
}

export default NavBar;