import React, { Component } from 'react';
import SearchBar from './searchbar.js';

import './App.scss';

class App extends Component {

  render() {
    return (
        <div className="container">
          <div className="selectedGif">
            <SearchBar search={this.search} />
              <div className="selected-gif">

              </div>
          </div>
          <div className="giflistContainer">

          </div>
      </div>

      )
  }
}

export default App;
