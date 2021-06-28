import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react';
import axios from 'axios';
// import {Posts} from '../../DummyDataFile'
const Feed = ({username}) => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const fetchData=async ()=>{
            let res= username 
            ? await axios.get("posts/timeline/60d84efa27f8641ba079c44c") 
            : await axios.get("posts/timeline/60d84efa27f8641ba079c44c");
            setPosts(res.data);
        }
        fetchData();
    },[]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p.id} post={p} />
                    ))}
            </div>
        </div>
    );
};

export default Feed;