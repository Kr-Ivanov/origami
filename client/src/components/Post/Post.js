import React from 'react'
import './Post.css';

const Post = ({
    content,
    author,
    id
}) => {
    return (
        <div className="post-container">
            <img src="/blue-origami-bird.png" alt="Some img" />
            <p className="post-description">
                <strong>{id}. </strong>
                {content}
            </p>
            <div>
                <span>
                    <small>
                        Author:{author}
                    </small>
                </span>
            </div>
        </div>
    )
}

export default Post


