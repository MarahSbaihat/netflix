import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    let {name,img} = this.props.movie;
    return (
      <>
        <div className="col-md-4 py-3">
            <img src={`assets/img/${img}`} className="img" alt="movie img" />
            <h3 className="h3">{name}</h3>
        </div>
      </>
    )
  }
}
