import React, { Component } from 'react';
import SearchBar from './searchbar.js';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <SearchBar search={this.search} />
      </div>
      )
  }
}

export default App;
