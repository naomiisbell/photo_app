import React from 'react'
import Avatar from "@material-ui/core/Avatar"

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <Avatar 
                    className="postAvatar"
                    alt="Naomi.Isbell"
                    src="static/images/1.jpg"
                />
                <h3>Username</h3>
                {/* header has username and photo */}
                <img className="postImg" src="https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg"></img>
                {/* image posted */}
                <h4 className="postText"><b>Username:</b> caption</h4>
                {/* username and caption */}
            </div>
        )
    }
}

export default Post;