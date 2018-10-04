import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Board from '../Board';
import * as TicTacToeActions from '../../redux/tic-tac-toe/actions';
import * as utils from '../../utils/utils';

import './styles.css';

class Game extends Component {
  jumpTo = step => {
    this.props.dispatch(TicTacToeActions.jumpTo(step, step % 2 === 0));
  };

  handleClick = squareIndex => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (utils.calculateWinner(squares) || squares[squareIndex]) {
      return;
    }
    squares[squareIndex] = this.props.xIsNext ? 'X' : 'O';
    this.props.dispatch(
      TicTacToeActions.editTile({
        history: [...history, { squares }],
        stepNumber: history.length,
        xIsNext: !this.props.xIsNext
      })
    );
  };

  render() {
    if (!this.props.loggedUser) {
      <Redirect to="/" />;
    }
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = utils.calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      function onClick() {
        this.jumpTo(step, move);
      }
      return (
        <li key={move}>
          <button onClick={move}>{desc}</button>
        </li>
      );
    });
    const status = winner ? `Winner: ${winner}` : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    return (
      <div className="game">
        <Board squares={current.squares} onClick={this.handleClick} />
        <div className="gameInfo">
          <span>{status}</span>
          <ol className="moveList">{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  history: store.reducer.history,
  stepNumber: store.reducer.stepNumber,
  xIsNext: store.reducer.xIsNext
});
export default connect(mapStateToProps)(Game);
