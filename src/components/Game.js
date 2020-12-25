import React from "react";
import Board from "./Board";
export default class Game extends React.Component {
  constructor(props) {
    super();
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [{ squares: Array(9).fill(null) }],
    };
  }
  handleClick = (index) => {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares;
    const winner = calculateWinner(squares);
    if (winner || squares[index]) {
      return;
    }
    squares[index] = this.state.xIsNext ? "X" : "0";
    this.setState({
      history: history.concat({ squares: squares }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  };
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    let status;
    const winner = calculateWinner(current.squares);
    if (winner) {
      status = "Winner is " + winner;
    } else {
      status = "Next Player is " + (this.state.xIsNext ? "X" : "0");
    }
    return (
      <div className="game">
        <div className="gameBoard">
          <Board
            clickAction={(index) => this.handleClick(index)}
            squares={current.squares}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < possibilities.length; i++) {
    const [a, b, c] = possibilities[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
