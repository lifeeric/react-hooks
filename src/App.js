import React, { useState } from 'react';
import './App.css';
import BlogPosts from './components/ListBlog/ListBlog'
import ShowFullPost from './components/ShowFullPost/ShowFullPost';

export default () => {

  // Destroy
  const [ destroy, setDestroy ] = useState(false);

  // Post Id
  const [postId, setPostId ] = useState(1);

  // color 
  const [color, setColor] = useState();
  

  // Set Destroy
  const changeDestroyHandler = () => {
    setDestroy(true);
  }

  const selectPostId = (id) => {
    setPostId(id);
  }

  const changeColor = () => {
    setColor('red')
  }



  let content = (
    <div className="App">
      <h1>Blog Posts</h1>
      <button onClick={changeDestroyHandler} className="btn">Destroy</button>      
      <button style={{background: color ? 'red' : null}} onClick={changeColor} className="btn">Color</button>      
      <BlogPosts postid={selectPostId} />
      <ShowFullPost postid={postId} />
    </div>
  );

  if( destroy )
    content = <h1>Total destruction</h1>

  return content;
} 