import React, { Component } from 'react';
import './Portfolio.css';
import Item from './Item';

export default class Portfolio extends Component {

  state = {
    movies : [
      {id:0,name:'Werewolf by night',img:"1.jpg"},
      {id:1,name:'Luckiest girl alive',img:"2.jpg"},
      {id:2,name:'Hellraiser',img:"3.jpg"},
      {id:3,name:"Mr. Harrigan's phone",img:"4.jpg"},
      {id:4,name:'Catherine called birdy',img:"5.jpg"},
      {id:5,name:'Old people',img:"6.jpg"}
    ]
  }

  render() {
    return (
      <>
        <div className="portfolio py-3" id='Portfolio'>
          <h2 className="text-dark text-center">Portfolio</h2>
          <div className="container">
            <div className="row">
              {
                this.state.movies.map((movie,id)=>{
                  return (
                    <Item movie={movie}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}
