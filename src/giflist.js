import React, { Component } from 'react';
import Gif from './gif.js'


class Giflist extends Component {
  renderList =() => {
    return this.props.gifs.map(gif => <Gif id={gif.id}
                                           key={Math.random()}
                                           deleteGif={this.props.deleteGif}
                                           selectGif={this.props.selectGif}/>
      )
    }

  render() {
    return (
     <div className="gif-list">
      {this.renderList()}
     </div>
    )
  }
 }

export default Giflist;
