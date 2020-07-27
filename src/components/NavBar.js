import React from 'react'
import { Link } from "react-router";

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
            <h1 className="headerName">Nomigram</h1>
                <nav>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Bookmarks</li>
                    <li>Login</li>
                </nav>
            </div>
        )
    }
}

export default NavBar;