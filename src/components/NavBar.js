import React from 'react'
import SignUpPage from './SignUpPage'

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
            <div className="header">
                <h1 className="headerName">Nomigram</h1>
                <button src={SignUpPage}>Login</button>
            </div>
            </div>
        )
    }
}

export default NavBar;