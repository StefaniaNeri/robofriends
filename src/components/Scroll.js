import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '5px solid black',
        height: '800px',
      }}
    >
      {props.children}
    </div>
  ); // even without passing any props, automatically every component has the 'children' property, which has in this case the type CardList. Double {}, the first to say that is a jsx syntax, and the internal one to say we pass an object
};

export default Scroll;
