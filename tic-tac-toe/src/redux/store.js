import React, {Component} from 'react';

class Store extends Component {
  history: {
    [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  };
}
