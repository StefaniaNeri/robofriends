import React, { Component } from 'react'; // in the App file we didn't destructure, so we just had import React from 'react', but then we had class App extends React.Component, so we had to retrieve the component from the React object (?), but now we destructured  component so we can refer it by itself

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Welcome to React</p>
      </div>
    );
  }
}

export default Hello; // default when we export only one thing
