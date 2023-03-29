import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; // need to destructure it because it isn't default, it isn't only just one (well in this case is one, but it's not set to default so we need to tell it by destructuring)
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    }); // lowercase it's good for comparisons so we don't have to worry about upper or lowercase differences
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />{' '}
        {/* passing this function as a prop */}
        {/* 'this' is the App, which is an object */}
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
