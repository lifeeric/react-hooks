import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowFullPost({ postid}) {

    // Post
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        console.log(postid)

        axios.get('https://jsonplaceholder.typicode.com/posts/'+ postid)
            .then(response => {
                setLoading(false)
                console.log(response)
                setPost(response.data)
            });

            return () => {
                console.log('cleaning up post');
            }
    }, [postid]);

    console.log('ShowFullPost ->');

    let content = <p>Loading...</p>

    if(!loading) {
        content = (
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        );
    }

    return content;
}

export default React.memo(ShowFullPost);