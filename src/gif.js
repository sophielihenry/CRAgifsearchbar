import React, { Component } from 'react'

class Gif extends Component {
  render() {
      const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`

    return (
      <div style={{position: "relative"}}>
        <img src={src}
             alt=""
             className="gif"
             onClick={() => this.props.selectGif(this.props.id)}/>
        { this.props.hideButton ? null :   <button className="deleteGiphy" onClick={() => this.props.deleteGif(this.props.id)}>x</button> }
      </div>
      );
  }
}

export default Gif
