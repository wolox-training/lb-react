import React from 'react';

import Square from '../Square';

import './styles.css';

class Board extends React.Component {
  renderSquare = squareIndex => (
    <Square value={this.props.squares[squareIndex]} const onClick={() => this.props.onClick(squareIndex)} />
  );

  render() {
    return (
      <div className="boardTable">
        {Array(9)
          .fill(1)
          .map((_, index) => this.renderSquare(index))}
      </div>
    );
  }
}

export default Board;
