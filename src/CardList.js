import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(user => {
        // return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email};
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        ); /* the unique key will be the index of each iteration key={i}, but a key prop should have somethind that doesn't change, and index could change, so a better way would be something unique like the id*/
      })}
    </div>
  );
};

export default CardList;
