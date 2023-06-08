import React, { Component } from 'react';
import style from './Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className={`${style.home}`} style={{backgroundImage:"url(assets/img/home.jpg)"}} id="Home">
          <div className={`${style['homeContent']} text-white`}>
            <h1 className="h1">Unlimited movies, TV Shows and <br></br>more</h1>
            <p className="p">watch anywhere, cancel any time</p>
          </div>
        </div>
      </>
    )
  }
}
