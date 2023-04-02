import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots'; // need to destructure it because it isn't default, it isn't only just one (well in this case is one, but it's not set to default so we need to tell it by destructuring)
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // we make an http request, then convert the response to json.
      .then(users => this.setState({ robots: users })); // updating the users with setState
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    }); // lowercase it's good for comparisons so we don't have to worry about upper or lowercase differences
    return !robots.length ? (
      <h1> Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />{' '}
        {/* passing this function as a prop */}
        {/* 'this' is the App, which is an object */}
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
