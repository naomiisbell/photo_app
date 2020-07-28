import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';



class Post2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photoLiked: false,
            bookmarked: false
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
                    alt="ariana"
                    src="static/images/1.jpg"
                />
                <h3>arianagrande</h3>
                </div>
                {/* header has username and photo */}
                <img alt="" className="postImg" src="https://s.yimg.com/ny/api/res/1.2/c2MvV.66cyvr6gRKjjrHmA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/instyle_846/44c066ecce77772efa37f2490a6b388d"></img>
                {/* image posted */}
                <div className="buttons">
                <button onClick= {this.LikeBtnClicked} className="likeBtn" ><FaRegHeart size="2rem"/></button>
                <button className="commentBtn" ><FaRegComment size="2rem"/></button>
                <button onClick= {this.BookmarkBtnClicked} className="bookmarkBtn"><FaRegBookmark size="2rem"/></button>
                </div>
                <h4 className="postText"><b>arianagrande:</b> 🖤</h4>
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

export default Post2;