import React from 'react';
import data from './seats.json';

class Seating extends React.Component {
  constructor() {
  super();
  this.state = {
      seatData: data
      }
    }
render() {
const { seat } = this.state.seatData;
return (
<div>
</div>
);
}
}
