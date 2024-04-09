import React, { useEffect, useState } from "react";
import { Comment } from "../types/comment";

import "./CommentList.css";

const CommentList = ({brand, briefref}) => {
    const [comments, setComments] = useState<Comment[]>([]);
    useEffect(() => {
        const  fetchFeeds = async () => {
            const response = await fetch(`http://localhost:4000/comments/${briefref}`);
            const fetchedComments: Comment[] = await response.json();
            
            setComments(fetchedComments);
        }
        fetchFeeds();
    }, [])

    return (
        <div>
            <div className="commentlist-header">
                <img className="commentlist-brand-logo" src={`${brand.logo}`} />
                <span className="commentlist-brand-name">{brand.name}</span>
            </div>
            <div>
                {comments.map(comment => (
                    <div className="comment">
                        <div className="comment-header">
                            <img className="comment-avatar" src={`${comment.user.avatar}`}/>
                            <span className="comment-name">{comment.user.name}</span>
                        </div>
                        <div className="comment-content">{comment.comment}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentList;