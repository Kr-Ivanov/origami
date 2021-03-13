import React from 'react';
import Post from '../Post';
import './Main.css';


const Main = ({
    posts
}) => {

    return (
        <main className="main-container">
            <h1>Some heading</h1>
            {posts.map(post =>
                <p key={post.id}>{post.content}</p>
            )}
        </main>
    )
}

export default Main
