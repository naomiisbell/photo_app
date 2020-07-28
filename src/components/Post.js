import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';



class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photoLiked: false,
            bookmarked: false,
        }
    }
        LikeBtnClicked = () => {
        this.setState({
            photoLiked: true
        })
        // console.log('liked')
    }

    BookmarkBtnClicked = () => {
        this.setState({
            bookmarked: true
        })
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
                <img alt="" className="postImg" src="https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg"></img>
                {/* image posted */}
                <div className="buttons">
                <button onClick= {this.LikeBtnClicked} className="likeBtn" ><FaRegHeart size="2rem"/></button>
                <button className="commentBtn" ><FaRegComment size="2rem"/></button>
                <button onClick= {this.BookmarkBtnClicked} className="bookmarkBtn"><FaRegBookmark size="2rem"/></button>
                </div>
                <h4 className="postText"><b>naomi.isbell:</b> caption</h4>
                {/* username and caption */}
                <form>
                    <input
                    type="comment"
                    placeholder="Add a comment"
                    >
                    </input>
                </form>

            </div>

            
        )
    }
}

export default Post;