import './post.css';
import {  MoreVert } from "@material-ui/icons";
// import { Users } from "../../DummyDataFile";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'
const Post = ({post}) => {

  const [like,setLike] = useState((post.likes).length);
  const [isLiked,setIsLiked] = useState(false)
  const [user,setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
    // console.log(like);
  }

  useEffect(()=>{
    const fetchUser=async ()=>{
        let res= await axios.get(`users/${post.userId}`);
        setUser(res.data);
        // console.log(res.data);
    }
    fetchUser();
},[post.userId]);
    return (
        <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={PF+user.profilePicture || PF+"noAvatar.jpg"}
                alt=""
              />
            </Link>
            
            <span className="postUsername">
            {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="like1Icon" src={`${PF}like.png`} onClick={likeHandler} alt=""  />
            <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler}  alt="" />
            <span className="postLikeCounter">{like} like</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Post;