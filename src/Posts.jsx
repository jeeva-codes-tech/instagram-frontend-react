  import React, { useEffect, useState } from 'react'

  function Posts() {

    const [Posts, setPosts]=useState([]);
    
    useEffect(()=>
    {
          fetch("http://localhost:3000/posts")
          .then(res => res.json())
          .then(data => setPosts(data))
          .catch(err => console.log(err))
    },[])
    return (
      <div className='d-flex justify-content-center'>
        {Posts.length > 0 ? (
          <div className='my-3'>
            {Posts.map((post) => (
              <div key={post.id}>
                <div className="d-flex">
                  <img
                    className="dp rounded-circle"
                    src={post.profileImage}
                    alt="profile-pic"
                  />
                  <h5>{post.username}</h5>
                </div>
                <img className="image" src={post.postImage} alt="" />
                <div>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>
                </div>
                <div>{post.likes} Likes</div>
                <p>{post.caption}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading Posts</div>
        )}
      </div>
    );
  } 

  export default Posts