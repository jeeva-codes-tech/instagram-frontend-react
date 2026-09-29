import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [profile,setProfile]=useState(null);
  const[suggestions,setSuggestions]=useState([]);

  useEffect(()=>
  {
    fetch("http://localhost:3000/profile")
    .then(data => data.json())
    .then(res => setProfile(res))
    .catch(err => console.log(err))



      fetch("http://localhost:3000/Suggestions")
        .then((data) => data.json())
        .then((res) => setSuggestions(res))
        .catch((err) => console.log(err));
  },[])




  return (
    <div>
      <div className="suggestions  w-75 m-5">
        {profile ? (
          <div className="d-flex">
            <img
              className="dp rounded-circle"
              src={profile.profileImage}
              alt="profile-pic"
            />
            <h5>{profile.username}</h5>
            <small className="ms-auto text-primary ">Switch</small>
          </div>
        ) : (
          <p>Loading</p>
        )}

        <div className="d-flex ">
          <p>Suggested for you</p>
          <b className="ms-auto">See All</b>
        </div>
        
        <div className="">
          {suggestions.length > 0 ? (
            <div className="my-2">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id}>
                  <div className="d-flex">
                    <img
                      className="dp rounded-circle"
                      src={suggestion.profileImage}
                      alt="profile-pic"
                    />
                    <h5>{suggestion.username}</h5>
                    <p className='text-primary ms-auto'>Follow</p>
                  </div>
                  
                 
                 
                </div>
              ))}
            </div>
          ) : (
            <div>Loading Posts</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Suggestions