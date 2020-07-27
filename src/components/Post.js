import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';



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
        // console.log('clicked')
    }

    render() {
        return (
            <div className="post">
                <div className="postHeader">
                <Avatar 
                    className="postAvatar"
                    alt="naomi"
                    src="static/images/1.jpg"
                />
                <h3>naomi.isbell</h3>
                </div>
                {/* header has username and photo */}
                <img className="postImg" src="https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg"></img>
                {/* image posted */}
                <div className="buttons">
                <button onClick= {this.clickButton} className="likeBtn" ><FaRegHeart size="2rem"/></button>
                <button onClick= {this.clickButton} className="commentBtn" ><FaRegComment size="2rem"/></button>
                <button onClick= {this.clickButton} className="bookmarkBtn"><FaRegBookmark size="2rem"/></button>
                </div>
                <h4 className="postText"><b>Username:</b> caption</h4>
                {/* username and caption */}
            </div>

            
        )
    }
}

export default Post;