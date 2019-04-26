
import React, { Component } from 'react';
import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx'
import Giflist from './giflist.jsx'
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    }
  }

  selectGif = (id)=> {
    this.setState({ selectedGifId: id})
  }

  deleteGif = (id) => {
    this.setState({ gifs: this.state.gifs.filter(gif => gif.id !== id)})
  }


  search = (query) => {
    giphy('5m8SxNykexIdWD04TD5x6AwgY5WxlSoc').search({
        q: query,
        rating: 'g',
        limit: 15
      }, (error, result) => {
        this.setState({
          gifs: result.data
        })
      });
    }

  render() {
    return (
      <div className="container">
        <div className="selectedGif">
          <SearchBar search={this.search} />
            <div className="selected-gif">
              <Gif id = {this.state.selectedGifId} hideButton={true}/>
            </div>
        </div>
        <div className="giflistContainer">
          <Giflist gifs ={this.state.gifs} selectGif={this.selectGif} deleteGif={this.deleteGif}/>
        </div>
      </div>
      )
  }
}

export default App;
