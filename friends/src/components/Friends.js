import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    axios
      .get('http://localhost:5000/api/friends', {
        // url: 'http://localhost:5000/api/friends',
        headers: {
          authorization: JSON.parse(localStorage.getItem('token'))
        }
      })
      .then((res) => {
        // console.log(res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Friends List:</h2>
      <div>
        <h3>{friends.name}</h3>
        <p>{friends.age}</p>
        <p>{friends.email}</p>
      </div>
    </div>
  );
}
