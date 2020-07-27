import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import { FaRegHeart } from 'react-icons/fa'
import { FaRegComment } from 'react-icons/fa'
import { FaRegBookmark } from 'react-icons/fa'

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
                <div className="buttons">
                <button className="likeBtn"><FaRegHeart /></button>
                <button className="commentBtn"><FaRegComment /></button>
                <button className="bookmarkBtn"><FaRegBookmark /></button>
                </div>
                <h4 className="postText"><b>Username:</b> caption</h4>
                {/* username and caption */}
            </div>
        )
    }
}

export default Post;