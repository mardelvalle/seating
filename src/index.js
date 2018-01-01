import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './seats.json';

class Inf extends React.Component {
    constructor() {
      super();
      this.state = {
        seatData: data,
    }
    // this.myClickHandler = this.MyClickHandler.bind(this);
    // myClickHandler() {
    //   console.log('Thank you for selecting')
    // }
    }
    renderList(data){
//       const order = this.state.data.map((a, b) => {
//       order.sort(function(a, b){return a - b});
// //       )
// });
      const list = this.state.seatData.map((entry, index) => {
              if (entry.occupied==true){
               return <li class="coloring" key={index}>Seat: {entry.seat}{entry.row}</li>;
             }
             else{
               return <li class="colored" key={index}>Seat: {entry.seat}{entry.row}</li>;
             }
             // within this else statement would also be the onClick for selecting a seat
           });
           return(
               <ul>{list}</ul>
           )
  }
    render() {
      console.log(this.state.seatData)
      return (
        <div>
        <h1> Chose your seat</h1>
        <div>{this.renderList(this.state.seatData)}</div>
        </div>
      );
    }
  }
  ReactDOM.render(
    <Inf />,
    document.getElementById('root')
  );
