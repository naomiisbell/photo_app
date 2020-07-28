import React from 'react'
import { Avatar } from '@material-ui/core'

class Profile extends React.Component {
    render() {
        const avatarImageStyle = {
            width: 200,
            height: 200,
        };
        return (
            <div>
                <h2>blm_movement</h2>
                <div className="profilePage">
                <Avatar 
                className="profilePic"
                style={Object.assign({}, avatarImageStyle, {color: 'grey' })}
                src="https://i.redd.it/m5ackmclri351.jpg"
                />
                <div className="table">
                    <table>
                        <th>1</th>
                        <th>155k</th>
                        <th>115</th>
                        <tr>
                            <td>
                                <p>Posts</p>
                            </td>
                            <td>
                                <p>Followers</p>
                            </td>
                            <td>
                                <p>Following</p>
                            </td>
                        </tr>
                    </table>
                </div>
            <div className="profileImg">
                <img className="profilePost" src="https://www.deccanherald.com/sites/dh/files/articleimages/2020/07/24/188503-01-03-1595592722.jpg"></img>
            </div>
            </div>
            </div>
        )
    }
}

export default Profile;