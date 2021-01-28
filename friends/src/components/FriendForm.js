import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function FriendForm() {
  const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' });

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const submitFriend = (e) => {
    axiosWithAuth()
      .post('/friends', newFriend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => submitFriend(e)}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
