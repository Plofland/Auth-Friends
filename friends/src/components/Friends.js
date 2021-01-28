import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

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

  // console.log('Friends Component STATE', friends);

  return (
    <>
      <h2>Add a Friend:</h2>
      <br />
      <FriendForm />
      <Cards>
        {friends.map((friend) => (
          <FriendCard key={friends.id} friend={friend} />
        ))}
      </Cards>
    </>
  );
}

//_STYLING_
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* border: 2px solid black; */
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
