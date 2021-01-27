import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 2px solid black;
  width: 40%;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 3% 0;
  border-radius: 10px;
  box-shadow: 
    /* top */ rgba(255, 255, 255, 0.15) 0px -6px 10px,
    /* right */ rgba(255, 255, 255, 0.15) 6px 0px 10px,
    /* bottom */ rgba(255, 255, 255, 0.15) 0px 6px 10px,
    /* left */ rgba(255, 255, 255, 0.15) -6px 0px 10px;
  border: 2px solid mintcream;
  background-color: steelblue;
  @media (max-width: 1000px) {
    width: 75%;
    justify-content: space-evenly;
  }
  @media (min-width: 1600px) {
    width: 30%;
  }
`;

export default function FriendCard(props) {
  const { friend } = props;
  console.log(friend);
  return (
    <CardContainer>
      <Card>
        <h3>{friend.name}</h3>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
      </Card>
    </CardContainer>
  );
}
