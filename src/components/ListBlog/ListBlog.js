import React, { useState, useEffect } from 'react'
import axios from 'axios';

function ListBlog({postid}) {
    
    // blog post
    const [blogPost, setBlogPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 5);
                setBlogPost([...posts])
            })
    }, []);

    console.log('Single Post ->');

    let posts = <p>Loading....</p>

    if( blogPost.length > 0)
    {
        posts = blogPost.map(post => {
            return (
            <div key={post.id}>
               <a onClick={() => postid(post.id)} href="#">{post.title}</a>
            </div> );
        });
    }

    return posts;
}


export default React.memo(ListBlog, (prevProps, nextProps) => {
    console.log();
    return (
        nextProps.postid !== prevProps.postid
    );
});