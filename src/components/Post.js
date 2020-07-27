import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome"


class Post extends React.Component {
    constructor(){
        super()
        this.state = {
            btnClicked: false
        }
    }

    clickButton = () => {
        this.setState({
            btnClicked: true
        })
        console.log('clicked')
    }

    render() {
        return (
            <div className="post">
                <div className="postHeader">
                <Avatar 
                    className="postAvatar"
                    alt="Naomi.Isbell"
                    src="static/images/1.jpg"
                />
                <h3>Username</h3>
                </div>
                {/* header has username and photo */}
                <img className="postImg" src="https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg"></img>
                {/* image posted */}
                <div className="buttons">
                <button onClick= {this.clickButton}>like</button>
                <button onClick= {this.clickButton}>comment</button>
                <button onClick= {this.clickButton}>save</button>
                </div>
                <h4 className="postText"><b>Username:</b> caption</h4>
                {/* username and caption */}
            </div>
        )
    }
}

export default Post;