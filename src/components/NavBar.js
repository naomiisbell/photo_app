import React from 'react'
import { FiHome } from 'react-icons/fi'
import Avatar from "@material-ui/core/Avatar"
import { FaRegBookmark } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
            <h1 className="headerName">Nomigram</h1>
                <nav>
                    <button><li><FiHome size="2rem" /></li></button>
                    <button><li><Avatar/></li></button>
                    <button><li><FaRegBookmark size="2rem"/></li></button>
                    <button><li><FiLogOut size="2rem"/></li></button>
                </nav>
            </div>
        )
    }
}

export default NavBar;